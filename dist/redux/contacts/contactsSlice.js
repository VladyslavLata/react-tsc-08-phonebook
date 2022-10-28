"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.contactsReducer = exports.contactsSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const operations_1 = require("./operations");
const operations_2 = require("redux/auth/operations");
const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
exports.contactsSlice = (0, toolkit_1.createSlice)({
    name: 'contacts',
    initialState: { items: [], isLoading: false, error: null, filter: '' },
    reducers: {
        filter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [operations_1.fetchContacts.pending]: handlePending,
        [operations_1.fetchContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.error = null;
        },
        [operations_1.fetchContacts.rejected]: handleRejected,
        [operations_1.addNewContact.pending]: handlePending,
        [operations_1.addNewContact.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.unshift(action.payload);
        },
        [operations_1.addNewContact.rejected]: handleRejected,
        [operations_1.deleteContact.fulfilled]: (state, action) => {
            state.error = null;
            const contactIndex = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(contactIndex, 1);
        },
        [operations_1.deleteContact.rejected]: handleRejected,
        [operations_2.logout.fulfilled](state) {
            state.items = [];
        },
    },
});
exports.contactsReducer = exports.contactsSlice.reducer;
exports.filter = exports.contactsSlice.actions.filter;
//# sourceMappingURL=contactsSlice.js.map