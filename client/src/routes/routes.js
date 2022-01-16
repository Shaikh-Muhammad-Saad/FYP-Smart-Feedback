import { Route, Switch } from "react-router-dom";
import HomePage from "../user/home.Page.js";
import SignUpPage from "../user/signUp.Page.js";
import FeedBackPage from "../user/feedback.Page.js";
import PreviousFeedbackPage from "../user/previousFeedback.Page"
import UserProfilePage from "../user/userProfile.Page.js"
import AdminLoginPage from "../admin/adminLogin.Page.js"
import Footer from "../components/footer.Component"
import AdminFeedbacksPage from "../admin/adminFeedbacks.Page"
import AdminProfilePage from "../admin/adminProfile.Page"
import { useRouteMatch, withRouter } from "react-router-dom";

const AppRoutes = (props) => {


    return (<>
        <Switch>

            {/* User Routes */}
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/user-profile" component={UserProfilePage} />
            <Route path="/feedback" component={FeedBackPage} />
            <Route path="/previous-feedbacks" component={PreviousFeedbackPage} />
            <Route path="/admin-panel" component={AdminLoginPage} />

            {/* Admin routes */}
            <Route path="/admin-profile" component={AdminProfilePage} />
            <Route path="/admin-feedbacks" component={AdminFeedbacksPage} />

        </Switch>
        {/* <Footer /> */}

    </>);
}

export default AppRoutes;