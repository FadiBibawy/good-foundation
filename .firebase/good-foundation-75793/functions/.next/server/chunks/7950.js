"use strict";
exports.id = 7950;
exports.ids = [7950];
exports.modules = {

/***/ 7950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MB": () => (/* binding */ createWorkspace),
  "zl": () => (/* binding */ deleteWorkspace),
  "fX": () => (/* binding */ getWorkspaces),
  "pS": () => (/* binding */ inviteUsers),
  "q5": () => (/* binding */ joinWorkspace),
  "Ee": () => (/* binding */ updateName),
  "eH": () => (/* binding */ updateSlug)
});

// UNUSED EXPORTS: countWorkspaces, getInvitation, getOwnWorkspace, getSiteWorkspace, getWorkspace, getWorkspacePaths, isWorkspaceCreator, isWorkspaceOwner

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
// EXTERNAL MODULE: external "slugify"
var external_slugify_ = __webpack_require__(3673);
var external_slugify_default = /*#__PURE__*/__webpack_require__.n(external_slugify_);
;// CONCATENATED MODULE: ./src/config/email-templates/workspace-create.js
const html = ({ code , name  })=>{
    const link = `${process.env.APP_URL}/teams/invite?code=${encodeURI(code)}`;
    return `
<body>
    <p>Hello there!</p>
    <p>You have created <strong>${name}</strong> workspace.</p>
    <p>Workspaces encapsulates your project's activities with your dedicated teammates.</p>
    <p>Start inviting your teammates by sharing this link: <a href="${link}">${link}</a></p>
    <p>In case you need any assistance, just hit reply.</p>
    <p>Cheers,<br />${process.env.EMAIL_FROM}</p>
</body>
`;
};
const workspace_create_text = ({ code , name  })=>{
    const link = `${process.env.APP_URL}/teams/invite?code=${encodeURI(code)}`;
    return `
Hello there!

You have created ${name} workspace.
Workspaces encapsulates your project's activities with your dedicated teammates.

Start inviting your teammates by sharing this link: ${link}

In case you need any assistance, just hit reply.

Cheers,
${process.env.EMAIL_FROM}
`;
};


;// CONCATENATED MODULE: ./src/config/email-templates/invitation.js
const invitation_html = ({ code , name  })=>{
    const link = `${process.env.APP_URL}/teams/invite?code=${encodeURI(code)}`;
    return `
<body>
    <p>Hello there!</p>
    <p>You have been invited to join <strong>${name}</strong> workspace.</p>
    <p>Workspaces encapsulates your project's activities with your dedicated teammates.</p>
    <p>Login into your account or you may open this link: <a href="${link}">${link}</a></p>
    <p>In case you need any assistance, just hit reply.</p>
    <p>Cheers,<br />${process.env.EMAIL_FROM}</p>
</body>
`;
};
const invitation_text = ({ code , name  })=>{
    const link = `${process.env.APP_URL}/teams/invite?code=${encodeURI(code)}`;
    return `
Hello there!

You have been invited to join ${name} workspace.
Workspaces encapsulates your project's activities with your dedicated teammates.

Login into your account or you may open this link: ${link}

In case you need any assistance, just hit reply.

Cheers,
${process.env.EMAIL_FROM}
`;
};


// EXTERNAL MODULE: ./src/lib/server/mail.js
var mail = __webpack_require__(2269);
// EXTERNAL MODULE: ./prisma/index.js
var prisma_0 = __webpack_require__(5725);
;// CONCATENATED MODULE: ./prisma/services/workspace.js






const countWorkspaces = async (slug)=>await prisma_0/* default.workspace.count */.Z.workspace.count({
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
    const workspace = await prisma_0/* default.workspace.create */.Z.workspace.create({
        data: {
            creatorId,
            members: {
                create: {
                    email,
                    inviter: email,
                    status: client_.InvitationStatus.ACCEPTED,
                    teamRole: client_.TeamRole.OWNER
                }
            },
            name,
            slug
        }
    });
    await (0,mail/* sendMail */.Yb)({
        html: html({
            code: workspace.inviteCode,
            name
        }),
        subject: `[Nextacular] Workspace created: ${name}`,
        text: workspace_create_text({
            code: workspace.inviteCode,
            name
        }),
        to: email
    });
};
const deleteWorkspace = async (id, email, slug)=>{
    const workspace = await getOwnWorkspace(id, email, slug);
    if (workspace) {
        await prisma_0/* default.workspace.update */.Z.workspace.update({
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
const getInvitation = async (inviteCode)=>await prisma.workspace.findFirst({
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
const getOwnWorkspace = async (id, email, slug)=>await prisma_0/* default.workspace.findFirst */.Z.workspace.findFirst({
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
                            teamRole: client_.TeamRole.OWNER,
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
const getSiteWorkspace = async (slug, customDomain)=>await prisma.workspace.findFirst({
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
const getWorkspace = async (id, email, slug)=>await prisma.workspace.findFirst({
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
const getWorkspaces = async (id, email)=>await prisma_0/* default.workspace.findMany */.Z.workspace.findMany({
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
                            status: client_.InvitationStatus.ACCEPTED
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
        prisma.workspace.findMany({
            select: {
                slug: true
            },
            where: {
                deletedAt: null
            }
        }),
        prisma.domain.findMany({
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
            prisma_0/* default.user.createMany */.Z.user.createMany({
                data,
                skipDuplicates: true
            }),
            prisma_0/* default.workspace.update */.Z.workspace.update({
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
            (0,mail/* sendMail */.Yb)({
                html: invitation_html({
                    code: workspace.inviteCode,
                    name: workspace.name
                }),
                subject: `[Nextacular] You have been invited to join ${workspace.name} workspace`,
                text: invitation_text({
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
    const member = workspace.members.find((member)=>member.email === email && member.teamRole === TeamRole.OWNER);
    if (member) {
        isTeamOwner = true;
    }
    return isTeamOwner;
};
const joinWorkspace = async (workspaceCode, email)=>{
    const workspace = await prisma_0/* default.workspace.findFirst */.Z.workspace.findFirst({
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
        await prisma_0/* default.member.upsert */.Z.member.upsert({
            create: {
                workspaceId: workspace.id,
                email,
                inviter: workspace.creatorId,
                status: client_.InvitationStatus.ACCEPTED
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
        await prisma_0/* default.workspace.update */.Z.workspace.update({
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
    let slug = external_slugify_default()(newSlug.toLowerCase());
    const count = await countWorkspaces(slug);
    if (count > 0) {
        slug = `${slug}-${count}`;
    }
    const workspace = await getOwnWorkspace(id, email, pathSlug);
    if (workspace) {
        await prisma_0/* default.workspace.update */.Z.workspace.update({
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


/***/ })

};
;