"use strict";
(() => {
var exports = {};
exports.id = 5615;
exports.ids = [5615];
exports.modules = {

/***/ 3788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5280);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9398);
/* harmony import */ var _hooks_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_data__WEBPACK_IMPORTED_MODULE_7__]);
_hooks_data__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const DomainCard = ({ apex , cname , domain , isLoading , refresh , remove  })=>{
    const { name , subdomain , value , verified  } = domain || {};
    const { data , isLoading: isChecking  } = (0,_hooks_data__WEBPACK_IMPORTED_MODULE_7__/* .useDomain */ .ay)(name);
    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(verified ? "cname" : "txt");
    const handleRefresh = (name, isVerified)=>{
        const verified = refresh(name, isVerified);
        if (verified) {
            setDisplay("cname");
        }
    };
    const onRemove = ()=>{
        const result = confirm(`Are you sure you want to delete this domain: ${name}?`);
        if (result) {
            remove(name);
        }
    };
    const showApex = ()=>setDisplay("apex");
    const showCName = ()=>setDisplay("cname");
    const showTxt = ()=>setDisplay("txt");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Body */ .Z.Body, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Body */ .Z.Body, {
                    title: name,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center mb-5 space-x-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: `https://${name}`,
                                    className: "flex items-center space-x-2 text-blue-600 hover:underline",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                "Visit ",
                                                name
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowTopRightOnSquareIcon, {
                                            className: "w-5 h-5"
                                        })
                                    ]
                                }),
                                !data?.valid || !verified ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "flex items-center space-x-1 text-red-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.XCircleIcon, {
                                            className: "w-5 h-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Invalid Configuration"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.CheckCircleIcon, {
                                            className: "w-5 h-5 text-blue-600"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Valid Configuration"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col space-y-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex space-x-3",
                                    children: !verified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: [
                                            "py-2",
                                            display === "txt" ? "border-b-2 border-b-gray-800" : "text-gray-400"
                                        ].join(" "),
                                        onClick: showTxt,
                                        children: "TXT Record (verification)"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: [
                                                    "py-2",
                                                    display === "cname" ? "border-b-2 border-b-gray-800" : "text-gray-400"
                                                ].join(" "),
                                                onClick: showCName,
                                                children: "CNAME Record (subdomains)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: [
                                                    "py-2",
                                                    display === "apex" ? "border-b-2 border-b-gray-800" : "text-gray-400"
                                                ].join(" "),
                                                onClick: showApex,
                                                children: "A Record (apex domain)"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Set the following record on your DNS provider to continue:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "bg-gray-100 table-fixed",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: "text-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "p-3",
                                                        children: "Type"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "p-3",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "p-3",
                                                        children: "Value"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "font-mono text-sm",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "p-3",
                                                        children: display === "cname" ? "CNAME" : display === "txt" ? "TXT" : "A"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "p-3",
                                                        children: display === "cname" ? "www" : display === "txt" ? subdomain : "@"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "p-3",
                                                        children: display === "cname" ? cname : display === "txt" ? value : apex
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Footer */ .Z.Footer, {
                    children: [
                        !verified ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-red-600",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Error"
                                }),
                                ": Domain ",
                                name,
                                " was added to a different project. Please complete verification to add it to this project instead."
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row space-x-3",
                            children: [
                                (!data?.valid || !verified) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "text-gray-600 border border-gray-600 hover:border-gray-600 hover:text-gray-600",
                                    disabled: isChecking,
                                    onClick: ()=>handleRefresh(name, verified),
                                    children: isChecking ? "Checking..." : !verified ? "Verify" : "Refresh"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "text-white bg-red-600 hover:bg-red-500",
                                    onClick: onRemove,
                                    children: "Remove"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
DomainCard.defaultProps = {
    apex: "",
    cname: "",
    isLoading: true,
    name: "",
    refresh: ()=>{},
    remove: ()=>{},
    slug: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomainCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9569:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5941);
/* harmony import */ var validator_lib_isFQDN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9535);
/* harmony import */ var validator_lib_isFQDN__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isFQDN__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5280);
/* harmony import */ var _components_Card_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3788);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9398);
/* harmony import */ var _components_Content_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9769);
/* harmony import */ var _components_Meta_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6400);
/* harmony import */ var _hooks_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2964);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2902);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3167);
/* harmony import */ var _prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5758);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, swr__WEBPACK_IMPORTED_MODULE_6__, _components_Card_domain__WEBPACK_IMPORTED_MODULE_9__, _hooks_data__WEBPACK_IMPORTED_MODULE_13__, _layouts_index__WEBPACK_IMPORTED_MODULE_14__, react_i18next__WEBPACK_IMPORTED_MODULE_16__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, swr__WEBPACK_IMPORTED_MODULE_6__, _components_Card_domain__WEBPACK_IMPORTED_MODULE_9__, _hooks_data__WEBPACK_IMPORTED_MODULE_13__, _layouts_index__WEBPACK_IMPORTED_MODULE_14__, react_i18next__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Domain = ({ isTeamOwner , workspace  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
    const { data , isLoading  } = (0,_hooks_data__WEBPACK_IMPORTED_MODULE_13__/* .useDomains */ .J9)(workspace.slug);
    const [domain, setDomain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isSubmitting, setSubmittingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const validDomainName = validator_lib_isFQDN__WEBPACK_IMPORTED_MODULE_7___default()(domain);
    const addDomain = (event)=>{
        event.preventDefault();
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}/domain`, {
            body: {
                domainName: domain
            },
            method: "POST"
        }).then((response)=>{
            setSubmittingState(false);
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
            } else {
                setDomain("");
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Domain successfully added to workspace!");
            }
        });
    };
    const handleDomainChange = (event)=>setDomain(event.target.value);
    const refresh = (domain, verified)=>{
        setSubmittingState(true);
        if (verified) {
            (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(`/api/workspace/domain/check?domain=${domain}`).then(()=>setSubmittingState(false));
        } else {
            (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}/domain`, {
                body: {
                    domainName: domain
                },
                method: "PUT"
            }).then((response)=>{
                setSubmittingState(false);
                if (response.errors) {
                    Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
                } else {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Domain successfully verified!");
                }
            });
        }
        return verified;
    };
    const remove = (domain)=>{
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}/domain`, {
            body: {
                domainName: domain
            },
            method: "DELETE"
        }).then((response)=>{
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Domain successfully deleted from workspace!");
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_index__WEBPACK_IMPORTED_MODULE_14__/* .AccountLayout */ .p0, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta_index__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: `Nextacular - ${workspace.name} | Domains`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Title */ .Z.Title, {
                title: t("settings.domain.subdomain.management"),
                subtitle: t("settings.domain.subdomain.management.description")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Container */ .Z.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                        title: t("settings.domain.subdomain.title"),
                        subtitle: t("settings.domain.subdomain.description"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between px-3 py-2 font-mono text-sm border rounded md:w-1/2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: workspace.slug
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "pr-3",
                                            children: [
                                                ".",
                                                workspace.host
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: `http://${workspace.hostname}`,
                                    target: "_blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowTopRightOnSquareIcon, {
                                        className: "w-5 h-5 cursor-pointer hover:text-blue-600"
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            isTeamOwner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {
                        thick: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Title */ .Z.Title, {
                        title: t("settings.domain.domain.configuration"),
                        subtitle: t("settings.domain.domain.configuration.description")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Container */ .Z.Container, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                                            title: t("settings.domain.add.label"),
                                            subtitle: t("settings.domain.add.description"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "px-3 py-2 border rounded md:w-1/2",
                                                disabled: isSubmitting,
                                                onChange: handleDomainChange,
                                                placeholder: "mydomain.com",
                                                type: "text",
                                                value: domain
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Footer */ .Z.Footer, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    className: "text-white bg-blue-600 hover:bg-blue-500",
                                                    disabled: !validDomainName || isSubmitting,
                                                    onClick: addDomain,
                                                    children: "Add"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_domain__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                isLoading: true
                            }) : data?.domains.length > 0 ? data.domains.map((domain, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_domain__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    apex: "76.76.21.21",
                                    cname: workspace.hostname,
                                    isLoading: isSubmitting,
                                    domain: domain,
                                    refresh: refresh,
                                    remove: remove
                                }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Empty */ .Z.Empty, {
                                children: t("settings.domain.empty.message")
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
    let isTeamOwner = false;
    let workspace = null;
    if (session) {
        workspace = await (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__/* .getWorkspace */ .oq)(session.user.userId, session.user.email, context.params.workspaceSlug);
        if (workspace) {
            const { host  } = new URL(process.env.APP_URL);
            isTeamOwner = (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__/* .isWorkspaceOwner */ .k1)(session.user.email, workspace);
            workspace.host = host;
            workspace.hostname = `${workspace.slug}.${host}`;
        }
    }
    return {
        props: {
            isTeamOwner,
            workspace
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Domain);

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

/***/ 9535:
/***/ ((module) => {

module.exports = require("validator/lib/isFQDN");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,2902,9398,5758], () => (__webpack_exec__(9569)));
module.exports = __webpack_exports__;

})();