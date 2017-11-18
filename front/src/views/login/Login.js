import React from 'react';
import ApiService from '../../services/ApiService';

import './Login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    _connect() {
        ApiService.getVideos()
            .then(() => {
                this.props.history.push('/home');
            });
    }

    render() {
        return (
            <div className="login">
                <div className="box">
                    <div className="logo">
                        <img src={require('../../images/logo.png')} alt=""/>
                    </div>
                    <div className="form-output">
                        <form>
                            <div className="form-group label-floating">
                                <label className="control-label">Nom d'utilisateur</label>
                                <input className="form-control" placeholder="" type="email" ref="username"/>
                            </div>
                            <div className="form-group label-floating">
                                <label className="control-label">Mot de passe</label>
                                <input className="form-control" placeholder="" type="password"/>
                            </div>

                            <div className="remember">
                                <div className="checkbox">
                                    <label>
                                        <input name="optionsCheckboxes" type="checkbox"/>
                                        <span>Se souvenir de moi</span>
                                    </label>
                                </div>
                                <a href="#" className="forgot">J'ai oublié mon mot de passe</a>
                            </div>

                            <div className="buttons">
                                <div className="button connection" onClick={this._connect.bind(this)}>
                                    Connexion
                                </div>
                                <div className="separator"/>
                                <div className="button fb"><i className="fa fa-facebook"/> Connexion avec facebook</div>
                                <div className="button twitter"><i className="fa fa-twitter"/> Connexion avec twitter
                                </div>
                            </div>

                            <p className="noAccount">Vous n'avez pas de compte ? <a href="#">Enregistrez vous !</a></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;