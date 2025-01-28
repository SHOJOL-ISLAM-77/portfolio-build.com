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
exports.registerUser = exports.loginUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = __importDefault(require("../models/user.model"));
const JWTUtils_1 = require("../utils/JWTUtils");
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = yield (0, JWTUtils_1.createAccessToken)(user);
    const refreshToken = yield (0, JWTUtils_1.createRefreshToken)(user);
    yield user_model_1.default.findByIdAndUpdate(user._id, { refreshToken });
    const resUser = {
        _id: user._id,
        name: user.fullName,
        userName: user.userName,
        email: user.email,
        profileUrl: user.profileUrl,
        portfolioId: user.portfolioId,
        role: user.role,
        personalUrl: user.personalUrl,
    };
    return {
        user: resUser,
        token: { accessToken, refreshToken },
    };
});
exports.loginUser = loginUser;
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield createUser(userData);
    if (!result) {
        throw new Error("Failed to create user");
    }
    const accessToken = yield (0, JWTUtils_1.createAccessToken)(result);
    const refreshToken = yield (0, JWTUtils_1.createRefreshToken)(result);
    yield user_model_1.default.findByIdAndUpdate(result._id, { refreshToken });
    const user = {
        _id: result._id,
        name: result.fullName,
        userName: result.userName,
        email: result.email,
        profileUrl: result.profileUrl,
        portfolioId: result.portfolioId,
        role: result.role,
        personalUrl: result.personalUrl,
    };
    return {
        user,
        token: {
            refreshToken,
            accessToken,
        },
    };
});
exports.registerUser = registerUser;
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, fullName, email, password, profileUrl } = userData;
    if (!email || !password || !fullName || !profileUrl || !userName) {
        throw new Error("All fields are required");
    }
    const existingUser = yield user_model_1.default.findOne({ email, userName });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const passwordHash = yield bcryptjs_1.default.hash(password, Number(config_1.default.salt));
    const result = yield user_model_1.default.create({
        password: passwordHash,
        userName,
        fullName,
        email,
        profileUrl,
    });
    return result;
});
