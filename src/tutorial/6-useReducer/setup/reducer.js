
// Reducer is a collection of all the functions to manipulate states.
// It has to return something, state is the default, or it will cause errors.
// We can manipulate state values here in reducer, using the data sent from the dispatch function.
// The data can be accessed with action.payload
export const reducer = (state, action) => {
	if(action.type === 'ADD_PERSON') {
		const updatedPeople = [...state.people, action.payload];
		return {
			...state,
			people: updatedPeople,
			showModal: true,
			modalContent: 'New Person Added!'
		}
	}else if(action.type === 'MISSING_VAL') {
		return {
			...state,
			showModal: true,
			modalContent: 'Name should not be empty!'
		}
	} else if(action.type === 'REMOVE_PERSON') {
		const updatedPeople = state.people.filter((person) => person.id !== action.payload);
		return {
			...state,
			people: updatedPeople,
			showModal: true,
			modalContent: `Removed Person with ID: ${action.payload}`
		}
	} else if(action.type === 'CLOSE_MODAL') {
		return {
			...state,
			showModal: false
		}
	}
}