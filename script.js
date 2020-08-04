/*
let url = new URL(window.location.href)
url.searchParams.set("name", "Ben")
window.location = "http://127.0.0.1:5500/index.html?name=Ben"
*/

const dictionary = { "{TIFF}": { "ResolutionUnit": 2, "Software": "13.5.1", "DateTime": "2020:08:01 18:25:16", "XResolution": 72, "Orientation": 1, "Model": "iPhone 11", "YResolution": 72, "Make": "Apple" }, "{Exif}": { "ExifVersion": [2, 3, 1], "Flash": 24, "LensModel": "iPhone 11 back dual wide camera 4.25mm f\/1.8", "OffsetTimeDigitized": "-04:00", "SubsecTimeOriginal": "940", "LensSpecification": [1.5399999618530273, 4.25, 1.7999999523162842, 2.4000000953674316], "ExposureMode": 0, "CompositeImage": 2, "LensMake": "Apple", "FNumber": 1.8, "OffsetTimeOriginal": "-04:00", "PixelYDimension": 3024, "ApertureValue": 1.6959938128383605, "ExposureBiasValue": 0, "MeteringMode": 5, "ISOSpeedRatings": [32], "ShutterSpeedValue": 7.882741162643522, "SceneCaptureType": 0, "FocalLength": 4.25, "DateTimeOriginal": "2020:08:01 18:25:16", "SceneType": 1, "FlashPixVersion": [1, 0], "ColorSpace": 65535, "SubjectArea": [1773, 858, 283, 285], "PixelXDimension": 4032, "FocalLenIn35mmFilm": 26, "SubsecTimeDigitized": "940", "OffsetTime": "-04:00", "SensingMethod": 2, "BrightnessValue": 6.7903104045472711, "DateTimeDigitized": "2020:08:01 18:25:16", "ComponentsConfiguration": [1, 2, 3, 0], "WhiteBalance": 0, "ExposureTime": 0.0042372881355932203, "ExposureProgram": 2 }, "Orientation": 1, "PixelHeight": 3024, "PixelWidth": 4032, "ProfileName": "Display P3", "DPIWidth": 72, "{ExifAux}": { "Regions": { "WidthAppliedTo": 4224, "HeightAppliedTo": 3168, "RegionList": [{ "Height": 0.096380952380952373, "AngleInfoRoll": 0, "FaceID": 16, "AngleInfoYaw": 0, "Type": "Face", "X": 0.44080952380952376, "Width": 0.072285714285714286, "ConfidenceLevel": 734, "Y": 0.28419047619047616 }, { "Height": 0.082761904761904759, "AngleInfoRoll": 0, "FaceID": 17, "AngleInfoYaw": 0, "Type": "Face", "X": 0.53928571428571426, "Width": 0.061809523809523759, "ConfidenceLevel": 789, "Y": 0.39366666666666661 }] } }, "DPIHeight": 72, "ColorModel": "RGB", "{MakerApple}": { "32": "E6B86C59-062E-4583-9189-EDBBD00D086E", "25": 2, "40": 1, "33": 0.79111266136169434, "26": "q900n", "12": [1.8828125, 41.4296875], "1": 11, "35": [76, 268435507], "20": 10, "2": { "__type__": "data", "__value__": "TgKAAq4C4gL\/AnUDuQPNA2oDMwNLA6ID2gPsA94DnQMQAkYCgwKvAsgC4AJHAzcDHgNPA98C\/AIrA2QDxAO9A8YBwwHjARwCagJ2AkUBjwBqArcCjQJpAmMCeQIzA1wD1gHLAb8BrgHKAR0C5ABTAM0BBALgAdgB+gHzASkCIAJcATABLgFIAT0BOgHLAHkAFAEhAUMBUgELAdMAxQDDAIsAngCWAKoAsQBFAcQAsgB7AHUAqgBhAEYAOAA6ADkAOQA\/AEAARACCAOUAkABkAEkAPgBHADwAQwBHAEMAPwApACkAKQApAHYAsQCSAFQAJgAzAGIAKgAoACgAKAAqAB8AHQAsACIAigB7AGgARAAcADEAbwAhACoAIwAiACIALQArADAAJQCPAJUAewBAACEAPABiADkAJwAqACgAJQAZABgAJQBUAKsAiwBjAEQAGQAxAKcAXgApABoAGgAeAGsAbgBdAGcAtgAUABwACAAaAEAA9gC2AEwAegBkAHYAYQBVAE4AeQDBAAoACQAIABwAQwD9ANMAXABdAGYAaQCmAKYAtADeAH0ACQAZAAoAHwBKANcA\/gDVALoAvwC\/ANQA4ADqAO8AaAAJAHMADAAoAEYAtwAVAewA5QDgANwA4wDpAPMABgF9AC0AlQBEAGAAJgDaAA8B7gDtAO0A5wA=" }, "13": 30, "43": "644F6A8A-FBA8-454E-8856-9AA2E9BC2C3C", "3": { "flags": 1, "value": 2157708567877875, "timescale": 1000000000, "epoch": 0 }, "14": 0, "4": 1, "37": 134, "5": 187, "15": 2, "6": 177, "38": 3, "23": 38797312, "16": 1, "7": 1, "39": 48.956642150878906, "31": 0, "8": [-0.98610895872116089, -0.013586469925940037, -0.15233558416366577] }, "Depth": 8 }

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

