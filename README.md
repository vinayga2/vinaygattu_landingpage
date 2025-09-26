# Personal Landing Page - Deployment Guide for Cloudflare Pages

This guide will walk you through deploying your React-based personal landing page to Cloudflare Pages using your GitHub account. This project is built with Vite.

## Prerequisites

1.  **A GitHub Account**: Where your code will be stored.
2.  **A Cloudflare Account**: To host and serve your website.
3.  **Node.js and npm**: Required for installing dependencies. You can download them [here](https://nodejs.org/).
4.  **Code Pushed to a GitHub Repository**: Make sure all the files from this project are in a new GitHub repository.

---

## Step-by-Step Deployment Instructions

### Step 1: Install Dependencies and Push to GitHub

First, you need to ensure all the necessary libraries are installed so Cloudflare can build the project.

1.  **Install dependencies**: Open your terminal in the project folder and run:
    ```bash
    npm install
    ```
    This will create a `node_modules` folder and a `package-lock.json` file.

2.  **Push to GitHub**: Create a new repository on GitHub and push all project files, including `package-lock.json`.
    ```bash
    # In your project folder
    git init
    git add .
    git commit -m "Initial commit: Add landing page source code with Vite setup"
    git branch -M main
    git remote add origin https://github.com/your-username/your-repository-name.git
    git push -u origin main
    ```

### Step 2: Connect GitHub to Cloudflare Pages

1.  **Log in to Cloudflare**: Go to your [Cloudflare dashboard](https://dash.cloudflare.com/).
2.  **Navigate to Pages**: In the sidebar, go to **Workers & Pages**.
3.  **Create a New Project**: Click on **Create application**, select the **Pages** tab, and click **Connect to Git**.
4.  **Authorize Cloudflare**: Authorize Cloudflare to access your GitHub repositories.
5.  **Select Your Repository**: Select the repository you just created and click **Begin setup**.

### Step 3: Configure Your Build Settings

On the next screen, you need to tell Cloudflare how to build your Vite application.

1.  **Project Name**: This will be pre-filled. You can change it if you like.
2.  **Production Branch**: Select `main`.

3.  **Build Settings**: This is the most important part.
    *   **Framework preset**: Select **Vite** from the dropdown. Cloudflare will automatically fill in the correct settings for you.
    *   **Build command**: It should be `npm run build`.
    *   **Build output directory**: This should be set to `dist`.

4.  **Environment Variables**:
    *   This specific landing page project does not use an API key, so you can skip this step for now. If you add features that need one later, you can add it here.

### Step 4: Save and Deploy

1.  Click the **Save and Deploy** button.
2.  Cloudflare will now pull your code from GitHub, run `npm install` and `npm run build`, and deploy the contents of the `dist` folder.
3.  You can watch the deployment progress in real-time. It should only take a minute.
4.  Once it's done, you'll get a unique `*.pages.dev` URL where your new landing page is live and fully working!

### Step 5: (Optional) Add a Custom Domain

1.  Go to your new Pages project's dashboard.
2.  Click on the **Custom domains** tab.
3.  Follow the instructions to set up your custom domain (e.g., `knowvinaygattu.gattus.com`). This involves adding a `CNAME` record in your domain's DNS settings, which you can manage right from Cloudflare.

That's it! Every time you `git push` a new change to your `main` branch, Cloudflare Pages will automatically rebuild and redeploy your site.