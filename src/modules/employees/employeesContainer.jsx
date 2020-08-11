import React, { useEffect } from 'react'
import { Employees } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesRequest } from './actions';


export const EmployeesContainer = () => {
    const dispatch = useDispatch();
    const {employees} = useSelector(state => state);

    useEffect(() => {
        dispatch(getEmployeesRequest())
    }, employees);

    return (
        <Employees employees={employees ? employees : null}/>
    )
};
