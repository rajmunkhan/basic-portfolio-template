# How to Contribute


If you want to contribute to this project, follow the steps below.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.


## Clone the repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone git@github.com:rajmunkhan/basic-portfolio-template.git
```

## Create a new branch

If you’re working in the terminal and you want to create a branch, you may use the following command:

```  
 $ git checkout -b <branch name>
```
This is the fastest and easiest way of creating a branch from the command line

The `checkout` command finds the commit that the branch passed to it is referring to, then updates all of the files on your hard drive (the files in your “working tree”) to match the files stored in that commit.

It also switches your current HEAD to that branch, so that if you create a new commit, that commit will store a pointer to the last commit made in the checked out branch.

Normally, this command is used to check out branches that already exist. However, when we pass in the “-b” flag, this command will create a branch with that name, and update HEAD to point to that branch.



Now, if you want to push this newly created branch to your remote server, you’ll have to run another command:
  
```
$ git push --set-upstream origin <branch-name>
```

This command tells the remote server that a new branch has been created locally, so that it can recreate the same branch.

## Make necessary changes and commit those changes

Now open the project in a text editor, make necessary changes to project and then save the changes

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the main branch using the `git add` command:

```
git add .
```
_git add ._ will add all the changes

Now commit those changes using the `git commit` command:

```
git commit -m "<message>"
```

replacing `<message>` with a short message related to the changes you have made.

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push
```

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Add Title and description related to the issue that you have solved or changes you have made. Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

**Congrats! You just made your first pull request and contributed to the project**
