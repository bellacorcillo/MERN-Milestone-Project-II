const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'your-database-name'; // Replace with your MongoDB database name

async function seedHistoricalLocations() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    // Define the initial historical locations
    const historicalLocations = [
      {
        name: 'Historical Site 1',
        description: 'A significant historical landmark in Las Vegas',
      },
      {
        name: 'Historical Site 2',
        description: 'An important historical museum',
      },
      // Add more historical locations as needed
    ];

    // Insert the historical locations into the MongoDB collection
    const result = await db.collection('historical').insertMany(historicalLocations);
    console.log(`${result.insertedCount} historical locations seeded successfully`);

    client.close();
  } catch (error) {
    console.error('Error seeding historical locations:', error);
  }
}

seedHistoricalLocations();