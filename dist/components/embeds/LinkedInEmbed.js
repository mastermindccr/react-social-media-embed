"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const EmbedPlaceholder_1 = require("../placeholders/EmbedPlaceholder");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
const LinkedInEmbed = (_a) => {
    var _b, _c, _d, _e;
    var { postUrl, url, width, height = 500, embedPlaceholder, placeholderDisabled } = _a, divProps = __rest(_a, ["postUrl", "url", "width", "height", "embedPlaceholder", "placeholderDisabled"]);
    const uuidRef = React.useRef((0, uuid_1.generateUUID)());
    const [ready, setReady] = React.useState(false);
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (React.createElement(EmbedPlaceholder_1.EmbedPlaceholder, { url: postUrl !== null && postUrl !== void 0 ? postUrl : url, style: {
            width: ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.width) ? '100%' : width !== null && width !== void 0 ? width : '100%',
            height: ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.height) ? '100%' : height !== null && height !== void 0 ? height : 400,
            borderRadius: (_e = (_d = divProps.style) === null || _d === void 0 ? void 0 : _d.borderRadius) !== null && _e !== void 0 ? _e : '8px',
            borderColor: 'rgba(0, 0, 0, 0.15)',
            minWidth: 300,
            maxWidth: 550,
        } }));
    return (React.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-linkedin-embed', divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined }, divProps.style) }),
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement("iframe", { className: (0, classnames_1.default)('linkedin-post', !ready && 'rsme-d-none'), src: url, width: "100%", height: !ready ? 0 : height, frameBorder: "0", onLoad: () => setReady(true) }),
        true && !placeholderDisabled && placeholder));
};
exports.LinkedInEmbed = LinkedInEmbed;
