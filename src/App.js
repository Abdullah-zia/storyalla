import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import SignIn from "./components/signin/SignIn";
import Home from "./components/home/Home";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
