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
exports.createRefreshToken = exports.createAccessToken = exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../config/index"));
const signToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, index_1.default.access_token_secret, { expiresIn: "10s" });
};
exports.signToken = signToken;
const verifyToken = (token) => {
    const secret = index_1.default.access_token_secret;
    try {
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (_a) {
        throw new Error("Invalid or expired token");
    }
};
exports.verifyToken = verifyToken;
const createAccessToken = (result) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, exports.signToken)({
        email: result.email,
        userName: result.userName,
        fullName: result.userName,
        profileUrl: result.profileUrl,
        id: result._id,
        portfolioId: result.portfolioId,
        role: result.role,
    });
});
exports.createAccessToken = createAccessToken;
const createRefreshToken = (result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield jsonwebtoken_1.default.sign({
            email: result.email,
            userName: result.userName,
            fullName: result.userName,
            profileUrl: result.profileUrl,
            id: result._id,
            portfolioId: result.portfolioId,
            role: result.role,
        }, index_1.default.refresh_token_secret, { expiresIn: "7d" });
    }
    catch (_a) {
        throw new Error("Failed to create refresh token");
    }
});
exports.createRefreshToken = createRefreshToken;
