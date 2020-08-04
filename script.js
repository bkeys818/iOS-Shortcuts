/*
let url = new URL(window.location.href)
url.searchParams.set("name", "Ben")
window.location = "http://127.0.0.1:5500/index.html?name=Ben"
*/
async function getDic() {
    const contents = await fetch('./photo-metadata.json')
        .then(results => results.json())
        .then(d => {
            console.log(d);
        });
    //console.log(contents);
};
const dic = getDic()

var keys = Object.keys(dic)


var simple = []
var complex = []

for (key of keys) {
    if (key[0] == '{') {
        complex.push(key)
    } else {
        simple.push(key)
    }
}


if (simple.length > 0) {
    var simpleTable = document.createElement('TABLE');
    var simpleCaption = simpleTable.createCaption()
    simpleCaption.innerHTML = 'Basic Metadata'

    for (key of simple) {
        var simpleRow = simpleTable.insertRow(-1)

        var simpleSpacerCell = simpleRow.insertCell(0)
        simpleSpacerCell.className = 'spacer'

        var simpleKeyCell = simpleRow.insertCell(1)
        simpleKeyCell.className = 'key'
        simpleKeyCell.innerHTML = key

        var simpleValueCell = simpleRow.insertCell(2)
        simpleValueCell.className = 'value'
        simpleValueCell.innerHTML = dic[key]

    }
    document.body.appendChild(simpleTable)
}

if (complex.length > 0) {
    for (i = 0; i < complex.length; i++) {
        var dicTitle = complex[i]

        var complexTable = document.createElement('TABLE');
        var complexCaption = complexTable.createCaption()
        complexCaption.innerHTML = dicTitle.slice(1, dicTitle.length - 1)

        var dic = dic[dicTitle]
        var dicKeys = Object.keys(dic)
        for (dicKey of dicKeys) {
            var complexRow = complexTable.insertRow(-1)

            var complexSpacerCell = complexRow.insertCell(0)
            complexSpacerCell.className = 'spacer'

            var complexKeyCell = complexRow.insertCell(1)
            complexKeyCell.className = 'key'
            complexKeyCell.innerHTML = dicKey

            var complexValueCell = complexRow.insertCell(2)
            complexValueCell.className = 'value'
            complexValueCell.innerHTML = dic[dicKey]

        }
        document.body.appendChild(complexTable)
    }
}