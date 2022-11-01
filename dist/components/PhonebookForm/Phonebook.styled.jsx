"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorText = exports.ErrorWrap = exports.LabelName = exports.Input = exports.Label = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const formik_1 = require("formik");
exports.Label = styled_components_1.default.label `
  position: relative;
  display: block;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
exports.Input = (0, styled_components_1.default)(formik_1.Field) `
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[3]}px;
  width: 320px;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.m};
  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => p.theme.colors.bgSecondary};

  &:focus-within {
    border-color: ${p => p.theme.colors.accent};
  }
`;
exports.LabelName = styled_components_1.default.p `
  margin-bottom: ${p => p.theme.space[2]}px;
`;
exports.ErrorWrap = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: 10px;
`;
exports.ErrorText = (0, styled_components_1.default)(formik_1.ErrorMessage) `
  position: absolute;
  top: 0;
  left: 0;
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.xs};
`;
//# sourceMappingURL=Phonebook.styled.jsx.map