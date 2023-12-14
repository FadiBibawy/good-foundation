"use strict";
exports.id = 6482;
exports.ids = [6482];
exports.modules = {

/***/ 6482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F$": () => (/* binding */ getPendingInvitations),
/* harmony export */   "L": () => (/* binding */ getMember),
/* harmony export */   "Nf": () => (/* binding */ updateStatus),
/* harmony export */   "Od": () => (/* binding */ remove),
/* harmony export */   "PH": () => (/* binding */ toggleRole),
/* harmony export */   "Zw": () => (/* binding */ getMembers)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);


const getMember = async (id)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].member.findFirst */ .Z.member.findFirst({
        select: {
            teamRole: true
        },
        where: {
            id
        }
    });
const getMembers = async (slug)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].member.findMany */ .Z.member.findMany({
        select: {
            id: true,
            email: true,
            status: true,
            teamRole: true,
            member: {
                select: {
                    name: true
                }
            }
        },
        where: {
            deletedAt: null,
            workspace: {
                deletedAt: null,
                slug
            }
        }
    });
const getPendingInvitations = async (email)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].member.findMany */ .Z.member.findMany({
        select: {
            id: true,
            email: true,
            joinedAt: true,
            status: true,
            teamRole: true,
            invitedBy: {
                select: {
                    email: true,
                    name: true
                }
            },
            workspace: {
                select: {
                    createdAt: true,
                    inviteCode: true,
                    name: true,
                    slug: true,
                    workspaceCode: true,
                    creator: {
                        select: {
                            email: true,
                            name: true
                        }
                    }
                }
            }
        },
        where: {
            deletedAt: null,
            email,
            status: _prisma_client__WEBPACK_IMPORTED_MODULE_0__.InvitationStatus.PENDING,
            workspace: {
                deletedAt: null
            }
        }
    });
const remove = async (id)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].member.update */ .Z.member.update({
        data: {
            deletedAt: new Date()
        },
        where: {
            id
        }
    });
const toggleRole = async (id, teamRole)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].member.update */ .Z.member.update({
        data: {
            teamRole
        },
        where: {
            id
        }
    });
const updateStatus = async (id, status)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].member.update */ .Z.member.update({
        data: {
            status
        },
        where: {
            id
        }
    });


/***/ })

};
;