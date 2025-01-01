import { useRef } from "react";

const Input = ({ handleAdd }) => {
    const inputBox = useRef();

    function handleSubmit() {
        if(inputBox.current.value) {
            const newItem = {
                text: inputBox.current.value,
                id: Date.now(),
                completed: false
            };
            inputBox.current.value = "";
            handleAdd(newItem);
        }
        else {
            alert("Please don't left the box empty.");
        }
    }
    return (
        <div className="flex gap-[5px]">
            <input ref={inputBox} className="border-0 rounded-2xl py-[10px] pl-[22px] w-[250px] bg-[#D9D9D9] text-[16px]" type="text" placeholder="New task..." />
            <button onClick={handleSubmit} className="text-[16px] py-[10px] px-[22px] rounded-2xl border-0 bg-[#0074C7B2] cursor-pointer">Add</button>
        </div>
    );
};

export default Input;