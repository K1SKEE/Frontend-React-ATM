import React from 'react'
import { NavLink } from 'react-router-dom';


const RegisterPage = () => {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" method='POST'>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Реєстрація</h3>
                    <div className="form-group mt-3">
                        <label>Ім'я</label>
                        <input
                            id='first_name'
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter First Name"
                            maxLength='30'
                            required={true}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Прізвище</label>
                        <input
                            id='last_name'
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Last Name"
                            maxLength='30'
                            required={true}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Номер телефону</label>
                        <input
                            id='phone_number'
                            type="text"
                            className="form-control mt-1"
                            placeholder="+380"
                            maxLength='13'
                            required={true}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Вже <NavLink to="/login">зареєстровані?</NavLink>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;