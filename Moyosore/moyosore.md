1. Forking a repository
Forking a repository allows you to have a personal copy of someone's project in your GitHib account. This allows you to edit the contents of the project without affecting the original repository. You use the Fork button to create a Fork of a repository.


2. Cloning a repository
Cloning a repository allows you to keep a copy of your repository on your local computer. To clone a repository,, you click the green button labeled Clone or download, and in the “Clone with HTTPs” section, copy the URL for your repository. Next, on your local machine, open your bash shell and change your current working directory to the location where you would like to clone your repository. You use the "git clone" command to copy your repository from GitHub to your local computer. 


3. Creating a pull request
A pull request allows for contributions, suggestions and reviewing of changes made to a repository without needing administrative privileges to make changes to the repo. It also allows repository administrators control over what gets added to their project repository.
To begin a pull request, click the pull request button on the main repo page.  Click the green “Create Pull Request” button to submit your pull request. Next you select which repo you wish to update (the base repo) and which repo contains the content that you wish to use to update the base (the head repo). Compare and verify your changes. Give your pull request a title and add a brief description of your changes. When you’re done with your message, click “Create Pull Request”.


4. add, commit, push
You use the add and commit functions to add and commit changes that you make to git. The "git add" allows you to add and modify files while the "git commit" allows you to take a snapshot of the current state of the repository showing the changes made. A commit message should outline what changed and why. 
Push adds the changes made to the local copy of repository on your computer to the version of your repository on GitHub. You push using the "git push" command.


5. Updating a cloned repository
From command line you can do Add the remote, call it "original", Fetch all the branches of that remote into remote-tracking branches such as original/master, Make sure that you're on your master branch and rewrite your master branch so that any commits of yours that aren't already in upstream/master are replayed on top of that other branch or merge it. 


6. Pull and fetch
Fetching is done when you want to see what everybody else has been working on. The git fetch command downloads commits, files, and refs from a remote repository into your local repo.
The git pull command is used to fetch and download content from a remote repository and immediately update the local repository to match that content.  The git pull command is actually a combination of two other commands, git fetch followed by git merge. 