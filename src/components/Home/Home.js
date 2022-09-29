import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
	// add to exercises in Card.js
	const [exercises, setExercises] = useState([]);
	useEffect(() => {
		fetch("fakeData.json")
			.then(res => res.json())
			.then(data => setExercises(data));
	}, []);

	// add to cart list
	const [time, setCart] = useState(0);

	const addToCartList = exercise => {
		setCart(time + exercise.time);
	};
	return (
		<div className=" pl-10 bg-slate-100 xl:grid xl:grid-cols-5 lg:grid-cols-3 gap-6 sm:grid grid-cols-2 flex  flex-col-reverse">
			<div className="xl:col-span-4 lg:col-span-2  pb-12 pt-6">
				<h1 className="pb-6 text-2xl font-semibold">Select today’s exercise</h1>
				<div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2 ">
					{exercises.map(exercise => (
						<Card
							key={exercise.id}
							addToCartList={addToCartList}
							exercise={exercise}></Card>
					))}
				</div>
			</div>
			<div className="bg-white py-5">
				<Cart time={time}></Cart>
			</div>
		</div>
	);
};

export default Home;
