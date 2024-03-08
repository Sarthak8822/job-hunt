## Getting Started

# Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Sarthak8822/job-hunt
   
2. Create a .env file in the root of the project and add your configuration:

    ```env
    API_URL=your_jsearch_api_url_with_search_endpoint
    JOBDETAILS_API_URL=your_jsearch_api_url_with_job-details_endpoint
    RAPIDAPI_KEY=your_api_key_1,your_api_key_2,your_api_key_3
    RAPIDAPI_HOST=jsearch.p.rapidapi.com

  Replace your_api_key_1 etc., your_jsearch_api_url_with_search_endpoint, your_jsearch_api_url_with_job-details_endpoint with your actual API keys and MongoDB configuration.

3. Install dependencies:

    ```env
    npm install

4. Run the application::

    ```env
    npm run dev
    


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
