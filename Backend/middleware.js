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
    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({});
    }
  } catch (err) {
    return res.status(403).json({});
  }
};

module.exports = {
  authMiddleware,
};
