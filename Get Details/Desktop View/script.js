let input = {
    "{TIFF}": {
        "Artist": "",
        "ResolutionUnit": 2,
        "Copyright": "",
        "DateTime": "2020:07:18 05:03:49",
        "XResolution": 72,
        "YResolution": 72,
        "Model": "Canon EOS REBEL SL1",
        "Orientation": 1,
        "Make": "Canon"
    },
    "{Exif}": {
        "ExifVersion": [2, 3],
        "Flash": 16,
        "LensModel": "EF-S10-18mm f\/4.5-5.6 IS STM",
        "RecommendedExposureIndex": 200,
        "SubsecTimeOriginal": "12",
        "LensSpecification": [10, 18, 0, 0],
        "ExposureMode": 0,
        "LensSerialNumber": "000006246c",
        "FNumber": 5,
        "PixelYDimension": 1537,
        "ApertureValue": 4.625,
        "FocalPlaneXResolution": 5798.6577181208049,
        "MeteringMode": 5,
        "FocalPlaneResolutionUnit": 2,
        "ISOSpeedRatings": [200],
        "ExposureBiasValue": 0,
        "ShutterSpeedValue": 10,
        "SceneCaptureType": 0,
        "MaxApertureValue": 4.4898481973434539,
        "CustomRendered": 0,
        "FocalLength": 10,
        "FocalPlaneYResolution": 5788.9447236180904,
        "DateTimeOriginal": "2020:07:18 05:03:49",
        "FlashPixVersion": [1, 0],
        "SubsecTime": "12",
        "ColorSpace": 1,
        "PixelXDimension": 2305,
        "SubsecTimeDigitized": "12",
        "SensitivityType": 2,
        "DateTimeDigitized": "2020:07:18 05:03:49",
        "BodySerialNumber": "042033003160",
        "ComponentsConfiguration": [1, 2, 3, 0],
        "WhiteBalance": 0,
        "ExposureTime": 0.001,
        "ExposureProgram": 4
    },
    "{IPTC}": {
        "CopyrightNotice": "",
        "Byline": [""],
        "DigitalCreationDate": "20200718",
        "DigitalCreationTime": "050349",
        "DateCreated": "20200718",
        "TimeCreated": "050349"
    },
    "PixelHeight": 1537,
    "PixelWidth": 2305,
    "{JFIF}": {
        "JFIFVersion": [1, 0, 1],
        "YDensity": 72,
        "XDensity": 72,
        "DensityUnit": 0
    },
    "ProfileName": "sRGB IEC61966-2.1",
    "DPIWidth": 72,
    "{ExifAux}": {
        "Firmware": "Firmware Version 1.0.0",
        "LensModel": "Canon EF-S10-18mm f\/4.5-5.6 IS STM",
        "LensInfo": [10, 18, 0, 0],
        "FlashCompensation": 0,
        "LensID": 4150
    },
    "DPIHeight": 72,
    "ColorModel": "RGB",
    "Orientation": 1,
    "Depth": 8
}

var keys = Object.keys(input)

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
        simpleValueCell.innerHTML = input[key]

    }
    document.body.appendChild(simpleTable)
}

if (complex.length > 0) {
    for (i = 0; i < complex.length; i++) {
        var dicTitle = complex[i]
        
        var complexTable = document.createElement('TABLE');
        var complexCaption = complexTable.createCaption()
        complexCaption.innerHTML = dicTitle.slice(1, dicTitle.length - 1)

        var dic = input[dicTitle]
        var dicKeys = Object.keys(dic)
//        for (ii = 0; ii < dic.dicKeys; ii++) {
        for (dicKey of dicKeys) {
            var complexRow = complexTable.insertRow(-1)
//            window.alert(dicKey)
            
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
