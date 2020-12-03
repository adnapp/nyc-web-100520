#!/usr/bin/env node
const simpleGit = require("simple-git")
const { createFolder, createFile } = require("./lib/files")
const {
  makeHtmlTemplate,
  jsTemplate,
  cssTemplate
} = require("./lib/templates")

const run = async () => {
  const projectName = process.argv[2]

  console.log(`Generating scaffold for ${projectName}`)

  // Create Folders
  await createFolder(projectName)
  await createFolder(`${projectName}/src`)
  await createFolder(`${projectName}/styles`)

  // Create Files
  await createFile(`${projectName}/index.html`, makeHtmlTemplate(projectName))
  await createFile(`${projectName}/styles/main.css`, cssTemplate)
  await createFile(`${projectName}/src/index.js`, jsTemplate)
  
  // Initialize Git
  const git = simpleGit({
    baseDir: `${process.cwd()}/${projectName}`
  })

  await git.init()
  console.log("Initialized new git repository")

  console.log("Done!")
}

run()
