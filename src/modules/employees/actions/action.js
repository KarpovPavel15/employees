import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const getEmployees = 'GET__EMPLOYEES__LIST';
export const getEmployeesRequest = actionCreator(requestCreator(getEmployees));
export const getEmployeesSuccess = actionCreator(successCreator(getEmployees));
export const editEmployees = 'EDIT__EMPLOYEES__LIST';
export const editEmployeesRequest = actionCreator(requestCreator(editEmployees));
export const editEmployeesSuccess = actionCreator(successCreator(editEmployees));


