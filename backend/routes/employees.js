const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const empid = req.body.empid;
  const name = req.body.name;
  const company = req.body.company;
  const role = req.body.role;
  const password = req.body.password;
  const email = req.body.email;

  const newEmployee = new Employee({empid,name,company,role,password,email});

  newEmployee.save()
    .then(() => res.json('Employee added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
  Employee.findById(req.params.id)
  .then(employees => res.json(employees))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) =>{
  Employee.findByIdAndDelete(req.params.id)
  .then(() => res.json('Employee deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) =>{
  Employee.findById(req.params.id)
  .then(employees =>{
    employees.empid = req.body.empid;
  employees.name = req.body.name;
  employees.company = req.body.company;
  employees.role = req.body.role;
  employees.password = req.body.password;
  employees.email = req.body.email;

  employees.save()
  .then(() => res.json('Employee updated!'))
  .catch(err => res.status(400).json('Error: '+ err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;