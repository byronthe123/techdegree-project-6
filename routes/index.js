const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(res.locals.projects);
    return res.render('index', {projects: res.locals.projects});
});

router.get('/about', (req, res, next) => {
    return res.render('about');
});

router.get('/project/:id', (req, res) => {
    const {id} = req.params;
    const project = res.locals.projects.filter(project => parseInt(project.id) === parseInt(id))[0];
    console.log(id);
    console.log(res.locals.projects);
    console.log(project);
    return res.render('project', {project});
});

module.exports = router;