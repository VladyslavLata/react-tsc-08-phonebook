"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Button = styled_components_1.default.button `
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${p => p.position[0]};
  right: ${p => p.position[1]};
  width: ${p => p.size};
  height: ${p => p.size};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  z-index: 9999;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.bgSecondary};
  }

  &:active {
    box-shadow: none;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;
//# sourceMappingURL=ButtonIcon.styled.jsx.map