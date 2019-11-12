const path = require("path");
const router = require("express").Router();

// Load index (home) page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Load shop page
router.get("/shop", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/shop.html"));
});

// Load women page
router.get("/shop/women", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/women.html"));
});

// Load men page
router.get("/shop/men", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/men.html"));
});

// Load children page
router.get("/shop/children", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/children.html"));
});

// Load contact page
router.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/contact.html"));
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
    res.sendStatus("404");
});

module.exports = router;