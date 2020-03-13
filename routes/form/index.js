const express = require('express');
const forms = express.Router();
const responsesRouter = require('./../response/index');
const { Form } = require('../../models');

forms.get('/', async (req,res) => {
  res.json(await Form.all());
});

forms.get('/:formId', async (req,res) => {
  res.json(await Form.one(req.params.formId));
});

forms.post('/', async (req,res) => {
  const form = req.body.form;

  res.json(await Form.new(form));
});

forms.delete('/:formId', async (req,res) => {
  res.json(await Form.delete(req.params.formId));
});

forms.use('/:formId/responses', (req, res, next) => {
  req.formId = req.params.formId;
  next();
}, responsesRouter);

module.exports = forms;
