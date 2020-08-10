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

            let row = createRow(key, '<svg xmlns="http://www.w3.org/2000/svg"><path d="M34.5 28L7.1 1.2C6.3.4 5.3 0 4.2 0 1.9 0 0 1.8 0 4.2c0 1.1.5 2.2 1.3 3l24.6 24-24.6 24C.5 56 0 57 0 58.2c0 2.4 1.9 4.2 4.2 4.2 1.2 0 2.1-.4 2.9-1.2l27.4-26.8c1-.9 1.4-2 1.4-3.2s-.4-2.3-1.4-3.2z" fill="#010101"/></svg>')
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
    header.innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="29"><path d="M1.93 13.477l9.118-8.918a1.335 1.335 0 01.972-.398 1.383 1.383 0 011.395 1.394 1.453 1.453 0 01-.422.996l-8.215 8.004 8.215 8.004a1.43 1.43 0 01.422.996 1.383 1.383 0 01-1.395 1.395 1.335 1.335 0 01-.972-.398l-9.118-8.93a1.395 1.395 0 01-.48-1.067 1.437 1.437 0 01.48-1.078z" fill="#007AFF"/><path fill="none" d="M0 0h18v29H0z"/></svg><p>${backButtonText}</p></div>`
    return header
}