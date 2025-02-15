# Command-Line Data Manager

This is a Node.js application that provides a command-line interface (CLI) for managing a simple data store. 
Users can add, delete, view, and manipulate stored data using various commands.

## Features

- **Add a Person**: Store details such as ID, city, age, first name, and last name.
- **Delete a Person**: Remove a person’s data by their ID.
- **Delete All**: Clear all stored data.
- **View All**: Display all stored data in a table format.
- **View One**: Find and display data for a specific person using their ID.

## Installation

1. Clone this repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd <repository-folder>
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Run commands using `node app.js <command> [options]`.

### Add a Person
```sh
node app.js add --id=1 --city="New York" --age="25" --first_name="John" --last_name="Doe"
```

### Delete a Person
```sh
node app.js delete --id=1
```

### Delete All Data
```sh
node app.js deleteAll
```

### View All Data
```sh
node app.js seeAll
```

### View a Specific Person
```sh
node app.js seeOne --id=1
```

## Dependencies

- `yargs` for handling CLI arguments
- `fs` for file system operations

## License

This project is open-source and available under the MIT License.
