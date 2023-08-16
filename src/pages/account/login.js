import { signInWithPopup, signOut} from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
import { db, auth, provider } from "../../firebase";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const checkForFirstTime = (reff) => {
    let a = "";
    
    onValue(reff, (snapshot) => {
      const data = snapshot.val();
      a = data;
    });

    return a;
  };

  const loginClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      // The signed-in user info.
      //const user = result.user;
      const uuid = result.user.uid;
      const reff = ref(db, 'user/' + uuid);

      if (checkForFirstTime(reff) == null) {
        console.log("creating a new account");
        set(reff, {
          ingredients: [],
          recipies: []
        });
      } else {
        console.log("account exists");
      }

      navigate("/reci-v/search")
      

    }).catch((error) => {
      // Handle Errors here.
      alert(error);
      //const errorCode = error.code;
      //const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  };

  const logoutClick = () => {
    signOut(auth).then(() => {
      alert("logged out!");
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();
  };

  let logFunc = loginClick;
  let logButton = "login"

  if (auth.currentUser){
    logFunc = logoutClick;
    logButton = "logout"
  }
  
  return (
    <div>
      <button onClick={logFunc} className="colored-btn login-button">{logButton}</button>
    </div>
  );
};

export default Login;
