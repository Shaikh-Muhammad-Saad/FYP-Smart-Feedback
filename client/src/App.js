// other imports
import HomePage from "./pages/homePage.js"
import SignUpPage from "./pages/signUpPage.js";
import { Route, Switch } from "react-router-dom";
import ResponsiveFontSize from "./components/responsiveFontSize.js"

function App() {

  return (
    <>
      <ResponsiveFontSize>


        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignUpPage} />

        </Switch>


      </ResponsiveFontSize>
    </>
  );
}

export default App;
