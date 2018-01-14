const initState = {
    firstNum: '',
    secondNum: '',
    calType: 'plus',
    result: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'GetFirstNum':
            state.firstNum = action.payload;
            return state;

        case 'GetSecondNum':
            state.secondNum = action.payload;
            return state;
            
        case 'GetCalType':
            state.calType = action.payload;
            return state;

        case 'GetResult':
            state.result = action.payload;
            return state;

        default:
            return state;
    }
};

export default reducer;