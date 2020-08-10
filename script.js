var body = {}

let id = ''
// var complexity = 0 // for later

// Get dictionary from searchParams
let url = new URL(window.location.href)
if (url.searchParams.has("dictionary")) {
    let dicSting = url.searchParams.get("dictionary")
    let dictionary = JSON.parse(dicSting)

    // Create basic metadata table
    var basicTable = document.createElement('TABLE');
    var basicCaption = basicTable.createCaption()
    basicCaption.innerHTML = 'Basic Metadata'
    for (key in dictionary) {
        if (typeof dictionary[key] != "object" && Array.isArray(dictionary[key]) == false) {
            let newRow = createRow(key, dictionary[key])
            basicTable.appendChild(newRow)
            delete dictionary[key]
        }
    }
    document.body.appendChild(basicTable)

    // Create tables for complex objects 
    for (key in dictionary) {
        id = key
        var table = document.createElement('TABLE');
        var caption = table.createCaption()
        caption.innerHTML = key

        createTable(table, dictionary[key])
        document.body.appendChild(table)
    }
} else {
    document.body.innerHTML = '<h1">No input was passed in.</h1>'
}

let l1_body = document.body


/*** FUNCTIONS ***/
// Function to create table for every item in object using levels for objects inside of objects
function createTable(table, dictionary1) {
    for (key1 in dictionary1) {
        row += `-${key1}`

        let value1 = dictionary1[key1]

        if (typeof value1 == "object" && Array.isArray(value1) != true) {

            let row = createRow(key1, '<svg xmlns="http://www.w3.org/2000/svg" width="26.24711" height="44.8988" viewBox="0 0 26.24711 44.8988"><path class="a" d="M25.00194,25.25027,5.90234,43.90261a3.37483,3.37483,0,0,1-2.416.99609A3.46,3.46,0,0,1,.0001,41.46514h0L0,41.4378a3.62628,3.62628,0,0,1,1.07031-2.5411L18.00394,22.4358,1.07031,6.00027A3.56343,3.56343,0,0,1,0,3.46121,3.45879,3.45879,0,0,1,3.45651.00015h0l.02982.00012A3.26711,3.26711,0,0,1,5.87694.99636l19.125,18.65034a3.77477,3.77477,0,0,1,0,5.60352Z" fill="#C7C7CC"/></svg>')

            body[row.id] = document.createElement('body')

            var table = document.createElement('TABLE');

            var caption = table.createCaption()
            caption.innerHTML = (dictionary[key])[row.id]

            for (key2 in value1) {

                let row = createRow(key2, value1[key2])

                table.appendChild(row)

                l2_body.appendChild(table)
            }

            row.onclick = function () {

                document.body = body[row.id]
            }


            table.appendChild(row)

        } else {
            let row = createRow(key1, value1)
            table.appendChild(row)
            delete value1
        }
    }
    delete dictionary1
}

function createRow(key, value) {
    var row = document.createElement('tr')

    var spacerCell = row.insertCell(0)
    spacerCell.className = 'spacer'

    var keyCell = row.insertCell(1)
    keyCell.className = 'key'
    keyCell.innerHTML = key

    var valueCell = row.insertCell(2)
    valueCell.className = 'value'
    valueCell.innerHTML = value

    return row
}