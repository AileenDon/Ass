# Assignment

## Section 2: React (my-app folder)

### Code Structure

Counter.js: The main component file that defines the counter functionality using React hooks.Use useState to manage the counter's state.

App.js: Imports and renders the Counter componen and provides buttons to increase or decrease the count.

### Screenshoots

<img width="288" alt="Screenshot 2024-11-02 at 5 22 56 PM" src="https://github.com/user-attachments/assets/b443e4a8-d50e-473b-b18f-cefdbed3859e">
<img width="259" alt="Screenshot 2024-11-02 at 5 23 01 PM" src="https://github.com/user-attachments/assets/7c0ed161-d390-435f-987d-5e66d42e70af">

## Section 3

### Code Structure

Provides a GET /message endpoint that responds with { "message": "Hello, World!" }.
Uses Express to set up the server and handle requests.

### Usage

Start the server: `node app.js`

Access the endpoint at http://localhost:3000/message to receive the JSON response.

### Screenshoots

<img width="360" alt="Screenshot 2024-11-02 at 9 38 50 PM" src="https://github.com/user-attachments/assets/85ca3367-6d89-48dd-aaf4-295d52bcdb26">

## Section 4

### Code Structure

public/data.json: Contains static JSON data with the items list.

<img width="358" alt="Screenshot 2024-11-02 at 9 44 19 PM" src="https://github.com/user-attachments/assets/fb3667e8-ac7e-4d81-8464-2285fbab7ac9">

pages/items.js: The main page component that fetches data using getStaticProps and displays it.

### Usage

Start the Next.js development server: `npm run dev`

Open http://localhost:3000/items in the browser to view the list of items.

### Screenshoots

<img width="328" alt="Screenshot 2024-11-02 at 7 34 54 PM" src="https://github.com/user-attachments/assets/6173389d-aa00-47b6-88cb-5baec4d990e7">

## Section 5

### Create the users Table

id SERIAL PRIMARY KEY: Creates an auto-incrementing primary key for unique user identification.

name VARCHAR(100): Defines the user’s name with a character limit.

email VARCHAR(100) UNIQUE: Stores the email and ensures that each email is unique.

<img width="258" alt="Screenshot 2024-11-02 at 8 01 14 PM" src="https://github.com/user-attachments/assets/984ace9b-8b26-4346-9d8c-2f69c27b5fb4">

### Insert a Sample User

<img width="568" alt="Screenshot 2024-11-02 at 8 01 20 PM" src="https://github.com/user-attachments/assets/ec3b4d6b-aa3c-47ff-8946-a9d9da5596aa">

### Output

<img width="268" alt="Screenshot 2024-11-02 at 8 01 24 PM" src="https://github.com/user-attachments/assets/c824d139-1d68-411b-8457-f128c5dbc8f3">

## Section 7

### Installation

This plugin was developed and tested in a local WordPress environment using Local by Flywheel.

In the WordPress wp-content/plugins directory, create a folder named greeting-plugin.

Inside the greeting-plugin folder, create a PHP file named greeting-plugin.php and add the plugin code.

### Activate the Plugin

Go to the WordPress admin dashboard, navigate to Plugins > Installed Plugins.

Find "Greeting Plugin" and activate.

### Usage

Add the shortcode [greeting] to any post or page to display the message "Welcome to My Site!".

### Screenshot

<img width="718" alt="Screenshot 2024-11-02 at 9 08 09 PM" src="https://github.com/user-attachments/assets/cdf1177c-936c-49fe-91fe-fd2ba4c5125a">
