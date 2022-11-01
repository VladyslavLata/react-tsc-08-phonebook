"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIcon = void 0;
const index_1 = require("react-icons/bi/index");
const styled_components_1 = __importDefault(require("styled-components"));
exports.UserIcon = (0, styled_components_1.default)(index_1.BiUser) `
  margin-left: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
  width: 24px;
  height: 24px;
`;
//# sourceMappingURL=UserMenu.styled.jsx.map