import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className='SignIn'>
        <button className='btn btn-dark' onClick={this.loginClickEvent}><i class="fas fa-football-ball"></i> Sign in with <i class="fab fa-google"></i>oogle</button>
      </div>
    );
  }
}
