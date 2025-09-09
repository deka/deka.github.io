# jsonresume-theme-dev-ats 

This is the developer theme for [JSON Resume](http://jsonresume.org/), based off of [jsonresume-theme-engineering](https://www.npmjs.org/package/jsonresume-theme-engineering) and aims to implement the best practices for developer resumes with ATS compatibility.

## Changes

Added three sections - profiles, projects and certifications.

Added print break compatibility for sections.

Added new profiles design.

Added designation to header.

Added new sanitization for URL links.

Added boldness to key terms, send wrapped inside strong tag.



<p align="center">
  <kbd>
    <img src="https://github.com/asqrzk/jsonresume-theme-dev-ats/blob/main/resume.png?raw=true" alt="Rick Astley Resume"/>
  </kbd>
</p>

## Getting started

To get started with theme development, this is what you'll need:

- [node.js](http://howtonode.org/how-to-install-nodejs)
- [npm](http://howtonode.org/introduction-to-npm)

If you're on Linux, you can simply run:

```
sudo apt-get install nodejs-legacy npm
```

Or if you're on OSX and got [Homebrew](http://brew.sh/) installed:

```
brew install node
```


### Install npm packages

We need to install the dependencies:

```bash
npm install
```

### Serve theme

If you do not provide a `resume.json` at the root directory level, copy the sample resume and run the development server:

```
cp sample-resume.json resume.json
npm start
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it! You can now start to modify this theme (see Contribute section below).

## PDF Export
To export your resume, you can run the following command below. This will automatically create a `resume.pdf` file within your current directory:

```
npm run export
```

Alternatively, you can also do a **print page** on the browser and save it as as PDF (by setting margins to none and removing header/footers.)

## Contribute

Currently, this theme is still based on the old [jsonresume-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate), so a look at the README will give you an overview of the files involved in theme modification.

Contributions to the implementation of new functions or bug fixes are very welcome!

## License

Available under [the MIT license](http://mths.be/mit).
