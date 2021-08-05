1. Forking a repository

Forking is a way of cloning a repository you would like to update or clone so as to edit it, make it better or just play around and get better overall
There is no GitCommand for forking
It's simply done by clicking on the repo and then click on Fork

2. Cloning a repository

This is simply a means whereby you get to download a repo offline and be able to edit it  
This is the Git Command line 

Open “Git Bash” and change the current working directory to the location where you want the cloned directory.
Type git clone in the terminal, paste the URL you copied earlier, and press “enter” to create your local clone.


3. Creating a pull request
This is just basically trying to tell the owner of the repository and people around or using the repo that you have made some certain changes that they should check them out. Once you have pulled request, then it can be seen and criticized and then considered to be merged 

The Command line is 

The basic signature is git request-pull [-p] <start> <url> [<end>]

[-p] — Run request-pull without that option will output a summarize of changed files. -p is more verbose and will output all the changes that have been made from the split commit to the end one.
<start> — Is the starting point you want to merge to. Most of the time we will given it the master branch and git will calculate the start commit by it’s own. The start commit is the common ancestor the feature branch splitted from.
<url> — is the repository to compare to. It can be a local repository and it can be a remote one.
<end> — The end point we want to stop comparing to. Usually we won’t state the end commit because we would like to merge all recent changes. To make things simple we won’t show this usage.



4. add, commit, push


Commit: A commit is an individual change to a file, its like when you save a file but with Git,  every time you save it creates a unique ID that allows you to keep record of what changes were made when and by who. Commits usually contain a commit message which is a brief description of what changes were made.

add: the git add adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. git add doesn't really affect the repository in any significant way, changes are not actually recorded until you run git commit.

push: The push is used to upload local repository content to a remote repository. Pushing is how you transfer from the llocal repo to one on the internet

5. Updating a cloned repository: This is simply updating the repo on your system 

6. Pull and fetch

Pull: Git pull is used to download content from an online repository and immediately update the local repository to match that content. 

Fetch: Fetching is what you do when you want to see what everybody else has been working on. This makes fetching a safe way to review commits before adding them with your local repository.