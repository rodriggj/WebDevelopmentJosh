# Github Instructions

## Pre-Requisites

---
## 1st Time Set-Up

Steps: 
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
``bash
cd WebDevelopmentJosh
```

> NOTE: Linux has an auto-complete feature so if you type `cd` and begin to type `WebDev..` and hit `Tab` button on your keyboard the name of the file should auto-complete. 

8. That's it! This is the initial Set-Up. If you got this far we can now talk about how to create `branches` and `commit code` for `peer review` and/or `merge` into `main` branch. 
----