const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const customers = require('../../database/customers');

// Get all customers
router.get('/', (req, res) => res.json(customers));

// Get a single customer
router.get('/:id', (req, res) => {
    const found = customers.some(customer => customer.id === parseInt(req.params.id));
    if(found) {
        res.json(customers.filter(customer => customer.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No customer with an id of ${req.params.id}` });
    }
});

// Create an customer
router.post('/', (req, res) => {
    const newCustomer = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        position: req.body.position || "customer"
    }

    if(!newCustomer.name || !newCustomer.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    customers.push(newCustomer);
    res.json(customers);
});

// Update an customer
router.put('/:id', (req, res) => {
    const found = customers.some(customer => customer.id === parseInt(req.params.id));
    if(found) {
        const updatedCustomer = req.body;
        customers.forEach(customer => {
            if(customer.id === parseInt(req.params.id)) {
                customer.name = updatedCustomer.name || customer.name;
                customer.email = updatedCustomer.email || customer.email;
                res.json({ msg: 'customer was updated', customer });
            }
        });
    } else {
        res.status(400).json({ msg: `No customer with an id of ${req.params.id}` });
    }
});

// Delete an customer
router.delete('/:id', (req, res) => {
    const index = customers.findIndex(customer => customer.id === parseInt(req.params.id));
    if(index >= 0) {
        [removedCustomer] = customers.splice(index, 1);
        res.json({
            msg: `customer: ${removedCustomer.name} was deleted`,
            customers,
            removed: removedCustomer
        });
    } else {
        res.status(400).json({ msg: `No customer with an id of ${req.params.id}` });
    }
});

module.exports = router;