"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const JWTUtils_1 = require("../utils/JWTUtils");
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.access_token;
    if (!token) {
        res.status(401).json({
            status: "error",
            errorCode: "UNAUTHORIZED",
            message: "Authentication Token is Missing",
        });
        return;
    }
    try {
        const user = (0, JWTUtils_1.verifyToken)(token);
        req.user = user;
        next();
    }
    catch (_b) {
        res.status(401).json({
            status: "error",
            errorCode: "TOKEN_INVALID",
            message: "Invalid or Expired Authentication Token",
        });
    }
};
exports.authenticate = authenticate;
