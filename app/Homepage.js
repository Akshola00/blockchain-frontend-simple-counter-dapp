"use client"
import { useAccount, useAccountEffect, useBalance, useConnect, useReadContract, useReadContracts, useWriteContract, useDisconnect } from "wagmi";
import { injected } from 'wagmi/connectors'
import { abi } from "./abi/abi";
import Counter from "./Counter"
import Navbar from "./Navbar"
import { useState } from "react";


const Homepage = () => {
  const [addByValue, setaddByValue] = useState(0);

  // Function to handle data passed from the child component
  const handleaddbyChange = (childvalue) => {
    setaddByValue(childvalue);
  };

  const account = useAccount();
  const contractAddr = "0x5f6A8907C6eE5188A276385a031CEa9a66a6f71a";
  // useAccountEffect({
  //   onConnect(data) {
  //     console.log('Connected!', data)
  //   },
  //   onDisconnect() {
  //     console.log('Disconnected!')
  //   },
  // })

  const currentUserAccDetails = useBalance({
    address: account.address,
    blockTag: "latest",
  })

  const { connect } = useConnect();
  // console.log(currentUserAccDetails, "this is the useBalance Hook function")
  // getting the address of the user from wagmi provider
  // console.log(account.address, "This is the current account logged in");

  // const result = useReadContract({
  //   abi,
  //   address: '0x89D4B3FEc7B8Ccf1262C01e23C8fa03Dc4E1AE7D',
  //   functionName: 'getCount',
  //   watch: true,
  // })
  // console.log(result," this is the current count")

  const mycontract = {
    address: contractAddr, abi
  };

  const result = useReadContracts({
    contracts: [
      {
        ...mycontract, functionName: 'getCount'
      },
      {
        ...mycontract, functionName: 'getOwner'
      },
    ]
  });
  const { writeContract } = useWriteContract()

  const addCount = () => {
    writeContract({
      abi, address: contractAddr, functionName: 'addCount',
      // on success not working
      onSuccess: (data) => {
        alert('Transaction sent:', data);
      }
    });

  };

  const redCount = () => {
    writeContract({
      abi, address: contractAddr, functionName: 'reduceCount',
      // on success not working
      onSuccess: (data) => {
        alert('Transaction sent:', data);
      },
    });

  };

  // const addBy = () => {
  //   handleaddbyChange()
  //   alert(addByValue)
  //   writeContract({
  //     abi, address: contractAddr, functionName: 'addNumTo', args: [addByValue]
  //   });
  // };

  const addBy = (childValue) => {
    setaddByValue(childValue); // Update the state with the value passed from the child
    alert(childValue + "fggh"); // This will now alert the correct value
    writeContract({
      abi,
      address: contractAddr,
      functionName: 'addNumTo',
      args: [childValue],
    });
  };

  return (
    <div>
      <Navbar />
      <Counter addBy={addBy} redbutton={redCount} addbutton={addCount} getCount={result.isLoading ? '...' : result.data[0].result} />
    </div>
  )
}

export default Homepage
