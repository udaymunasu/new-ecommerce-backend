let express = require("express");
let bodyparser = require("body-parser");
let Productcategory = require("../models/category.model");

let router = express.Router();

router.post('/save', async (req, res) => {
    try {
        const category = await Productcategory.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/list", async (req, res) => {
    try {
        let productcategories = await Productcategory.find();
        res.end(JSON.stringify({ status: "success", data: productcategories }));
    }
    catch {
        res.end(JSON.stringify({ status: "failed", data: "Something went wrong" }));
    }
});

router.get("/:id", async (req, res) => {
    try {
        let body = req.body;
        let productcategory = await Productcategory.findById(req.params.id);
        res.end(JSON.stringify({ status: "success", data: productcategory }));
    }
    catch {
        res.end(JSON.stringify({ status: "failed", data: "Something went wrong" }));
    }
});

router.post("/delete", async (req, res) => {
    try {
        let body = req.body;
        await Productcategory.findByIdAndDelete(body.data.id);
        res.end(JSON.stringify({ status: "success" }));
    }
    catch {
        res.end(JSON.stringify({ status: "failed", data: "Something went wrong" }));
    }
});

module.exports = router;