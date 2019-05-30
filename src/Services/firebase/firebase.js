import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React, { Component } from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';

// Styles
import styles from './firebase.css'; // This uses CSS modules.

const config = ({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "breadandpizza.firebaseapp.com",
    databaseURL: "https://breadandpizza.firebaseio.com",
    projectId: "breadandpizza",
    storageBucket: "breadandpizza.appspot.com",
    messagingSenderId: "346617442632",
    appId: "1:346617442632:web:8960dc57f42d6dec"
    
   });


// This must run before any other firebase functions
//if (!firebase.apps.length) {
  const  firebaseApp = firebase.initializeApp(config);
  //}


class SignInScreen extends React.Component {



  // This is our firebaseui configuration object
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    tosUrl: '/terms-of-service' // This doesn't exist yet
  };

  state = {
    isSignedIn: undefined,
  };
  
  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({isSignedIn: !!user});
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }


  render() {
    return (
      <div>
        <p>Please sign-in:</p>

          {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
          <div>
            <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={this.uiConfig}
                                firebaseAuth={firebaseApp.auth()}/>
          </div>
        }
        {this.state.isSignedIn &&
          <div className={styles.signedIn}>
            Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
            <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
          </div>
        }

      </div>
    );
  }
}

export default SignInScreen;