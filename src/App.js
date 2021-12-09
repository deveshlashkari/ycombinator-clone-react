import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

//Components Import
import Ask from "./components/Ask";
import Comments from "./components/Comments";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Main from "./components/Main";
import Newest from "./components/Newest";
import Past from "./components/Past";
import Show from "./components/Show";
import Submit from "./components/Submit";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/newest" element={<Newest />}></Route>
            <Route path="/front" element={<Past />}></Route>
            <Route path="/newcomments" element={<Comments />}></Route>
            <Route path="/ask" element={<Ask />}></Route>
            <Route path="/show" element={<Show />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/submit" element={<Submit />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
