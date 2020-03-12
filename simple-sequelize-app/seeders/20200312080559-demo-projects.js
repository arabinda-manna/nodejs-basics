'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Projects', [
            {
                id: 1,
                name: 'Billing Project',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                name: 'Keyless Project',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Projects', null, {});
    }
};
