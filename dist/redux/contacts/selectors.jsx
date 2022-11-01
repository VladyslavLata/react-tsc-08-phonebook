"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectVisibleContacts = exports.selectErrorMessage = exports.selectLoading = exports.selectFilterName = exports.selectContacts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const selectContacts = (state) => state.contacts.items;
exports.selectContacts = selectContacts;
const selectFilterName = (state) => state.contacts.filter;
exports.selectFilterName = selectFilterName;
const selectLoading = (state) => state.contacts.isLoading;
exports.selectLoading = selectLoading;
const selectErrorMessage = (state) => state.contacts.error;
exports.selectErrorMessage = selectErrorMessage;
exports.selectVisibleContacts = (0, toolkit_1.createSelector)([exports.selectContacts, exports.selectFilterName], (contacts, filterName) => {
    const filterNameNormalized = filterName.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNameNormalized));
});
//# sourceMappingURL=selectors.jsx.map