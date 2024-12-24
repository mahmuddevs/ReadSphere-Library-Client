import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../config/firebase.config"
import useAxios from "../hook/useAxios"


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosBase = useAxios()


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateDetails = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const email = currentUser?.email
            if (currentUser?.email) {
                axiosBase.post('/auth/jwt', { email: email }, { withCredentials: true })
                    .then(res => console.log(res.data))
            } else {
                axiosBase.post('/auth/logout', {}, { withCredentials: true })
                    .then(res => console.log('logout', res.data))
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        loginUser,
        loginWithGoogle,
        registerUser,
        updateDetails,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider