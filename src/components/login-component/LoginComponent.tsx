import React from 'react'
import "./styles/style.css";

export class LoginComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    render() {
        return (
            <div className="login-component">
                <form>
                        {/* username */}
                        <div>
                            <label>
                                Username: 
                                <input type="text" name="username" id="login-form-username" className="username-label"/>
                            </label>
                        </div>
                        {/* password */}
                        <div>
                            <label>
                                Password: 
                                <input type="password" name="password" id="login-form-password" className="password-label"/>
                            </label>
                        </div>
                        {/* submit */}
                        <div>
                            <input type="submit" value="Go!" />
                        </div>
                </form>
            </div>
        );
    }
}