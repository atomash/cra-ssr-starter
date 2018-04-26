import express from 'express';
import Controller from './controllers';

const router = express.Router();

router.get('/user', Controller.fetchUser);


export default router;