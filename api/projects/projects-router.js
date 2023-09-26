// Write your "projects" router here!
const express = require('express');

const { validateProject, validateProjectId } = require('./projects-middleware');
const Projects = require('./projects-model');

const router = express.Router();



router.get('/', (req, res, next) => {

})
router.get('/:id', (req, res) => {

})
router.post('/', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.get('/:id/actions', (req, res) => {

})





