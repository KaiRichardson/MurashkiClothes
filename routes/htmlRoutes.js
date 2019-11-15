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

// Load women's clothing page
router.get("/shop/women", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/women.html"));
});

// Load men's clothing page
router.get("/shop/men", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/men.html"));
});

// Load children's clothing page
router.get("/shop/children", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/children.html"));
});

// Load single item page
router.get("/shop/single", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/shop-single.html"));
});

// Load contact page
router.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/contact.html"));
});

// Load about us page
router.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/about.html"));
});

// Load cart page
router.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/checkout.html"));
});

// Load favorites page
router.get("/favorites", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/favorites.html"));
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
    res.sendStatus("404");
});

module.exports = router;