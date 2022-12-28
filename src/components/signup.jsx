import { Card,Button, TextInput, PasswordInput, Text } from "@mantine/core";
//import { updateCurrentUser } from "firebase/auth";
import { useRef } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";

const Signup = ()=> {
    const emailref = useRef("");
    const passwordref = useRef("");
    const conpasswordref = useRef("");
     const {signUp,currentUser} =useAuthContext();
    const submit = ()=>{
        signUp(emailref.current.value,passwordref.current.value);
        
    }
   // console.log(currentUser)
  //  if(currentUser.email == undefined){
  //      console.log("hello");
  //  }
   // console.log(auth.currentUser);
  // else{
   // console.log(currentUser.email);
  // }
  
 return(
    <>
    <Text ta="center" fw="600" fs="40px" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>React FireBase based Authentication </Text>
   
    <Card withBorder shadow="sm" radius="md" p="lg" mt="md">
   <TextInput ref={emailref} withAsterisk label="Email"/>
   <PasswordInput ref={passwordref} withAsterisk label="Password" /> 
   <PasswordInput ref={conpasswordref} withAsterisk label="Confirm Password" /> 
   <Button onClick={submit} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}  mt="md">Sign Up </Button> 
   <Text ta="center" fw="600" pt="10">Already have an account ? Login </Text> 
    
   
   

    </Card>  
    <Text ta="center" fw="600" pt="10">User Logged In : { currentUser.email} </Text> 
    </>
 )  
}

export default Signup;