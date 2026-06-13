The Workflow:

    Static Generation: Nuxt doesn't need a live server to run your blog once it's built. You will run npm run generate. This creates a dist/ folder containing all your HTML, CSS, and JS.  

    GitHub Actions (Automation): You don't want to manually copy that dist/ folder every time you write a post. You should use a GitHub Action.

        You create a file in your repository (e.g., .github/workflows/deploy.yml).

        Whenever you push a change to your main branch, GitHub will automatically:

            Spin up a virtual machine.

            Install your dependencies.

            Run npm run generate.

            Upload the result to the gh-pages branch, making your site live in seconds.

    Connecting your Domain: Once your site is live on yourname.github.io, you go to your repository Settings > Pages > Custom Domain and enter openquery.dev. You’ll then add a CNAME record to your domain registrar (where you bought the name) pointing to your GitHub Pages address.
