import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Home = () => {
    //Getting the user value from the UserContext
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Project 3</h1>
        </div>
    );
};
export default Home;
