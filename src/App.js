import Signup  from "./components/signup";
import Login from "./components/login";
import {Container} from "@mantine/core";
import AuthProvider from "./Context/AuthContext";
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
 //const apikey = process.env.REACT_APP_firebase_apiKey;
  return (

    <div className="App">
      <AuthProvider>
      <Container size="xs" mt={50}>
     {/* apikey */} 
     <BrowserRouter>
      <Routes>

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
     </BrowserRouter>
      
      </Container>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
