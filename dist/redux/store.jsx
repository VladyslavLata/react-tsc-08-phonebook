"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_persist_1 = require("redux-persist");
const contactsSlice_1 = require("./contacts/contactsSlice");
const authSlice_1 = require("./auth/authSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        auth: authSlice_1.authPersistReducer,
        contacts: contactsSlice_1.contactsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
        },
    }),
});
exports.persistor = (0, redux_persist_1.persistStore)(exports.store);
//# sourceMappingURL=store.jsx.map