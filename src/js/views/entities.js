import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";


export const Entity = ({type}) => {
	const {store, actions} = useContext(Context);

	function handleClick(id, name, type) {
		if (store.favorites.some(e => e.name === name)){
			actions.removeFavorite(name)
		} else {
			actions.saveFavorite(id, name, type)
		}
	}
	
	useEffect(() => {
		actions.getEntities(type)
	}, [type]);

	return( 
		  
		<div className="d-flex gap-2 overflow-auto container-fluid">
			{store[type]?.map((item) => {
				return (
					<div className={"card mb-3"} style={{width: "300px", minWidth:"200px"}} key={item.uid}>
						<img src={`https://starwars-visualguide.com/assets/img/${type === "people"? "characters" : type}/${item.uid}.jpg`} 
							className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<Link to={window.location.href.slice(-1) === "/" ? `people/${item.uid}` : `./${item.uid}`}  className="btn btn-success">
								See info
							</Link>
							<button type="button" className="btn" onClick={()=>{
									handleClick(item.uid, item.name, type)
								}}>
								<i className={`${store.favorites.filter(el=>el.name == item.name)[0]? "fa-solid fa-heart" : "fa-regular fa-heart"}`}></i>
							</button>
						</div>
					</div>
				)
			})}
		</div>
		
	)
};

