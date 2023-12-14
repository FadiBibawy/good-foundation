"use strict";
(() => {
var exports = {};
exports.id = 2617;
exports.ids = [2617];
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

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nx": () => (/* binding */ getPayment)
/* harmony export */ });
/* unused harmony exports createPaymentAccount, updateSubscription */
/* harmony import */ var _lib_server_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9264);
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6033);


const createPaymentAccount = async (email, customerId)=>{
    const paymentAccount = await createCustomer(email);
    await prisma.customerPayment.create({
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
const updateSubscription = async (customerId, subscriptionType)=>await prisma.customerPayment.update({
        data: {
            subscriptionType
        },
        where: {
            customerId
        }
    });


/***/ }),

/***/ 4505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ redirectToCheckout)
});

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./src/lib/client/stripe.js

const redirectToCheckout = async (sessionId)=>{
    const clientStripe = await (0,stripe_js_namespaceObject.loadStripe)(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
    await clientStripe.redirectToCheckout({
        sessionId
    });
};


/***/ }),

/***/ 9264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sA": () => (/* binding */ getInvoices),
  "Xp": () => (/* binding */ getProducts)
});

// UNUSED EXPORTS: createCustomer, default

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/server/stripe.js

const stripe = external_stripe_default()(process.env.PAYMENTS_SECRET_KEY);
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
/* harmony default export */ const server_stripe = ((/* unused pure expression or super */ null && (stripe)));


/***/ }),

/***/ 9968:
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
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3291);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5280);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9398);
/* harmony import */ var _components_Content_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9769);
/* harmony import */ var _components_Meta_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6400);
/* harmony import */ var _components_Modal_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5102);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2902);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3167);
/* harmony import */ var _lib_client_stripe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4505);
/* harmony import */ var _lib_server_stripe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9264);
/* harmony import */ var _prisma_services_customer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _components_Modal_index__WEBPACK_IMPORTED_MODULE_10__, _layouts_index__WEBPACK_IMPORTED_MODULE_11__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _components_Modal_index__WEBPACK_IMPORTED_MODULE_10__, _layouts_index__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Billing = ({ invoices , products  })=>{
    const [isSubmitting, setSubmittingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showModal, setModalVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const subscribe = (priceId)=>{
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(`/api/payments/subscription/${priceId}`, {
            method: "POST"
        }).then((response)=>{
            setSubmittingState(false);
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
            } else {
                (async ()=>(0,_lib_client_stripe__WEBPACK_IMPORTED_MODULE_12__/* .redirectToCheckout */ .V)(response.data.sessionId))();
            }
        });
    };
    const toggleModal = ()=>setModalVisibility(!showModal);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_index__WEBPACK_IMPORTED_MODULE_11__/* .AccountLayout */ .p0, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: "Nextacular - Billing"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Title */ .Z.Title, {
                title: "Billing",
                subtitle: "Manage your billing and preferences"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Container */ .Z.Container, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Body */ .Z.Body, {
                                title: "Upgrade Plan",
                                subtitle: "You are currently under the\xa0 FREE plan",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "p-3 text-sm border rounded",
                                    children: "Personal accounts cannot be upgraded and will remain free forever. In order to use the platform for professional purposes or work with a team, get started by creating a team or contacting sales."
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Footer */ .Z.Footer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: "You will be redirected to the payment page"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        className: "text-white bg-blue-600 hover:bg-blue-500",
                                        disabled: isSubmitting,
                                        onClick: toggleModal,
                                        children: "Upgrade"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        show: showModal,
                        title: "Upgrade Subscription",
                        toggle: toggleModal,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "space-y-0 text-sm text-gray-600",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "You are currently under the FREE plan"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex space-x-5",
                                children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Body */ .Z.Body, {
                                                title: product.name,
                                                subtitle: product.description,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "text-4xl font-bold",
                                                    children: [
                                                        "$",
                                                        Number(product.prices.unit_amount / 100).toFixed(2)
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Footer */ .Z.Footer, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: "w-full text-white bg-blue-600 hover:bg-blue-500",
                                                    disabled: isSubmitting,
                                                    onClick: ()=>subscribe(product.prices.id),
                                                    children: isSubmitting ? "Redirecting..." : `Upgrade to ${product.name}`
                                                })
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Divider */ .Z.Divider, {
                thick: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Title */ .Z.Title, {
                title: "Invoices",
                subtitle: "View and download invoices you may need"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Divider */ .Z.Divider, {}),
            invoices.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Container */ .Z.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "table-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: "Invoice Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: "Created"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: "Status"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: invoices.map((invoice, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "text-sm hover:bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "px-3 py-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: invoice.hosted_invoice_url,
                                                className: "text-blue-600",
                                                target: "_blank",
                                                children: invoice.number
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "py-5",
                                            children: date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2___default()(new Date(invoice.created * 1000), new Date(), {
                                                addSuffix: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "py-5",
                                            children: invoice.status
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "py-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: invoice.hosted_invoice_url,
                                                className: "text-blue-600",
                                                target: "_blank",
                                                children: "→"
                                            })
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Empty */ .Z.Empty, {
                children: "Once you've paid for something on Nextacular, invoices will show up here"
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)(context);
    const customerPayment = await (0,_prisma_services_customer__WEBPACK_IMPORTED_MODULE_14__/* .getPayment */ .nx)(session.user?.email);
    const [invoices, products] = await Promise.all([
        (0,_lib_server_stripe__WEBPACK_IMPORTED_MODULE_13__/* .getInvoices */ .sA)(customerPayment?.paymentId),
        (0,_lib_server_stripe__WEBPACK_IMPORTED_MODULE_13__/* .getProducts */ .Xp)()
    ]);
    return {
        props: {
            invoices,
            products
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Billing);

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

/***/ 3291:
/***/ ((module) => {

module.exports = require("date-fns/formatDistance");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,2902,9398], () => (__webpack_exec__(9968)));
module.exports = __webpack_exports__;

})();