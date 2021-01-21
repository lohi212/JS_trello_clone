const express = require('express');
const app = express();
app.use(express.static('public/'));

const tasks = [{
    name: 'Task 1',
    status: 'TODO',
},
{
    name: 'Task 2',
    status: 'IN_PROGRESS',
},
{
    name: 'Task 3',
    status: 'DONE',
}
];
app.get('/test-url', (req, res) => {
    res.json({ tasks });
});

app.post('/test-post', (req, res) => {
    console.log(req.body);
  });
  
app.listen(1234, () => {
    console.log('server started on PORT:', 1234);
})