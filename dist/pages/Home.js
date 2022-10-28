"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const Box_1 = require("components/Box/Box");
const Section_1 = require("components/Section/Section");
const phonebook_webp_1 = __importDefault(require("../img/phonebook.webp"));
const Home = () => {
    return (<Section_1.Section title="Welcome to Phonebook">
      <Box_1.Box>
        <Box_1.Box as="img" mx="auto" src={phonebook_webp_1.default} alt="phonebook"/>
      </Box_1.Box>
    </Section_1.Section>);
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map