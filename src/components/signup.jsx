import { Card, Button, TextInput, PasswordInput, Text } from "@mantine/core";
//import { updateCurrentUser } from "firebase/auth";
import { useReducer, useRef } from "react";
import { useAuthContext } from "../Context/AuthContext";
import {Link} from "react-router-dom";
import { auth } from "../firebase";

const INITIAL_STATE = {
  loading: false,
  error: ""
};

const actions = {
  loading : "loading",
  error: "error",
  success: "success",
};
const reducer = (state, action) => {
  switch (action.type) {

    case actions.loading:
      return { loading: true, error: "" };

    case actions.error:
      return { loading: false, error: action.payload };

      case actions.success:
      return { loading: true, error: "" };
      default: return state;
  }
};
const Signup = () => {
  const emailref = useRef("");
  const passwordref = useRef("");
  const conpasswordref = useRef("");
  const { signUp, currentUser } = useAuthContext();

  const [state,dispatch]=useReducer(reducer, INITIAL_STATE);

  const submit = async () => {
    try {
      dispatch({type:actions.loading});
      await signUp(emailref.current.value, passwordref.current.value);
      dispatch({type:actions.success});
    }
    catch (e) {
      dispatch({type:actions.error,payload : e})
      console.log(e);

    }


  }

// console.log(auth.currentUser);
 //  else{
 //  console.log(currentUser.email);
 //  }

  return (
    <>
      <Text ta="center" fw="600" fs="40px" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>React FireBase based Authentication </Text>
       { currentUser && currentUser.email ? <Text ta="center" fw="600" pt="10">User Logged In : {currentUser?.email } </Text> :
      <Card withBorder shadow="sm" radius="md" p="lg" mt="md">
        <TextInput ref={emailref} withAsterisk label="Email" />
        <PasswordInput ref={passwordref} withAsterisk label="Password" />
        <PasswordInput ref={conpasswordref} withAsterisk label="Confirm Password" />
        <Button onClick={submit} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} mt="md"
        loading={state.loading}
        
        >Sign Up </Button>
        <Text ta="center" fw="600" pt="10">Already have an account ? <Link to="/login"> Login</Link> </Text>




      </Card> 
      }
      {currentUser ? console.log("yes"):console.log("no")}
      <Text ta="center" fw="600" pt="10" color="red"> {state.error} </Text>
    </>
  )
}

export default Signup;