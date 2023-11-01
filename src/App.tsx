import React, { useState } from "react";

const App = () => {
	const [count, setCount] = useState(0);

	const handleClick = (newCount: number) => {
		setCount(newCount);
	};

	return (
		<main>
			<h1>Count: {count}</h1>
			<button
				onClick={() => {
					handleClick(count - 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					handleClick(count + 1);
				}}
			>
				Decrease
			</button>
		</main>
	);
};

export default App;
