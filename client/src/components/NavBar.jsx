import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
// import LikeContext from '../contexts/LikeContext';
import UserContext from '../contexts/UserContext';

const styles = {
    display: 'flex',
    justifyContent: 'space-around',
};

const NavBar = () => {
    const { user } = useContext(UserContext);

    return (
        <Navbar bg='dark'>
            <div style={styles}>
                <NavLink to='/' style={styles}>
                    Home
                </NavLink>
                <NavLink to='login' style={styles}>
                    Login
                </NavLink>
            </div>
            <hr />
        </Navbar>
    );
};
export default NavBar;
