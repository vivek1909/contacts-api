let router = require("express").Router();

// set default api response
router.get("/", (req, res) => {
  res.json({
    status: "API is working smoothly.",
    message: "Welcome to RESTHub crafted with love."
  });
});

// export API routes
module.exports = router;
