"use strict";
exports.id = 5923;
exports.ids = [5923];
exports.modules = {

/***/ 5923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fj": () => (/* binding */ createDomain),
/* harmony export */   "Nk": () => (/* binding */ getDomains),
/* harmony export */   "Q0": () => (/* binding */ verifyDomain),
/* harmony export */   "dj": () => (/* binding */ deleteDomain)
/* harmony export */ });
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);

const createDomain = async (id, email, slug, name, apexName, verified, verificationData)=>{
    let subdomain = null;
    let verificationValue = null;
    if (!verified) {
        const { domain , value  } = verificationData[0];
        subdomain = domain.replace(`.${apexName}`, "");
        verificationValue = value;
    }
    const workspace = await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].workspace.findFirst */ .Z.workspace.findFirst({
        select: {
            id: true
        },
        where: {
            OR: [
                {
                    id
                },
                {
                    members: {
                        some: {
                            email,
                            deletedAt: null
                        }
                    }
                }
            ],
            AND: {
                deletedAt: null,
                slug
            }
        }
    });
    await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domain.create */ .Z.domain.create({
        data: {
            addedById: id,
            name,
            subdomain,
            value: verificationValue,
            verified,
            workspaceId: workspace.id
        }
    });
};
const deleteDomain = async (id, email, slug, name)=>{
    const workspace = await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].workspace.findFirst */ .Z.workspace.findFirst({
        select: {
            id: true
        },
        where: {
            OR: [
                {
                    id
                },
                {
                    members: {
                        some: {
                            email,
                            deletedAt: null
                        }
                    }
                }
            ],
            AND: {
                deletedAt: null,
                slug
            }
        }
    });
    const domain = await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domain.findFirst */ .Z.domain.findFirst({
        select: {
            id: true
        },
        where: {
            deletedAt: null,
            name,
            workspaceId: workspace.id
        }
    });
    await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domain.update */ .Z.domain.update({
        data: {
            deletedAt: new Date()
        },
        where: {
            id: domain.id
        }
    });
};
const getDomains = async (slug)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domain.findMany */ .Z.domain.findMany({
        select: {
            name: true,
            subdomain: true,
            verified: true,
            value: true
        },
        where: {
            deletedAt: null,
            workspace: {
                deletedAt: null,
                slug
            }
        }
    });
const verifyDomain = async (id, email, slug, name, verified)=>{
    const workspace = await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].workspace.findFirst */ .Z.workspace.findFirst({
        select: {
            id: true
        },
        where: {
            OR: [
                {
                    id
                },
                {
                    members: {
                        some: {
                            email,
                            deletedAt: null
                        }
                    }
                }
            ],
            AND: {
                deletedAt: null,
                slug
            }
        }
    });
    const domain = await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domain.findFirst */ .Z.domain.findFirst({
        select: {
            id: true
        },
        where: {
            deletedAt: null,
            name,
            workspaceId: workspace.id
        }
    });
    await _prisma_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domain.update */ .Z.domain.update({
        data: {
            verified
        },
        where: {
            id: domain.id
        }
    });
};


/***/ })

};
;