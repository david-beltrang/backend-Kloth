import { User } from '../models/user.js';

// GET /users/:id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // el id llega por la URL
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
