# Grain+ Logistics Website

This is the frontend repository for the Grain+ Logistics company website, built with React. It serves as a modern, responsive platform to showcase the company's services, projects, and corporate identity.

## ✨ Features

Based on the current implementation, the website includes:

- **Dynamic Content:** Most of the text and image content is managed through centralized data files in `src/data`, making it easy to update.
- **Core Services Display:** Sections dedicated to showcasing key services like:
  - Road, Sea, and Air Freight Forwarding
  - Road, Sea, and Air Freight Forwarding
  - Customs Clearance
  - Warehousing & Storage
  - Transportation
- **Company Information:** An "About Us" section with details on company history, mission, and vision, plus a team showcase.
- **Project Showcase:** A gallery to display completed projects and major clients.
- **Latest News:** A section for company news and industry insights.
- **Performance Metrics:** Visual components to display statistics like on-time delivery rates and network coverage.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- Node.js
- npm

### Installation

1.  Clone the repo (replace `your-username` with your actual GitHub username after you upload it).
    ```sh
    git clone https://github.com/your-username/Grain-.git
    ```
2.  Navigate to the project directory.
    ```sh
    cd Grain+
    ```
3.  Install NPM packages.
    ```sh
    npm install
    ```

### Running the Application

To run the app in development mode:

```sh
npm start
```

Open http://localhost:3000 to view it in the browser. The page will reload automatically when you make edits.

### Building for Production

To create a production-ready build:

```sh
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 📁 Project Structure

The project follows a standard React application structure. A key directory to note is:

- `src/data/`: This folder contains JavaScript files that export data arrays and objects. This approach centralizes the site's content (text, links, image paths), making it easy to manage and update without touching the component logic.
