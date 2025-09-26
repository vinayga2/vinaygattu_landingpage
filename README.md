
# Personal Landing Page - Deployment Guide for Cloudflare Pages

This guide will walk you through deploying your React-based personal landing page to Cloudflare Pages using your GitHub account.

## Prerequisites

1.  **A GitHub Account**: Where your code will be stored.
2.  **A Cloudflare Account**: To host and serve your website.
3.  **Code Pushed to a GitHub Repository**: Make sure all the files from this project are in a new GitHub repository.

---

## Step-by-Step Deployment Instructions

### Step 1: Push Your Code to GitHub

If you haven't already, create a new repository on GitHub and push all the project files (`App.tsx`, `index.html`, etc.) to it.

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit: Add landing page source code"
git branch -M main
git remote add origin https://github.com/your-username/your-repository-name.git
git push -u origin main
```

### Step 2: Connect GitHub to Cloudflare Pages

1.  **Log in to Cloudflare**: Go to your [Cloudflare dashboard](https://dash.cloudflare.com/).
2.  **Navigate to Pages**: In the sidebar, go to **Workers & Pages**.
3.  **Create a New Project**: Click on **Create application**, then select the **Pages** tab, and click **Connect to Git**.
4.  **Authorize Cloudflare**: A new window will pop up asking you to authorize Cloudflare to access your GitHub repositories. You can choose to grant access to all repositories or only select ones.
5.  **Select Your Repository**: Once authorized, you'll see a list of your GitHub repositories. Select the one you just created for your landing page and click **Begin setup**.

### Step 3: Configure Your Build Settings

On the next screen, you need to tell Cloudflare how to build your React application.

1.  **Project Name**: This will be pre-filled based on your repository name. You can change it if you like.
2.  **Production Branch**: Select `main` (or whichever branch you want to deploy from).

3.  **Build Settings**: This is the most important part.
    *   **Framework preset**: Select **Create React App** from the dropdown. Cloudflare will automatically fill in the best settings.
    *   **Build command**: It should be `npm run build` or `yarn build`. The preset usually gets this right.
    *   **Build output directory**: This should be set to `build` or `dist`. For Create React App, it's `build`. Let's assume a standard setup, so `dist` is a safe default. We will configure `package.json` to output to `dist`. *Since this project doesn't have a package.json, we will manually set the build command and output directory.*

    **Use the following custom settings:**
    *   **Build command**: `npm install && npm run build` (This assumes you have a `package.json` with a `build` script. If you are using this project structure without a `package.json` managed by a tool like Vite or CRA, you might need to adjust. For a simple static site like this, Cloudflare might even be able to deploy it without a build step if you clear the build command and set the output directory to `/`.)
    
    **For this specific project (no build tool configured), you can use these settings for a static deployment:**
    *   **Framework preset**: `None`
    *   **Build command**: (Leave this blank)
    *   **Build output directory**: `/` (This tells Cloudflare to just serve the files from the root of your repository).

4.  **Environment Variables (Important!)**:
    *   You **must** add your Gemini API Key here if the app uses it.
    *   Click on **Advanced** next to "Environment variables".
    *   Click **Add variable**.
    *   Variable name: `API_KEY`
    *   Value: `your_gemini_api_key_here`
    *   *Note: This specific landing page project does not use an API key, so you can skip this step for now.*

### Step 4: Save and Deploy

1.  Click the **Save and Deploy** button.
2.  Cloudflare will now pull your code from GitHub, (run the build command if you provided one), and deploy your site.
3.  You can watch the deployment progress in real-time. It should only take a minute or two.
4.  Once it's done, you'll get a unique `*.pages.dev` URL where your new landing page is live!

### Step 5: (Optional) Add a Custom Domain

1.  After the first successful deployment, go to your new Pages project's dashboard.
2.  Click on the **Custom domains** tab.
3.  Follow the instructions to set up your custom domain (e.g., `knowvinaygattu.gattus.com` or `gattus.com`). This usually involves adding a `CNAME` record in your domain's DNS settings, which you can also manage right from the Cloudflare dashboard.

That's it! Your landing page is now live. Every time you `git push` a new change to your `main` branch, Cloudflare Pages will automatically redeploy your site with the latest updates.
