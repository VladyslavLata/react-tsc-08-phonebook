"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRoute = void 0;
const react_router_dom_1 = require("react-router-dom");
const useAuth_1 = require("hooks/useAuth");
const PrivateRoute = ({ component: Component, redirectTo = '/', }) => {
    const { isLogined, isRefreshing } = (0, useAuth_1.useAuth)();
    return !isLogined && !isRefreshing ? <react_router_dom_1.Navigate to={redirectTo}/> : Component;
};
exports.PrivateRoute = PrivateRoute;
//# sourceMappingURL=PrivateRoute.jsx.map