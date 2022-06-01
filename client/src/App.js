import { UserProvider } from './contexts/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <div className='App'>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='login' element={<Login />} />
                    </Routes>
                </div>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
