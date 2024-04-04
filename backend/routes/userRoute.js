import express from "express";
import {
  addDoctor,
  addNewAdmin,
  getAllDoctor,
  getUserDetails,
  loginPatient,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middleware/auth.js";

const router = express.Router();

// message public route
router.post("/signup", patientRegister);
router.post("/login", loginPatient);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/doctors", getAllDoctor);
router.get("/admin/userdetails", isAdminAuthenticated, getUserDetails); // for admin
router.get("/patient/userdetails", isPatientAuthenticated, getUserDetails); // for patient
// logout
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin); // Admin
router.get("/patient/logout", isPatientAuthenticated, logoutPatient); // Patient
// add new doc
router.post("/doctor/addnew",isAdminAuthenticated,addDoctor)

export default router;
