"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Button = styled_components_1.default.button `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  background-color: ${p => {
    if (!p.index) {
        return p.theme.colors.bgSecondary;
    }
    return p.index % 2 === 0
        ? p.theme.colors.bgSecondary
        : p.theme.colors.bgPrimary;
}};
  cursor: pointer;

  &:active {
    box-shadow: none;
  }

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;
//# sourceMappingURL=ButtonDelete.styled.jsx.map