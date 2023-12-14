"use strict";
(() => {
var exports = {};
exports.id = 6631;
exports.ids = [6631];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3553:
/***/ ((module) => {

module.exports = require("express-validator");

/***/ }),

/***/ 2113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 9673:
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 2331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api = async (url, options)=>{
    const { body , headers , ...opts } = options;
    const requestBody = JSON.stringify(body);
    const response = await fetch(url, {
        body: requestBody,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        ...opts
    });
    const result = await response.json();
    return {
        status: response.status,
        ...result,
        url
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_api_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7244);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2331);


const handler = async (req, res)=>{
    const { method  } = req;
    if (method === "GET") {
        await (0,_config_api_validation__WEBPACK_IMPORTED_MODULE_0__/* .validateSession */ .je)(req, res);
        const { domain  } = req.query;
        const teamId = process.env.VERCEL_TEAM_ID;
        const response = await (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(`${process.env.VERCEL_API_URL}/v6/domains/${domain}/config${teamId ? `?teamId=${teamId}` : ""}`, {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_AUTH_BEARER_TOKEN}`
            },
            method: "GET"
        });
        const valid = response?.configuredBy ? true : false;
        res.status(200).json({
            data: {
                valid
            }
        });
    } else {
        res.status(405).json({
            errors: {
                error: {
                    msg: `${method} method unsupported`
                }
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3679,441,7244], () => (__webpack_exec__(8361)));
module.exports = __webpack_exports__;

})();