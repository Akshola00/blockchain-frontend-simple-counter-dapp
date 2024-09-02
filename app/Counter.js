import { useState } from "react";

const Counter = (props) => {
    const [numAdded, setNumAdded] = useState(0);

    const liftState = () => {
        const myNum = document.getElementById('numadded').value;
        // alert(myNum,"john")
        props.addBy(myNum);
    };

    return (
        <div className="text-black mt-24 w-full text-center flex flex-col justify-center p-4">
            <div className="text-black text-2xl font-mono px-9 py-2 self-center">
                SIMPLE COUNTER
            </div>
            <div className="text-center  flex justify-center p-1 space-x-4">
                <button onClick={props.redbutton} className="text-white text-2xl p-3 bg-red-700 font-bold self-center rounded-lg">-</button>
                <p className="text-black  text-4xl font-bold p-4"> {props.getCount} </p>
                <button onClick={props.addbutton} className="text-white text-2xl p-3 bg-green-700 font-bold self-center rounded-lg ">+</button>
            </div>
            <div className="mt-4 flex flex-col gap-3">
                <div className=" text-xl font-mono px-2 py-1 self-center rounded-xl border flex gap-2 items-center">
                    <button onClick={liftState} className=" bg-green-700 text-white px-8 py-2 self-center rounded-xl ">
                        Add By
                    </button>
                    <input id="numadded" type="number" max="9" min="0" className=" w-11 h-8 text-black bg-gray-100 rounded px-1" />
                </div>


                <button className="text-white text-xl font-mono px-9 py-2 bg-blue-700  self-center rounded-xl ">
                    Get Count
                </button>

            </div>
        </div>
    )
}

export default Counter
