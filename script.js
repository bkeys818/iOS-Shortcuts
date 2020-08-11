// Get dictionary from searchParams
let url = new URL(window.location.href)
if (url.searchParams.has('dictionary') == false) {
    throw new Error('Please use search params to pass in an object (dictionary) with the key "dictionary".')
}
const input = JSON.parse(url.searchParams.get('dictionary'))
if (typeof input != 'object' || Array.isArray(input) == true) {
    throw new Error('Input must be a object (dictionary).')
}

// Instead of linking to new documents, this page works by storing differnt body elements for each page. Then, when a new page is triggered, the appropiate body element is pulled from storage and set as the document's body.
var bodys = {}

// Functions assures body properties are formatted correctly
function createBody(key2, parents = []) {
    let body = document.createElement('body')
    let path = 'bodys'
    for (parent of parents) {
        path += `['${parent}']['children']`
    }
    if (parents.length > 0) {
        let title = parents[parents.length - 1]
        if (title == 'landing') {title = 'Baisc Metadata'}
        let backNav = createBackNav(path.slice(0, path.length-12), title)
        body.appendChild(backNav)
    }
    let createItemAtPath = new Function('bodys', 'body', `${path}['${key2}'] = {body:body, children:{}}; return ${path}['${key2}'].body`)
    body = createItemAtPath(bodys, body)
    return body
}


// Create landing body
var landing = createBody('landing')
document.body = landing

// Create basic metadata table
let table1 = buildOutTable('Basic Metadata', input, ['landing'])
landing.appendChild(table1)

// Set body to main page
document.body = landing


/*** FUNCTIONS ***/

function buildOutTable(header, obj, pathArray) {
    let table = createTable(header)
    for (let key in obj) {
        let value = obj[key]
        if (typeof value != 'object' || Array.isArray(value) == true) {
            let row = createRow(key, value)
            table.appendChild(row)

        } else {
            let row = createRow(key, '<svg xmlns="http://www.w3.org/2000/svg" width="25.426" height="44.177" style="padding-top:3px"><path d="M24.404 24.355L5.03 43.329a2.958 2.958 0 11-4.134-4.232l17.432-17.01L.896 5.08A2.984 2.984 0 010 2.963 2.923 2.923 0 012.963 0 2.88 2.88 0 015.03.847l19.374 18.95a3.249 3.249 0 011.022 2.29 2.965 2.965 0 01-1.022 2.268z" fill="#C7C7CC"/></svg>')
            table.appendChild(row)
            
            let newBody = createBody(key, pathArray)
            let newPathArray = [...pathArray]
            newPathArray.push(key)

            let newTable = buildOutTable(key, value, newPathArray)

            newBody.appendChild(newTable)
            let path = 'bodys'
            for (page of pathArray) {
                window.scroll(0, 0)
                path += `['${page}']['children']`
            }

            let f = new Function('bodys', 'row', `row.id = "${path}['${key}'].body";`)
            f(bodys, row)

            row.onclick = function () {
                let f1 = new Function('bodys', 'row', `document.body=${row.id}`)
                f1(bodys, row)
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

function createBackNav(pathToParent, title) {
    let header = document.createElement('header')
    let div = document.createElement('div')
    div.style.padding = '10px'
    div.style.marginLeft = '11px'
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35.895" height="62.367" style="transform: translateY(3px); padding-right: 12px;"><path d="M1.441 27.95L28.793 1.194A4.005 4.005 0 0131.711 0a4.149 4.149 0 014.184 4.184 4.358 4.358 0 01-1.266 2.988L9.984 31.184 34.63 55.195a4.293 4.293 0 011.266 2.989 4.149 4.149 0 01-4.184 4.183 4.005 4.005 0 01-2.918-1.195L1.441 34.382A4.185 4.185 0 010 31.185a4.31 4.31 0 011.441-3.235z" fill="#007AFF"/></svg><p class="unselectable">${title}</p>`

    div.id = pathToParent
    div.onclick = function () {
        window.scroll(0, 0)
        let f = new Function(`document.body=${div.id}['body']`)
        f()
    }
    header.appendChild(div)
    return header
}