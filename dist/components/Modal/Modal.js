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
exports.Modal = void 0;
const react_dom_1 = require("react-dom");
const react_1 = require("react");
const index_esm_1 = require("react-icons/ri/index.esm");
const SC = __importStar(require("./Modal.styled"));
const modalEl = document.getElementById('modal');
const Modal = ({ onClose, children }) => {
    (0, react_1.useEffect)(() => {
        const closeModalPressEsc = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', closeModalPressEsc);
        return () => window.removeEventListener('keydown', closeModalPressEsc);
    }, [onClose]);
    const closeModalClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (0, react_dom_1.createPortal)(<SC.Backdrop onClick={closeModalClickBackdrop}>
      <SC.ModalWrap>
        {children}
        <SC.ButtonCloseModal onClick={() => onClose()}>
          <index_esm_1.RiCloseFill />
        </SC.ButtonCloseModal>
      </SC.ModalWrap>
    </SC.Backdrop>, modalEl);
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map