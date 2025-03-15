const { request, response } = require('express')
const tabela = require('../database/models/UserModel')

const controller={

    postUsers: async(request, response)=>{
        try {

            const v = request.body.varsta
            if (v<1) {
                response.status(406).json('varsta invalida')
            }

            const user = {
                nume: request.body.nume,
                varsta: request.body.varsta,
                salariu: request.body.salariu,
            };

            const inserted = await tabela.create(user)
            response.status(200).json(user)
            
        }
        catch (error) {
            response.status(500).json('server error')
            
        }
    },

    getAllUsers: async (req,res) => {
        try {
            const users = await tabela.findAll();
            if (users != null) {
               res.status(200).json(users); 
            }
            else {
                res.status(404).json('No users')
            }
        } 
        catch (error) {
            res.status(500).json('server error')
        }
    },

    getOneUser: async (req,res) => {
        try {
            const user = await tabela.findByPk(req.params.id)
            if (user==null) {
                res.status(404).json('No user')
            } else {
                res.status(200).json(user)
            }
        } 
        catch (error) {
            res.status(500).json('server error')
        }
        
    }
}

module.exports = controller;