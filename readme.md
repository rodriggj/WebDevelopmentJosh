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
>1. multiple people can work on the same code together. 
>2. Code gets re-written all the time, committing code lets you keep track of various versions 
>3. Repos allow team members to `peer review` code and align it to problems they encounter (or lessons in your case)
>4. When you finally have the code you want you can `merge` it into a consistent copy that all other variations can use 

> This section will tell what to do while reviewing a lesson, and how to submit your code for review, along with a way to version your code so you know what was rev 1, rev 2, etc. We will do this through a process called `branching`. 

### Steps: 
1. 
2. When the `IDE` ope