# Github Instructions
## Github Documentation <sub>[Git Handbook](https://guides.github.com/introduction/git-handbook/)</sub>

## Pre-Requisites
- [ ] You installed the `X-Code` packages from `Apple Package Mangager`. If you haven't, your computer will notify you with a dialog box and prompt your to install required files.
- [ ] You installed `Git` on your local machine. To verify you have installed `Git`, Open a `terminal` window, and type the following: 
```
git --version
```
---
## First Time Set-Up

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