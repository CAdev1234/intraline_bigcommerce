export const validateEmail = (str: string) => {      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(str); 
}

export const generateID = () => {
    let now = Date.now().toString() // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)
    // format
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
}

export const generateUUID = () => {
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export const downloadFile = (resultName: string, link: string, mimeType: string) => {
    let mimetype = mimeType;
    let filename = resultName;

    // Create Dummy A Element
    let a = window.document.createElement('a');

    // createObjectURL for local data as a Blob type
    a.href = link;
    a.download = filename;

    // Download file and remove dummy element
    document.body.appendChild(a);
    a.click();
    a.remove();
}


// encode and decode email for obfuscation
export function encodeEmail(email: string, key: number) {
    // Hex encode the key
    var encodedKey = key.toString(16);

    // ensure it is two digits long
    var encodedString = encodedKey.length === 1 ? '0' + encodedKey : encodedKey;

    // loop through every character in the email
    for(var n=0; n < email.length; n++) {

        // Get the code (in decimal) for the nth character
        var charCode = email.charCodeAt(n);

        // XOR the character with the key
        var encoded = charCode ^ key;

        // Hex encode the result, and append to the output string
        var value = encoded.toString(16);
        let make2DigitsLong = value.length === 1 ? '0' + value : value;
        encodedString += make2DigitsLong
        
    }
    return encodedString;
} 


export function decodeEmail(encodedString: string) {
    // Holds the final output
    var email = ""; 

    // Extract the first 2 letters
    var keyInHex = encodedString.substr(0, 2);

    // Convert the hex-encoded key into decimal
    var key = parseInt(keyInHex, 16);

    // Loop through the remaining encoded characters in steps of 2
    for (var n = 2; n < encodedString.length; n += 2) {

        // Get the next pair of characters
        var charInHex = encodedString.substr(n, 2)

        // Convert hex to decimal
        var char = parseInt(charInHex, 16);

        // XOR the character with the key to get the original character
        var output = char ^ key;

        // Append the decoded character to the output
        email += String.fromCharCode(output);
    }
    return email;
}