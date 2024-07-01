import React, {useContext, useEffect}from "react";
import {useParams} from "react-router";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";
import { Table } from "react-bootstrap";


export const PeopleDetails = ({type}) => {
	const {store, actions} = useContext(Context)
	const {id} = useParams()

	useEffect(() => {
		actions.getEntitiesDetails(id, type)
	}, []);

	return(
		<div className="w-100 d-flex flex-column align-items-center ">

			<div className="d-flex justify-content-center mt-5 rounded-3 bg-light w-50 overflow-hidden" style={{width: "100%", height: "500px"}}>
				<img src={`https://starwars-visualguide.com/assets/img/${type === "people"? "characters" : type}/${id}.jpg`} 
					style={{height: "500px"}} alt="..."/>
				<div className="w-100 d-flex">
					<Table className="mb-0">
						<tbody>

							<tr>
								<td><strong>Name:</strong></td>
								<td>{store[type + "Details"].name}</td>
							</tr>

							<tr>
								<td><strong>Birth year:</strong></td>
								<td>{store[type + "Details"].birth_year}</td>
							</tr>

							<tr>
								<td><strong>Gender:</strong></td>
								<td>{store[type + "Details"].gender}</td>
							</tr>

							<tr>
								<td><strong>Height:</strong></td>
								<td>{store[type + "Details"].height}</td>
							</tr>

							<tr>
								<td><strong>Skin color:</strong></td>
								<td>{store[type + "Details"].skin_color}</td>
							</tr>
							
							<tr>
								<td><strong>Hair:</strong></td>
								<td>{store[type + "Details"].hair_color}</td>
							</tr>

						</tbody>
					</Table>
				</div>
			</div>
					<Link to="/people" className="btn btn-warning d-flex align-items-center h-25 mt-5">Go back</Link>
		</div>
)};

