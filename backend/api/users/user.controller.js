require('dotenv').config();
const { getUserByUserEmail, create,createLogin, getUsers, getUserById, updateUser, deleteUser } = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    login: (req, res) => {

        const body = req.body;
        getUserByUserEmail(body.email, (err, results) =>{
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Unable to get data.'
                });
            }
            if(!results){
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password'
                });
            }
            const result = compareSync(body.password, results.password);
            if(results){
                results.password = undefined;
                const jsontoken = sign({result: results}, process.env.TOKEN_KEY, {
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    success: true,
                    message: 'login successfull',
                    token: jsontoken
                });
            }else{
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password'
                });
            }
        }) 
    },
    createLogin: (req, res) => {
        const body = req.body;

        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createLogin(body, (err, results) =>{
            if(err){

                return res.status(500).json({
                    success: false,
                    message: 'Unable to insert data.'
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },
    createUser: (req, res) => {
        const body = req.body;
        create(body, (err, results) =>{
            if(err){
   
                return res.status(500).json({
                    success: false,
                    message: 'Unable to insert data.'
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },
 
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) =>{
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Unable to get user data.'
                });
            }
            if(!results){
                return res.status(200).json({
                    success: true,
                    message: 'Record not found.'
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        const id = req.params.id;
        getUsers((err, results) =>{
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Unable to get user data.'
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) =>{
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Unable to update data.'
                });
            }
            if(!results){
                return res.status(500).json({
                    success: false,
                    message: 'Failed to update user.'
                });
            }
            return res.status(200).json({
                success: true,
                data: 'Updated successfully.'
            });
        });
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        deleteUser(id, (err, results) =>{
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Unable to delete user data.'
                });
            }
            if(!results){
                return res.status(500).json({
                    success: false,
                    message: 'Failed to delete user.'
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    }, 
}
