import { Router } from 'express';
import { authRequired } from '../middleware/auth.middleware.js';
import { getUserController, updateUserController, deleteUserController } from '../controllers/user.controller.js';

const router = Router();

router.get('/:id', authRequired, getUserController);
router.put('/:id', authRequired, updateUserController);
router.delete('/:id', authRequired, deleteUserController);

export default router;
