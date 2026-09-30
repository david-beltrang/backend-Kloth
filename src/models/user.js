import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

// Campos tomados de RegisterState (fullName) y EditProfileState (username, bio, email, location, website)
export const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullName: { type: DataTypes.STRING(100), allowNull: false },
  username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  bio: { type: DataTypes.STRING(300), allowNull: true },
  location: { type: DataTypes.STRING(100), allowNull: true },
  website: { type: DataTypes.STRING, allowNull: true, validate: { isUrl: true } },
  profileImage: { type: DataTypes.STRING, allowNull: true }, // URL, no base64
});
