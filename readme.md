# Github Instructions
## Github Documentation <sub>[Git Handbook](https://guides.github.com/introduction/git-handbook/)</sub>

## What Are We Trying To Do

<p align="center">
    <img src="https://user-images.githubusercontent.com/8760590/96662666-0f2bdc00-130c-11eb-9d65-db8f45b4c706.png" width=400 height=auto>
</p>

## Pre-Requisites
- [ ] You installed the `X-Code` packages from `Apple Package Mangager`. If you haven't, your computer will notify you with a dialog box and prompt your to install required files.
- [ ] You installed `Git` on your local machine. To verify you have installed `Git`, Open a `terminal` window, and type the following: 
```
git --version
```
---
## Non-Recurring Procedure

<p align="center">
    <img src="https://user-images.githubusercontent.com/8760590/96669424-718bd900-131a-11eb-9ad7-1eff12ff7b92.png" width=400 height=auto>
</p>

### Steps: 
1. Open your `Visual Studio Code` Integrated Development Environment (IDE).
2. When the `IDE` opens, click on it, and type the following to open a `terminal` window. 
```javascript
~ + control
```
3. In the `terminal` window, you want to navigate to the `Desktop` of your computer. The computer will be referred to as `local` machine. 
```javascript
cd ~/Desktop
```
4. Verify you are on the `Desktop` with the `present working directory` command. Type the following: 
```javascipt
pwd 
```

> NOTE: The `terminal` window will present somthing like `/Users/gabrielrodriguez/Desktop`. You can see `Desktop` as the last word, which tells you this is your present working directory (pwd). All the preceding words and `/` marks are what is referred to as a `Path`. A `path` is a sequence of folders steming from the `root` folder on your local machine. (We'll learn more about this later.)

5. Now we want to `clone` the existing `WebDevelopementJosh` repository that is already on `Github`. To do this type the following: 
```javascript
git clone https://github.com/rodriggj/WebDevelopmentJosh.git
```

6. You should now have a folder on your `Desktop` called `WebDevelopmentJosh`. You can view this by typing the following command: 

```javascript 
ls -la
```

7. Navigate into the `WebDevelopmentJosh` folder so you can see the contents of the repository. Type the following command: 
```bash
cd WebDevelopmentJosh
```

> NOTE: Linux has an auto-complete feature so if you type `cd` and begin to type `WebDev..` and hit `Tab` button on your keyboard the name of the file should auto-complete. 

8. That's it! This is the initial Set-Up. You should see in the left `nav-bar` on your IDE a folder structure and files. Each of these files, if changed will require a `commit` to the Github repository, which keeps a version of the files you modify or create. We will learn how to modify the files and commit our source code to Github to maintain versions, review code, and other things going forward.
----

## Recurring Procedure

> Now that you have the `root` folder for our `repository` synced to our `Github` repository, we can now commit code. `Why do we do this?`
>1. multiple people can work on the same code together 
>2. Code gets re-written all the time, committing code lets you keep track of various versions (`branches`)
>3. Repos allow team members to `peer review` code and align it to `issues` or `tickets` tracked in Github
>4. When you finally have the code you want create a `main` version that is the `official` copy for all to use

> This section will detail how to: 
>1. Create a branch for each lesson
>2. Create working files for each lesson
>3. Commit those files to Github for `peer review`
>4. Show how to associate a `merge request` with a lesson `issue`

### Steps: 
1. For each lesson on Udemy, go to the `Projects` tab on the `WebDevelopmentJosh` repository on `Github` and find the `issue` corresponding to the Udemy lesson you are taking, on the Project Board. (e.g. `Complete Section 1 Lesson 6`). 

2. Open the `issue`, and in the top section of the issue, add a `branch` name that you will create in Github. (e.g. For issue titled, `Complete Section 1 Lesson 6`, update the issue to say, `"Created branch S1_L6"`). 

3. Open your IDE, press `control + ~` to open a `terminal` window and navigate to the `WebDeveloperJosh` directory on your `Desktop`
```bash
cd ~/Desktop/WebDeveloperJosh

```
4. Validate that you do not have any open commits with Github by typing the following: 
```bash
git status
```
> NOTE: Ensure that you get a message that says `Already up to date.`. If you do not see this message type `git stash` or follow instructions x-y below to commit your changes.  **YOU MUST NOT PROCEED IF YOU DO NOT SEE `Already up to date.`** Or your branching structure will be out of sequence. 

5. Upon having a clean branch (i.e no outstanding commits), get in the habit of executing the following command to retrieve any changes other teammates may have submitted to the repo. 

```bash
git pull
```

6. The result of step 5, will either pull changes from the repository that you were unaware of, or you will once again see a message, `Already up to date.`. Now you need to checkout the `template` branch. The `template` branch is the primary branch to create all subsequent branches from. This will ensure you always have a consistent means of starting each lesson without remanent files from other branches. The way this works is if you create a branch, github simply clones the branch you currently are on. There will be times when you may want to clone a branch you created previously. In those cases you may not use template to start your branch create process. But we can discuss when and how to do this. For a standing procedure navigate to the `template` branch. 
```
git checkout template
```
7. Now that you are in the template branch you can create a subsequent `lesson` branch. To do this, you want to pass the name of the branch you indicated on step 2 above. For example, I would type the following command if I were on Section 1 Lesson 6; change the naming convention accordingly.
```
git branch S1_L6
```
> NOTE: If for some reason you don't recall if you created a branch or if you otherwise need to see branches already created type the following command: `git branch -a`. You will see a list of all branches that have not been deleted. In `real-world` environments you typically delete branches after they've been merged, but we will not be doing that in this case to preserve the content of each lesson. 

8. After Step 7 you will see a notification in the termial that the branch has been created. When you do, the next command is to navigate to that branch and `checkout` that branch from the repository so Github knows that you are making modifications in the form of code or files. To do this you need to type the following command: 

```bash 
git checkout S1_L6
```

9. After you've completed your lesson or reached a point that you want to stop. You need to commit your code to the repository. To do this you will execute 3 commands in sequence. The following are the 3 commands: 
```bash
git add .
git commit -am 'make a note that describes what you changed'
git push
```
> NOTE: The `git add` command tells Github what files to add. When you provide a `.` you are telling github to commit `all` changes. If you wanted to commit just a specific change to a specific file you could replace the `.` with a `file name` (e.g. index.html). 
> The `git commit` command tells github that you added what you want and now you want to push it to a `staging` area for submission. In this `staging` area if you accidentally committed the wrong files or need to otherwise make a change you can still fix it. The `-am` flag says you need to pass Github some comments about what you changed. Finally the `'make a note ... changed'` text is a note that you can write. Doesn't matter what goes in here, but make it descriptive. 
> The `git push` command says, I got all the changes, I'm ready to submit, go ahead and push the files to `Github`

10. Thats it! Each time you start a lesson, update the `issue` with a branch name, create a new branch, checkout that branch, make your changes in the IDE, then execute the `add, commit, push` process. 

> NOTE: There are several other things that you can do in Github, can we will add to this later, but for the sake of completeing lessons, just do the steps above. 