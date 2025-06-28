#Namaste React

Here are some git commands
# 1. Initialize a new Git repository
git init

# 2. Add files to staging
git add App.js
git add index.html
git add index1.html

# 3. Commit the changes with a message
git commit -m "InitialCode"

# 4. Rename the default branch to 'main'
git branch -M main

# 5. Add the remote repository (SSH URL)
git remote add origin git@github.com:iamaniket58/NamasteReact.git

# 6. Generate SSH key (only run once if not generated)
ssh-keygen -t ed25519 -C "iamaniket58@gmail.com"

# 7. Copy SSH public key to clipboard (paste it on GitHub → SSH keys)
clip < ~/.ssh/id_ed25519.pub

# 8. Test SSH connection (optional but recommended)
ssh -T git@github.com       

# 9. Push the code to GitHub
git push -u origin main
