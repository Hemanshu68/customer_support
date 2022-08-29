import Home from "./pages/Home"
import AllPage from "./pages/AllPage";
import AuthPage from "./pages/AuthPage";
import NavBar from "./pages/navBar";
import SubmitTicket from "./pages/SubmitTicket";
import ViewTicket from "./pages/ViewTicket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Docs from "./pages/Docs";
import { createContext } from "react";
import ViewTicketForm from "./pages/ViewTicketForm";

function App() {
    return (

        <Router>
            <div className="App">

                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<AuthPage />} />
                    <Route path="docs" element={<Docs />} />
                    <Route path="register-complain" element={<SubmitTicket />} />
                    <Route path="all" element={<AllPage />} />
                    <Route path="ticket/:id" element={<ViewTicket />} />
                    <Route path="ticket" element={<ViewTicketForm />} />
                    <Route path="*" element={<>Error 404</>} />
                </Routes>


            </div>
        </Router>

    );
}

export default App;
