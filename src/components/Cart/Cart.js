import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Cart = ({ time }) => {
	const [breakTime, setBreakTime] = useState([]);
	// const [second, setSecond] = useState;
	useEffect(() => {
		fetch("fakeTime.json")
			.then(res => res.json())
			.then(data => setBreakTime(data));
	}, []);

	const addLocalStorage = Time => {
		localStorage.setItem("break", Time);
	};
	const getLocalStorageItem = localStorage.getItem("break");
	return (
		<div className="px-4 sticky top-6">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-8">
					<div className="flex gap-2  items-center">
						<img
							className="w-10 h-10 rounded-full"
							src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/308358701_1090879841570227_3542921004091149142_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Ey18Q2Umr3AAX-xEme-&_nc_ht=scontent.fdac157-1.fna&oh=00_AT9xOGPigV-vdJKm-O1uCileMK_-pa-wmIHQwOuWCvIMfg&oe=633B246A"
						/>
						<div>
							<h1 className="font-bold">Abdullah All Mahbub</h1>
							<p className="text-sm">
								<FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
								<span>khulna</span>, <span>Bangladesh</span>
							</p>
						</div>
					</div>
					<div className="bg-gray-100 px-4 py-2 rounded-lg flex justify-between">
						<div className="text-center">
							<h1>
								<span className="font-bold">53</span>
								<sub>kg</sub>
							</h1>
							<span>height-Weight</span>
						</div>
						<div className="text-center">
							<h1>
								<span className="font-bold">5.8</span>
							</h1>
							<span>Height</span>
						</div>
						<div className="text-center">
							<h1>
								<span className="font-bold">17</span>
								<sub>yers</sub>
							</h1>
							<span>Age</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<div>
						<h1 className="font-bold mb-5">Add A Break</h1>
						<div className="bg-gray-300 py-3 px-2 flex justify-between rounded-lg">
							{breakTime.map(breack => (
								<button
									onClick={e => addLocalStorage(e.target.innerText)}
									key={breack.id}
									className="bg-white p-2 hover:bg-blue-600 transition-all font-bold hover:text-white rounded-full">
									{breack.breakTime}
								</button>
							))}
						</div>
					</div>
					<div>
						<h1 className="font-bold  mb-5">Exercise Details</h1>
						<div className="flex mb-8 flex-col gap-6">
							<div className="bg-gray-100 px-2 flex justify-between py-3 rounded-lg ">
								<h1 className="font-bold">Exercise time </h1>
								<span>{time} seconds</span>
							</div>
							<div className="bg-gray-100 px-2 flex justify-between py-3 rounded-lg ">
								<h1 className="font-bold">Break time </h1>
								<span>{getLocalStorageItem} seconds</span>
							</div>
						</div>
						<button className="btn btn-primary w-full">
							Activity Completed
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
