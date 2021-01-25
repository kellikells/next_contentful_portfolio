
// https://github.com/vercel/next.js/blob/master/errors/next-image-unconfigured-host.md
// next / image Un - configured Host

// next.config.js


// Add the hostname to your images config in next.config.js:
module.exports = {
    images: {
        domains: ['images.ctfassets.net'],
    },
}