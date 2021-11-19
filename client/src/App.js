// other imports
import HomePage from "./pages/home.Page.js"
import SignUpPage from "./pages/signUp.Page.js";
import UserPage from "./pages/user.Page.js"
import { Route, Switch } from "react-router-dom";
import ResponsiveFontSize from "./components/responsiveFontSize.Component.js"

function App() {

  return (
    <>
      <ResponsiveFontSize>


        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/user" component={UserPage} />

        </Switch>


      </ResponsiveFontSize>
    </>
  );
}

export default App;
