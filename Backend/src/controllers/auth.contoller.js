import user from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import express from 'express';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  const { email, fullName, password, profilePicture } = req.body;
  try {
   if(password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
const User = await user.findOne({ email }); 
    if (User) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt =await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
  const newUser = new user({
    email,
    fullName,
    password : hashedPassword,  })
 
  if (newUser){

    generateToken(newUser);
    const savedUser = await newUser.save();
    return res.status(201).json({
      _id: savedUser._id,
      email: savedUser.email,
      fullName: savedUser.fullName,
      profilePicture: savedUser.profilePicture,
      token: generateToken(savedUser),
    });

  }else {
    return res.status(500).json({ message: "Error creating user" });  }

  }
    
    catch (error) {
      console.error("error in controller signup:", error);
      return res.status(500).json({ message: "Internal server error" });
    
  }
}

export const login = async (req, res) => {
  (req, res) => {
  res.send("login route");}
}

export const logout= async (req, res) => {
  (req, res) => {
  res.send("login route");}
}
