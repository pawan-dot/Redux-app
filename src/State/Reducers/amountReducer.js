const reducer = (state = 0, action) => {//take initial state
    if (action.type === "deposit") {
        return state + action.payload
    }
    else if (action.type === "withdrow") {
        return state - action.payload
    }
    else {
        return state;
    }

}
export default reducer;