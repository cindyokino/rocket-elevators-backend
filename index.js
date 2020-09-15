// const Joi = require('joi');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


/***** CALCULATE NUMBER OF ELEVATORS - RESIDENTIAL BUILDING *****/
app.get('/residential', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let sum = a + b;
    console.log(a + b);
    res.set("Access-Control-Allow-Origin", "*");
    res.send(sum + "");
});

// const courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'},
// ];

// app.get('/api/courses', (req, res) => {
//     res.send(courses);
// });

// app.get('/api/courses/:id', (req, res) => {
//    const course =  courses.find(c => c.id === parseInt(req.params.id));
//    if (!course) res.status(404).send('The course with given ID was not found :(');
//    res.send(course);
// });

// app.post('/api/courses', (req, res) => {
//     const {error} = validateCourse(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//    const course =  courses.find(c => c.id === parseInt(req.params.id));
//    if (!course) return res.status(404).send('The course with given ID was not found :(');
    
//     const {error} = validateCourse(req.body);
//     if (error) return res.status(400).send(result.error.details[0].message);

//     course.name = req.body.name;
//     res.send(course);
// });

// function validateCourse(course) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
    
//     return Joi.validate(course, schema);
// };

// app.delete('/api/courses/:id', (req, res) => {
//     const course =  courses.find(c => c.id === parseInt(req.params.id));
//    if (!course) return res.status(404).send('The course with given ID was not found :(');

//    const index = courses.indexOf(course);
//    courses.splice(index, 1); // go to the index and remove 1 object

//    res.send(course);
// });




// app.get('/api/posts/:id',  (req, res) => {
//     res.send(req.params.id);
// });

// app.get('/api/posts/:year/:month',  (req, res) => {
//     res.send(req.params);
// });

// app.get('/api/posts/:year/:month',  (req, res) => {
//     res.send(req.query);
// });


// PORT - eg.: at the terminal: export/set PORT=5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



