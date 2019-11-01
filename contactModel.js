var mongoose = require("mongoose");

// setup schema
var contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  create_data: {
    type: Date,
    default: Date.now
  }
});

// export contact model
var Contact = (module.exports = mongoose.model("contact", contactSchema));

module.exports.get = (callback, limit) => {
  Contact.find(callback).limit(limit);
};
