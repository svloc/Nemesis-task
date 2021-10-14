const { login, createUser, createLogin, getUsers, getUserById, updateUser, deleteUser } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/login", login);
router.post("/register", createLogin);
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;