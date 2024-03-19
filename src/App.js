import { useState } from "react";

import AddQuest from "./AddQuest";
import QuestList from "./QuestList";

import "./App.css";

function App() {
	const [questList, setQuestList] = useState([]);

	function addNewQuest(questTitle) {
		const quests = questList.slice();

		quests.push({
			title: questTitle,
			done: false,
		});

		setQuestList(quests);
		console.log(quests);
	}
	function changeNthQuest(n) {
		const quests = questList.slice();
		quests[n].done = !quests[n].done;
		setQuestList(quests);
	}

	return (
		<div
			className="App h-screen w-screen flex justify-center items-center"
			data-theme="dark">
			<div className="card w-[80%] h-[70%] shadow-md rounded-sm transform ease-out duration-500 items-center p-10 gap-5">
				<h1 className="text-5xl font-work font-bold w-fit text-center">
					Quests to do
				</h1>
				<AddQuest saveNewQuest={addNewQuest}></AddQuest>
				<QuestList list={questList} changeNthTask={changeNthQuest} />
				<input
					onClick={() => setQuestList(questList.filter((q) => !q.done))}
					type="reset"
					value="Clear"
					className="btn btn-success"
				/>
			</div>
		</div>
	);
}

export default App;
