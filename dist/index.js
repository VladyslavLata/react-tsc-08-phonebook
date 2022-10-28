"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_redux_1 = require("react-redux");
const react_2 = require("redux-persist/integration/react");
const theme_1 = require("./constants/theme");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const App_1 = require("components/App");
require("./index.css");
const store_1 = require("./redux/store");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <styled_components_1.ThemeProvider theme={theme_1.theme}>
      <react_redux_1.Provider store={store_1.store}>
        <react_2.PersistGate loading={null} persistor={store_1.persistor}>
          <react_router_dom_1.BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App_1.App />
          </react_router_dom_1.BrowserRouter>
        </react_2.PersistGate>
      </react_redux_1.Provider>
    </styled_components_1.ThemeProvider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.js.map