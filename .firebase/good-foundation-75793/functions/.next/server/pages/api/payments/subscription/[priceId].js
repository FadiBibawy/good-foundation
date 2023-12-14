"use strict";
(() => {
var exports = {};
exports.id = 1244;
exports.ids = [1244];
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

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_api_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7244);
/* harmony import */ var _lib_server_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2182);
/* harmony import */ var _prisma_services_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3679);



const handler = async (req, res)=>{
    const { method  } = req;
    if (method === "POST") {
        const session = await (0,_config_api_validation__WEBPACK_IMPORTED_MODULE_0__/* .validateSession */ .je)(req, res);
        const { priceId  } = req.query;
        const [customerPayment, price] = await Promise.all([
            (0,_prisma_services_customer__WEBPACK_IMPORTED_MODULE_2__/* .getPayment */ .nx)(session.user?.email),
            _lib_server_stripe__WEBPACK_IMPORTED_MODULE_1__/* ["default"].prices.retrieve */ .ZP.prices.retrieve(priceId)
        ]);
        const product = await _lib_server_stripe__WEBPACK_IMPORTED_MODULE_1__/* ["default"].products.retrieve */ .ZP.products.retrieve(price.product);
        const lineItems = [
            {
                price: price.id,
                quantity: 1
            }
        ];
        const paymentSession = await _lib_server_stripe__WEBPACK_IMPORTED_MODULE_1__/* ["default"].checkout.sessions.create */ .ZP.checkout.sessions.create({
            customer: customerPayment.paymentId,
            mode: "subscription",
            payment_method_types: [
                "card"
            ],
            line_items: lineItems,
            success_url: `${process.env.APP_URL}/account/payment?status=success`,
            cancel_url: `${process.env.APP_URL}/account/payment?status=cancelled`,
            metadata: {
                customerId: customerPayment.customerId,
                type: product.metadata.type
            }
        });
        res.status(200).json({
            data: {
                sessionId: paymentSession.id
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
var __webpack_exports__ = __webpack_require__.X(0, [3679,441,7244], () => (__webpack_exec__(120)));
module.exports = __webpack_exports__;

})();