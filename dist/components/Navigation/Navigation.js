"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const useAuth_1 = require("hooks/useAuth");
const Box_1 = require("components/Box/Box");
const SC = __importStar(require("./Navigation.styled"));
const Navigation = () => {
    const { isLogined } = (0, useAuth_1.useAuth)();
    return (<Box_1.Box as="nav">
      <Box_1.Box as="ul" display="inline-flex" gridGap={5}>
        <SC.Item>
          <SC.Link to="/" end>
            Home
          </SC.Link>
        </SC.Item>
        {isLogined && (<SC.Item>
            <SC.Link to="/contacts">Contacts</SC.Link>
          </SC.Item>)}
      </Box_1.Box>
    </Box_1.Box>);
};
exports.Navigation = Navigation;
//# sourceMappingURL=Navigation.js.map