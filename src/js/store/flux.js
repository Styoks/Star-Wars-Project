const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: {},
			planets: [],
			planetsDetails: {},
			vehicles: [],
			vehiclesDetails: {},
			favorites: []
		},

		actions: {
			getEntities : async(type) => {
				const res = await fetch(`https://www.swapi.tech/api/${type}`)
				const data = await res.json()
				setStore({[`${type}`]: data.results})
			},

			getEntitiesDetails: async(id, type) => {
				const result = await fetch(`https://www.swapi.tech/api/${type}/${id}`)
				const data = await result.json()
				setStore({[`${type}Details`]: data.result.properties})
			},

			saveFavorite: (id, name, type) => {
				setStore({favorites:[...getStore().favorites,{name: name, id: id, type: type}]})
			},
			
			removeFavorite: (name) => {
				const filteredArray  = getStore().favorites.filter((item) => item.name != name);
				setStore({favorites: filteredArray})
			}
		}
		
	};
};

export default getState;
