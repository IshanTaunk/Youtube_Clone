export const calculatorReducer = (state,action) => {
    console.log(action.payload,'pay')
    switch (action.type) {
        case `add`:
            return {result: action.payload.input1 + action.payload.input2};
        case `subtract`:
            return {result: action.payload.input1 - action.payload.input2}
    }
}