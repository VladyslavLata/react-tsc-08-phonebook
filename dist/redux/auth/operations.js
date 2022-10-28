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
exports.refreshUser = exports.logout = exports.login = exports.register = void 0;
const axios_1 = __importDefault(require("axios"));
const toolkit_1 = require("@reduxjs/toolkit");
axios_1.default.defaults.baseURL = 'https://connections-api.herokuapp.com';
const addAuthHeader = token => {
    axios_1.default.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios_1.default.defaults.headers.common.Authorization = '';
};
exports.register = (0, toolkit_1.createAsyncThunk)('auth/register', (credentials, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('/users/signup', credentials);
        addAuthHeader(response.data.token);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.login = (0, toolkit_1.createAsyncThunk)('auth/login', (credentials, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('/users/login', credentials);
        addAuthHeader(response.data.token);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.logout = (0, toolkit_1.createAsyncThunk)('auth/logout', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield axios_1.default.post('/users/logout');
        clearAuthHeader();
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}));
exports.refreshUser = (0, toolkit_1.createAsyncThunk)('auth/refresh', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
        addAuthHeader(persistToken);
        const response = yield axios_1.default.get('/users/current');
        return response.data;
    }
    catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
}));
//# sourceMappingURL=operations.js.map