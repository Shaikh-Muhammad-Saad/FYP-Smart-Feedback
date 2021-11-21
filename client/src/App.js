// other imports
import HomePage from "./userPages/home.Page.js"
import SignUpPage from "./userPages/signUp.Page.js";
import UserPage from "./userPages/user.Page.js"
import FeedBackPage from "./userPages/feedback.Page.js"
import PreviousFeedback from "./userPages/previousFeedback.Page.js"
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
          <Route path="/feedback" component={FeedBackPage} />
          <Route path="/previous-feedbacks" component={PreviousFeedback} />

        </Switch>


      </ResponsiveFontSize>
    </>
  );
}

export default App;
