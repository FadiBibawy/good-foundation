"use strict";
(() => {
var exports = {};
exports.id = 2378;
exports.ids = [2378];
exports.modules = {

/***/ 468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _site_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Meta/index.js
var Meta = __webpack_require__(6400);
// EXTERNAL MODULE: ./prisma/services/workspace.js
var services_workspace = __webpack_require__(5758);
;// CONCATENATED MODULE: ./src/pages/_sites/[site]/index.js







const Site = ({ workspace  })=>{
    const router = (0,router_.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading..."
        });
    }
    return workspace ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "relative flex flex-col items-center justify-center h-screen space-y-10 text-gray-800 bg-gray-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: workspace.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-center p-10 space-y-5 text-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-4xl font-bold",
                        children: "Welcome to your workspace's subdomain!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "text-2xl",
                        children: [
                            "This is the workspace of ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    workspace.name,
                                    "."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "You can also visit these links:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: `https://${workspace.hostname}`,
                        className: "flex space-x-3 text-blue-600 hover:underline",
                        target: "_blank",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: `${workspace.hostname}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowTopRightOnSquareIcon, {
                                className: "w-5 h-5"
                            })
                        ]
                    }),
                    workspace.domains.map((domain, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `https://${domain.name}`,
                            className: "flex space-x-3 text-blue-600 hover:underline",
                            target: "_blank",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: domain.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowTopRightOnSquareIcon, {
                                    className: "w-5 h-5"
                                })
                            ]
                        }, index))
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                noIndex: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
                statusCode: 404
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    const paths = await (0,services_workspace/* getWorkspacePaths */.Zi)();
    return {
        paths,
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const { site  } = params;
    const siteWorkspace = await (0,services_workspace/* getSiteWorkspace */.Hp)(site, site.includes("."));
    let workspace = null;
    if (siteWorkspace) {
        const { host  } = new URL(process.env.APP_URL);
        workspace = {
            domains: siteWorkspace.domains,
            name: siteWorkspace.name,
            hostname: `${siteWorkspace.slug}.${host}`
        };
    }
    return {
        props: {
            workspace
        },
        revalidate: 10
    };
};
/* harmony default export */ const _site_ = (Site);


/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,5758], () => (__webpack_exec__(468)));
module.exports = __webpack_exports__;

})();