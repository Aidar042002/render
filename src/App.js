import MainPage from  './components/MainPage';
import {Route,  BrowserRouter as Router, Routes} from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import AccountPage from "./components/AccountPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<SignInPage/>}/>
           <Route path="/register" element={<SignUpPage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
