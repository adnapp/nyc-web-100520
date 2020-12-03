const fs = require("fs")
const path = require("path")

const createFolder = async folderName => {
  const folder = path.join(process.cwd(), folderName)

  try {
    await fs.promises.access(folder)
  } catch(e) {
    await fs.promises.mkdir(folder)
    console.log(`Generated directory: ${folderName}`)
  }
}

const createFile = async (fileName, content) => {
  const file = path.join(process.cwd(), fileName)
  
  await fs.promises.writeFile(file, content.trim())
  console.log(`Generated file: ${fileName}`)
}

module.exports = { createFolder, createFile }