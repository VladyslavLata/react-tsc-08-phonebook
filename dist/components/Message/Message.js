"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const Box_1 = require("components/Box/Box");
const Message = ({ message }) => {
    return (<Box_1.Box as="p" p={4} color={'red'}>
      {message}
    </Box_1.Box>);
};
exports.Message = Message;
exports.Message.propTypes = {
    message: prop_types_1.default.string.isRequired,
};
//# sourceMappingURL=Message.js.map