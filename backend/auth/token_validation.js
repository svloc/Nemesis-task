require("dotenv").config();
const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Invalid token!",
          });
        } else {
          res.locals.jwt =decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Access denied",
      });
    }
  },
};
