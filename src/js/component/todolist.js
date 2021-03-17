import React, { useState } from "react";

export function TodoList() {
	const [task, setTask] = useState();
	const [todoList, setTodoList] = useState([]);
	const handleChange = () => {
		//setTask(e.target.value);
		if (todoList != "null") {
			setTodoList(newTask => [...newTask, task]);
			setTask("");
		}
	};

	const deleteTask = id => {
		todoList.splice(id, 1);
		setTodoList([...todoList]);
	};

	return (
		<div className="col d-flex justify-content-center todo">
			<div className="card  text-center" style={{ width: "18rem" }}>
				<div className="card-header"> TodoList </div>

				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						{" "}
						<input
							className="taskbox"
							placeholder="Escribe tus tareas"
							onKeyPress={e =>
								e.key === "Enter" ? handleChange() : ""
							}
							onChange={e => setTask(e.target.value)}
							value={task}
						/>
					</li>

					{todoList.map((result, i) => (
						<li className="list-group-item task" key={i}>
							{result}
							<div
								className="close"
								onClick={() => deleteTask(result.id)}>
								&times;
							</div>
						</li>
					))}

					<li className="list-group-item">
						Tareas {todoList.length}
					</li>
				</ul>
			</div>
		</div>
	);
}
