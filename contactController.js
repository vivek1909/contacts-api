// import contact model
Contact = require("./contactModel");

// handle index actions
exports.index = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully.",
      data: contacts
    });
  });
};
