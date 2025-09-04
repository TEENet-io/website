#!/bin/bash

# Build the static site
echo "Building the site..."
npm run build

# Navigate to the output directory
cd out

# Initialize git in the out directory
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the gh-pages branch
# Replace USERNAME and REPO with your GitHub username and repository name
git push -f git@github.com:TEENet-io/website.git main:gh-pages

cd ..

echo "Deployment complete!"