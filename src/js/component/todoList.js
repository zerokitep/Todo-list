import { func } from "prop-types";
import React, { useState } from "react";

const Todos = () => {
	const [inputValue, setInputValue] = useState("Type There");
	const [inputList, setInputList] = useState([]);

	function addItem(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			setInputValue(inputValue);
			const list = inputList.concat(inputValue);
			setInputList(list);
			setInputValue("");
		}
	}
	function deleteItem(index) {
		setInputList(function(currentList) {
			return currentList.filter(function(el, elIndex) {
				return index !== elIndex;
			});
		});
	}

	return (
		<div>
			<h1>TodoList</h1>
			<input
				type="text"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyUp={addItem}
			/>
			<div>
				<ul>
					{inputList.map((todos, i) => (
						<li key={todos}>
							{todos}
							<button onClick={() => deleteItem(i)}>X</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Todos;
