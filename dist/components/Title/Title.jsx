"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const Box_1 = require("components/Box/Box");
const Title = ({ children }) => {
    return (<Box_1.Box as="h2" mb={5} textAlign="center">
      {children}
    </Box_1.Box>);
};
exports.Title = Title;
//# sourceMappingURL=Title.jsx.map