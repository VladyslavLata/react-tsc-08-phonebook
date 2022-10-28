"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerWrap = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SpinnerWrap = styled_components_1.default.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
`;
//# sourceMappingURL=Spinner.styled.js.map