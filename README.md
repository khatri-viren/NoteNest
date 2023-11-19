# NoteNest

NoteNest is a minimalist note-taking app that enhances productivity and organization with its clean design and efficient functionality.

## Table of Contents

- [NoteNest](#notenest)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
    - [Client Side](#client-side)
    - [Server Side](#server-side)
  - [Getting Started](#getting-started)
    - [Client Setup](#client-setup)
    - [Server Setup](#server-setup)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Create, edit, and delete notes
- Clean and intuitive user interface
- Real-time updates with server integration
- Markdown support for rich text formatting 

## Technologies

### Client Side

- React
- Tailwind CSS
- Axios for HTTP requests

### Server Side

- Node.js
- Express.js
- MongoDB with Mongoose for data storage

## Getting Started

### Client Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/khatri-viren/NoteNest.git
   ```

2. Navigate to the client directory:

   ```bash
   cd NoteNest/client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`.

### Server Setup

1. Navigate to the server directory:

   ```bash
   cd NoteNest/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the MongoDB connection:

   - Create a `.env` file in the `server` directory.
   - Add your MongoDB connection string:

     ```env
     MONGODB_URI=your-mongodb-uri
     ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The server will run at `http://localhost:4000`.

## Usage

- Open the app in your browser.
- Create a new note, edit existing notes, or delete them.
- Enjoy a simplified and efficient note-taking experience!

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
