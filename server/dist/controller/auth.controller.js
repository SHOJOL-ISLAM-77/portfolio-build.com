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
exports.registerController = exports.loginController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_service_1 = require("../services/auth.service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const user_model_1 = __importDefault(require("../models/user.model"));
exports.loginController = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userName, password } = req.body;
    const user = yield user_model_1.default.findOne({ email, userName });
    if (!user) {
        next({
            message: "User not found",
            statusCode: 404,
        });
    }
    else {
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            next({
                message: "Invalid password",
                statusCode: 401,
            });
        }
        else {
            const result = yield (0, auth_service_1.loginUser)(user);
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
                status: "success",
                data: result,
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
