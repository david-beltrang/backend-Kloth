import { User } from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    try {
        await user.update(req.body);

    }catch (error) {
        console.log(error);
    }

    return res.json(user);
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    return res.sendStatus(204); //detele ok
}