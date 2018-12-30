import * as fs from 'fs'
import * as path from 'path'

/**
 * Get an array of filenames at a provided directory
 *
 * IF the name returned
 */
export async function getFileList(directoryPath: string): Promise<string[]> {
  return new Promise((resolve: (res: string[]) => void, reject) => {
    const fileNames: string[] = []
    try {
      const files = fs.readdirSync(directoryPath)

      files.forEach(file => {
        const stat = fs.statSync(directoryPath)
        if (stat.isDirectory()) {
          const joinedName = path.join(directoryPath, file)
          const moreFiles = fs.readdirSync(joinedName)
          moreFiles.forEach(otherfile => {
            const nestedFile = path.join(joinedName, otherfile)
            if (fs.statSync(nestedFile).isDirectory() === false) {
              fileNames.push(nestedFile)
            }
          })
          // const recursed = await getFileList()
          fileNames.push()
        } else {
          fileNames.push(file)
        }
      })
      resolve(fileNames)
    } catch (err) {
      reject(err)
    }
  })
}

export async function getFileContentsString(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    } catch (err) {
      reject(err)
    }
  })
}
