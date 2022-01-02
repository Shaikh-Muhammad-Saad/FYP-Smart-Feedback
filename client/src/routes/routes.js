import { Route, Switch } from "react-router-dom";
import HomePage from "../user/home.Page.js";
import SignUpPage from "../user/signUp.Page.js";
import FeedBackPage from "../user/feedback.Page.js"; 
import PreviousFeedback from "../user/previousFeedback.Page"
import UserProfilePage from "../user/userProfile.Page.js"
import AdminLoginPage from "../admin/adminLogin.Page.js"
import { useRouteMatch, withRouter } from "react-router-dom";

const AppRoutes = (props) => {

    
    return (<>
        <Switch>

            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/user-profile" component={UserProfilePage} />
            <Route path="/feedback" component={FeedBackPage} />
            <Route path="/previous-feedbacks" component={PreviousFeedback} />
            <Route path="/admin-panel" component={AdminLoginPage} />


        </Switch>
    </>);
}

export default AppRoutes;