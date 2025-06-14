const userModels=require("../models/userModels");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");


 
const userRegister = async function (req, res) {
  try {
    let { name, emp_id, email, phone, department, role, password } = req.body;

    if (!name || !emp_id || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check for existing user with same emp_id or email
    const existingUser = await userModels.findOne({
      $or: [{ emp_id }, { email }, { emp_id }],
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ msg: "Employee ID, Email, emp_id already exists" });
    }

    // Hash the password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = new userModels({
      name,
      password,
      emp_id,
      email,
      phone,
      department,
      role,
    //   password: hashedPassword,
    });

    await newuser.save();

    res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error: " + error.message });
  }
};

const login = async function (req, res) {
  try {
    const { name, emp_id, email, password } = req.body;

    if (!password) {
      return res.status(400).json({ msg: "Password is required" });
    }

    // Combine all identity fields into a single search term
    const identity = name || emp_id || email;

    if (!identity) {
      return res
        .status(400)
        .json({ msg: "Enter any of username, emp_id, or email" });
    }

    // Search user where ANY of the fields match the identity value
    const user = await userModels.findOne({
      $or: [{ name: identity }, { emp_id: identity }, { email: identity }],
    });

    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ msg: "Invalid credentials" });
    // }

    const token = jwt.sign({ userId: user._id }, process.env.PASSKEY);

    return res.status(200).json({token, userId: user._id });
  } catch (error) {
    res.status(500).json({ msg: "Server error: " + error.message });
  }
};

const getalluser = async function (req, res) {
  let user = await userModels.find();
  res.status(200).json({ data: user });
};

module.exports = {
    userRegister,
    login,
    getalluser
}
