"use strict";
exports.id = 7074;
exports.ids = [7074];
exports.modules = {

/***/ 7074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ee": () => (/* binding */ updateName),
/* harmony export */   "jK": () => (/* binding */ deactivate)
/* harmony export */ });
/* unused harmony exports getUser, updateEmail */
/* harmony import */ var _lib_server_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2269);
/* harmony import */ var _prisma_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);



const deactivate = async (id)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.update */ .Z.user.update({
        data: {
            deletedAt: new Date()
        },
        where: {
            id
        }
    });
const getUser = async (id)=>await prisma.user.findUnique({
        select: {
            email: true,
            name: true,
            userCode: true
        },
        where: {
            id
        }
    });
const updateEmail = async (id, email, previousEmail)=>{
    await prisma.user.update({
        data: {
            email,
            emailVerified: null
        },
        where: {
            id
        }
    });
    await sendMail({
        html: html({
            email
        }),
        subject: `[Nextacular] Email address updated`,
        text: text({
            email
        }),
        to: [
            email,
            previousEmail
        ]
    });
};
const updateName = async (id, name)=>await _prisma_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.update */ .Z.user.update({
        data: {
            name
        },
        where: {
            id
        }
    });


/***/ })

};
;