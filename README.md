# Better Together Website

This repository contains the source code for the Better Together Website, a Vue.js 2 application powering [bebettertogether.ca](https://bebettertogether.ca/).

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## About

The Better Together Website is the official site for the Better Together Community Cooperative and Community Engine projects. It serves as a central hub for information, updates, and resources related to the Better Together initiative, which aims to foster collaboration, communication, and connection within and across communities.

## Features

- Informative sections about the Better Together Community Engine
- Responsive design optimized for both desktop and mobile devices
- Integration with the Better Together Community Engine Rails gem
- Live chat and discussion forums
- Role-based access control
- Multi-language support with Rails' I18n tooling
- Dynamic user experiences with Turbo and Stimulus

## Installation

To get started with the development of the Better Together Website, follow these steps:

## Installation

To get started with the development of the Better Together Website, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/better-together-org/better-together-website.git
   cd better-together-website
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run serve
   ```

   The application will be available at `http://localhost:8080`.

## Usage

### Running the Application

To run the application locally, use the following command:

```sh
npm run serve
```

### Building for Production

To build the application for production, use the following command:

```sh
npm run build
```

This will generate the static files in the `dist` directory, which can be served by a web server.

## Development

### Code Structure

The codebase is organized as follows:

- `src/`: Contains the source code for the application.
- `components/`: Reusable Vue components.
- `views/`: Vue components representing different pages.
- `assets/`: Static assets such as images and styles.
- `router/`: Vue Router configuration.
- `store/`: Vuex store configuration.

### Scripts

- `npm run serve`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints and fixes files.

### Environment Variables

Create a `.env` file in the root directory to configure environment variables. For example:

```env
VUE_APP_API_URL=https://api.bebettertogether.ca
```

## Contributing

We welcome contributions to the Better Together Website! If you would like to contribute, please follow these steps:

1. **Fork the repository:**

   Click the "Fork" button at the top right corner of this page to create a copy of the repository in your GitHub account.

2. **Clone your fork:**

   ```sh
   git clone https://github.com/your-username/better-together-website.git
   cd better-together-website
   ```

3. **Create a new branch:**

   ```sh
   git checkout -b feature-branch-name
   ```

4. **Make your changes:**

   Add your changes and commit them with a descriptive message.

5. **Push your changes to your fork:**

   ```sh
   git push origin feature-branch-name
   ```

6. **Create a pull request:**

   Go to the original repository and click the "New Pull Request" button. Provide a clear description of your changes and why they should be merged.

