import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Pdf from "./pages/Pdf";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
// import Users from "./pages/Users";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/admin-users" element={<Register/>}/>


        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>

        <Route path="/experience" element={<ProtectedRoute><Experience/></ProtectedRoute>}/>
        <Route path="/skills" element={<ProtectedRoute><Skills/></ProtectedRoute>}/>
        <Route path="/projects" element={<ProtectedRoute><Projects/></ProtectedRoute>}/>
        <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
        <Route path="/pdf" element={<ProtectedRoute><Pdf/></ProtectedRoute>}/>
        <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>


        {/* <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/> */}

      </Routes>

    </BrowserRouter>

  )

}

export default App