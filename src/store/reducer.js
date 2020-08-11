import { combineReducers } from 'redux';
import { reducerEmployees } from '../modules/employees/reducer';

export default combineReducers({
    employees: reducerEmployees
});
