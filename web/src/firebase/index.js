import firebase from 'firebase/app'
import firebaseConfig from './config'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)

export const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
        const response = await firebase.auth().signInWithPopup(provider)
        const token = await response.user.getIdToken()

        return {
            authenticated: true,
            token
        }
    } catch {
        return {
            authenticated: false
        }
    }
}

export const emailLogin = async (email, password) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        const token = await response.user.getIdToken()
        return {
            authenticated: true,
            token,
            email: response.user.email,
            name: response.user.displayName,
            avatar: response.user.photoURL
        }
    } catch {
        return {
            authenticated: false
        }
    }
}

export const emailRegister = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        return {
            registered: true
        }
    } catch {
        return {
            registered: false
        }
    }
}

export default firebase