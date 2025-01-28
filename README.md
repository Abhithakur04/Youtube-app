# YouTube Clone

This project is a clone of the popular video-sharing platform YouTube, built with modern front-end technologies including React, Redux Toolkit, TailwindCSS, and other libraries. It mimics the core functionality of YouTube, ensuring a smooth and dynamic user experience through features like real-time search suggestions, nested comments, live chat using API polling, and lazy loading.

## Features

- **YouTube Video List**: The app displays a paginated list of YouTube videos fetched from the YouTube API with lazy loading for performance optimization.
  
- **YouTube Video Preview**: Clicking on a video from the list opens a preview window that displays the selected video along with its title, description, and view count.

- **Real-Time Search Suggestions with Debouncing**: As the user types in the search bar, the app suggests relevant queries. The search is debounced to optimize performance by waiting until the user stops typing before fetching results.

- **Search Caching**: Results from previous searches are cached to reduce unnecessary API calls. This ensures faster performance for repeated searches.

- **Optimized API Calls with Debouncing**: Debouncing is applied to API calls to reduce load and improve user experience when interacting with the app, such as when scrolling through the video list.

- **Nested Comments Section**: The app includes a comments section for each video, allowing users to view and post comments in a threaded format.

- **Live Chat Using API Polling**: The app provides a live chat feature, where messages are fetched in real-time via API polling, allowing users to send and receive messages dynamically.



## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhithakur04/YouTube-app.git
2. Install the dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and add your YouTube API key:
   ```bash
   GOOGLE_API_KEY=<your-api-key>
4. Start the development server:
   ```bash
   npm start
5. Open your browser and navigate to:
   ```bash
   http://localhost:5173

Usage
To use this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd YouTube_Clone
2. Install the dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and add your YouTube API key as:
    ```bash
   GOOGLE_API_KEY=<your-api-key>
4. Start the development server:
   ```bash
   npm start
5. Open your web browser and navigate to:
   ```bash
   http://localhost:5173


## Dependencies

This project uses the following dependencies:

- **React**: The core library for building the user interface.
- **Redux Toolkit**: For state management and simplified Redux store setup.
- **Moment**: For date and time formatting.
- **React Icons**: For providing icons within the application.
- **React Router DOM**: For routing between different pages.
- **TailwindCSS**: A utility-first CSS framework for styling.

These dependencies are listed in the `package.json` file.
