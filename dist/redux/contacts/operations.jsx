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
exports.deleteContact = exports.addNewContact = exports.fetchContacts = void 0;
const axios_1 = __importDefault(require("axios"));
const toolkit_1 = require("@reduxjs/toolkit");
exports.fetchContacts = (0, toolkit_1.createAsyncThunk)('contacts/fetchAll', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get('/contacts');
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue('Unknown error!');
    }
}));
exports.addNewContact = (0, toolkit_1.createAsyncThunk)('contacts/addContact', (contact, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.post('/contacts', contact);
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue('Unknown error!');
    }
}));
exports.deleteContact = (0, toolkit_1.createAsyncThunk)('contacts/deleteContact', (contactId, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield axios_1.default.delete(`/contacts/${contactId}`);
        return contactId;
    }
    catch (error) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue('Unknown error!');
    }
}));
//# sourceMappingURL=operations.jsx.map