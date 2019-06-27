const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const employees = require('../../database/employees');

// Get all employees
router.get('/', (req, res) => res.json(employees));

// Get a single employee
router.get('/:id', (req, res) => {
    const found = employees.some(employee => employee.id === parseInt(req.params.id));
    if(found) {
        res.json(employees.filter(employee => employee.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No employee with an id of ${req.params.id}` });
    }
});

// Create an employee
router.post('/', (req, res) => {
    const newEmployee = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        position: req.body.position || "employee"
    }

    if(!newEmployee.name || !newEmployee.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    employees.push(newEmployee);
    res.json(employees);
});

// Update an employee
router.put('/:id', (req, res) => {
    const found = employees.some(employee => employee.id === parseInt(req.params.id));
    if(found) {
        const updatedEmployee = req.body;
        employees.forEach(employee => {
            if(employee.id === parseInt(req.params.id)) {
                employee.name = updatedEmployee.name || employee.name;
                employee.email = updatedEmployee.email || employee.email;
                employee.position = updatedEmployee.position || employee.position;
                res.json({ msg: 'employee was updated', employee });
            }
        });
    } else {
        res.status(400).json({ msg: `No employee with an id of ${req.params.id}` });
    }
});

// Delete an employee
router.delete('/:id', (req, res) => {
    const index = employees.findIndex(employee => employee.id === parseInt(req.params.id));
    if(index >= 0) {
        employees.splice(index, 1);
        res.json({
            msg: 'employee was deleted',
            employee: employees
        });
    } else {
        res.status(400).json({ msg: `No employee with an id of ${req.params.id}` });
    }
});

module.exports = router;