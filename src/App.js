import React, { Component } from 'react';
import './App.css';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
        <AmplifyAuthenticator
            hideSignUp={true}
        >
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </AmplifyAuthenticator>
    );
  }
}

export default App;
