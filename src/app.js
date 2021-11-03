const express = require('express');
const app = express();
require("./db/conn");
const port = process.env.PORT || 80;
const student = require("./model/student");
app.use(express.json())
app.post('/student', async (req, res) => {
    try {
        const user = new student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    } catch (e) {
        res.status(404).send(e);
    }

})
app.get('/student', async (req, res) => {
    try {
        const user = await student.find();
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await student.findById({_id:_id});
        if (!studentData) {
            res.status(404).send("Id not present");
        }
        else {
            res.status(200).send(studentData);
        }
    } catch (e) {
        res.status(404).send(e)
    }
})
app.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const update = await student.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        console.log(update)
        res.status(200).send(update);
    } catch (e) {
        res.status(404).send(e);
    }

})
app.delete('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await student.findByIdAndDelete(_id);
        console.log(studentData);
        if (!studentData) {
            res.status(404).send("Id not present");
        }
        else {
            res.status(200).send(studentData);
        }
    } catch (e) {
        res.status(404).send(e)
    }
})
app.listen(port, () => {
    console.log(`this server is running on this ${port}`);
})