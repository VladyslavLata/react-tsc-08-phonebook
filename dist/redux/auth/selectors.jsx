"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsRefreshing = exports.selectIsLoggedIn = exports.selectToken = exports.selectUser = void 0;
const selectUser = (state) => state.auth.user;
exports.selectUser = selectUser;
const selectToken = (state) => state.auth.token;
exports.selectToken = selectToken;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
exports.selectIsLoggedIn = selectIsLoggedIn;
const selectIsRefreshing = (state) => state.auth.isRefreshing;
exports.selectIsRefreshing = selectIsRefreshing;
//# sourceMappingURL=selectors.jsx.map