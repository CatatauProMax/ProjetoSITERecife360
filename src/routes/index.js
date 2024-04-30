import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Signin from '../pages/SignIn';
import Signup from '../pages/Signup';
import useAuth from '../hooks/useAuth';


const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Signin />;
}


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<Signin />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp