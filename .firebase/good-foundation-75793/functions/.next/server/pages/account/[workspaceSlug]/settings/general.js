"use strict";
(() => {
var exports = {};
exports.id = 6083;
exports.ids = [6083];
exports.modules = {

/***/ 1738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var validator_lib_isAlphanumeric__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1275);
/* harmony import */ var validator_lib_isAlphanumeric__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isAlphanumeric__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var validator_lib_isSlug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(557);
/* harmony import */ var validator_lib_isSlug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isSlug__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5280);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9398);
/* harmony import */ var _components_Content_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9769);
/* harmony import */ var _components_Meta_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6400);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2902);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3167);
/* harmony import */ var _providers_workspace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8464);
/* harmony import */ var _prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5758);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _layouts_index__WEBPACK_IMPORTED_MODULE_13__, react_i18next__WEBPACK_IMPORTED_MODULE_16__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _layouts_index__WEBPACK_IMPORTED_MODULE_13__, react_i18next__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const General = ({ isTeamOwner , workspace  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { setWorkspace  } = (0,_providers_workspace__WEBPACK_IMPORTED_MODULE_14__/* .useWorkspace */ .c)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
    const [isSubmitting, setSubmittingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(workspace.name || "");
    const [slug, setSlug] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(workspace.slug || "");
    const validName = name.length > 0 && name.length <= 16;
    const validSlug = slug.length > 0 && slug.length <= 16 && validator_lib_isSlug__WEBPACK_IMPORTED_MODULE_8___default()(slug) && validator_lib_isAlphanumeric__WEBPACK_IMPORTED_MODULE_7___default()(slug, undefined, {
        ignore: "-"
    });
    const changeName = (event)=>{
        event.preventDefault();
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}/name`, {
            body: {
                name
            },
            method: "PUT"
        }).then((response)=>{
            setSubmittingState(false);
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].success("Workspace name successfully updated!");
            }
        });
    };
    const changeSlug = (event)=>{
        event.preventDefault();
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}/slug`, {
            body: {
                slug
            },
            method: "PUT"
        }).then((response)=>{
            setSubmittingState(false);
            const slug = response?.data?.slug;
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].success("Workspace slug successfully updated!");
                router.replace(`/account/${slug}/settings/general`);
            }
        });
    };
    const copyToClipboard = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].success("Copied to clipboard!");
    const handleNameChange = (event)=>setName(event.target.value);
    const handleSlugChange = (event)=>setSlug(event.target.value);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setName(workspace.name);
        setSlug(workspace.slug);
        setWorkspace(workspace);
    }, [
        workspace,
        setWorkspace
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_index__WEBPACK_IMPORTED_MODULE_13__/* .AccountLayout */ .p0, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta_index__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: `Nextacular - ${workspace.name} | Settings`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Title */ .Z.Title, {
                title: t("settings.workspace.information"),
                subtitle: t("settings.general.workspace.description")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Container */ .Z.Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                                title: t("workspace.action.name.label"),
                                subtitle: t("settings.workspace.name.description"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "px-3 py-2 border rounded md:w-1/2",
                                    disabled: isSubmitting || !isTeamOwner,
                                    onChange: handleNameChange,
                                    type: "text",
                                    value: name
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Footer */ .Z.Footer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: "Please use 16 characters at maximum"
                                    }),
                                    isTeamOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        className: "text-white bg-blue-600 hover:bg-blue-500",
                                        disabled: !validName || isSubmitting,
                                        onClick: changeName,
                                        children: "Save"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                                title: t("settings.workspace.slug"),
                                subtitle: t("setting.workspace.slug.description"),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "px-3 py-2 border rounded md:w-1/2",
                                            disabled: isSubmitting || !isTeamOwner,
                                            onChange: handleSlugChange,
                                            type: "text",
                                            value: slug
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: `text-sm ${slug.length > 16 && "text-red-600"}`,
                                            children: [
                                                slug.length,
                                                " / 16"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Footer */ .Z.Footer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: t("settings.workspace.slug.validation.message")
                                    }),
                                    isTeamOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        className: "text-white bg-blue-600 hover:bg-blue-500",
                                        disabled: !validSlug || isSubmitting,
                                        onClick: changeSlug,
                                        children: t("common.label.save")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                            title: t("settings.workspace.slug.validation.message"),
                            subtitle: t("settings.workspace.id.description"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between px-3 py-2 space-x-5 font-mono text-sm border rounded md:w-1/2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "overflow-x-auto",
                                        children: workspace.workspaceCode
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__.CopyToClipboard, {
                                        onCopy: copyToClipboard,
                                        text: workspace.workspaceCode,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.DocumentDuplicateIcon, {
                                            className: "w-5 h-5 cursor-pointer hover:text-blue-600"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)(context);
    let isTeamOwner = false;
    let workspace = null;
    if (session) {
        workspace = await (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__/* .getWorkspace */ .oq)(session.user.userId, session.user.email, context.params.workspaceSlug);
        if (workspace) {
            isTeamOwner = (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__/* .isWorkspaceOwner */ .k1)(session.user.email, workspace);
        }
    }
    return {
        props: {
            isTeamOwner,
            workspace
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2807:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 1275:
/***/ ((module) => {

module.exports = require("validator/lib/isAlphanumeric");

/***/ }),

/***/ 557:
/***/ ((module) => {

module.exports = require("validator/lib/isSlug");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,2902,9398,5758], () => (__webpack_exec__(1738)));
module.exports = __webpack_exports__;

})();