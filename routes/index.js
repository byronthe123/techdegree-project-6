const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index', {projects: res.locals.projects});
});

router.get('/about', (req, res, next) => {
    return res.render('about');
});

router.get('/project/:id', (req, res, next) => {
    const {id} = req.params;
    const project = res.locals.projects.filter(project => parseInt(project.id) === parseInt(id))[0];
    return res.render('project', {project});
});

module.exports = router;