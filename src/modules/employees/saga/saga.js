import { all, call, put, takeLatest } from "redux-saga/effects";
import * as axios from "axios";
import { editEmployeesSuccess, getEmployeesSuccess } from '../actions';

const fetchData = () => axios.get(`https://reqres.in/api/users?per_page=12`);

function* getEmployeesList() {
    const result = yield call(fetchData);
    yield put(getEmployeesSuccess({
        employees: [...result.data.data]
    }));
}

function* editEmployeesList({event, employees}) {
    console.log(event);
    yield put(editEmployeesSuccess({
        employees: [...employees, ...[{first_name: event.target.value}]]
    }));
}

export function* employeesSaga() {
    yield all([
        takeLatest('GET__EMPLOYEES__LIST__REQUEST', getEmployeesList),
        takeLatest('EDIT__EMPLOYEES__LIST__REQUEST', editEmployeesList),
    ]);
}
