export default function({quest, changeQuest}){
    return <div>
        <div className="inline-flex p-2">
            <input 
                type="checkbox"
                checked={quest.done}
                onChange={changeQuest}
                className="checkbox checkbox-success mr-4"
            />
            <p className={`${quest.done? 'line-through': ''}`} >
                {quest.title}
            </p>
        </div>
    </div>
}