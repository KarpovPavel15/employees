export const reducerEmployees = (state = [], action) => {
    switch (action.type) {
        case 'GET__EMPLOYEES__LIST__SUCCESS' :
            return [...action.employees];
        case 'EDIT__EMPLOYEES__LIST__SUCCESS' :
            return [...action.employees];
        default :
            return state
    }
};
