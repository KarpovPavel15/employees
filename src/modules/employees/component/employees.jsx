import './employees.scss'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editEmployeesRequest } from '../actions';

export const Employees = ({employees}) => {
    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    const deleteHandler = event => event.currentTarget.parentElement.remove();
    const showInputHandler = () => setState(!state);
    const addingHandler = event => dispatch(editEmployeesRequest({event, employees}));
    return <div className="employees">
        {
            employees !== null && employees.map(el =>
                <div className="employees__info info">
                    <div className="info__name">{el.first_name}</div>
                    <button onClick={e => deleteHandler(e)}>Delete</button>
                </div>
            )
        }
        <div className="newEmployer">
            {state && <input onBlur={e => addingHandler(e)} className="newEmployer__inputEmployer"/>}
            <button onClick={e => showInputHandler(e)}>Add</button>
        </div>

    </div>
};
