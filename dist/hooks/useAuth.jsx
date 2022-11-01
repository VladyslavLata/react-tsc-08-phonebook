"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const react_redux_1 = require("react-redux");
const selectors_1 = require("redux/auth/selectors");
const useAuth = () => {
    const user = (0, react_redux_1.useSelector)(selectors_1.selectUser);
    const token = (0, react_redux_1.useSelector)(selectors_1.selectToken);
    const isLogined = (0, react_redux_1.useSelector)(selectors_1.selectIsLoggedIn);
    const isRefreshing = (0, react_redux_1.useSelector)(selectors_1.selectIsRefreshing);
    return { user, token, isLogined, isRefreshing };
};
exports.useAuth = useAuth;
//# sourceMappingURL=useAuth.jsx.map