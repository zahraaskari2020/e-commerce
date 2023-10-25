const {Order, Product, User} = require('../models/sequelize');

exports.reserve = async (req, res) => {
    let userId = req.body.user_id;
    let productId = req.body.product_id;

    await Order.create({ 
        user_id: userId,
        product_id:productId,
        status: "reserved"
    });

    res.status(200);
    res.json({
        status_code: 200,
        message: "you reserved successfully",
        data: {}
    });
}

exports.purchase = async(req, res) => {
    let OrderId = req.body.order_id;

    await Order.update({ status: "purchased" }, {
        where: {
          id: OrderId,
        },
    });

    res.status(200);
    res.json({
        status_code: 200,
        message: "you purchased successfully",
        data: {}
    });
}

exports.userOrders = async (req, res) => {
    let userId = req.body.user_id;
    // let products = await Order.findAll({ where:{user_id:userId}, 
    //     include: [
    //       {
    //         model: Order,
    //         where: { status: "reserved", user_id : userId},
            
    //       }
    //     ]
    //   });
     let orderProducts = await Order.findAll({where:{user_id:userId, status:"reserved"},include:Product});
     let products = []
     orderProducts.forEach(element => {
        products.push(element.Product)
     });
      

    res.status(200);
    res.json({
        status_code: 200,
        message: "you purchased successfully",
        data: {products:products}
    });
   
}