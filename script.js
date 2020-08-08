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
    var key, thiskey
    for (key in dictionary) {
        if (typeof dictionary[key] != "object" && Array.isArray(dictionary[key]) == false) {
            createRow(basicTable, key, dictionary[key])
            delete dictionary[key]
        }
    }
    document.body.appendChild(basicTable)

    // Create tables for complex objects 
    for (key in dictionary) {
        var table = document.createElement('TABLE');
        var caption = table.createCaption()
        caption.innerHTML = key

        test(table, dictionary[key])
        document.body.appendChild(table)
    }
} else {
    document.body.innerHTML = '<h1">No input was passed in.</h1>'
}

// Prevent to complex of data from loading
// if (complexity > 4) {
//     document.body.innerHTML = '<h1">Object is to complex.</h1>'
// }


/*** FUNCTIONS ***/
// Function to create table for every item in object using levels for objects inside of objects
function test(table, thisDictionary) {
    console.log(Object.keys(thisDictionary))
    for (thisKey in thisDictionary) {
        if (typeof thisDictionary[thisKey] == "object" || Array.isArray(thisDictionary[key]) == true) {
            createClickableRow(table, thisKey)
            //test(table, thisDictionary[thisKey], level + 1)
            
        } else {
            createRow(table, thisKey, thisDictionary[thisKey])
            delete thisDictionary[thisKey]
        }
    }
    delete thisDictionary
}

function createRow(table, key, value) {
    var row = table.insertRow(-1)

    var spacerCell = row.insertCell(0)
    spacerCell.className = 'spacer'

    var keyCell = row.insertCell(1)
    keyCell.className = 'key'
    keyCell.innerHTML = key

    var valueCell = row.insertCell(2)
    valueCell.className = 'value'
    valueCell.innerHTML = value
}

function createClickableRow(table, key) {
    var row = table.insertRow(-1)
    row.onclick = function() { alert('blah'); };

    var spacerCell = row.insertCell(0)
    spacerCell.className = 'spacer'

    var keyCell = row.insertCell(1)
    keyCell.className = 'key'
    keyCell.innerHTML = key

    var valueCell = row.insertCell(2)
    valueCell.className = 'value'
    valueCell.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26.24711" height="44.8988" viewBox="0 0 26.24711 44.8988"><path class="a" d="M25.00194,25.25027,5.90234,43.90261a3.37483,3.37483,0,0,1-2.416.99609A3.46,3.46,0,0,1,.0001,41.46514h0L0,41.4378a3.62628,3.62628,0,0,1,1.07031-2.5411L18.00394,22.4358,1.07031,6.00027A3.56343,3.56343,0,0,1,0,3.46121,3.45879,3.45879,0,0,1,3.45651.00015h0l.02982.00012A3.26711,3.26711,0,0,1,5.87694.99636l19.125,18.65034a3.77477,3.77477,0,0,1,0,5.60352Z"  fill="#C7C7CC"/></svg>'
}