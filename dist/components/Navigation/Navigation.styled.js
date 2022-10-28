"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Link = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.Link = (0, styled_components_1.default)(react_router_dom_1.NavLink) `
  position: relative;
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[2]}px 0;
  transform: scale(0);

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 5px;
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.sm};
    transform: scaleX(0);
    transition: transform 200ms ease-out;
  }

  &.active::after,
  &:hover:not(.active)::after,
  &:active {
    transform: scaleX(1);
  }
`;
exports.Item = styled_components_1.default.li ``;
//# sourceMappingURL=Navigation.styled.js.map