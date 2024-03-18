import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

const createCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  //check if user  have been exist
  //If user is not exist then create new user
  //Return a user object to calling the client
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);

    await newUser.save();
    return res.status(201).json(newUser.toObject()).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error create user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save();
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ messase: "error updating user" });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
};
