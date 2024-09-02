"use client"
// import { useAccount, useReadContract } from "wagmi";
import Homepage from "./Homepage";
// import { abi } from './abi/abi.js';

export default function Home() {
  // const { data } = useReadContract({
  //   abi, address: "0x9e726be10Aa398dfA4DF47C62D7c2f7274FD21ef", functionName: "getCount"
  // })
  // console.log(data, "indiana jones")
  // const { account } = useAccount();
  // console.log(account, "this is the account name")
  return (
    <div>
      {/* const {} = useAccount(); */}
      <Homepage />
    </div>
  );
}
