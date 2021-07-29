'use strict';
const mockDBCalls = require('../database/index.js');

const getUsersHandler = async (request, response) => {
    const data = await mockDBCalls.getUsers();

    if(data){
        return response.status(200).send(JSON.stringify(data));
    }
    else{
        return response.status(500).send('Internal Server Error');
    }
};

module.exports = (app) => {
    app.get('/users', getUsersHandler);
};
