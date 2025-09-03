// Handles logic for signup/login

import { createUser, findUserByEmail } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req,res) => {
    try{
        console.log("BODY >>>", req.body);
        const {username, email, password} = req.body;
        const hashed = await bcrypt.hash(password, 10);
        await createUser(username, email, hashed);
        res.status(201).json({message: "USer Registered Succesfully"});
    }catch(err) {
        res.status(500).json({error: err.message});
    }
};

export const loginUser = async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await findUserByEmail(email);
        if(!user) return res.status(401).json({error: "User not Found"});

        const match = await bcrypt.compare(password, user.password);

        if(!match) return res.status(401).json({error: "Invalid Credentials"});

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: "3h"});
        res.json({message: "Login Succesfull", token});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};