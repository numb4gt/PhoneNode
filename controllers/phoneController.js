const phoneService = require('../Service/phoneService');
const fs = require('fs');
module.exports = {

    async getMainPage(req, res, next){
        var data = await phoneService.GetAllPhones();
        res.render('phone/index',{
            list:data
          });
      },


    async GetUpdatePage(req, res, next){
        var data = await phoneService.GetAllPhones();
      res.render('phone/update',{
        id:+req.query.id,
        name:req.query.name,
        phone:req.query.phone,
        list:data
      });
    },

    async GetAddPage(req,res,next) {
        var data = await phoneService.GetAllPhones();
        res.render('phone/add',{
            list:data
          });
    },

    async UpdateContact(req,res,next){
        const phoneRegExp = new RegExp("^[0-9]{12}$");
        var phone = req.body.phone;
        if (phoneRegExp.test(phone)){
            const contact ={
                id: +req.body.id,
                name: req.body.name,
                phone: req.body.phone,
            } 
            await phoneService.Update(contact);
        }
        res.redirect("/phone");
    },

    async AddContact(req,res,next){
        const phoneRegExp = new RegExp("^[0-9]{12}$");
        var reg = '/^[0-9]{12}$/';
        var phone = req.body.phone;
        console.log(phone);
        console.log(phoneRegExp.test(phone));
        console.log("REG:" + reg.match(phone));
        if (phoneRegExp.test(phone)){
            console.log("REGEX YES");
            const contact ={
                id:0,
                name: req.body.name,
                phone: req.body.phone,
            } 
            await phoneService.Add(contact);
        }

        res.redirect("/phone");
    },

    async DeleteContact(req,res,next) {
        await phoneService.Delete(req.body.id);
        res.redirect("/phone");
    }


}