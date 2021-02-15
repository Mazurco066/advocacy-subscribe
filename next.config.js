const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
           contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'"],
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true,
            },
          },
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [ true, {
            maxAge: 60 * 60 * 24 * 360,
            includeSubDomains: true
          }],
          referrerPolicy: 'same-origin',
        })
      }
    ]
  },
}