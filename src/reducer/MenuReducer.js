
const initState = {
    burgerIsActive : false,
    burgerIsTrans : false,
    burgerIsDone : false
}

export const MenuReducer = (state = initState , action)=>{
    let newState = state
    if (action.type === 'BURGER_IS_TOGGLE'){
        if (state.burgerIsActive===false){
        newState={...state,burgerIsActive: true}
    }else if (state.burgerIsActive === true) {
            newState={...state,burgerIsActive:false}
        }
    };
    switch (action.type) {
        case "BURGER_IS_DONE":
            if (state.burgerIsDone) {
                newState = {...state,burgerIsDone:false}
            }else {
                newState = {...state,burgerIsDone:true}
            }
            break;
    }
    return newState
}