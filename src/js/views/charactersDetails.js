import React, {useContext, useEffect}from "react";
import {useParams} from "react-router";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";


export const CharactersDetails = () => {
	const {store, actions} = useContext(Context)
	const {id} = useParams()

	useEffect(() => {
		actions.getCharactersDetails(id)
	}, [id]);

	return(
		<div className="w-100 d-flex justify-content-center ">

			<div className="d-flex justify-content-center mt-5 rounded-3 bg-light w-50 overflow-hidden" style={{width: "100%", height: "500px"}}>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} style={{height: "500px"}} alt="..."/>
				<div className="w-100">
					<p className="card-text">{store.characterDetails.name}</p>
					<p className="card-text">{store.characterDetails.birth_year}</p>
					<p className="card-text">{store.characterDetails.gender}</p>
					<p className="card-text">{store.characterDetails.height}</p>
					<p className="card-text">{store.characterDetails.skin_color}</p>
					<p className="card-text">{store.characterDetails.hair_color}</p>
					<Link to="/characters" className="btn btn-success">Go back</Link>
				</div>
			</div>
		</div>
)};

