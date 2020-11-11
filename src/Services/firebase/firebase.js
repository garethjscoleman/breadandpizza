import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React from 'react';
import firebase from 'firebase';

// Styles
import styles from './firebase.css'; // This uses CSS modules.

const config = ({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "breadandpizza.firebaseapp.com",
    databaseURL: "https://breadandpizza.firebaseio.com",
    projectId: "breadandpizza",
    storageBucket: "breadandpizza.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGESENDERID ,
    appId: process.env.REACT_APP_APPID
    
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
            <div  className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</div>
          </div>
        }

      </div>
    );
  }
}

export default SignInScreen;