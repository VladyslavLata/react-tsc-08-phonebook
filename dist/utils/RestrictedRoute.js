"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictedRoute = void 0;
const react_router_dom_1 = require("react-router-dom");
const useAuth_1 = require("hooks/useAuth");
const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogined } = (0, useAuth_1.useAuth)();
    return isLogined ? <react_router_dom_1.Navigate to={redirectTo}/> : Component;
};
exports.RestrictedRoute = RestrictedRoute;
//# sourceMappingURL=RestrictedRoute.js.map