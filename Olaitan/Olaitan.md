1. Forking a repository
Having a copy of the repo in the user repository
make a copy of a GitHub repository (also known as a repo) owned by another user or organization (a task referred to as forking a repository).
 cd ~/earth-analytics
$ pwd
git clone https://github.com/your-username/practice-git-skillz
$ ls     
    practice-git-skillz

2. Cloning a repository
Having the repo folder in the user PC
cd Documents
Once you have navigated to the directory where you want to put your repository, you can use:

git clone https://github.com/URL-TO-REPO-HERE

The git clone command copies your repository from GitHub to your local computer. Note that this is a git specific command.

3. Creating a pull request
Why Make a Pull Request?
Pull Requests are a big deal in the world of collaborative coding. If you've ever heard the term open source, then you may be familiar with this concept of having anyone see your code and make suggestions to it.

An example of why you would want to make a Pull Request is you are working on a team and you contribute to the repository. Creating a PR is important because we wouldn't want to push to the master branch until code reviews are completed and a teammate approves it.

Creating the Pull Request!
In this final step, we need to head back to the GitHub repo.
That light yellow line is new! That's showing our branch and that a push was created "(less than a minute ago)". See that green button that says "Compare & pull request". Let's hit that!

Once we do that, we can rename the Pull Request here, but for now, we'll just keep it as what we named it when we were committing it, "Updating App.js div text". Hit the green button that says "Create pull request".


4. add, commit, push
 git add: takes a modified file in your working directory and places the modified version in a staging area.
 git add README.md
 git add --all
git commit takes everything from the staging area and makes a permanent snapshot of the current state of your repository that is associated with a unique identifier.
git commit -m "Editing the README to try out git add/commit"
git commit
To add the changes to your git repo files on your computer to the version of your repository on GitHub, you need to push them GitHub.
git push

5. Updating a cloned repository
If you have cloned the repo to your local machine, you can add the original GitHub repository as a "remote". Then you can fetch all the branches from that original repository, and rebase your work to continue working on the upstream version.
Add the remote, call it "original":
git remote add original https://github.com/whoever/whatever.git
Fetch all the branches of that remote into remote-tracking branches, such as original/master:
git fetch original
Make sure that you're on your master branch:
git checkout master
Rewrite your master branch so that any commits of yours that aren't already in upstream/master are replayed on top of that other branch:
git rebase original/master

6. Pull and fetch
git pull is a convenient shortcut for completing both git fetch and git merge in the same command:

$ git pull remotename branchname
# Grabs online updates and merges them with your local work
Because pull performs a merge on the retrieved changes, you should ensure that your local work is committed before running the pull command. If you run into a merge conflict you cannot resolve, or if you decide to quit the merge, you can use git merge --abort to take the branch back to where it was in before you pulled.
Use git fetch to retrieve new work done by other people. Fetching from a repository grabs all the new remote-tracking branches and tags without merging those changes into your own branches.

If you already have a local repository with a remote URL set up for the desired project, you can grab all the new information by using git fetch *remotename* in the terminal:

$ git fetch remotename
# Fetches updates made to a remote repository
