const { userServices } = require('../services');
const { responseHelper } = require('../helper');

const getAllPraktikan = async (req, res) => {
    try {

        const user = await userServices.getAllPraktikan();
        if(user instanceof Error) {
            throw new Error(user);
        } 
        res.status(responseHelper.status.success).json(user);
       
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUserByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const user = await userServices.getUserByName(nama);
        res.status(responseHelper.status.success).json(user);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUserByEmailAndTelepon = async (req, res) => {
    try {
        const { email,telepon } = req.params;
        const user = await userServices.getUserByEmailAndTelepon(email,telepon);
        res.status(responseHelper.status.success).json(user);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertNewUser = async (req, res) => {
    try {
        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const result = await userServices.insertNewUser( nama, jenis_kelamin, angkatan, email, telepon, deskripsi );
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deleteUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await userServices.deleteUserByEmail(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUser = async (req, res) => {
    try {
        const { deskripsi,nama } = req.body;
        const result = await userServices.updateUser(deskripsi,nama);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getAllPraktikan,
    getUserByName,
    getUserByEmailAndTelepon,
    updateUser,
    deleteUserByEmail,
    insertNewUser
}