import userModel from "../../models/user/user.Model.js"


// route:  POST /api/user/
// desc:   creating a user
// access: NOT-PROTECTED
const createUser = (req, res, next) => {
    try {
        console.log(req.body)
    } catch (err) {
        next(err);
    }
};


export { createUser };