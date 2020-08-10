// Instead of linking to new documents, this page works by storing differnt body elements for each page. Then, when a new page is triggered, the appropiate body element is pulled from storage and set as the document's body.

// Get dictionary from searchParams
let url = new URL(window.location.href)
if (url.searchParams.has('dictionary') == false) {
    throw new Error('Please use search params to pass in an object with the key "dictionary".')
}
const input = JSON.parse(url.searchParams.get('dictionary'))

// Main Page
const topBody = document.createElement('body')
// Create basic metadata table
let basicTable = createTable('Basic Metadata')
for (let key in input) {
    let value = input[key]
    if (typeof value != 'object' && Array.isArray(value) == false) {
        let row = createRow(key, value)
        basicTable.appendChild(row)
        delete input[key]
    }
}
topBody.appendChild(basicTable)

// Create tables for complex objects & all other pages
for (let objTitle in input) {
    let obj = input[objTitle]
    let objTable = buildOutTable(objTitle, obj, `(input['${objTitle}'])`, objTitle)
    topBody.appendChild(objTable)
}

// Set body to main page
document.body = topBody


/*** FUNCTIONS ***/
// Create table and fill it with rows for each item in obj. If value of item is another obj, the row will contain an arrow and clicking on it will switch to a new body containing the new obj. This new body is stored as the value of the item.
function buildOutTable(header, obj, path, navSource) {
    let table = createTable(header)
    for (let key in obj) {
        let value = obj[key]
        if (typeof value != 'object' && Array.isArray(value) == false) {

            let row = createRow(key, value)
            table.appendChild(row)

        } else {

            let row = createRow(key, '<svg xmlns="http://www.w3.org/2000/svg" width="25.426" height="44.177" style="padding-top:3px"><path d="M24.404 24.355L5.03 43.329a2.958 2.958 0 11-4.134-4.232l17.432-17.01L.896 5.08A2.984 2.984 0 010 2.963 2.923 2.923 0 012.963 0 2.88 2.88 0 015.03.847l19.374 18.95a3.249 3.249 0 011.022 2.29 2.965 2.965 0 01-1.022 2.268z" fill="#C7C7CC"/></svg>')
            table.appendChild(row)

            let thisPath = `(${path}['${key}'])`
            row.id = thisPath

            let newTable = buildOutTable(key, value, thisPath)

            let newBody = document.createElement('body')

            newBody.appendChild(createNavLink(navSource))
            newBody.appendChild(newTable)

            var f1 = new Function('b', 'a', `${row.id}=a;`)
            f1(input, newBody)

            row.onclick = function () {
                var f2 = new Function(`document.body=${row.id}`)
                f2()
            }
        }
    }
    return table
}

function createTable(header) {
    let table = document.createElement('table')
    let caption = table.createCaption()
    caption.innerHTML = header
    return table
}

function createRow(key, value) {
    let row = document.createElement('tr')
    let spacerCell = row.insertCell(0)
    spacerCell.className = 'spacer'
    let keyCell = row.insertCell(1)
    keyCell.className = 'key'
    keyCell.innerHTML = key
    let valueCell = row.insertCell(2)
    valueCell.className = 'value'
    valueCell.innerHTML = value
    return row
}

function createNavLink(backButtonText) {
    let header = document.createElement('header')
    header.innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" width="35.895" height="62.367" style="transform: translateY(3px);"><path d="M1.441 27.95L28.793 1.194A4.005 4.005 0 0131.711 0a4.149 4.149 0 014.184 4.184 4.358 4.358 0 01-1.266 2.988L9.984 31.184 34.63 55.195a4.293 4.293 0 011.266 2.989 4.149 4.149 0 01-4.184 4.183 4.005 4.005 0 01-2.918-1.195L1.441 34.382A4.185 4.185 0 010 31.185a4.31 4.31 0 011.441-3.235z" fill="#007AFF"/></svg><p class="unselectable">${backButtonText}</p></div>`
    return header
}