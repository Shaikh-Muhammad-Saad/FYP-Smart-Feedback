import questionsModel from "../../models/questions/questions.Model.js"

// route:  POST api/questions/
// desc:   creating a question.
// access: PROTECTED
const createQuestion = async (req, res, next) => {
    try {
        const question = new questionsModel(req.body);
        await question.save();
        return res.status(201).json({ successMsg: "Question generated!" }); //201 for created

    } catch (err) {
        next(err);
        console.log(err);
    }
};

// route:  GET /api/questions/
// desc:   reading  questions
// access: PROTECTEDD
const readQuestions = async (req, res, next) => {
    try {
        const questions = await questionsModel.find();

        return res.status(200).send(questions); created

    } catch (err) {
        next(err);
        console.log(err);
    }
};


// route:  DELETE /api/questions/:id
// desc:   deleting a question by question id
// access: PROTECTEDD
const deleteQuestion = async (req, res, next) => {
    try {
        const response = await questionsModel.deleteOne({ _id: req.params.id });

        if (response.deletedCount !== 1) {
            return res.status(500).send({ errorMsg: "server error" });
        }

        return res.status(200).json({ successMsg: "Question deleted!" });

    } catch (err) {
        next(err);
        console.log(err);
    }
};


// route:  PATCH /api/questions/:id
// desc:   updating a question by question id
// access: PROTECTEDD
const updateQuestion = async (req, res, next) => {
    try {
        const response = await questionsModel.updateOne({ _id: req.params.id }, {$set:{question: req.body.question}});

        // checking if document is updated in DB
        if (response.modifiedCount !== 1) {
            return res.status(500).json({ errorMsg: "server error" })
        }

        return res.status(200).json({ successMsg: "Question updated!" });

    } catch (err) {
        next(err);
        console.log(err);
    }
};

export {
    createQuestion,
    readQuestions,
    deleteQuestion,
    updateQuestion
}
