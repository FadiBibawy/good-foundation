"use strict";
exports.id = 5758;
exports.ids = [5758];
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

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": () => (/* binding */ getSiteWorkspace),
/* harmony export */   "KO": () => (/* binding */ getInvitation),
/* harmony export */   "Zi": () => (/* binding */ getWorkspacePaths),
/* harmony export */   "k1": () => (/* binding */ isWorkspaceOwner),
/* harmony export */   "oq": () => (/* binding */ getWorkspace),
/* harmony export */   "yq": () => (/* binding */ isWorkspaceCreator)
/* harmony export */ });
/* unused harmony exports countWorkspaces, createWorkspace, deleteWorkspace, getOwnWorkspace, getWorkspaces, inviteUsers, joinWorkspace, updateName, updateSlug */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_server_mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3221);
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6033);






const countWorkspaces = async (slug)=>await prisma.workspace.count({
        where: {
            slug: {
                startsWith: slug
            }
        }
    });
const createWorkspace = async (creatorId, email, name, slug)=>{
    const count = await countWorkspaces(slug);
    if (count > 0) {
        slug = `${slug}-${count}`;
    }
    const workspace = await prisma.workspace.create({
        data: {
            creatorId,
            members: {
                create: {
                    email,
                    inviter: email,
                    status: InvitationStatus.ACCEPTED,
                    teamRole: TeamRole.OWNER
                }
            },
            name,
            slug
        }
    });
    await sendMail({
        html: createHtml({
            code: workspace.inviteCode,
            name
        }),
        subject: `[Nextacular] Workspace created: ${name}`,
        text: createText({
            code: workspace.inviteCode,
            name
        }),
        to: email
    });
};
const deleteWorkspace = async (id, email, slug)=>{
    const workspace = await getOwnWorkspace(id, email, slug);
    if (workspace) {
        await prisma.workspace.update({
            data: {
                deletedAt: new Date()
            },
            where: {
                id: workspace.id
            }
        });
        return slug;
    } else {
        throw new Error("Unable to find workspace");
    }
};
const getInvitation = async (inviteCode)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"].workspace.findFirst */ .Z.workspace.findFirst({
        select: {
            id: true,
            name: true,
            workspaceCode: true,
            slug: true
        },
        where: {
            deletedAt: null,
            inviteCode
        }
    });
