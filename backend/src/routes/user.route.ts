import express from 'express';
import {
  getUsers,
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from 'src/controllers/user.controller';

const router = express.Router();

//get users
router.get('/', getUsers);
//get single user
router.get('/:id', getUser);
//update user
router.patch('/:id', updateUser);
//delete user
router.delete('/:id', deleteUser);

export default router;
