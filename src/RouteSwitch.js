import { Route, HashRouter, Routes } from 'react-router-dom';
import App from './App';
import Shop from './routes/Shop';

const RouteSwitch = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/home" /*element={<App />} */ />
                <Route path="/log-in" /* element={<LogIn />} */ />
            </Routes>
        </HashRouter>
    );
};

export default RouteSwitch;
