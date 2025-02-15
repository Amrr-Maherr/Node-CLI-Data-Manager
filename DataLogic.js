// ==========================================================
// Import required modules
// ==========================================================

// Import the 'fs' module to handle file operations.
const fs = require("fs");

// ==========================================================
// Function to Load Data from 'Data.json'
// ==========================================================

const LoadData = () => {
  try {
    // Read the file content and convert it to a string
    const AllData = fs.readFileSync("Data.json").toString();

    // Parse the string into a JavaScript object (array)
    return JSON.parse(AllData);
  } catch (error) {
    // If the file doesn't exist or there's an error, return an empty array
    return [];
  }
};

// ==========================================================
// Function to Add a New Person to the Data File
// ==========================================================

const AddData = (id, city, age, first_name, last_name) => {
  const AllData = LoadData(); // Load existing data

  // Add the new person's data to the array
  AllData.push({ id, city, age, first_name, last_name });

  // Save the updated data back to the file
  SaveData(AllData);
};

// ==========================================================
// Function to Delete a Specific Person by ID
// ==========================================================

const DeleteOne = (id) => {
  const AllData = LoadData(); // Load existing data

  // Filter out the person with the given ID
  const filteredData = AllData.filter((ele) => ele.id !== id);

  // Save the updated data
  SaveData(filteredData);
};

// ==========================================================
// Function to Delete All Stored Data
// ==========================================================

const DeleteAll = () => {
  SaveData([]); // Overwrite the file with an empty array
  console.log("All data has been deleted successfully.");
};

// ==========================================================
// Function to Display All Stored Persons
// ==========================================================

const SeeAll = () => {
  const AllData = LoadData(); // Load existing data
  console.table(AllData); // Display data in a table format
};

// ==========================================================
// Function to Display a Specific Person's Data by ID
// ==========================================================

const seeOne = (id) => {
  const AllData = LoadData(); // Load existing data

  // Find the person with the given ID
  const found = AllData.find((ele) => ele.id === id);

  // Display the person's data in table format
  console.table(found);
};

// ==========================================================
// Function to Save Data Back to 'Data.json' After Modification
// ==========================================================

const SaveData = (AllData) => {
  // Convert the data array into a JSON-formatted string
  const StringData = JSON.stringify(AllData);

  // Write the JSON data to the file
  fs.writeFileSync("Data.json", StringData);
};

// ==========================================================
// Exporting Functions to Make Them Available in Other Modules
// ==========================================================

module.exports = {
  AddData,
  DeleteOne,
  DeleteAll,
  SeeAll,
  seeOne
};
