import * as React from "react";

export default function Page() {
	return (
		<div>
			<div className="hero min-h-screen">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<div>
							<p className="text-4xl font-bold">organize//defend</p>
							<p className="opacity-60">Schedule protests in record time. Securely and safely.</p>
						</div>
						<button className="btn btn-primary mt-7" onClick={() => (window.location = "/auth/register")}>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
