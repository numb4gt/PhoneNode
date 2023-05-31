const authorController = require('../controllers/phoneController')

module.exports = app => {
    app.get('/phone', authorController.getMainPage);
    app.get('/phone/update', authorController.GetUpdatePage);
    app.get('/phone/add', authorController.GetAddPage);
    app.post('/phone/update',authorController.UpdateContact);
    app.post('/phone/add',authorController.AddContact);
    app.post('/phone/delete', authorController.DeleteContact);
}