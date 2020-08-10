var bodys = {}

// Functions assures body properties are formatted correctly
function createBody(key, parents = []) {
    let body = document.createElement('body')
    let path = 'bodys'
    for (parent of parents) {
        path += `.${parent}.children`
    }
    if (parents.length > 0) {
        var backTitle = parents[parents.length-1]
    } else {
        var backTitle = ''
    }
    let createItemAtPath = new Function('bodys', 'body', `${path}['${key}'] = {backTitle:'${backTitle}', body:body, children:[]}; return ${path}.${key}.body`)
    return createItemAtPath(bodys, body)
}
