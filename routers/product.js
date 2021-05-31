const { Router } = require("express");
const Category = require("../models").category;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    response.json({ categories });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
