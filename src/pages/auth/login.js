import * as React from "react";

export default function Page() {
	return (
		<div>
			<div className="h-screen flex items-center justify-center">
				<div className="card card-compact bg-base-200 w-96 shadow-xl">
					<div className="card-body">
						<div>
							<p className="card-title text-2xl font-bold">Login</p>
							<p className="text-xs -mt-1 opacity-60">Login to your PA account</p>
						</div>
						<div className="mt-3">
							<input type="username" placeholder="Username" className="input input-bordered w-full my-2" />
							<input type="password" placeholder="Password" className="input input-bordered w-full my-2" />
						</div>
						<div className="card-actions justify-end mt-3">
							<button className="btn btn-primary">Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
