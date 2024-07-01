import React, {useContext, useEffect}from "react";
import {useParams} from "react-router";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";
import { Table } from "react-bootstrap";


export const VehicleDetails = ({type}) => {
	const {store, actions} = useContext(Context)
	const {id} = useParams()

	useEffect(() => {
		actions.getEntitiesDetails(id, type)
	}, []);


	return(
		<div className="w-100 d-flex flex-column align-items-center ">

			<div className="d-flex justify-content-center mt-5 rounded-3 bg-light w-50 overflow-hidden " style={{width: "100%", height: "500px"}}>
				<img src={`https://starwars-visualguide.com/assets/img/${type === "people"? "characters" : type}/${id}.jpg`} 
					className="cardImgDetails" alt="..."/>
				<div className="w-100 d-flex">
					<Table className="mb-0">
						<tbody>
							<tr>
								<td><strong>Name:</strong></td>
								<td>{store[type + "Details"].name}</td>
							</tr>
							<tr>
								<td><strong>Crew:</strong></td>
								<td>{store[type + "Details"].crew}</td>
							</tr>
							<tr>
								<td><strong>Length:</strong></td>
								<td>{store[type + "Details"].length}</td>
							</tr>
							<tr>
								<td><strong>Manufacturer:</strong></td>
								<td>{store[type + "Details"].manufacturer}</td>
							</tr>
							<tr>
								<td><strong>Model:</strong></td>
								<td>{store[type + "Details"].model}</td>
							</tr>
							<tr>
								<td><strong>Passengers:</strong></td>
								<td>{store[type + "Details"].passengers}</td>
							</tr>

						</tbody>
					</Table>
				</div>
			</div>
					<Link to="/vehicles" className="btn btn-warning d-flex align-items-center h-25 mt-5">Go back</Link>
		</div>
)};