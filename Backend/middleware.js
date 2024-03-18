const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const app = express();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authrotization;

  if (!authHeader || !authHeader.Startswith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({});
  }
};


module.exports = {
    authMiddleware
}