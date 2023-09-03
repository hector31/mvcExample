let express = require('express');
let app  = express();
let port = process.env.PORT || 3000; 

app.get('/',function(req, res){
    res.send('<html><head><body><h1>Hello world!!</h1></body></head></html>')
});

app.get('/person/:id',function(req, res){
    res.send('<html><head><body><h1>Person: '+req.params.id+'</h1></body></head></html>')
});

app.get('/api', function(req,res){
    res.json({firstname:"john",lastname:"doe"})
});
// start server
app.listen(port);
