"use strict";
exports.id = 3679;
exports.ids = [3679];
exports.modules = {

/***/ 5725:
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

/***/ 3679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mg": () => (/* binding */ updateSubscription),
/* harmony export */   "nx": () => (/* binding */ getPayment),
/* harmony export */   "rO": () => (/* binding */ createPaymentAccount)
/* harmony export */ });
/* harmony import */ var _lib_server_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2182);
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);


const createPaymentAccount = async (email, customerId)=>{
    const paymentAccount = await (0,_lib_server_stripe__WEBPACK_IMPORTED_MODULE_0__/* .createCustomer */ .wK)(email);
    await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].customerPayment.create */ .Z.customerPayment.create({
        data: {
            customerId,
            email,
            paymentId: paymentAccount.id
        }
    });
};
const getPayment = async (email)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].customerPayment.findUnique */ .Z.customerPayment.findUnique({
        where: {
            email
        }
    });
const updateSubscription = async (customerId, subscriptionType)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].customerPayment.update */ .Z.customerPayment.update({
        data: {
            subscriptionType
        },
        where: {
            customerId
        }
    });


/***/ }),

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "wK": () => (/* binding */ createCustomer)
/* harmony export */ });
/* unused harmony exports getInvoices, getProducts */
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8174);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()(process.env.PAYMENTS_SECRET_KEY);
const createCustomer = async (email)=>await stripe.customers.create({
        email
    });
const getInvoices = async (customer)=>{
    const invoices = await stripe.invoices.list({
        customer
    });
    return invoices?.data;
};
const getProducts = async ()=>{
    const [products, prices] = await Promise.all([
        stripe.products.list(),
        stripe.prices.list()
    ]);
    const productPrices = {};
    prices?.data.map((price)=>productPrices[price.product] = price);
    products?.data.map((product)=>product.prices = productPrices[product.id]);
    return products?.data.reverse();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripe);


/***/ })

};
;