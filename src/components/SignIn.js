import React from 'react';

import firebase from 'firebase'
import {auth} from '../firebase'
import './css.css'

function signInWithGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

function SignIn() {
    
    return (
        <div className="flex h-screen justify-center bg-gray-900">
            <button className="flex text-2xl h-9 font-semibold self-center justify-around place-self-center  w-6/12 text-white rounded bg-gray-800 hover:bg-gray-700 transform hover:scale-99 motion-reduce:transform-none ... md:text-4xl md:h-12 lg:w-4/12 lg:text-4xl  "  onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn
