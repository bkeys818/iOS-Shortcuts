
let url = new URL(window.location.href)
let dictionary = url.searchParams.get("dictionary")


var basicTable = document.createElement('TABLE');
var basicCaption = basicTable.createCaption()
basicCaption.innerHTML = 'Basic Metadata'

for (key in dictionary) {
    if (key[0] != '{' && key[key.length - 1] != "}") {
        createRow(basicTable, 0, key, dictionary[key])
        delete dictionary[key]
    }
}
document.body.appendChild(basicTable)

id = 0
for (key in dictionary) {
    var table = document.createElement('TABLE');
    table.id = id
    var caption = table.createCaption()
    caption.innerHTML = key
    
    test(table, dictionary, 0)
    document.body.appendChild(table)
    id += 1
}

function test(table, dictionary, level) {
    for (key in dictionary) {
        if (key[0] == '{' && key[key.length - 1] == "}") {
            createRow(table, level, key, `<svg xmlns="http://www.w3.org/2000/svg" width="44.8988" height="26.24711" viewBox="0 0 44.8988 26.24711"><path d="M19.64853,25.00194.99619,5.90234a3.3748,3.3748,0,0,1-.99609-2.416A3.46,3.46,0,0,1,3.43367.0001Q3.44735,0,3.461,0A3.62626,3.62626,0,0,1,6.0021,1.07031L22.463,18.00394,38.89853,1.07031A3.56343,3.56343,0,0,1,41.43759,0a3.45878,3.45878,0,0,1,3.46105,3.45651q0,.01491-.00011.02982a3.26715,3.26715,0,0,1-.99609,2.39061L25.2521,25.00194a3.77477,3.77477,0,0,1-5.60352,0Z" fill="#C7C7CC"/></svg>`)
            test(table, dictionary[key], level + 1)
        } else {
            createRow(table, level, key, dictionary[key])
            delete dictionary[key]
        }
    }
    delete dictionary
}

function createRow(table, rowLevel, key, value) {
    var row = table.insertRow(-1)
    row.className = `l${rowLevel}`

    var spacerCell = row.insertCell(0)
    spacerCell.className = 'spacer'

    var keyCell = row.insertCell(1)
    keyCell.className = 'key'
    keyCell.innerHTML = key

    var valueCell = row.insertCell(2)
    valueCell.className = 'value'
    valueCell.innerHTML = value
}