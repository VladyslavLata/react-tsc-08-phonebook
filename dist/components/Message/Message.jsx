"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Box_1 = require("components/Box/Box");
const Message = ({ message }) => {
    return (<Box_1.Box as="p" p={4} color={'red'}>
      {message}
    </Box_1.Box>);
};
exports.Message = Message;
//# sourceMappingURL=Message.jsx.map