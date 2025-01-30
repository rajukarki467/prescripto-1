import express from 'express';
import { bookAppointment, cancelAppointment, getProfile, listAppointments, loginUser, registerUser, updatedProfile } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';

const userRouter = express.Router();

//register route
userRouter.post('/register' , registerUser);

userRouter.post('/login' ,loginUser);

userRouter.get('/get-profile',authUser,getProfile);

userRouter.post('/update-profile',upload.single('image'),authUser,updatedProfile);

userRouter.post('/book-appointment',authUser,bookAppointment);


userRouter.get('/appointments',authUser,listAppointments);

userRouter.post('/cancel-appointment',authUser,cancelAppointment);





export default userRouter;