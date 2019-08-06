const routes = require('express').Router();
const multer = require('multer'),
  multerConfig = require('../config/multer');
const ScrappingController = require('../src/app/controller/ScrappingController');

var APIRoutes = function(passport) {
  /*
      API Routes Definition for user
  */
  // routes.post('/authenticate', AuthController.authenticate);
  // routes.post('/request-new-password', AuthController.requestNewPassword);
  // routes.post('/reset-password', AuthController.resetPassword);
  // routes.post('/register', AuthController.register);


  // routes.post('/cephalograms/demo', multer(multerConfig).single("file"), CephalogramController.demo);
  routes.get('/scrappings', ScrappingController.getChilds);

  //Redirect to home

  routes.get('/', function(req, res) {
    res.status(404).json({ 'message': 'Welcome' });
  });
  routes.get('/*', function(req, res) {
    res.status(404).json({ 'message': 'URI is not valid.' });
  });
  routes.post('/*', function(req, res) {
    res.status(404).json({ 'message': 'URI is not valid.' });
  });
  routes.put('/*', function(req, res) {
    res.status(404).json({ 'message': 'URI is not valid.' });
  });
  routes.delete('/*', function(req, res) {
    res.status(404).json({ 'message': 'URI is not valid.' });
  });

  return routes
}




module.exports = APIRoutes;