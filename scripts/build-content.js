const path = require('path')
const SRC_PATH = path.join(__dirname, '..', 'content')
const DEST_PATH = path.join(__dirname, '..', 'src', 'content.json')

const reqYml = require('require-yml')
const content = reqYml(SRC_PATH)
const fs = require('fs')

fs.writeFileSync(DEST_PATH, JSON.stringify(content, null, 2))
