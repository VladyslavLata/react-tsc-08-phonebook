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
exports.App = void 0;
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const SharedLayout_1 = require("./SharedLayout/SharedLayout");
const operations_1 = require("redux/auth/operations");
const utils_1 = require("utils");
const useAuth_1 = require("hooks/useAuth");
const Home_1 = require("pages/Home");
const ContactsPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/Contacts'))));
const LoginPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/Login'))));
const RegisterPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/Register'))));
const App = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { isRefreshing } = (0, useAuth_1.useAuth)();
    (0, react_1.useEffect)(() => {
        dispatch((0, operations_1.refreshUser)());
    }, [dispatch]);
    return isRefreshing ? (<b>Loading...</b>) : (<react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<SharedLayout_1.SharedLayout />}>
        <react_router_dom_1.Route index element={<Home_1.Home />}/>
        <react_router_dom_1.Route path="contacts" element={<utils_1.PrivateRoute redirectTo="/login" component={<ContactsPage />}/>}/>
        <react_router_dom_1.Route path="login" element={<utils_1.RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>}/>
        <react_router_dom_1.Route path="register" element={<utils_1.RestrictedRoute redirectTo="/contacts" component={<RegisterPage />}/>}/>
      </react_router_dom_1.Route>
    </react_router_dom_1.Routes>);
};
exports.App = App;
//# sourceMappingURL=App.jsx.map