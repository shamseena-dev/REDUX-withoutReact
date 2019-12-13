const {createStore} = require('redux');


const initialState = {
	age: 21
}

const myReducer = (state= initialState , action)=>{
	const newState = {...state};
	if(action.type === 'ADD'){
		newState.age = newState.age + 1;
	}
	if(action.type === 'SUB'){
		newState.age = newState.age -1;
	}
	return newState;
}

const store = createStore(myReducer);
console.log('current state',store.getState());
store.dispatch({type: 'ADD', payload: 10});
console.log('After ADD',store.getState());
store.dispatch({type: 'SUB',payload: 5});
console.log('After SUB',store.getState());
