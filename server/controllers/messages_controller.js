

let msgArray = [];
let id = 0;


const create = (req,res) => {
    let newMessage = {
        time: req.body.time,
        text: req.body.text,
        id: id
    }
    id+=1;
    msgArray.push(newMessage);
    res.json(msgArray)
}

const read = (req,res) => {
 res.json(msgArray)
}

const update = (req,res) => {
    const messageIndex = msgArray.findIndex(message => message.id == req.params.id);
    msgArray[messageIndex].text = req.body.text;
    res.status(200).json(msgArray)

}

const Delete = (req,res) => {
  const  messageIndex = msgArray.findIndex(message => message.id == req.params.id);
  msgArray.splice(messageIndex,1);
  res.json(msgArray)


}

module.exports = {
    create,
    read,
    update,
    Delete
}