import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";
import SinglePost from "./pages/singlePost/SinglePost";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Switch>78
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/create">{user ? <Create /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
