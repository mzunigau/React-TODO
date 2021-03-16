import React, { useState } from "react";

export function TodoList() {
	const [t, setT] = useState();
	const [task, setTask] = useState([]);
	const handleChange = e => {
		setT(e.target.value);
		if (task != "null") {
			setTask(newTask => [...newTask, t]);
		}
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
								e.key === "Enter" ? handleChange(e) : ""
							}
							onChange={e => setT(e.target.value)}
						/>
					</li>

					{task.map((result, i) => (
						<li className="list-group-item" key={i}>
							{result}
						</li>
					))}

					<li className="list-group-item">Tareas {task.length}</li>
				</ul>
			</div>
		</div>
	);
}
