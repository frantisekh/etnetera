# Etnetera Coding Task

This project is an implementation of a web page based on a provided design (`design.png`). The focus is on creating a responsive, accessible, and performant front-end experience.

## Technologies Used

*   HTML5
*   SCSS (using BEM methodology)
*   JavaScript (Vanilla JS / jQuery - as per project guidelines)
*   Node.js & npm for build processes
*   [Sass](https://sass-lang.com/) for CSS preprocessing
*   [BrowserSync](https://browsersync.io/) for live reloading and development server
*   [npm-run-all](https://github.com/mysticatea/npm-run-all) for running npm scripts concurrently

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/frantisekh/etnetera.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Available Scripts

*   **`npm start`**:
    *   Copies all source files to `dist/` directory.
    *   Compiles SCSS to CSS with live watch mode.
    *   Starts a local development server using BrowserSync (serving the `dist` directory).
    *   Watches for changes in HTML files and automatically copies them.
    *   Runs all processes concurrently using npm-run-all.

*   **`npm run build`**:
    *   Compiles SCSS to compressed CSS (`dist/css/style.css`).
    *   Minifies JavaScript using Terser.
    *   Copies HTML and image files to the `dist` directory for production use.

*   **`npm run sass`**:
    *   Watches SCSS files in `src/scss` and compiles them to `dist/css`.

*   **`npm run serve`**:
    *   Starts the BrowserSync server serving the `dist` directory.

*   **`npm run copy`**:
    *   Runs all copy tasks:
        *   `copy:html`: Copies HTML files from `src` to `dist`.
        *   `copy:js`: Copies JavaScript files from `src/js` to `dist/js`.
        *   `copy:images`: Copies images from `src/images` to `dist/images`.

*   **`npm run build:css`**:
    *   Compiles SCSS to compressed CSS for production.

*   **`npm run build:js`**:
    *   Minifies JavaScript files using Terser with module support.

## Dependencies

### Development Dependencies
*   [Sass](https://sass-lang.com/) ^1.71.1 - CSS preprocessor
*   [BrowserSync](https://browsersync.io/) ^2.29.3 - Development server with live reload
*   [npm-run-all](https://github.com/mysticatea/npm-run-all) ^4.1.5 - Run multiple npm scripts
*   [onchange](https://github.com/Qard/onchange) ^7.1.0 - Watch for file changes
*   [Terser](https://terser.org/) ^5.39.0 - JavaScript minifier

## Project Structure

*   `src/`: Contains the source files (HTML, SCSS, JS, images).
*   `dist/`: Contains the compiled and copied files for deployment/serving.
*   `_project-guide.md`: General guidelines for the project.
*   `_project-progress.md`: Tracks the implementation progress.
*   `design.png`: The target design for the web page. 