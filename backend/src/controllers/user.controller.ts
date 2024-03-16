import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  //check if user  have been exist
  //If user is not exist then create new user
  //Return a user object to calling the client
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      res.status(200).send();
    }

    const newUser = new User(req.body);

    await newUser.save();
    res.status(201).json(newUser.toObject()).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error create user" });
  }
};
