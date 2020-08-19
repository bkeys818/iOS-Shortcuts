

function arrayOrObj(bodys, key, value, pathArray) {
    let row = createRow(key, '<svg xmlns="http://www.w3.org/2000/svg" width="25.426" height="44.177" style="padding-top:3px"><path d="M24.404 24.355L5.03 43.329a2.958 2.958 0 11-4.134-4.232l17.432-17.01L.896 5.08A2.984 2.984 0 010 2.963 2.923 2.923 0 012.963 0 2.88 2.88 0 015.03.847l19.374 18.95a3.249 3.249 0 011.022 2.29 2.965 2.965 0 01-1.022 2.268z" fill="#C7C7CC"/></svg>')
    table.appendChild(row)
            
    let newBody = bodys.createBody(key, pathArray)
    let newPathArray = [...pathArray]
    newPathArray.push(key)

    if (Array.isArray(value) == true) {
        let newTable = createTable(header)
        for (item of array) {
            let newRow = createRow("", item)
            newTable.appendChild(newRow)
        }
        newBody.appendChild(newTable)
    } else {
        let newTable = createListPage()
        newBody.appendChild(newTable)
    }
    
    setRowID(bodys, row, key, pathArray)

    row.onclick = function () {
        let f1 = new Function('bodys', 'row', `document.body=${row.id}`)
        f1(bodys, row)
    }
}