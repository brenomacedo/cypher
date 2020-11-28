import firebase from 'firebase/app'
import firebaseConfig from './config'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)

export const isAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            return {
                exists: true,
                user
            }
        }

        return {
            exists: false
        }
    })
}

export const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
        const response = await firebase.auth().signInWithPopup(provider)
        const token = await response.user.getIdToken()
        const name = response.user.email.split('@')[0]
        console.log({
            authenticated: true,
            token: token,
            name,
            email: response.user.email,
            avatar: response.user.photoURL
        })

        return {
            authenticated: true,
            token,
            email: response.user.email,
            name,
            avatar: response.user.photoURL
        }
    } catch {
        alert('error')
        return {
            authenticated: false
        }
    }
}

export const emailLogin = async (email, password) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        return {
            authenticated: true,
            token: response.user.getIdToken,
            email: response.user.email,
            name: response.user.displayName,
            avatar: response.user.photoURL
        }
    } catch {
        alert('error')
        return {
            authenticated: false
        }
    }
}