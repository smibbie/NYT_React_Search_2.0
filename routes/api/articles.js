// Dependencies --------------------------------------
const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Router --------------------------------------------

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

// Exports -------------------------------------------
module.exports = router;
