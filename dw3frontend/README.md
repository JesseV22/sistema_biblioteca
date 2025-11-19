# dw3frontend

## Project Overview
The `dw3frontend` project is a web application designed to provide a user-friendly interface for managing authors and user authentication. It utilizes Nunjucks as the templating engine and follows a modular structure for better maintainability.

## Project Structure
```
dw3frontend
├── apps
│   ├── autores
│   │   ├── controller
│   │   │   └── ctlAutores.js
│   │   ├── validate
│   │   │   └── vldAutores.js
│   │   └── view
│   │       ├── vwManutAutores.njk
│   │       ├── vwFCrAutores.njk
│   │       └── vwFRUDrAutores.njk
│   ├── home
│   │   └── view
│   │       └── index.njk
│   ├── login
│   │   ├── controller
│   │   │   └── ctlLogin.js
│   │   ├── validate
│   │   │   └── vldLogin.js
│   │   └── view
│   │       ├── vwLogin.js
│   │       └── vwLogin.njk
│   └── templates
│       ├── base.html
│       ├── menuLeft.html
│       ├── footer.html
│       └── pageModel.njk
├── routes
│   ├── rtIndex.js
│   ├── rtLogin.js
│   └── rtAutores.js
├── package.json
├── srvDW3Front.js
├── srvDW3Front.env
└── README.md
```

## Installation
To get started with the `dw3frontend` project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd dw3frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the application, use the following command:
```
node srvDW3Front.js
```

Make sure to configure your environment variables in the `srvDW3Front.env` file before starting the server.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.