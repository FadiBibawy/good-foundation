"use strict";
(() => {
var exports = {};
exports.id = 6476;
exports.ids = [6476];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 9243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ hooks)
});

;// CONCATENATED MODULE: external "micro"
const external_micro_namespaceObject = require("micro");
// EXTERNAL MODULE: ./src/lib/server/stripe.js
var stripe = __webpack_require__(2182);
// EXTERNAL MODULE: ./prisma/services/customer.js
var customer = __webpack_require__(3679);
// EXTERNAL MODULE: ./prisma/index.js
var prisma = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/pages/api/payments/hooks.js




const config = {
    api: {
        bodyParser: false
    }
};
const handler = async (req, res)=>{
    const reqBuffer = await (0,external_micro_namespaceObject.buffer)(req);
    const signature = req.headers["stripe-signature"];
    let event = null;
    try {
        event = stripe/* default.webhooks.constructEvent */.ZP.webhooks.constructEvent(reqBuffer, signature, process.env.PAYMENTS_SIGNING_SECRET);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    if (event) {
        const { metadata  } = event.data.object;
        switch(event.type){
            case "charge.succeeded":
                if (metadata?.customerId && metadata?.type) {
                    await (0,customer/* updateSubscription */.Mg)(metadata.customerId, metadata.type);
                }
                break;
            default:
                res.status(400).send(`Webhook Error: Unhandled event type ${event.type}`);
        }
    } else {
        return res.status(400).send(`Webhook Error: Event not created`);
    }
    await prisma/* default.$disconnect */.Z.$disconnect();
    res.status(200).send({
        received: true
    });
};
/* harmony default export */ const hooks = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3679], () => (__webpack_exec__(9243)));
module.exports = __webpack_exports__;

})();