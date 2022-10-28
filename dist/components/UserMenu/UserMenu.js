"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMenu = void 0;
const useAuth_1 = require("hooks/useAuth");
const react_redux_1 = require("react-redux");
const operations_1 = require("redux/auth/operations");
const Button_1 = require("components/Button/Button");
const Box_1 = require("components/Box/Box");
const SC = __importStar(require("./UserMenu.styled"));
const UserMenu = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user } = (0, useAuth_1.useAuth)();
    const userLogout = () => dispatch((0, operations_1.logout)());
    return (<Box_1.Box display="flex">
      <p>
        Welcom,
        <SC.UserIcon /> {user === null || user === void 0 ? void 0 : user.name}
      </p>
      <Button_1.Button margin="0 0 0 16px" type="button" onClick={userLogout}>
        Logout
      </Button_1.Button>
    </Box_1.Box>);
};
exports.UserMenu = UserMenu;
//# sourceMappingURL=UserMenu.js.map