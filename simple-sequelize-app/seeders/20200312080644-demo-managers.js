'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Managers', [
            {
                name: 'Rajashri Ghosh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Luv Mehta',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Managers', null, {});
    }
};
