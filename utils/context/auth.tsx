import { 
    createContext, 
    FC, 
    useContext, 
    useEffect, 
    useState 
} from 'react'
import { 
    ActionCodeSettings, 
    createUserWithEmailAndPassword, 
    deleteUser, 
    getAuth, 
    onAuthStateChanged, 
    sendEmailVerification, 
    sendSignInLinkToEmail, 
    signInWithEmailAndPassword, 
    signOut, 
    User 
} from 'firebase/auth'
import firebaseApp from '@utils/firebase/initfirebase'
import { login_actionCodeSettings } from '@utils/firebase/constants'


interface IAuth {
    user: User | null,
    // login: (email: string, password: string) => void,
    // logout: () => void
}


const AuthContext = createContext<IAuth>({
    user: null, 
    // login: (email: string, password: string) => {}, 
    // logout: () => {}
})

const AuthProvider : FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const auth = getAuth(firebaseApp)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log('user=', user)
            if (user) {
                setUser(user)
            }else {
                setUser(null)
            }
        })
        return unsubscribe
    }, [user])
    
    // const register = async (email: string, password: string) => {
    //     try {
    //         let user_credential = await createUserWithEmailAndPassword(auth, 'fenglong37@outlook.com', 'Hsiangyu4233')
    //         let res = await sendEmailVerification(user_credential.user, null)
    //         console.log(res)
    //         return res
    //     } catch (error) {
            
    //     }
    // }
    
    // const login = async (email: string, password: string) => {
    //     try {
    //         const action_code_setting = {
    //             url: process.env.NEXT_PUBLIC_PROJECT_HOST as string,
    //             handleCodeInApp: true
    //         }
    //         let signin_res = await signInWithEmailAndPassword(auth, email, password)
    //         onAuthStateChanged(auth, user => {
    //             if (user) {
    //                 setUser(user)
    //             }else {
    //                 setUser(null)
    //             }
    //         })
    //         console.log("signin_res=", signin_res)
    //         return signin_res
    //     } catch (error) {
    
    //     }
    // }
    
    // const logout = async () => {
    //     try {
    //         let signout_res = await signOut(auth)
    //         console.log('signout_res=', signout_res)
    //     } catch (error) {
            
    //     }
    // }
    
    
    // const delUser = async (user: User) => {
    //     try {
    //         let del_res = await deleteUser(user)
    //         console.log('del_res=', del_res)
    //     } catch (error) {
            
    //     }
    // }
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }