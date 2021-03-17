const Product = require("../models/Product");

exports.createProduct = async(req, res) => {
    try {
        let product;
        //Create the product
        product = new Product(req.body);

        await product.save();
        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Houston, we have a problem');
    }
}

exports.getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Houston, we have a problem');
    }
}

exports.putProduct = async(req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ msg: "The product doesn't exist" });
        }

        product.nombre = nombre;
        product.categoria = categoria;
        product.ubicacion = ubicacion;
        product.precio = precio;

        product = await Product.findOneAndUpdate({ _id: req.params.id }, product, { new: true });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('Houston, we have a problem');
    }
}

exports.getProduct = async(req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ msg: "The product doesn't exist" });
        }

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('Houston, we have a problem');
    }
}

exports.deleteProduct = async(req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ msg: "The product doesn't exist" });
        }

        await Product.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Product removed succesfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Houston, we have a problem');
    }
}