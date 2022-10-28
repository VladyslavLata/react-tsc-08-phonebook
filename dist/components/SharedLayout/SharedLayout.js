"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedLayout = void 0;
const Box_1 = require("components/Box/Box");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const AppBar_1 = require("components/AppBar/AppBar");
const SharedLayout_styled_1 = require("./SharedLayout.styled");
const SharedLayout = () => {
    return (<SharedLayout_styled_1.Container>
      <AppBar_1.AppBar />
      <Box_1.Box as="main">
        <react_1.Suspense fallback={<div>Loading...</div>}>
          <react_router_dom_1.Outlet />
        </react_1.Suspense>
      </Box_1.Box>
    </SharedLayout_styled_1.Container>);
};
exports.SharedLayout = SharedLayout;
//# sourceMappingURL=SharedLayout.js.map