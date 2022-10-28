"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPersistReducer = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_persist_1 = require("redux-persist");
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const operations_1 = require("./operations");
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [operations_1.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [operations_1.login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [operations_1.logout.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [operations_1.refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [operations_1.refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [operations_1.refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});
const authPersistConfig = {
    key: 'authToken',
    storage: storage_1.default,
    whitelist: ['token'],
};
exports.authPersistReducer = (0, redux_persist_1.persistReducer)(authPersistConfig, exports.authSlice.reducer);
//# sourceMappingURL=authSlice.js.map