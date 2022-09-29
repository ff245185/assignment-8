import React from "react";

const Card = ({ exercise, addToCartList }) => {
	const { img, id, time, age, about, name, learn, beginer } = exercise;
	return (
		<div>
			<div className="card card-compact h-full  bg-base-100 shadow-xl">
				<figure>
					<img className="h-full" src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p className="text-gray-500 pb-2">{about.slice(0, 160)}...</p>
					<h1 className="font-semibold">For Age: {age}</h1>
					<h1 className="font-semibold">Time required : {time}s</h1>

					<div className=" mt-3 mb-1 ">
						<button
							onClick={() => addToCartList(exercise)}
							className="btn w-full btn-primary">
							Add To List
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
