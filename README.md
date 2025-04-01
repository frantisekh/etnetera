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
2.  **Navigate to the project directory:**
    ```bash
    cd etnetera
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Available Scripts

*   **`npm start`**:
    *   Compiles SCSS to CSS (`dist/css/style.css`).
    *   Copies HTML (`src/index.html` to `dist/`) and JavaScript (`src/js/*` to `dist/js/`).
    *   Starts a local development server using BrowserSync (serving the `dist` directory).
    *   Watches for changes in SCSS, HTML, and JS files and automatically recompiles/reloads the browser.

*   **`npm run build`**:
    *   Compiles SCSS to compressed CSS (`dist/css/style.css`).
    *   Copies HTML and JavaScript files to the `dist` directory for production use.

*   **`npm run sass`**:
    *   Watches SCSS files in `src/scss` and compiles them to `dist/css`. (Used internally by `npm start`).

*   **`npm run serve`**:
    *   Starts the BrowserSync server. (Used internally by `npm start`).

*   **`npm run copy`**:
    *   Copies HTML and JS files from `src` to `dist`. (Used internally by `npm start` and `npm run build`).

## Project Structure

*   `src/`: Contains the source files (HTML, SCSS, JS, images).
*   `dist/`: Contains the compiled and copied files for deployment/serving.
*   `_project-guide.md`: General guidelines for the project.
*   `_project-progress.md`: Tracks the implementation progress.
*   `design.png`: The target design for the web page. 