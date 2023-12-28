import {auth, provider} from "../../config/firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom"

export const Auth = () =>{
    const navigate = useNavigate();

    const signInWithGoogle = async () =>{
      const result =  await signInWithPopup(auth, provider);
      const authInfo = {
        userID: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        isAuth: true,
      }
      localStorage.setItem("auth", JSON.stringify(authInfo))
      navigate("/expense-tracker")
    }

    return <div className="login-page"> 
    <p> Sign in with Google acccount</p>
    <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign with Google</button>
    </div>
}