const jwt = require("jsonwebtoken");
const Users = require("../models/users");

/**
 * Generates JWT token
 * @param {string}
 * @returns {string}
 */
exports.genToken = userId => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "2h" });
};

/**
 * Verifies the token
 * @param {object}
 * @param {object}
 * @param {function}
 * @returns {object}
 */
exports.verToken = (req, res, next) => {
  //Note: First character is lower case for some error reasons, authorization.
  let token = req.headers.authorization || "";
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userToken) => {
      if (err) return res.status(401).json({ message: "invalid token" });
      Users.findById(userToken.userId, (err, user) => {
        if (err) return res.json({ user });
        if (!user)
          return res.json({ message: "There's an error. So, user not found" });
        req.user = user;
        next();
      });
    });
  } else res.status(401).json({ message: "unauthorized access" });
};
