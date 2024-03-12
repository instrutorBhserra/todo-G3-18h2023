import { useState, useRef } from "react";

export default function AddQuest({saveNewQuest}){
    // questTitle = "abcd"; // Nunca!
    // setQuestTitle("abcd"); // Faça assim!
    const [questTitle, setQuestTitle]  = useState("");
    const questInput  = useRef(null);

    function addNewQuest(){
        questInput.current.value = questInput.current.value.trim();
        if ( questInput.current.value === "" ) return;

        saveNewQuest(questTitle);
        questInput.current.value = "";
    }

    return <div 
        className="flex gap-4 w-full justify-center items-center dark:text-white"
    >
        <input
            className="bg-blue-600 rounded-full pl-2 input-sm felx w-[70%] focus-within:outline-none"
            ref={questInput}
            onChange={(event)=>setQuestTitle(event.target.value)}
            onKeyDown={(event)=>{
                if(event.key.toUpperCase() === "ENTER") addNewQuest();
            }}
        />
        <button
        className="rounded-full bg-green-600 h-fit px-2 text-lg transform easy-out duration-500"
            onClick={()=>addNewQuest()}
        >+</button>
    </div>
}