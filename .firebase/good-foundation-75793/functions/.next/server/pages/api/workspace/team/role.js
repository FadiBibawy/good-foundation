"use strict";
(() => {
var exports = {};
exports.id = 2621;
exports.ids = [2621];
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

/***/ 8417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_api_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7244);
/* harmony import */ var _prisma_services_membership__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6482);



const handler = async (req, res)=>{
    const { method  } = req;
    if (method === "PUT") {
        await (0,_config_api_validation__WEBPACK_IMPORTED_MODULE_1__/* .validateSession */ .je)(req, res);
        const { memberId  } = req.body;
        const member = (0,_prisma_services_membership__WEBPACK_IMPORTED_MODULE_2__/* .getMember */ .L)(memberId);
        await (0,_prisma_services_membership__WEBPACK_IMPORTED_MODULE_2__/* .toggleRole */ .PH)(memberId, member.teamRole === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamRole.MEMBER ? _prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamRole.OWNER : _prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamRole.MEMBER);
        res.status(200).json({
            data: {
                updatedAt: new Date()
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
var __webpack_exports__ = __webpack_require__.X(0, [3679,441,7244,6482], () => (__webpack_exec__(8417)));
module.exports = __webpack_exports__;

})();