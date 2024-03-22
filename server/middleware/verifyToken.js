import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated"));
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is Not Valid"));
    req.user = user;
    next();
  });
};
