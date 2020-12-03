// getting access to the fs (file system) module from node
const fs = require('fs')

const createFolder = folder => {
  const folderName = `${process.cwd()}/${folder}`
  
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
    }
  } catch (err) {
    console.error(err)
  }
}

const createFile = (filePath, content) => {
  const folderName = `${process.cwd()}/${filePath}`
  
  fs.writeFile(folderName, content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`📄 Generated ${filePath}`)
  })
}

// not exported! it's private
const hi = "hello"

// CommonJS Module system
module.exports = {
  createFile,
  createFolder
}

// ES Module
// <script src="index.js" type="module"></script>
// index.js
// import { aFunction } from './modal.js'fezzik

// modal.js
// export aFunction() {}



