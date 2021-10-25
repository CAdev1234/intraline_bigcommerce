import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    sendSignInLinkToEmail, 
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    deleteUser,
    User,
    sendPasswordResetEmail,
    confirmPasswordReset,
    fetchSignInMethodsForEmail
} from "@firebase/auth"
import firebaseApp from "./initfirebase"

export const auth = getAuth(firebaseApp)

export const register = async (email: string, password: string) => {
    try {
        let detect_exist = await fetchSignInMethodsForEmail(auth, email)
        console.log("detect_exist=", detect_exist)
        if (detect_exist.length !== 0) {
            
        }
        return
        let user_credential = await createUserWithEmailAndPassword(auth, 'fenglong37@outlook.com', 'Hsiangyu4233')
        let res = await sendEmailVerification(user_credential.user, null)
        console.log(res)
        return res
    } catch (error) {
        
    }
}

export const login = async (email: string, password: string) => {
    try {
        const action_code_setting = {
            url: process.env.NEXT_PUBLIC_PROJECT_HOST as string,
            handleCodeInApp: true
        }
        let signin_res = await signInWithEmailAndPassword(auth, email, password)
        console.log("signin_res=", signin_res)
        // await sendSignInLinkToEmail(auth, email, action_code_setting)
        return signin_res
    } catch (error) {

    }
}

export const logout = async () => {
    try {
        let signout_res = await signOut(auth)
        console.log('signout_res=', signout_res)
    } catch (error) {
        
    }
}


export const delUser = async (user: User) => {
    try {
        let del_res = await deleteUser(user)
        console.log('del_res=', del_res)
    } catch (error) {
        
    }
}

export const resetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email)
        
    } catch (error) {
        
    }
}