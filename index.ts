'use strict';

import Hapi = require('@hapi/hapi');
import {DeveloperCollection} from "./models/DeveloperCollection";
import {Developer} from "./models/Developer";

const init = async () => {

    var developerCollection = new DeveloperCollection();

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/developers',
        handler: (request, h) => {


            return 'Hello World!';
        }
    });


    server.route({
        method: 'POST',
        path: '/developers',
        handler: (request, h) => {

            // create a developers

            return 'Hello World!';
        }
    });


    server.route({
        method: 'GET',
        path: '/developers/{developerId}',
        handler: (request, h) => {

            // get a specific developer

            return 'Hello World!';
        }
    });


    server.route({
        method: 'PATCH',
        path: '/developers/{developerId}',
        handler: (request, h) => {

            // update a specific developer

            return 'Hello World!';
        }
    });


    server.route({
        method: 'DELETE',
        path: '/developers/{developerId}',
        handler: (request, h) => {

            // shoot a developer

            return 'Hello World!';
        }
    });




    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();