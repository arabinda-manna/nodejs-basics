'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Engineers', [
            {
                name: 'Arabinda Manna',
                createdAt: new Date(),
                updatedAt: new Date(),
                project_id: 1
            },
            {
                name: 'Abhisek Kundu',
                createdAt: new Date(),
                updatedAt: new Date(),
                project_id: 1
            },
            {
                name: 'Bala Karthika',
                createdAt: new Date(),
                updatedAt: new Date(),
                project_id: 2
            },
            {
                name: 'Saunak Sengupta',
                createdAt: new Date(),
                updatedAt: new Date(),
                project_id: 2
            },
            {
                name: 'Sujai Beniks',
                createdAt: new Date(),
                updatedAt: new Date(),
                project_id: 2
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Engineers', null, {});
    }
};
