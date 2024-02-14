const sequelize = require('./config/connection');
const fs = require('fs');
const path = require('path');

const sqlFilePath = path.join(__dirname, './db/seeds.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

async function seedDatabase() {
    try {
        await sequelize.sync({ force: true });
        await sequelize.query(sql);
        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();