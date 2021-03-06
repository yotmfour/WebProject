//Imported controllers
const { 
    createUser, 
    getUserByUserId, 
    getUsers, 
    updateUser, 
    deleteUser,
    login
} = require("./user.controller");
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation");

//Define all routers for user
router.post('/', checkToken, createUser);
router.get("/", getUsers);
router.get("/:customer_id", checkToken, getUserByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/login", login);


module.exports = router;