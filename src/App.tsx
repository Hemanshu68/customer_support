import AllPage from './pages/AllPage';
import AuthPage from './pages/authPage';
import Home from './pages/Home';

import NavBar from './pages/navBar';
import SubmitTicket from './pages/submitTicket';
import ViewTicket from './pages/viewTicket';

function App() {
    return (
        <div className="App">
            <NavBar />
            {/* <AuthPage /> */}
            {/* <SubmitTicket /> */}
            {/* <AllPage /> */}
            {/* <Home /> */}
            <ViewTicket />
        </div>
    );
}

export default App;
