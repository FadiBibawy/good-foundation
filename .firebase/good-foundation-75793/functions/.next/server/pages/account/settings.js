"use strict";
(() => {
var exports = {};
exports.id = 4718;
exports.ids = [4718];
exports.modules = {

/***/ 6033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ }),

/***/ 8651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PR": () => (/* binding */ getUser)
/* harmony export */ });
/* unused harmony exports deactivate, updateEmail, updateName */
/* harmony import */ var _lib_server_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3221);
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6033);



const deactivate = async (id)=>await prisma.user.update({
        data: {
            deletedAt: new Date()
        },
        where: {
            id
        }
    });
const getUser = async (id)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.findUnique */ .Z.user.findUnique({
        select: {
            email: true,
            name: true,
            userCode: true
        },
        where: {
            id
        }
    });
const updateEmail = async (id, email, previousEmail)=>{
    await prisma.user.update({
        data: {
            email,
            emailVerified: null
        },
        where: {
            id
        }
    });
    await sendMail({
        html: html({
            email
        }),
        subject: `[Nextacular] Email address updated`,
        text: text({
            email
        }),
        to: [
            email,
            previousEmail
        ]
    });
};
const updateName = async (id, name)=>await prisma.user.update({
        data: {
            name
        },
        where: {
            id
        }
    });


/***/ }),

/***/ 3221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports emailConfig, sendMail */
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

const emailConfig = {
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
    },
    service: process.env.EMAIL_SERVICE
};
const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport(emailConfig);
const sendMail = async ({ from , html , subject , text , to  })=>{
    const data = {
        from: from ?? process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html
    };
     true ? await transporter.sendMail(data) : 0;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (transporter)));


/***/ }),

/***/ 7131:
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
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5280);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9398);
/* harmony import */ var _components_Content_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9769);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6400);
/* harmony import */ var _components_Modal_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5102);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2902);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3167);
/* harmony import */ var _prisma_services_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8651);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _components_Modal_index__WEBPACK_IMPORTED_MODULE_11__, _layouts_index__WEBPACK_IMPORTED_MODULE_12__, react_i18next__WEBPACK_IMPORTED_MODULE_14__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _components_Modal_index__WEBPACK_IMPORTED_MODULE_11__, _layouts_index__WEBPACK_IMPORTED_MODULE_12__, react_i18next__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Settings = ({ user  })=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.email || "");
    const [isSubmitting, setSubmittingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.name || "");
    const [showModal, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.userCode);
    const [verifyEmail, setVerifyEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const validName = name.length > 0 && name.length <= 32;
    const validEmail = validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6___default()(email);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)();
    const verifiedEmail = verifyEmail === email;
    const copyToClipboard = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Copied to clipboard!");
    const changeName = (event)=>{
        event.preventDefault();
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)("/api/user/name", {
            body: {
                name
            },
            method: "PUT"
        }).then((response)=>{
            setSubmittingState(false);
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Name successfully updated!");
            }
        });
    };
    const changeEmail = (event)=>{
        event.preventDefault();
        const result = confirm("Are you sure you want to update your email address?");
        if (result) {
            setSubmittingState(true);
            (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)("/api/user/email", {
                body: {
                    email
                },
                method: "PUT"
            }).then((response)=>{
                setSubmittingState(false);
                if (response.errors) {
                    Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
                } else {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Email successfully updated and signing you out!");
                    setTimeout(()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)({
                            callbackUrl: "/auth/login"
                        }), 2000);
                }
            });
        }
    };
    const deactivateAccount = (event)=>{
        event.preventDefault();
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)("/api/user", {
            method: "DELETE"
        }).then((response)=>{
            setSubmittingState(false);
            toggleModal();
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Account has been deactivated!");
            }
        });
    };
    const handleEmailChange = (event)=>setEmail(event.target.value);
    const handleNameChange = (event)=>setName(event.target.value);
    const handleVerifyEmailChange = (event)=>setVerifyEmail(event.target.value);
    const toggleModal = ()=>{
        setVerifyEmail("");
        setModalState(!showModal);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_index__WEBPACK_IMPORTED_MODULE_12__/* .AccountLayout */ .p0, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: "Nextacular - Account Settings"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Title */ .Z.Title, {
                title: t("settings.header.title"),
                subtitle: t("settings.header.description")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Content_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Container */ .Z.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Body */ .Z.Body, {
                                    title: t("settings.profile.name"),
                                    subtitle: "Please enter your full name, or a display name you are comfortable with",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "px-3 py-2 border rounded md:w-1/2",
                                        disabled: isSubmitting,
                                        onChange: handleNameChange,
                                        type: "text",
                                        value: name
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Footer */ .Z.Footer, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            children: t("settings.profile.name.validation.message")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            className: "text-white bg-blue-600 hover:bg-blue-500",
                                            disabled: !validName || isSubmitting,
                                            onClick: changeName,
                                            children: t("common.label.save")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Body */ .Z.Body, {
                                    title: t("settings.profile.email.label"),
                                    subtitle: t("settings.profile.email.description"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "px-3 py-2 border rounded md:w-1/2",
                                        disabled: isSubmitting,
                                        onChange: handleEmailChange,
                                        type: "email",
                                        value: email
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Footer */ .Z.Footer, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            children: t("settings.profile.email.message")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            className: "text-white bg-blue-600 hover:bg-blue-500",
                                            disabled: !validEmail || isSubmitting,
                                            onClick: changeEmail,
                                            children: t("common.label.save")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Body */ .Z.Body, {
                            title: t("settings.profile.personal.account.id"),
                            subtitle: t("settings.profile.personal.account.message"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between px-3 py-2 space-x-5 font-mono text-sm border rounded md:w-1/2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "overflow-x-auto",
                                        children: userCode
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {
                                        onCopy: copyToClipboard,
                                        text: userCode,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.DocumentDuplicateIcon, {
                                            className: "w-5 h-5 cursor-pointer hover:text-blue-600"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        danger: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Body */ .Z.Body, {
                                title: t("settings.account.deactive.title"),
                                subtitle: t("settings.account.deactive.description")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Footer */ .Z.Footer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: t("settings.account.deactive.message")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        className: "text-white bg-red-600 hover:bg-red-500",
                                        onClick: toggleModal,
                                        children: t("settings.account.action.deactive.label")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                show: showModal,
                                title: "Deactivate Personal Account",
                                toggle: toggleModal,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: t("settings.account.action.deactive.label")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "px-3 py-2 text-red-600 border border-red-600 rounded",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Warning:"
                                            }),
                                            " ",
                                            t("settings.account.deactive.message")
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
                                                        children: user.email
                                                    }),
                                                    " to continue:"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "px-3 py-2 border rounded",
                                                disabled: isSubmitting,
                                                onChange: handleVerifyEmailChange,
                                                type: "email",
                                                value: verifyEmail
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-col items-stretch",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            className: "text-white bg-red-600 hover:bg-red-500",
                                            disabled: !verifiedEmail || isSubmitting,
                                            onClick: deactivateAccount,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t("settings.account.action.deactive.label")
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);
    const { email , name , userCode  } = await (0,_prisma_services_user__WEBPACK_IMPORTED_MODULE_13__/* .getUser */ .PR)(session.user?.userId);
    return {
        props: {
            user: {
                email,
                name,
                userCode
            }
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

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

/***/ 7379:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,2902,9398], () => (__webpack_exec__(7131)));
module.exports = __webpack_exports__;

})();