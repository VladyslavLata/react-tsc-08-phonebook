"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const react_loader_spinner_1 = require("react-loader-spinner");
const Spinner_styled_1 = require("./Spinner.styled");
const Spinner = ({ loading, size }) => {
    return (<Spinner_styled_1.SpinnerWrap>
      <react_loader_spinner_1.RotatingLines strokeColor="#ffffff" strokeWidth="5" animationDuration="0.75" width={size} visible={loading}/>
    </Spinner_styled_1.SpinnerWrap>);
};
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.jsx.map