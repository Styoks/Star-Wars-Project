const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: {},
			planets: [],
			planetsDetails: {},
			vehicles: [],
			vehiclesDetails: {},
			favorites: []
		},

		actions: {
			getCharacters : async() => {
				const res = await fetch(`https://www.swapi.tech/api/people/`)
				const data = await res.json()
				setStore({characters: data.results})
			},

			getCharactersDetails: async(id) => {
				const result = await fetch(`https://www.swapi.tech/api/people/${id}`)
				const data = await result.json()
				console.log(data.result);
				setStore({characterDetails: data.result.properties})
			},

			getPlanets : async() => {
				const res = await fetch(`https://www.swapi.tech/api/planets`)
				const data = await res.json()
				setStore({planets: data.results})
			},

			getPlanetsDetails: async(id) => {
				const result = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				const data = await result.json()
				console.log(data.result);
				setStore({planetsDetails: data.result.properties})
			},

			getVehicles : async() => {
				const res = await fetch(`https://www.swapi.tech/api/vehicles`)
				const data = await res.json()
				setStore({vehicles: data.results})
			},

			getVehiclesDetails: async(id) => {
				const result = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				const data = await result.json()
				console.log(data.result);
				setStore({vehiclesDetails: data.result.properties})
			},

			saveFavorite: (id, name, type) => {
				setStore({favorites:[...getStore().favorites,{name: name, id: id, type: type}]})
			},

			removeFavorite: (id) => {
				const filteredArray  = getStore().favorites.filter((item) => item.id != id);
				setStore({favorites: filteredArray})
			}
		}
		
	};
};

export default getState;
