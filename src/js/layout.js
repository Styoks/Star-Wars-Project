import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Characters } from "./views/characters";
import { Vehicles } from "./views/vehicles";
import { Planets } from "./views/planets";
import injectContext from "./store/appContext";
import { NavbarHtml } from "./component/navbar";
import { Footer } from "./component/footer";
import { VehicleDetails } from "./views/vehiclesDetails";
import { CharactersDetails } from "./views/charactersDetails";
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
						<Route path="/" element={<Characters />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/vehicles/:id" element={<VehicleDetails />} />
						<Route path="/characters/:id" element={<CharactersDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:id" element={<PlanetDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
