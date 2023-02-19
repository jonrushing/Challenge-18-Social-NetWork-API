const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controller/user-controller");

// creates endpoint at /api/users for GET and POST requests
router.route("/").get(getAllUsers).post(createUser);

// creates endpoint at /api/users/:id for GET, POST, and DELETE for a single user based on an id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// creates endpoint at /api/users/friends/:friendsId to POST, and DELETE for a single friend based on an id
router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend);

module.exports = router;