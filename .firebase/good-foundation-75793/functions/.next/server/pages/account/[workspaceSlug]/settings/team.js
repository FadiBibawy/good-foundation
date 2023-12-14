"use strict";
(() => {
var exports = {};
exports.id = 8283;
exports.ids = [8283];
exports.modules = {

/***/ 362:
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5280);
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9398);
/* harmony import */ var _components_Content_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9769);
/* harmony import */ var _components_Meta_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6400);
/* harmony import */ var _hooks_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2964);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2902);
/* harmony import */ var _lib_common_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3167);
/* harmony import */ var _prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5758);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _hooks_data__WEBPACK_IMPORTED_MODULE_13__, _layouts_index__WEBPACK_IMPORTED_MODULE_14__, react_i18next__WEBPACK_IMPORTED_MODULE_16__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _hooks_data__WEBPACK_IMPORTED_MODULE_13__, _layouts_index__WEBPACK_IMPORTED_MODULE_14__, react_i18next__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const MEMBERS_TEMPLATE = {
    email: "",
    role: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole.MEMBER
};
const Team = ({ isTeamOwner , workspace  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
    const { data , isLoading  } = (0,_hooks_data__WEBPACK_IMPORTED_MODULE_13__/* .useMembers */ .LR)(workspace.slug);
    const [isSubmitting, setSubmittingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [members, setMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            ...MEMBERS_TEMPLATE
        }
    ]);
    const validateEmails = members.filter((member)=>!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8___default()(member.email)).length !== 0;
    const addEmail = ()=>{
        members.push({
            ...MEMBERS_TEMPLATE
        });
        setMembers([
            ...members
        ]);
    };
    const changeRole = (memberId)=>{
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/team/role`, {
            body: {
                memberId
            },
            method: "PUT"
        }).then((response)=>{
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success("Updated team member role!");
            }
        });
    };
    const copyToClipboard = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success("Copied to clipboard!");
    const handleEmailChange = (event, index)=>{
        const member = members[index];
        member.email = event.target.value;
        setMembers([
            ...members
        ]);
    };
    const handleRoleChange = (event, index)=>{
        const member = members[index];
        member.role = event.target.value;
        setMembers([
            ...members
        ]);
    };
    const invite = ()=>{
        setSubmittingState(true);
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/${workspace.slug}/invite`, {
            body: {
                members
            },
            method: "POST"
        }).then((response)=>{
            setSubmittingState(false);
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(response.errors[error].msg));
            } else {
                const members = [
                    {
                        ...MEMBERS_TEMPLATE
                    }
                ];
                setMembers([
                    ...members
                ]);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success("Invited team members!");
            }
        });
    };
    const remove = (index)=>{
        members.splice(index, 1);
        setMembers([
            ...members
        ]);
    };
    const removeMember = (memberId)=>{
        (0,_lib_common_api__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(`/api/workspace/team/member`, {
            body: {
                memberId
            },
            method: "DELETE"
        }).then((response)=>{
            if (response.errors) {
                Object.keys(response.errors).forEach((error)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].error(response.errors[error].msg));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__["default"].success("Removed team member from workspace!");
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_index__WEBPACK_IMPORTED_MODULE_14__/* .AccountLayout */ .p0, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta_index__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: `Nextacular - ${workspace.name} | Team Management`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Title */ .Z.Title, {
                title: t("settings.team.management"),
                subtitle: t("settings.team.manage.members")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Container */ .Z.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                            title: t("settings.team.invite.link"),
                            subtitle: t("settings.team.invite.link.description"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between px-3 py-2 space-x-5 font-mono text-sm border rounded",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "overflow-x-auto",
                                        children: workspace.inviteLink
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        onCopy: copyToClipboard,
                                        text: workspace.inviteLink,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.DocumentDuplicateIcon, {
                                            className: "w-5 h-5 cursor-pointer hover:text-blue-600"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    isTeamOwner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                                title: "Add New Members",
                                subtitle: "Invite Team members using email address",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row space-x-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-1/2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-sm font-bold text-gray-400",
                                                        children: t("common.label.email")
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-1/2 md:w-1/4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-sm font-bold text-gray-400",
                                                        children: t("common.label.role")
                                                    })
                                                })
                                            ]
                                        }),
                                        members.map((member, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row space-x-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "w-1/2 px-3 py-2 border rounded",
                                                        disabled: isSubmitting,
                                                        onChange: (event)=>handleEmailChange(event, index),
                                                        placeholder: "name@email.com",
                                                        type: "text",
                                                        value: member.email
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "relative inline-block w-1/2 border rounded md:w-1/4 ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                className: "w-full px-3 py-2 capitalize rounded appearance-none",
                                                                disabled: isSubmitting,
                                                                onChange: (event)=>handleRoleChange(event, index),
                                                                children: Object.keys(_prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole).map((key, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole[`${key}`],
                                                                        children: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole[`${key}`].toLowerCase()
                                                                    }, index))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                                                                    className: "w-5 h-5"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    index !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "text-red-600",
                                                        onClick: ()=>remove(index),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            }, index)),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Button_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                className: "text-sm border hover:border-black disabled:opacity-75",
                                                disabled: members.length === 3 || isSubmitting,
                                                onClick: addEmail,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {
                                                        className: "w-5 h-5"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: t("common.action.addmore")
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Footer */ .Z.Footer, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                        children: [
                                            "All invited team members will be set to ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Pending"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        className: "text-white bg-blue-600 hover:bg-blue-500",
                                        disabled: validateEmails || isSubmitting,
                                        onClick: invite,
                                        children: t("common.label.invite")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {
                thick: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Title */ .Z.Title, {
                title: t("settings.team.members"),
                subtitle: t("settings.team.pending.invites")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Divider */ .Z.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Content_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Container */ .Z.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Body */ .Z.Body, {
                        title: "Manage Team Members",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "table-fixed",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    className: "text-gray-400 border-b",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "py-3 text-left",
                                                children: "Member Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "text-right"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    className: "text-sm",
                                    children: !isLoading ? data?.members.map((member, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "py-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex flex-row items-center justify-start space-x-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "font-bold",
                                                                    children: member.member.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-gray-400",
                                                                    children: member.email
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "py-3",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row items-center justify-end space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: [
                                                                    "font-mono text-xs px-2 py-0.5 rounded-full capitalize",
                                                                    member.status === _prisma_client__WEBPACK_IMPORTED_MODULE_4__.InvitationStatus.ACCEPTED ? "bg-green-200 text-green-600" : member.status === _prisma_client__WEBPACK_IMPORTED_MODULE_4__.InvitationStatus.PENDING ? "bg-blue-200 text-blue-600" : "bg-red-200 text-red-600"
                                                                ].join(" "),
                                                                children: member.status.toLowerCase()
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: "capitalize",
                                                                children: member.teamRole.toLowerCase()
                                                            }),
                                                            workspace?.creator.email !== member.email && isTeamOwner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                                                as: "div",
                                                                className: "relative inline-block text-left",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                                                                            className: "flex items-center justify-center p-3 space-x-3 rounded hover:bg-gray-100",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.EllipsisVerticalIcon, {
                                                                                className: "w-5 h-5"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                                                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                                        enter: "transition ease-out duration-100",
                                                                        enterFrom: "transform opacity-0 scale-95",
                                                                        enterTo: "transform opacity-100 scale-100",
                                                                        leave: "transition ease-in duration-75",
                                                                        leaveFrom: "transform opacity-100 scale-100",
                                                                        leaveTo: "transform opacity-0 scale-95",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                                                                            className: "absolute right-0 z-20 mt-2 origin-top-right bg-white border divide-y divide-gray-100 rounded w-60",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "p-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                            className: "flex items-center w-full px-2 py-2 space-x-2 text-sm text-gray-800 rounded hover:bg-blue-600 hover:text-white",
                                                                                            onClick: ()=>changeRole(member.id),
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                children: [
                                                                                                    'Change role to "',
                                                                                                    member.teamRole === _prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole.MEMBER ? _prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole.OWNER : _prisma_client__WEBPACK_IMPORTED_MODULE_4__.TeamRole.MEMBER,
                                                                                                    '"'
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                            className: "flex items-center w-full px-2 py-2 space-x-2 text-sm text-red-600 rounded hover:bg-red-600 hover:text-white",
                                                                                            onClick: ()=>removeMember(member.id),
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                children: "Remove Team Member"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            colSpan: 2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full h-8 bg-gray-400 rounded animate-pulse"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getSession)(context);
    let isTeamOwner = false;
    let workspace = null;
    if (session) {
        workspace = await (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__/* .getWorkspace */ .oq)(session.user.userId, session.user.email, context.params.workspaceSlug);
        if (workspace) {
            isTeamOwner = (0,_prisma_services_workspace__WEBPACK_IMPORTED_MODULE_15__/* .isWorkspaceOwner */ .k1)(session.user.email, workspace);
            workspace.inviteLink = `${process.env.APP_URL}/teams/invite?code=${encodeURI(workspace.inviteCode)}`;
        }
    }
    return {
        props: {
            isTeamOwner,
            workspace
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);

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

/***/ 3673:
/***/ ((module) => {

module.exports = require("slugify");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,6400,2902,9398,5758], () => (__webpack_exec__(362)));
module.exports = __webpack_exports__;

})();