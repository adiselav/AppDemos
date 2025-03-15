const express = require('express');

const UserRouter = express.Router();

const userController = require('../controllers/UserController')

UserRouter.post('/insertUser',userController.postUsers)
UserRouter.get('/getAllUsers',userController.getAllUsers)
UserRouter.get('/getOneUser/:id',userController.getOneUser)

module.exports=UserRouter