import Signup from "./components/signup";
import {Container} from "@mantine/core";
import AuthProvider from "./Context/AuthContext";
function App() {
 //const apikey = process.env.REACT_APP_firebase_apiKey;
  return (

    <div className="App">
      <AuthProvider>
      <Container size="xs" mt={50}>
     {/* apikey */} 
     
      <Signup/>
      </Container>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
