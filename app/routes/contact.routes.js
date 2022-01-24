module.exports = (app) => {
  const contacts = require("../controllers/contact.controller.js");

  const router = require("express").Router();

  // Create a new Contact
  router.post("/", contacts.create);

  // Retrieve all Contacts
  router.get("/", contacts.findAll);

  // Retrieve a single contact with id
  router.get("/:id", contacts.findOne);

  // Update a contact with id
  router.put("/:id", contacts.update);

  // Delete a contact with id
  router.delete("/:id", contacts.delete);

  // delete all contact
  router.delete("/", contacts.deleteAll);

  app.use("/api/contacts", router);
};
