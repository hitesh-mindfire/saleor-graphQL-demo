# Next.js 14 E-commerce App

This repository houses the frontend for an e-commerce platform built with Next.js 14. The app leverages GraphQL for querying data and Apollo Client for managing state. It is deployed on Vercel and fetches data from Saleor's default storefront.

## Features

- Contains Product Listing Page and Product Details Page
- Fetches and displays product information from the Saleor storefront using GraphQL.
- Implements Apollo Client for optimized data fetching and state management.
- Deployed on Vercel for easy access and scalability.

## Technologies Used

- **Next.js 14**: A React framework for building server-side rendered applications.
- **Apollo Client**: tate management and GraphQL client for efficient data queries..
- **GraphQL**: A query language for APIs.
- **Vercel**: A platform for frontend frameworks and static sites.

## Getting Started Locally

Follow these steps to set up and run the project locally:

```bash
Step 1: Clone the Repository
git clone https://github.com/hitesh-mindfire/saleor-graphQL-demo
cd your-repo-name

Step 2: Install Dependencies
npm install

Step 3: Set Up Environment Variables
Rename .env.example to .env.local file in the root of your project and replace "YOUR_GENERATED_SALEOR_API" with the API url you will generate from the Saleor Account:
- Login here https://cloud.saleor.io/graphql/ and get the graphQL API Url


Step 4: Run the Development Server
npm run dev
The app will run on http://localhost:3000.

Step 5: Open Your Browser
Navigate to http://localhost:3000 in your browser to see the application running.
```
