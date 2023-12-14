import express from 'express';
import { PetsitterAuthController } from '../controller/petSitter.auth.controller.js';
import { AuthController } from '../controller/auth.controller.js';

const petsitterAuthController = new PetsitterAuthController();
const authController = new AuthController();
const router = express.Router();

/* 유저 */
router.delete('/users', authController.signOut);

/* 펫시터 */
router.delete('/pet-sitters', petsitterAuthController.signOut);

export default router;