const getOwnWorkspace = async (id, email, slug)=>await prisma.workspace.findFirst({
        select: {
            id: true,
            inviteCode: true,
            name: true
        },
        where: {
            OR: [
                {
                    id
                },
                {
                    members: {
                        some: {
                            deletedAt: null,
                            teamRole: TeamRole.OWNER,
                            email
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
const getSiteWorkspace = async (slug, customDomain)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"].workspace.findFirst */ .Z.workspace.findFirst({
        select: {
            id: true,
            name: true,
            slug: true,
            domains: {
                select: {
                    name: true
                }
            }
        },
        where: {
            OR: [
                {
                    slug
                },
                customDomain ? {
                    domains: {
                        some: {
                            name: slug,
                            deletedAt: null
                        }
                    }
                } : undefined
            ],
            AND: {
                deletedAt: null
            }
        }
    });
const getWorkspace = async (id, email, slug)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"].workspace.findFirst */ .Z.workspace.findFirst({
        select: {
            creatorId: true,
            name: true,
            inviteCode: true,
            slug: true,
            workspaceCode: true,
            creator: {
                select: {
                    email: true
                }
            },
            members: {
                select: {
                    email: true,
                    teamRole: true
                }
            }
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
const getWorkspaces = async (id, email)=>await prisma.workspace.findMany({
        select: {
            createdAt: true,
            creator: {
                select: {
                    email: true,
                    name: true
                }
            },
            inviteCode: true,
            members: {
                select: {
                    member: {
                        select: {
                            email: true,
                            image: true,
                            name: true
                        }
                    },
                    joinedAt: true,
                    status: true,
                    teamRole: true
                }
            },
            name: true,
            slug: true,
            workspaceCode: true
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
                            deletedAt: null,
                            status: InvitationStatus.ACCEPTED
                        }
                    }
                }
            ],
            AND: {
                deletedAt: null
            }
        }
    });
const getWorkspacePaths = async ()=>{
    const [workspaces, domains] = await Promise.all([
        _prisma_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"].workspace.findMany */ .Z.workspace.findMany({
            select: {
                slug: true
            },
            where: {
                deletedAt: null
            }
        }),
        _prisma_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"].domain.findMany */ .Z.domain.findMany({
            select: {
                name: true
            },
            where: {
                deletedAt: null
            }
        })
    ]);
    return [
        ...workspaces.map((workspace)=>({
                params: {
                    site: workspace.slug
                }
            })),
        ...domains.map((domain)=>({
                params: {
                    site: domain.name
                }
            }))
    ];
};
const inviteUsers = async (id, email, members, slug)=>{
    const workspace = await getOwnWorkspace(id, email, slug);
    const inviter = email;
    if (workspace) {
        const membersList = members.map(({ email , role  })=>({
                email,
                inviter,
                teamRole: role
            }));
        const data = members.map(({ email  })=>({
                createdAt: null,
                email
            }));
        await Promise.all([
            prisma.user.createMany({
                data,
                skipDuplicates: true
            }),
            prisma.workspace.update({
                data: {
                    members: {
                        createMany: {
                            data: membersList,
                            skipDuplicates: true
                        }
                    }
                },
                where: {
                    id: workspace.id
                }
            }),
            sendMail({
                html: inviteHtml({
                    code: workspace.inviteCode,
                    name: workspace.name
                }),
                subject: `[Nextacular] You have been invited to join ${workspace.name} workspace`,
                text: inviteText({
                    code: workspace.inviteCode,
                    name: workspace.name
                }),
                to: members.map((member)=>member.email)
            })
        ]);
        return membersList;
    } else {
        throw new Error("Unable to find workspace");
    }
};
const isWorkspaceCreator = (id, creatorId)=>id === creatorId;
const isWorkspaceOwner = (email, workspace)=>{
    let isTeamOwner = false;
    const member = workspace.members.find((member)=>member.email === email && member.teamRole === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamRole.OWNER);
    if (member) {
        isTeamOwner = true;
    }
    return isTeamOwner;
};
const joinWorkspace = async (workspaceCode, email)=>{
    const workspace = await prisma.workspace.findFirst({
        select: {
            creatorId: true,
            id: true
        },
        where: {
            deletedAt: null,
            workspaceCode
        }
    });
    if (workspace) {
        await prisma.member.upsert({
            create: {
                workspaceId: workspace.id,
                email,
                inviter: workspace.creatorId,
                status: InvitationStatus.ACCEPTED
            },
            update: {},
            where: {
                email
            }
        });
        return new Date();
    } else {
        throw new Error("Unable to find workspace");
    }
};
const updateName = async (id, email, name, slug)=>{
    const workspace = await getOwnWorkspace(id, email, slug);
    if (workspace) {
        await prisma.workspace.update({
            data: {
                name
            },
            where: {
                id: workspace.id
            }
        });
        return name;
    } else {
        throw new Error("Unable to find workspace");
    }
};
const updateSlug = async (id, email, newSlug, pathSlug)=>{
    let slug = slugify(newSlug.toLowerCase());
    const count = await countWorkspaces(slug);
    if (count > 0) {
        slug = `${slug}-${count}`;
    }
    const workspace = await getOwnWorkspace(id, email, pathSlug);
    if (workspace) {
        await prisma.workspace.update({
            data: {
                slug
            },
            where: {
                id: workspace.id
            }
        });
        return slug;
    } else {
        throw new Error("Unable to find workspace");
    }
};


/***/ }),

/***/ 3221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports emailConfig, sendMail */
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

const emailConfig = {
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
    },
    service: process.env.EMAIL_SERVICE
};
const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport(emailConfig);
const sendMail = async ({ from , html , subject , text , to  })=>{
    const data = {
        from: from ?? process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html
    };
     true ? await transporter.sendMail(data) : 0;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (transporter)));


/***/ })

};
;