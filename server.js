const express = require('express');
const app = express();
app.use('/', express.static('public'));
const tasks = [{
    name: 'Demo',
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
    
    //tasks.forEach(x => console.log(x))
});

app.listen(1234, () => {
    console.log('server started on PORT:', 1234);
})