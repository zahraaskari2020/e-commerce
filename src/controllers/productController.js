const {Product} = require('../models/sequelize')

exports.getProduct = async(req, res) => {
    let products = await Product.findAll({});

    res.status(200);
        res.json({
            status_code: 200,
            message: "product list",
            data: {
                products:products
            }
        });
}