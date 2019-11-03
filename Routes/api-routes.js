let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API is working smoothly.",
    message: "Welcome to RESTHub crafted with love."
  });
});

// import contact controller
var contactController = require("../Controller/contactController");

// contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// export API routes
module.exports = router;
