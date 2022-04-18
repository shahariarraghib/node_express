const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors')
app.use(cors());
app.use(express.json());

// const handler = (req, res) =>{
//     res.send('hello from node');
// }

// app.get('/', (req, res) =>{
//     res.send('hello from node');
// });
const users = [
  { id: 0, name: 'shabana', email: 'shabana@gmail.com' },
  { id: 1, name: 'shabnoor', email: 'shabnoor@gmail.com' },
  { id: 2, name: 'shoniya', email: 'shoniya@gmail.com' }
]

app.get('/users', (req, res) => {
  res.send(users)
});

// app.method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body)
  // res.send('post');
  res.json(newUser);
})

// dynamic api

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id]
  res.send(user);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send("yummy yummy")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



