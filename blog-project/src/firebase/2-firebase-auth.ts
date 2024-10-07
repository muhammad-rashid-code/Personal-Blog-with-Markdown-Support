import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./1-firebase-config";

// 1 Sign up
type ServiceSignUpType = { email: string; password: string };
export function ServiceSignUp(cred: ServiceSignUpType) {
  createUserWithEmailAndPassword(auth, cred.email, cred.password)
    .then((userCredential) => {
      const user = userCredential.user;
      const { email, uid, emailVerified } = userCredential.user;
      console.log("email=>", email, "uid=>", uid, user, "Inside ServiceSignUp");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        "errorCode=>",
        errorCode,
        "errorMessage=>",
        errorMessage,
        "Inside ServiceSignUp"
      );
    });
}

// 2 Sign in
type ServiceSignInType = { email: string; password: string };
export function ServiceSignIn(cred: ServiceSignInType) {
  signInWithEmailAndPassword(auth, cred.email, cred.password)
    .then((userCredential) => {
      const user = userCredential.user;
      const { email, uid, emailVerified } = userCredential.user;
      console.log("email=>", email, "uid=>", uid, user, "Inside ServiceSignIn");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        "errorCode=>",
        errorCode,
        "errorMessage=>",
        errorMessage,
        "Inside ServiceSignIn"
      );
    });
}
