const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Lakshmeesh', lastName: 'Lakki' },
    { id: 1, firstName: 'Amit', lastName: 'RP' },
    { id: 1, firstName: 'Harsha', lastName: 'K' },
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 1, firstName: 'Brad', lastName: 'Traversy' },
    { id: 1, firstName: 'Karen', lastName: 'Smith' },
    { id: 1, firstName: 'Akash', lastName: 'D' },
    { id: 1, firstName: 'Rakesh', lastName: 'R' },
    { id: 1, firstName: 'Karthik', lastName: 'K' },
    { id: 1, firstName: 'Lohit', lastName: 'R' },
    { id: 1, firstName: 'Lokesh', lastName: 'LK' },
    { id: 1, firstName: 'Rohit', lastName: 'MR' }
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server Started at port ${port}`));
