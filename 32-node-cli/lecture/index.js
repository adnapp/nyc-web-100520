#!/usr/bin/env node

const simpleGit = require("simple-git")

const { createFile, createFolder } = require("./lib/files")
const { cssTemplate, makeHtmlTemplate } = require("./lib/templates")

const projectName = process.argv[2]

const generate = () => {
  console.log("🤠 Howdy! We're making your project now!")
  createFolder(projectName)
  createFolder(`${projectName}/src`)
  createFolder(`${projectName}/styles`)

  createFile(`${projectName}/src/index.js`, "console.log('Hello!!!!')")
  createFile(`${projectName}/styles/main.css`, cssTemplate)
  createFile(`${projectName}/index.html`, makeHtmlTemplate(projectName))

  const git = simpleGit(`${process.cwd()}/${projectName}`)
  git.init()
}

generate()