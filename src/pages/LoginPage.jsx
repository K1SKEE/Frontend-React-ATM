import React from 'react'
import { NavLink } from 'react-router-dom';



const LoginPage = (props) => {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" method='POST'>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Вхід</h3>
                    <div className="form-group mt-3">
                        <label>Номер карти</label>
                        <input
                            id='username'
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Card number"
                            maxLength='16'
                            required={true}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>PIN-код</label>
                        <input
                            id='password'
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter PIN-code"
                            maxLength='4'
                            required={true}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Немає <NavLink to="/register">рахунку?</NavLink>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;