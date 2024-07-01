import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Entity } from "./views/entities";
import injectContext from "./store/appContext";
import { NavbarHtml } from "./component/navbar";
import { Footer } from "./component/footer";
import { VehicleDetails } from "./views/vehiclesDetails";
import { PeopleDetails } from "./views/peopleDetails";
import { PlanetDetails } from "./views/planetsDetails";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarHtml />
					<Routes>
						<Route path="/" element={<Entity type={"people"} />} />
						<Route path="/people" element={<Entity type={"people"} />} />
						<Route path="/vehicles" element={<Entity type={"vehicles"} />} />
						<Route path="/planets" element={<Entity type={"planets"} />} />
						<Route path="/people/:id" element={<PeopleDetails type={"people"} />} />
						<Route path="/vehicles/:id" element={<VehicleDetails type={"vehicles"} />} />
						<Route path="/planets/:id" element={<PlanetDetails type={"planets"} />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
