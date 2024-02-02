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
    } = req.body;

    if (orderItems && orderItems.length == 0) {
        res.status(400);
        throw new Error ('Nema odabranih artikala');
    } else {
        const order = new Order ({
            orderItems: orderItems.map((x) => ({
                ...x, 
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
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
// @route GET /api/orders/:id/pay
// @acces private
const updateOrderToPaid = asyncHandler (async (req, res) => {
    res.send('updateOrderToPaid')
});

// @desc ažuriranje statusa narudžbe na "isporučeno"
// @route GET /api/orders/:id/delivery
// @acces private/admin
const updateOrderToDelivered = asyncHandler (async (req, res) => {
    res.send('updateOrderToDelivered')
});

// @desc dohvat svih narudžbi (da admin može vidjeti sve, od svih korisnika)
// @route GET /api/orders/
// @acces private/admin
const getOrders = asyncHandler (async (req, res) => {
    res.send('getOrders')
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid,
};