import express from "express";
import * as UserController from "../controllers/UserController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";
import * as EventController from "../controllers/EventController.js";
import upload from "../middlewares/FileUploads.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import * as DeleteFileUtility from "../utility/DeleteFileUtility.js";


const router = express.Router();

//users
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);

router.post("/create-event",authMiddleware.default,EventController.EventCreateController);
router.get("/events/:id",EventController.EventDetailsController);
router.get("/events",EventController.AllEventController);

router.post("/events/:id/update",authMiddleware.default,EventController.EventUpdateController);
router.delete("/events/:id/delete",authMiddleware.default,EventController.EventDeleteController);
router.get("/my-event",authMiddleware.default,EventController.MyEventDetailsController);

// file-route
router.post("/file-upload", upload.single("file"), FileUploadController.fileUpload);
router.delete("/delete-file/:filename", DeleteFileUtility.deleteUploadedFile);

export default router;