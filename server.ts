const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies

app.get('/status', (req: any, res: any) => {
    console.log(req.body);
    console.log('status success');
    res.send('OK');
});

app.get('/api/success', (req: any, res: any) => {
    console.log(req.body);
    console.log('get success');
    res.send({success: true});
});

app.put('/api/success', (req: any, res: any) => {
    console.log(req.body);
    console.log('put success');
    res.send({success: true});
});

app.post('/api/success', (req: any, res: any) => {
    console.log(req.body);
    console.log('post success');
    res.send({success: true});
});

app.delete('/api/success', (req: any, res: any) => {
    console.log(req.body);
    console.log('delete success');
    res.send({success: true});
});

app.listen(8080, () => {
    console.log('Express app listening on port 8080!');
});
