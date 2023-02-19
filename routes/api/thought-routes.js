const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// creates endpoint at /api/thoughts for GET and POST requests
router.route("/").get(getAllThoughts).post(addThought);

// creates endpoint at /api/thoughts/:id for GET, PUT, and DELETE for a single thought based on an id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// creates endpoint at /api/thoughts/friends POST a new reaction
router.route("/:thoughtId/reactions").post(addReaction);

// creates endpoint at /api/thoughts/friends/:friendsId to DELETE for a single reaction based on an id
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;