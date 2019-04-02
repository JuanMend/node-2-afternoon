const express = require('express');
const app = express();
const {create,read,update,Delete} = require('./controllers/messages_controller')
const PORT = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', create)
app.get('/api/messages', read)
app.put('/api/messages/:id', update)
app.delete('/api/messages/:id', Delete)



app.listen(PORT, () =>{
    console.log(`${PORT}`)
})