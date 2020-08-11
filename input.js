// Get dictionary from searchParams
let url = new URL(window.location.href)
try {
    if (url.searchParams.has('dictionary') == true) {
        var dictinoary = url.searchParams.get('dictionary')
    } else {
        throw new Error('URL requires a "dictionary" serach parameter')
    }
} catch (e) {
    console.error(e.name + ': ' + e.message)
    window.alert(`${e.name}:\n${e.message}`)
    window.stop()
}

try {
    dictinoary = JSON.parse(dictinoary)
    if (typeof dictinoary != 'object' && Array.isArray(dictinoary) == true) {
        throw new Error('URL requires a "dictionary" serach parameter')
    }
} catch (e) {
    console.error(e.name + ': ' + e.message)
    window.alert(`${e.name}:\n${e.message}`)
    window.stop()
}

const input = dictinoary


// Adjust to screen size
    // Cooming Soon