//var i = objectComplexity(dictionary); const simpleKeys = i[0]; const complexKeys = i[1];


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

for (key in dictionary) {
    var table = document.createElement('TABLE');
    var caption = table.createCaption()
    caption.innerHTML = key
    
    test(table, dictionary, 0)
    document.body.appendChild(table)
}

function test(table, dictionary, level) {
    for (key in dictionary) {
        if (key[0] == '{' && key[key.length - 1] == "}") {
            console.log(key)
            test(table, dictionary[key], level + 1)
        } else {
            createRow(table, level, key, dictionary[key])
            delete dictionary[key]
        }
    }
}

/*
    if (simpleKeys.length > 0) {
        var simpleTable = document.createElement('TABLE');
        var simpleCaption = simpleTable.createCaption()
        simpleCaption.innerHTML = 'Basic Metadata'


        for (key of simpleKeys) {
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

            var thisDic = dic[dicTitle]
            var dicKeys = Object.keys(thisDic)
            for (dicKey of dicKeys) {
                var complexRow = complexTable.insertRow(-1)

                var complexSpacerCell = complexRow.insertCell(0)
                complexSpacerCell.className = 'spacer'

                var complexKeyCell = complexRow.insertCell(1)
                complexKeyCell.className = 'key'
                complexKeyCell.innerHTML = dicKey

                var complexValueCell = complexRow.insertCell(2)
                complexValueCell.className = 'value'
                complexValueCell.innerHTML = thisDic[dicKey]

            }
            document.body.appendChild(complexTable)
        }
    }
* /
    function objectComplexity(object) {
        var keys = Object.keys(object)
        var simpleKeys, complexKeys = []
        for (key of keys) {
            if (key[0] == '{' && key[key.length - 1] == "}") {
                simpleKeys.append()
            } else {
                complexKeys.append()
            }
        }
        return [simpleKeys, complexKeys]
    }
    */

function buildTable(content, caption = 'Basic Metadata') {
    if (typeof content != "object" || Array.isArray(content) == "true") {
        throw new Error('content must be an object')
    }

    var table = documentreateElement('TABLE');
    var caption = table.createCaption()
    caption.innerHTML = String(caption)

    let keys = Object.keys(dic)

    for (key of simple) {
        var row = table.insertRow(-1)

        var spacerCell = row.insertCell(0)
        spacerCell.className = 'spacer'

        var keyCell = row.insertCell(1)
        keyCell.className = 'key'
        keyCell.innerHTML = key

        var valueCell = row.insertCell(2)
        valueCell.className = 'value'
        valueCell.innerHTML = content[key]
    }
    return table
}
