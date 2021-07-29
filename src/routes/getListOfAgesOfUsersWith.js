'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    const itemToLookup = await request.query.item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    if(data){
    return response.status(200).send(JSON.stringify(data));
    }
    else{
        return response.status(500).send("Internal Server Error");
    }
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
