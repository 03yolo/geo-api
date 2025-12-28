const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  const hashedPassword = await bcrypt.hash("Hello123!", 10);

  await User.deleteMany();
  await User.create({
    email: "test@example.com",
    password: hashedPassword
  });

  console.log("User seeded");
  process.exit();
}

seed();
