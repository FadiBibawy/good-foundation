"use strict";
exports.id = 7244;
exports.ids = [7244];
exports.modules = {

/***/ 7244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lK": () => (/* reexport */ add_domain),
  "I5": () => (/* reexport */ create_workspace),
  "je": () => (/* reexport */ session),
  "W1": () => (/* reexport */ update_email),
  "sW": () => (/* reexport */ update_name),
  "fQ": () => (/* reexport */ update_workspace_name),
  "uq": () => (/* reexport */ update_workspace_slug),
  "VD": () => (/* reexport */ workspace_invite)
});

// EXTERNAL MODULE: external "express-validator"
var external_express_validator_ = __webpack_require__(3553);
;// CONCATENATED MODULE: ./src/lib/server/init-middleware.js
const initMiddleware = (middleware)=>{
    return (req, res)=>new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>result instanceof Error ? reject(result) : resolve(result));
        });
};
/* harmony default export */ const init_middleware = (initMiddleware);

;// CONCATENATED MODULE: ./src/lib/server/validate.js

const validateMiddleware = (validations)=>{
    return async (req, res, next)=>{
        await Promise.all(validations.map((validation)=>validation.run(req)));
        const errors = (0,external_express_validator_.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        const errorObject = {};
        errors.array().forEach((error)=>errorObject[error.param] = error);
        res.status(422).json({
            errors: errorObject
        });
    };
};
/* harmony default export */ const validate = (validateMiddleware);

;// CONCATENATED MODULE: ./src/config/api-validation/add-domain.js



const rules = [
    (0,external_express_validator_.check)("domainName").isFQDN().withMessage("Domain name must be a fully qualified domain name")
];
const validateAddDomain = init_middleware(validate(rules));
/* harmony default export */ const add_domain = (validateAddDomain);

;// CONCATENATED MODULE: ./src/config/api-validation/create-workspace.js



const create_workspace_rules = [
    (0,external_express_validator_.check)("name").isLength({
        min: 1,
        max: 16
    }).withMessage("Name must be provided and must not exceed 16 characters")
];
const validateCreateWorkspace = init_middleware(validate(create_workspace_rules));
/* harmony default export */ const create_workspace = (validateCreateWorkspace);

// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(2113);
// EXTERNAL MODULE: ./src/lib/server/auth.js + 1 modules
var auth = __webpack_require__(441);
;// CONCATENATED MODULE: ./src/lib/server/session-check.js


const session_check_validateMiddleware = ()=>{
    return async (req, res, next)=>{
        const session = await (0,next_.getServerSession)(req, res, auth/* authOptions */.L);
        const errors = [];
        if (!session) {
            errors.push({
                param: "session",
                msg: "Unauthorized access"
            });
        } else {
            return next(session);
        }
        const errorObject = {};
        errors.forEach((error)=>errorObject[error.param] = error);
        res.status(401).json({
            errors: errorObject
        });
    };
};
/* harmony default export */ const session_check = (session_check_validateMiddleware);

;// CONCATENATED MODULE: ./src/config/api-validation/session.js


const validateSession = init_middleware(session_check());
/* harmony default export */ const session = (validateSession);

;// CONCATENATED MODULE: ./src/config/api-validation/update-email.js



const update_email_rules = [
    (0,external_express_validator_.check)("email").isEmail().withMessage("Email must be valid")
];
const validateUpdateEmail = init_middleware(validate(update_email_rules));
/* harmony default export */ const update_email = (validateUpdateEmail);

;// CONCATENATED MODULE: ./src/config/api-validation/update-name.js



const update_name_rules = [
    (0,external_express_validator_.check)("name").isLength({
        min: 1,
        max: 32
    }).withMessage("Name must be provided and must not exceed 32 characters")
];
const validateUpdateName = init_middleware(validate(update_name_rules));
/* harmony default export */ const update_name = (validateUpdateName);

;// CONCATENATED MODULE: ./src/config/api-validation/update-workspace-name.js



const update_workspace_name_rules = [
    (0,external_express_validator_.check)("name").isLength({
        min: 1,
        max: 16
    }).withMessage("Name must be provided and must not exceed 16 characters")
];
const validateUpdateWorkspaceName = init_middleware(validate(update_workspace_name_rules));
/* harmony default export */ const update_workspace_name = (validateUpdateWorkspaceName);

;// CONCATENATED MODULE: ./src/config/api-validation/update-workspace-slug.js



const update_workspace_slug_rules = [
    (0,external_express_validator_.check)("slug").isLength({
        min: 1,
        max: 16
    }).withMessage("Slug must be provided and must not exceed 16 characters").isSlug().isAlphanumeric(undefined, {
        ignore: "-"
    }).withMessage("Hyphenated alphanumeric characters only")
];
const validateUpdateWorkspaceSlug = init_middleware(validate(update_workspace_slug_rules));
/* harmony default export */ const update_workspace_slug = (validateUpdateWorkspaceSlug);

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
;// CONCATENATED MODULE: ./src/config/api-validation/workspace-invite.js




const workspace_invite_rules = [
    (0,external_express_validator_.check)("members").isArray().withMessage("Members data must be a list of emails and roles"),
    (0,external_express_validator_.check)("members.*.email").isEmail().withMessage("Email must be valid"),
    (0,external_express_validator_.check)("members.*.role").isIn([
        client_.TeamRole.MEMBER,
        client_.TeamRole.OWNER
    ]).withMessage("Rule must either be MEMBER or OWNER")
];
const validateWorkspaceInvite = init_middleware(validate(workspace_invite_rules));
/* harmony default export */ const workspace_invite = (validateWorkspaceInvite);

;// CONCATENATED MODULE: ./src/config/api-validation/index.js











/***/ })

};
;