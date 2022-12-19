* On the command line, navigate to the repository that contains the commit you want to amend. 
  Type `git commit --amend` and press Enter. In your text editor, edit the commit message, and save the commit.

* revert back to older or previous commits

         git checkout <commit> <file>
* revert back to older or previous commits

         git checkout <commit> <file>
* revert back to older or previous commits

         git checkout <commit> <file># Some Global Configuration for Git

	Open a cmd window or terminal on your computer.

* Check to make sure that Git is installed and available on the command line, by typing the
  following at the command prompt:

         git --version

* To configure your user name to be used by Git, type the following at the prompt:

         git config --global user.name "Your Name"

* To configure your email to be used by Git, type the following at the prompt:
 
         git config --global user.email <your email address>


         git config --global user.email "boahen.cos@gmail.com"
        
         git config --global user.name "Ewooral"

* You can check your default Git global configuration, you can type the following at the prompt:
	
	 git config --list

* See a brief log of commits you've made

	 git log --oneline

* revert back to older or previous commits or version of a file

         git checkout <commit> <file>

* undo checking out into older commits

	 git reset HEAD <file>
	 git checkout -- <file>


* Setting up an Online Git repository

	Sign up for an account either at Bitbucket (https://bitbucket.org) or GitHub (https://github.com).

	Then set up an online Git repository named git-test. Note the URL of your online Git repository. Note that private repositories on GitHub requires a paid account, and is not available for free accounts.

* Set the local Git repository to set its remote origin
  At the prompt, type the following to set up your local repository to link to your online Git repository:
	
	git remote add origin <repository URL>

* Pushing your commits to the online repository
  At the prompt, type the following to push the commits to the online repository:

	git push -u origin master

* Cloning an online repository
To clone an online repository to your computer, type the following at the prompt:

	git clone <repository URL>


# How to push new Git branches to remote repos on GitHub or GitLab by example
github@branch/c/remote/push  (new-branch)
git clone https://github.com/learn-git-fast/git-branch-examples.git
cd git*
git checkout -b new-branch

github@branch/c/remote/push (new-branch)
git branch -a
touch devolution.jpg
git add .
git commit -m "Are we not gender neutral people? We are Devo?"
git push --set-upstream origin new-branch

github@branch/c/remote/push (new-branch)
touch eden.html
git add .
git commit -m "Eden added"
git push origin




# Caching your GitHub credentials in Git
* gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Paste an authentication token
Tip: you can generate a Personal Access Token here https://github.com/settings/tokens
The minimum required scopes are 'repo', 'read:org', 'workflow'.
? Paste your authentication token: ****************************************
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as Ewooral
