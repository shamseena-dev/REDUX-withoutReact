const {createStore} = require('redux');


const initialState = {
	age: 21
}

const myReducer = (state= initialState , action)=>{
	const newState = {...state};
	if(action.type === 'ADD'){
		//newState.age = newState.age + 1;
		newState.age = newState.age + action.payload;

	}
	if(action.type === 'SUB'){
		//newState.age = newState.age -1;
		newState.age = newState.age - action.payload;
	}
	return newState;
}
//const action1 = {type: 'ADD', payload: 10};
//const action2 = {type: 'SUB',payload: 5};

const store = createStore(myReducer);
console.log('current state',store.getState());
store.dispatch({type: 'ADD', payload: 10});
//store.dispatch(action1);
console.log('After ADD',store.getState());
store.dispatch({type: 'SUB',payload: 5});
//store.dispatch(action1);
console.log('After SUB',store.getState());
