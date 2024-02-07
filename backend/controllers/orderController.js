import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/orderModel.js'


// @desc kreiranje nove narudžbe
// @route POST /api/orders
// @acces private
const addOrderItems = asyncHandler (async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        user
    } = req.body;

    if (orderItems && orderItems.length == 0) {
        res.status(400);
        throw new Error ('Nema odabranih artikala');
    } else {
        const order = new Order ({
            orderItems: orderItems.map((x) => ({
                ...x, 
                car: x._id,
                _id: undefined,
            })),
            user: user,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice: itemsPrice,
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }

   res.json('Uspješno dodana narudžba!');

});

// @desc dohvat svih narudžbi logiranog korisnika
// @route GET /api/orders/myorders
// @acces private
const getMyOrders = asyncHandler (async (req, res) => {
    const orders = await Order.find({ user: req.user._id});
    res.status(200).json(orders);
});

// @desc dohvat narudžbe po njenom id-u
// @route GET /api/orders/:id
// @acces private
const getOrderById = asyncHandler (async (req, res) => {
    //nakon pronalaska narudžbe putem id-a + dodaj ime korisnika i njegov mail
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error ('Narudžba nije pronađena!')
    }

});

// @desc ažuriranje statusa narudžbe na "plaćeno"
// @route PUT /api/orders/:id/pay
// @acces private
const updateOrderToPaid = asyncHandler (async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            _id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        };

        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);

        } else {
            res.status(404);
            throw new Error ('Narudžba nije pronađena')
    }
});

// @desc ažuriranje statusa narudžbe na "isporučeno"
// @route GET /api/orders/:id/delivery
// @acces private/admin
const updateOrderToDelivered = asyncHandler (async (req, res) => {
    res.send('updateOrderToDelivered')
});

// @desc dohvat svih narudžbi (da admin može vidjeti sve, od svih korisnika)
// @route PUT /api/orders/
// @acces private/admin
const getOrders = asyncHandler (async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name');
    res.status(200).json(orders);
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid,
};