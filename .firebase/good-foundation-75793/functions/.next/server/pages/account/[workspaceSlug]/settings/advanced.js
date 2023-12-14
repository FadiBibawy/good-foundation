"use strict";
(() => {
var exports = {};
exports.id = 2149;
exports.ids = [2149];
exports.modules = {

/***/ 6219:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5280);
/* harmony import */ var _components_Meta_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6400);
/* harmony import */ var _components_Modal_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5102);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9398);
/* harmony import */ var _components_Content_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9769);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2902);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3167);
/* harmony import */ var _providers_workspace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8464);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _prisma_services_workspace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5758);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _components_Modal_index__WEBPACK_IMPORTED_MODULE_6__, _layouts_index__WEBPACK_IMPORTED_MODULE_9__, react_i18next__WEBPACK_IMPORTED_MODULE_13__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _components_Modal_index__WEBPACK_IMPORTED_MODULE_6__, _layouts_index__WEBPACK_IMPORTED_MODULE_9__, react_i18next__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Advanced = ({ isCreator  })=>{
    const { setWorkspace , workspace  } = (0,_providers_workspace__WEBPACK_IMPORTED_MODULE_10__/* .useWorkspace */ .c)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isSubmitting, setSubmittingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showModal, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [verifyWorkspace, setVerifyWorkspace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const verifiedWorkspace = verifyWorkspace === workspace?.slug;
    const handleVerifyWorkspaceChange = (event)=>setVerifyWorkspace(event.target.value);
    const deleteWorkspace = ()=>{
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}`, {
            method: "DELETE"
        }).then((response)=>{
            setSubmittingState(false);
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(response.errors[error].msg));
            } else {
                toggleModal();
                setWorkspace(null);
                router.replace("/account");
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Workspace has been deleted!");
            }
        });
    };
    const toggleModal = ()=>{
        setVerifyWorkspace("");
        setModalState(!showModal);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_index__WEBPACK_IMPORTED_MODULE_9__/* .AccountLayout */ .p0, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: `Nextacular - ${workspace?.name} | Advanced Settings`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Title */ .Z.Title, {
                title: t("settings.workspace.advanced"),
                subtitle: t("settings.workspace.manage.label")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Container */ .Z.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    danger: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Body */ .Z.Body, {
                            title: t("settings.workspace.delete"),
                            subtitle: t("settings.workspace.delete.message")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Footer */ .Z.Footer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    className: [
                                        isCreator && "text-red-600"
                                    ],
                                    children: isCreator ? t("setting.workspace.delete.warning.message") : t("settings.workspace.delete.contact.message")
                                }),
                                isCreator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "text-white bg-red-600 hover:bg-red-500",
                                    disabled: isSubmitting,
                                    onClick: toggleModal,
                                    children: isSubmitting ? "Deleting" : "Delete"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            show: showModal,
                            title: "Deactivate Workspace",
                            toggle: toggleModal,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: t("settings.workspace.delete.data.warning")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Data associated with this workspace can't be accessed by team members."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "px-3 py-2 text-red-600 border border-red-600 rounded",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Warning:"
                                        }),
                                        " ",
                                        t("settings.workspace.delete.final.message")
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                "Enter ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: workspace?.slug
                                                }),
                                                " to continue:"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "px-3 py-2 border rounded",
                                            disabled: isSubmitting,
                                            onChange: handleVerifyWorkspaceChange,
                                            type: "email",
                                            value: verifyWorkspace
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col items-stretch",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: "text-white bg-red-600 hover:bg-red-500",
                                        disabled: !verifiedWorkspace || isSubmitting,
                                        onClick: deleteWorkspace,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: t("settings.workspace.delete")
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.getSession)(context);
    let isCreator = false;
    if (session) {
        const workspace = await (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_12__/* .getWorkspace */ .oq)(session.user.userId, session.user.email, context.params.workspaceSlug);
        isCreator = (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_12__/* .isWorkspaceCreator */ .yq)(session.user.userId, workspace.creatorId);
    }
    return {
        props: {
            isCreator
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Advanced);

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("slugify");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,2902,9398,5758], () => (__webpack_exec__(6219)));
module.exports = __webpack_exports__;

})();