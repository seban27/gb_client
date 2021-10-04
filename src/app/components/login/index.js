import { connect } from 'react-redux';

import './signin.scss';

import { checkLogin, registerUser } from './api';

const Login = (props) => {
    if(props.isLoggedIn) props.history.push('/employees');

    const invokeLogin = e => {
        e.preventDefault();
        let data = { email: e.target.email.value, password: e.target.password.value }
        props.dispatch(checkLogin(data));
    };
    
    const invokeRegister = e => {
        e.preventDefault();
        let data = { firstName: e.target.firstName.value, lastName: e.target.lastName.value, email: e.target.email.value, password: e.target.password.value }
        props.dispatch(registerUser(data));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <form className="form-signin" onSubmit={invokeRegister}>
                        <h1 className="h3 mb-3 font-weight-normal">Signup</h1>
                        <label for="signupFirstname" className="sr-only">First name</label>
                        <input type="text" id="signupFirstname" name="firstName" className="form-control" placeholder="First name" required autofocus />
                        <label for="signupLastName" className="sr-only">Last name</label>
                        <input type="text" id="signupLastName" name="lastName" className="form-control" placeholder="Last name" required autofocus />
                        <label for="inputEmailSignup" className="sr-only">Email</label>
                        <input type="email" id="inputEmailSignup" name="email" className="form-control" placeholder="Email address" required autofocus />
                        <label for="inputPasswordSignup" className="sr-only">Password</label>
                        <input type="password" id="inputPasswordSignup" name="password" className="form-control" placeholder="Password" required />
                        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={props.loadingSignup}>{ props.loadingSignup ? 'Loading...' : 'Signup' }</button>
                        <span className="text-danger">{props.errorMessageSignup}</span>
                        <span className="text-info">{props.successMessageSignup}</span>
                    </form>
                </div>
                <div class="col-sm">
                    <form className="form-signin" onSubmit={invokeLogin}>
                        <h1 className="h3 mb-3 font-weight-normal">Signin instead</h1>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" required autofocus />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
                        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={props.loading}>{ props.loading ? 'Loading...' : 'Signin' }</button>
                        <span className="text-danger">{props.errorMessage}</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.loginReducer.loading,
    isLoggedIn: state.loginReducer.isLoggedIn,
    errorMessage: state.loginReducer.errorMessage,
    loadingSignup: state.loginReducer.loadingSignup,
    errorMessageSignup: state.loginReducer.errorMessageSignup,
    successMessageSignup: state.loginReducer.successMessageSignup
});

export default connect(mapStateToProps)(Login);