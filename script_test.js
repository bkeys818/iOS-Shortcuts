const input = {
    "1":"a",
    "2":"b",
    "3":"c",
    "4":"d"
}

var theInstructions = "console.log(input['2'])";

var F=new Function (theInstructions);

F()