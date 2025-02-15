// ==========================================================
// Import required modules
// ==========================================================

// Import the 'yargs' package to handle command-line arguments.
const yargs = require("yargs");

// Import the custom data logic module that contains functions for data manipulation.
const DataLogic = require("./DataLogic");

// ==========================================================
// Add Command: Adds a new person to the data
// ==========================================================

yargs.command({
  command: "add",
  describe: "Add a new person to the database",
  builder: {
    id: {
      describe: "Person's unique ID",
      demandOption: true, // This option is required
      type: "number",
    },
    city: {
      describe: "City where the person lives",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "Person's age",
      demandOption: true,
      type: "string",
    },
    first_name: {
      describe: "Person's first name",
      demandOption: true,
      type: "string",
    },
    last_name: {
      describe: "Person's last name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Received Data:", argv); // Log received data before processing.

    // Call the function to add data
    DataLogic.AddData(
      Number(argv.id), // Ensure ID is treated as a number
      argv.city,
      argv.age,
      argv.first_name,
      argv.last_name
    );

    console.log(`You have added ${argv.first_name} ${argv.last_name}`);
  },
});

// ==========================================================
// Delete Command: Deletes a person from the data using their ID
// ==========================================================

yargs.command({
  command: "delete",
  describe: "Delete a person by ID",
  builder: {
    id: {
      describe: "Person's unique ID",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    console.log("Deleted Data:", argv); // Log the deleted person's details

    // Call the function to delete a person
    DataLogic.DeleteOne(argv.id);

    console.log(`You have deleted the person with ID: ${argv.id}`);
  },
});

// ==========================================================
// DeleteAll Command: Deletes all stored persons
// ==========================================================

yargs.command({
  command: "deleteAll",
  describe: "Delete all persons from the database",
  handler: () => {
    // Call the function to delete all records
    DataLogic.DeleteAll();

    console.log("All persons have been deleted.");
  },
});

// ==========================================================
// SeeAll Command: Displays all stored persons
// ==========================================================

yargs.command({
  command: "seeAll",
  describe: "Display all stored persons",
  handler: () => {
    // Call the function to retrieve and display all records
    DataLogic.SeeAll();
  },
});

// ==========================================================
// SeeOne Command: Displays a specific person's data by ID
// ==========================================================

yargs.command({
  command: "seeOne",
  describe: "Display data of a specific person using their ID",
  builder: {
    id: {
      describe: "Person's unique ID",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    // Call the function to find and display a specific person's data
    DataLogic.seeOne(argv.id);
  },
});

// ==========================================================
// Parse the command-line arguments and execute the corresponding command
// ==========================================================

yargs.parse();
