"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthController = exports.checkUserNameController = exports.getAllUsersController = exports.logoutController = exports.registerController = exports.loginController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("../models/user.model"));
const auth_service_1 = require("../services/auth.service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const JWTUtils_1 = require("../utils/JWTUtils");
exports.loginController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userName, password } = req.body;
    const DBuser = yield user_model_1.default.findOne({ email, userName });
    if (!DBuser) {
        next({
            message: "User not found",
            statusCode: 404,
        });
    }
    else {
        const isPasswordValid = yield bcryptjs_1.default.compare(password, DBuser.password);
        if (!isPasswordValid) {
            next({
                message: "Invalid password",
                statusCode: 401,
            });
        }
        else {
            const { user, token } = yield (0, auth_service_1.loginUser)(DBuser);
            res.cookie("access_token", token.accessToken, {
                httpOnly: true,
                secure: true,
            });
            res.cookie("refresh_token", token.refreshToken, {
                httpOnly: true,
                secure: true,
            });
            res.status(200).json({
                status: "success",
                user,
            });
        }
    }
}));
exports.registerController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, auth_service_1.registerUser)(req.body);
    const token = result.token;
    res.cookie("access_token", token.accessToken, {
        httpOnly: true,
        secure: true,
    });
    res.cookie("refresh_token", token.refreshToken, {
        httpOnly: true,
        secure: true,
    });
    res.status(200).json({
        success: true,
        data: result.user,
    });
}));
exports.logoutController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
}));
exports.getAllUsersController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({}, { password: 0, __v: 0, refreshToken: 0, createdAt: 0 });
    res.status(200).json({
        success: true,
        data: users,
    });
}));
exports.checkUserNameController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName } = req.body;
    const user = yield user_model_1.default.findOne({ userName });
    if (user) {
        res.status(200).json({
            success: true,
            message: "Username Already Taken",
        });
    }
    else {
        res.status(200).json({
            success: true,
            message: "Username Available",
        });
    }
}));
exports.checkAuthController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.access_token;
    if (!token) {
        res.status(401).json({ message: "Not authenticated" });
        return;
    }
    const user = (0, JWTUtils_1.verifyToken)(token);
    try {
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (_a) {
        res.status(401).json({ message: "Invalid token" });
    }
}));
