"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputWrap = exports.Input = exports.FilterHeader = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FilterHeader = styled_components_1.default.p `
  margin-bottom: ${p => p.theme.space[2]}px;
`;
exports.Input = styled_components_1.default.input `
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[3]}px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.m};
  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => p.theme.colors.bgSecondary};

  &:focus-within {
    border-color: ${p => p.theme.colors.accent};
  }
`;
exports.InputWrap = styled_components_1.default.div `
  margin: 0 auto;
  max-width: 400px;
`;
//# sourceMappingURL=Filter.styled.js.map