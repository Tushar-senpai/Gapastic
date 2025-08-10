import user from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
// import express from 'express';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {

  const { email, fullName, password, profilePicture } = req.body;
  try {
if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });}
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
    password : hashedPassword, 
    profilePicture: profilePicture || '',
  }); 
 
  if (newUser){

    generateToken(newUser._id,res);
    const savedUser = await newUser.save();
    return res.status(201).json({
      _id: savedUser._id,
      email: savedUser.email,
      fullName: savedUser.fullName,
      profilePicture: savedUser.profilePicture,
      token: generateToken(savedUser._id),
    });

  }else {
    return res.status(500).json({ message: "Error creating user" });  }

  }
    
    catch (error) {

  // Log the error for debugging
  console.error("Error in signup:", error.message);
  console.error(error.stack);
  return res.status(500).json({ message: error.message });


// console.error("error in controller signup:", error);
    // return res.status(500).json({ message: "Internal server error" });
    
  }
}

export const login = async (req, res) => {
  try {
    const { email , password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const User = await user.findOne({ email });
    if (!User) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, User.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email or password" });
    }   
    generateToken(User._id, res);
    return res.status(200).json({ 
      _id: User._id,
      email: User.email,
      fullName: User.fullName,
      profilePicture: User.profilePicture,
      // token: generateToken(User._id),
    });
    
  } catch (error) {
    console.error("Error in login:", error.message);
    console.error(error.stack);
    return res.status(500).json({ message: error.message });
    
  }
}

export const logout= async (req, res) => {
  try {
    res.clearCookie('jwt'); // Clear the cookie
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout:", error.message);
    console.error(error.stack);
    return res.status(500).json({ message: error.message });
  }
}


export const updateProfile = async (req, res) => {

  try {

    
    
  } catch (error) {
    
  }
}