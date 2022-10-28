"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Header = styled_components_1.default.header `
  position: fixed;
  top: 0;
  left: 32px;
  right: 32px;
  display: flex;
  z-index: 1;
  justify-content: space-between;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.m};
  border-color: ${p => p.theme.colors.bgSecondary};
  background-color: ${p => p.theme.colors.bgPrimary};
`;
//# sourceMappingURL=AppBar.styled.js.map