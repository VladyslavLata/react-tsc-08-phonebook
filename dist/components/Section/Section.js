"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const Box_1 = require("components/Box/Box");
const prop_types_1 = __importDefault(require("prop-types"));
const Sectio_styled_1 = require("./Sectio.styled");
const Section = ({ title, children }) => (<Box_1.Box as="section" px={4} pb={4} pt="80px" mx="auto" position="relative">
    {title && <Sectio_styled_1.SectionTitle>{title}</Sectio_styled_1.SectionTitle>}
    {children}
  </Box_1.Box>);
exports.Section = Section;
exports.Section.propTypes = {
    title: prop_types_1.default.string.isRequired,
};
//# sourceMappingURL=Section.js.map