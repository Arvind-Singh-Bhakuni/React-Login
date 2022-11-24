

import './App.css'

import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Sign-up';
import SignUpOt from './components/SignUp-u2';

import { Route, Routes } from 'react-router-dom';

function App () {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path= "/" element={<Login />} />
            <Route path= "/sign-up" element={<SignUp />} />
            <Route path= "/signUpOt" element={<SignUpOt />} />
        </Routes>
        </>
    ); 
}

export default App;