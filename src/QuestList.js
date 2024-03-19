import QuestItem from "./QuestItem";

export default function({list, changeNthTask}){
    return <div className="w-full">
        {
            list.map(
                (element, index)=><QuestItem
                    quest={element}
                    changeQuest={()=>changeNthTask(index)}
                ></QuestItem>)
        }
    </div>
}