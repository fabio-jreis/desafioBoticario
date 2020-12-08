export const SET_LOADING = 'SET_LOADING';

export const accessRulesReducer = (state, action) => {
    switch (action.type) {
        case SET_ACCESS_RULES:
            return action.payload;

        default:
            return state;
    }
};

export const loadingReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.payload;

        default:
            return state;
    }
};
