"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ authOptions)
});

// EXTERNAL MODULE: external "@next-auth/prisma-adapter"
var prisma_adapter_ = __webpack_require__(2104);
// EXTERNAL MODULE: external "next-auth/providers/email"
var email_ = __webpack_require__(9673);
var email_default = /*#__PURE__*/__webpack_require__.n(email_);
// EXTERNAL MODULE: ./prisma/index.js
var prisma = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/config/email-templates/signin.js
const html = ({ email , url  })=>{
    return `
<body>
    <p>Welcome! You are logging in with ${email}</p>
    <p>Click this link to sign in: <strong><a href="${url}" target="_blank">HERE</a></strong></p>
    <p>Alternatively, you can copy this link and open via browser: ${url}</p>
    <p>If you did not request this email you can safely ignore it.</p>
    <p>In case you need any assistance, just hit reply.</p>
    <p>Cheers,<br />${process.env.EMAIL_FROM}</p>
</body>
`;
};
const signin_text = ({ email , url  })=>{
    return `
Welcome! You are logging in with ${email}

You may now sign in using this link: ${url}

If you did not request this email you can safely ignore it.

In case you need any assistance, just hit reply.

Cheers,
${process.env.EMAIL_FROM}
`;
};


// EXTERNAL MODULE: ./src/lib/server/mail.js
var mail = __webpack_require__(2269);
// EXTERNAL MODULE: ./prisma/services/customer.js
var customer = __webpack_require__(3679);
;// CONCATENATED MODULE: ./src/lib/server/auth.js






const authOptions = {
    adapter: (0,prisma_adapter_.PrismaAdapter)(prisma/* default */.Z),
    callbacks: {
        session: async ({ session , user  })=>{
            if (session.user) {
                const customerPayment = await (0,customer/* getPayment */.nx)(user.email);
                session.user.userId = user.id;
                if (customerPayment) {
                    session.user.subscription = customerPayment.subscriptionType;
                }
            }
            return session;
        }
    },
    debug: !("production" === "production"),
    events: {
        signIn: async ({ user , isNewUser  })=>{
            const customerPayment = await (0,customer/* getPayment */.nx)(user.email);
            if (isNewUser || customerPayment === null || user.createdAt === null) {
                await Promise.all([
                    (0,customer/* createPaymentAccount */.rO)(user.email, user.id)
                ]);
            }
        }
    },
    providers: [
        email_default()({
            from: process.env.EMAIL_FROM,
            server: mail/* emailConfig */.zy,
            sendVerificationRequest: async ({ identifier: email , url  })=>{
                const { host  } = new URL(url);
                await (0,mail/* sendMail */.Yb)({
                    html: html({
                        email,
                        url
                    }),
                    subject: `[Nextacular] Sign in to ${host}`,
                    text: signin_text({
                        email,
                        url
                    }),
                    to: email
                });
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || null,
    session: {
        jwt: true
    }
};


/***/ }),

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yb": () => (/* binding */ sendMail),
/* harmony export */   "zy": () => (/* binding */ emailConfig)
/* harmony export */ });
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