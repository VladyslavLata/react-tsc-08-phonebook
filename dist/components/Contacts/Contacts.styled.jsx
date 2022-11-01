"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactCard = exports.ContactsList = exports.Number = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Number = styled_components_1.default.p `
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;
exports.ContactsList = styled_components_1.default.ul `
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin: 30px auto 0;
  max-width: 500px;
  max-height: 70vh;
  overflow: auto;
  border: ${p => p.theme.borders.m};
  border-color: ${p => p.theme.colors.bgSecondary};
  border-radius: ${p => p.theme.radii.md};
`;
exports.ContactCard = styled_components_1.default.li `
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.m};
  border-color: inherit;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.index % 2 === 0 ? p.theme.colors.bgPrimary : p.theme.colors.bgSecondary};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  &:hover,
  :focus {
    border: ${p => p.theme.borders.m};
    border-color: ${p => p.theme.colors.accent};
  }
`;
//# sourceMappingURL=Contacts.styled.jsx.map