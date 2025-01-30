"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173/",
    credentials: true,
}));
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/v1", routes_1.default);
app.use(globalErrorHandler_1.default);
app.all("*", (req, res) => {
    res.status(404).send("Route not found");
});
exports.default = app;
