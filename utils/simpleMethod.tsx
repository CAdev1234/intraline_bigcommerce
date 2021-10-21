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