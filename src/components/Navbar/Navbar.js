import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
	return (
		<div>
			<div className="bg-slate-300 navbar flex justify-between bg-base-100 sm:px-4 px-1 md:px-16">
				<div className=" bg-slate-300 rounded-xl">
					<a className="btn btn-ghost normal-case sm:text-xl text-lg">E-buy</a>
				</div>
				<div className="hidden sm:block">
					<ul className="flex md:gap-8 gap-3">
						<li>
							<a
								className="font-bold hover:text-white px-5 rounded-xl py-3 hover:bg-blue-500 transition-all"
								href="/home">
								Home
							</a>
						</li>
						<li>
							<a
								className="font-bold hover:text-white px-5 rounded-xl py-3 hover:bg-blue-500 transition-all"
								href="/cart">
								Cart
							</a>
						</li>
						<li>
							<a
								className="font-bold hover:text-white px-5 rounded-xl py-3 hover:bg-blue-500 transition-all"
								href="/home">
								contact
							</a>
						</li>
						<li>
							<a
								className="font-bold hover:text-white px-5 rounded-xl py-3 hover:bg-blue-500 transition-all"
								href="/home">
								about
							</a>
						</li>
					</ul>
				</div>
				<div className="flex-none">
					<div className="sm:hidden dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 mt-3 rounded-full">
								<h1 className="tex">
									<FontAwesomeIcon
										icon={faBars}
										className="text-2xl"></FontAwesomeIcon>
								</h1>
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a className="justify-between" href="/home">
									Home
								</a>
							</li>
							<li>
								<a href="/cart">Cart</a>
							</li>
							<li>
								<a href="/home">contact</a>
							</li>
							<li>
								<a href="/home">about</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
