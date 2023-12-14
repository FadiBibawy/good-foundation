(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 8159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const progressBarConfig = ()=>({
        barColors: {
            0: "#2563eb"
        },
        shadowBlur: 5
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (progressBarConfig);


/***/ }),

/***/ 5841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ swr)
});

;// CONCATENATED MODULE: ./src/lib/client/fetcher.js
const fetcher = async (url)=>{
    const response = await fetch(url);
    return response.json();
};
/* harmony default export */ const client_fetcher = (fetcher);

;// CONCATENATED MODULE: ./src/config/swr/index.js

const handleOnError = (error)=>{
    throw new Error(`Error: ${error}`);
};
const swrConfig = ()=>({
        fetcher: client_fetcher,
        onError: handleOnError,
        refreshInterval: 1000
    });
/* harmony default export */ const swr = (swrConfig);


/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7521);
/* harmony import */ var react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5941);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7987);
/* harmony import */ var _config_progress_bar_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8159);
/* harmony import */ var _config_swr_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5841);
/* harmony import */ var _providers_workspace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8464);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_7__, i18next__WEBPACK_IMPORTED_MODULE_8__, react_i18next__WEBPACK_IMPORTED_MODULE_9__]);
([swr__WEBPACK_IMPORTED_MODULE_7__, i18next__WEBPACK_IMPORTED_MODULE_8__, react_i18next__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














let rawdata = __webpack_require__(49);
let langCode = "en";
let langObject = {};
langObject[langCode] = {};
langObject[langCode].translation = rawdata;
i18next__WEBPACK_IMPORTED_MODULE_8__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_9__.initReactI18next).init({
    resources: langObject,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});
const App = ({ Component , pageProps  })=>{
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const swrOptions = (0,_config_swr_index__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeStart", ()=>setProgress(true));
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeComplete", ()=>setProgress(false));
    react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_6___default().config((0,_config_progress_bar_index__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) {
            react_ga__WEBPACK_IMPORTED_MODULE_5___default().initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            react_ga__WEBPACK_IMPORTED_MODULE_5___default().pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const use = async ()=>{
            (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9281))).default;
        };
        use();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {
        session: pageProps.session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_7__.SWRConfig, {
            value: swrOptions,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
                attribute: "class",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_providers_workspace__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        progress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ useWorkspace)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    setWorkspace: ()=>{},
    workspace: null
};
const WorkspaceContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
const useWorkspace = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WorkspaceContext);
const WorkspaceProvider = ({ children  })=>{
    const [workspace, setWorkspaceState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const setWorkspace = (workspace)=>{
        setWorkspaceState(workspace);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WorkspaceContext.Provider, {
        value: {
            setWorkspace,
            workspace
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkspaceProvider);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3082:
/***/ ((module) => {

"use strict";
module.exports = require("react-ga");

/***/ }),

/***/ 7521:
/***/ ((module) => {

"use strict";
module.exports = require("react-topbar-progress-indicator");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 9281:
/***/ ((module) => {

"use strict";
module.exports = import("tw-elements");;

/***/ }),

/***/ 49:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"common.action.addmore":"Add more","common.label.invite":"Invite","common.label.guides":"Guides","common.label.pricing":"Pricing","common.label.blog":"Blog","common.label.workspace":"Workspace","common.label.home":"Home","common.label.email":"Email","common.label.role":"Role","common.label.integrations":"Integrations","settings.workspace.advanced":"Advanced Workspace Settings","settings.workspace.manage.label":"Manage your workspace settings","settings.workspace.delete":"Delete Workspace","settings.workspace.delete.message":"The workspace will be permanently deleted, including its contents and domains. This action is irreversible and can not be undone.","setting.workspace.delete.warning.message":"This action is not reversible. Please be certain.","settings.workspace.delete.contact.message":"Please contact your team creator for the deletion of your workspace.","settings.workspace.delete.data.warning":"Your workspace will be deleted, along with all of its contents.","settings.workspace.delete.final.message":"This action is not reversible. Please be certain.","settings.workspace.information":"Workspace Information","settings.general.workspace.description":"Manage your workspace details and information","settings.domain.configuration":"Domain Configuration","settings.team.management":"Team Management","settings.team.members":"Team Members","settings.team.pending.invites":"View team members and pending invites","settings.team.manage.members":"Manage your team under your workspace and invite team members","settings.team.invite.link":"Invite Link","settings.team.invite.link.description":"Allow other people to join your team through the link below","settings.workspace.name.description":"Used to identify your Workspace on the Dashboard","settings.workspace.slug":"Workspace Slug","settings.workspace.slug.description":"Used to identify your Workspace on the Dashboard","settings.workspace.slug.validation.message":"Please use 16 characters at maximum. Hyphenated alphanumeric characters only.","settings.workspace.id":"Workspace ID","settings.workspace.id.description":"Used when interacting with APIs","settings.advanced":"Advanced","common.label.about":"About","common.label.showcase":"Showcase","common.label.community":"Community","common.label.privacy":"Privacy","common.label.terms":"Terms","settings.domain.subdomain.management":"Subdomain Management","settings.domain.subdomain.management.description":"Manage your subdomain","settings.domain.subdomain.title":"Subdomain","settings.domain.subdomain.description":"Your subdomain depends on your workspace slug","settings.domain.domain.configuration":"Domain Configuration","settings.domain.domain.configuration.description":"Manage your subdomain and domain names","settings.domain.add.label":"Add Your Domain","settings.domain.add.description":"This domain is assigned to your current workspace","settings.domain.empty.message":"Once you\'ve added your domain on Nextacular, that domain will show up here","common.label.gotodashboard":"Go to Dashboard","common.label.save":"Save","common.label.dashboard":"Dashboard","common.label.settings":"Settings","common.label.dark.mode":"Dark Mode","common.label.light.mode":"Light Mode","common.label.logout":"Logout","common.label.account":"Account","common.label.billing":"Billing","common.label.landingpage":"Landing Page","login.label":"Sign in with your email","workspace.action.button.label":"Create Workspace","login.description":"We\'ll send a magic link to your inbox to confirm your email address and sign you in.","login.withemail.label":"Send the Magic Link","workspace.action.create.title":"Create a Workspace","workspace.action.create.description.lineOne":"Create a workspace to keep your team\'s content in one place.","workspace.action.create.description.lineTwo":"You\'ll be able to invite everyone later!","workspace.action.name.label":"Workspace Name","workspace.suggesion.label":"Name your workspace. Keep it simple.","login.message.sendinglink":"Sending the link...","login.message.checking.session":"Checking session...","login.message.magiclink":"Send the Magic Link","workspace.message.notfound":"No workspaces found","workspace.action.label.select":"Select a workspace...","workspace.message.createworkspace":"Start creating a workspace now","workspace.dashboard.header.title":"Nextacular Dashboard","workspace.dashboard.header.description":"Start building SaaS platforms in a day","workspace.dashboard.header.invitations.title":"Workspace Invitations","workspace.dashboard.header.invitations.description":"Listed here are the invitations received by your account","workspace.team.invitations.empty.message":"You haven\'t received any invitations to a workspace yet.","settings.header.title":"Account Settings","settings.header.description":"Manage your profile, preferences, and account settings","settings.profile.name":"Your Name","settings.profile.description":"Please enter your full name, or a display name you are comfortable with","settings.profile.email.label":"Email Address","settings.profile.email.description":"Please enter the email address you want to use to log in with Nextacular","settings.profile.email.message":"We will email you to verify the change","settings.profile.personal.account.id":"Personal Account ID","settings.profile.personal.account.message":"Used when interacting with APIs","settings.account.deactive.title":"Danger Zone","settings.account.deactive.description":"Permanently remove your Personal Account and all of its contents from Nextacular platform","settings.account.deactive.message":"This action is not reversible, so please continue with caution","settings.account.action.deactive.label":"Deactivate Personal Account","setting.account.action.deactivate.message":"Your account will be deleted, along with all of its Workspace contents.","settings.profile.name.validation.message":"Please use 32 characters at maximum"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8375));
module.exports = __webpack_exports__;

})();