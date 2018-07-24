let arr = ['Hello,', 'sweet', 'pie', '!'];

function starFrame(arr) {

    let lineLength = 0; //we need to define max word length 

    for (var word of arr) {
        if (lineLength < word.length) {
            lineLength = word.length;
        }
    }
    // padEnd() method pads the current string with a given string 
    let borderLine = ''.padEnd(lineLength + 4, '*'); //max line length + 2 stars + 2 whitespaces

    console.log(borderLine);

    for (var word of arr) {

        console.log("* " + word.padEnd(lineLength, ' ') + " *");
    }
    console.log(borderLine);

}

// alternative variant - if we have index.html page
// we need to set monospace font prelimenary for the beautiful result
// var displayFrame = document.body;

// function setText(ar) {
//     displayFrame.innerHTML = displayFrame.innerHTML + ar + '<br>';
// }

// let arr = ['Hello', 'sweetie', '!'];

// function starFrame(arr) {

//     let lineLength = 0; //we need to define max word length 
//     
//     for (var word of arr) {
//         if (lineLength < word.length) {
//             lineLength = word.length;
//         }
//     }

//     // padEnd() method pads the current string with a given string 
//     let borderLine = ''.padEnd(lineLength + 4, '*'); // max line length + 2 stars + 2 whitespaces

//     setText(borderLine);

//     for (var word of arr) {
//         if (word.length <= lineLength) {
//             var whiteSpace = word.padEnd((lineLength - word.length) * 6, '&nbsp;');
//         }

//         setText(`* ${whiteSpace} *`);
//     }
//     setText(borderLine);

// }