const { Router } = require("express");
const Order = require("../models").order;
const Product = require("../models").product;
const User = require("../models").user;
const Category = require("../models").category;
const OrderProduct = require("../models").OrderProduct;

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const orders = await Order.findAll({ include: [Product] });
    response.send(orders);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const orders = await Order.findByPk(id, {
      include: [
        {
          model: Product,
          include: [{ model: Category, attributes: ["name"] }],
          attributes: ["name"],
        },
        User,
      ],
    });
    response.send(orders);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  try {
    //userId
    //what he's ordering? [1, 3, 7] = productIds
    const { userId, productIds } = request.body;
    console.log(request.body);
    const newOrder = await Order.create({ userId });
    const newOrderProducts = productIds.map(
      async (id) =>
        await OrderProduct.create({ productId: id, orderId: newOrder.id })
    );
    await Promise.all(newOrderProducts);
    response.send(newOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
