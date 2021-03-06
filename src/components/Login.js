import React, {Component} from 'react';
import {firebaseApp, providerGoogle, providerFacebook} from '../Firebase';
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import './application.css'

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    

    authGoogleProvider() {
        firebaseApp.auth().signInWithPopup(providerGoogle)
          .then((result) => {
            this.setState({
              userAuthProvider: result.user,
              name: result.user.displayName
            })
          })
          .catch((error) => {
            if (error.code === 'auth/account-exists-with-different-credential') {
              alert("Credenziali di accesso  collegate ad un altro account");
            } else alert("Errore login:" + error)
          })
      }

      authFacebookProvider() {
        firebaseApp.auth().signInWithPopup(providerFacebook)
          .then((result) => {
            this.setState({
              userAuthProvider: result.user,
              name: result.user.displayName
            })
          })
          .catch((error) => {
            if (error.code === 'auth/account-exists-with-different-credential') {
              alert("Credenziali di accesso  collegate ad un altro account");
            } else alert("Errore login:" + error)
          })
      }

    login = ()=> {

        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error=> this.setState({error}))
    }
    render() {
        return (
            <div className="container" style={{margin: '5%'}}>
                <div className="form-group">
                  
                    <input type="text"
                           placeholder="Inserisci Email"
                           className="form-control"
                           onChange={({target})=>this.setState({email: target.value})}
                    />
                    <input type="password"
                           placeholder="Inserisci Password"
                           className="form-control"
                           onChange={({target})=>this.setState({password: target.value})}
                    />
                    


                    <button className="btn btn-primary" style={{marginTop: '10px',marginLeft:'115px'}} onClick={this.login}>Login</button>
                    <hr className= 'linea'/>
                    <GoogleLoginButton style={{marginTop: '10px', width: '300px'}} onClick={() => this.authGoogleProvider()}>Accedi con Google</GoogleLoginButton>
                    <FacebookLoginButton style={{marginTop: '10px', width: '300px'}} onClick={() => this.authFacebookProvider()}>Accedi con Facebook</FacebookLoginButton>
                    
                </div>
            </div>


        )


    }


}

export default Login;