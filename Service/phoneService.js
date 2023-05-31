const fs = require('fs');

module.exports = {
    async GetAllPhones(){
        const data = fs.readFileSync('./models/phones.json');
            return JSON.parse(data);
    },
    async Update(obj){
        var array = await this.GetAllPhones();
        var index = array.findIndex(x=>x.id==obj.id);
        array[index]=obj;
        saveChanges(array);
    },

    async Add(obj){
        var array = await this.GetAllPhones();
        var lastElem = array.slice(-1);
        obj.id=lastElem[0].id+1;
        array.push(obj)
        saveChanges(array);
    },
    async Delete(id) {
        var array = await this.GetAllPhones();
        var index = array.findIndex(item=>item.id==id);
        array.splice(index,1);
        saveChanges(array);
    }
}

function saveChanges(contacts) {
    fs.writeFileSync('./models/phones.json', JSON.stringify(contacts));
}