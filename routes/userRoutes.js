const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

// regex tip: ONLY match '/' (Nice touch)
//            OR 'index' with or without '.html'
// router.get("^/$|/index(.html)?", (req, res) => {
//   console.log(`Evo me u root-u`);
//   res.sendFile(path.join(__dirname, "..", "views", "index.html"));
// });

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
