module.exports = (mongoose) => {
  const Contact = mongoose.model(
    "contact",
    mongoose.Schema(
      {
        name: String,
        email: String,
        contact: String,
      },
      { timestamps: true }
    )
  );

  return Contact;
};
