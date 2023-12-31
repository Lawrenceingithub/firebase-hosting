import {auth, provider} from "../../config/firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate, Navigate} from "react-router-dom"
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import './style.css';

export const Auth = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("auth")) || {}; // 解析存储的用户信息，如果为 null 则默认为一个空对象

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/home");
  };

  if (userInfo.isAuth) {
    return <Navigate to="/home" />;
  } else {
    return (
      <div className="login-page">
        <p> Sign in with Google acccount</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign with Google
        </button>
      </div>
    );
  }
};