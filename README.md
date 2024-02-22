# britannica

# Description
This application showcases sustainable fashion brands, allowing users to explore various eco-friendly fashion options. Each brand is featured with details including name, description, likes, rating, and an about section. The app includes dynamic routing to display individual brand pages and a server action simulated by a "Like" button, which increments the likes count for each brand.

# Running the Application
To run this application, follow these steps:

Clone the Repository: Clone the project repository to your local machine.

Install Dependencies: Navigate to the root directory of the project in your terminal and run npm install to install the required dependencies.

Start the Development Server: Run npm run dev to start the Next.js development server. By default, the app will be available at http://localhost:3003.

Navigate the App: Open your web browser and go to http://localhost:3003 to view the application. You can explore the list of sustainable fashion brands and click on any brand to view its detailed profile.

## Features
# Dynamic Route
Brand Details Page: Each brand has its own unique URL based on its ID, allowing users to directly access the brand's detailed page. This is achieved through Next.js dynamic routing, using the /[id]/page.tsx file within the pages directory.
# Server Action/API Route Functionality
Like Button: Each brand's detail page includes a "Like" button. Clicking this button will increment the likes count for the brand. This action is simulated on the client side due to the static nature of the JSON data and does not persist between page reloads. In a real-world scenario, this would involve an API call to update the brand's likes count in a database.
# Key Files and Directories
src/page.tsx: The main page displaying a grid of all sustainable fashion brands.
pages/[id]/page.tsx: The dynamic page for brand details, including the like button functionality.
public/brands.json: The static JSON file containing data for all the sustainable fashion brands.
# Note
This application is designed for demonstration purposes and simulates server actions (like incrementing likes) on the client side. For persistent data storage and real-time updates, integrating a backend service or database would be required.

