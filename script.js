const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
    // Fetch an existing PDF document
    const url = 'leave.pdf'
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    var ID = document.getElementById("ID");
    var name = document.getElementById("name");
    var contact = document.getElementById("contact");
    var room = document.getElementById("room");
    var hostel = document.getElementById("hostel");
    var departure = document.getElementById("DEPARTURE").valueAsNumber;
    var returnn = document.getElementById("RETURN").valueAsNumber;
    var returnndate = new Date(returnn);
    var departuredate = new Date(departure);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var wardens = ['Krishna M', 'Arun Kumar Jalan', 'Nitin Chaturvedi', 'Krishnendra Shekhawat', 'Rakhee', 'Kumar Sankar Bhattacharya', 'Praveen Kumar A.V.', 'Dipendu Bhunia', 'Sharad Shrivastava']
    var hostels = ['Srinivasa Ramanujan Bhawan', 'Krishna Bhawan', 'Gandhi Bhawan', 'Vishwakarma Bhawan', 'Meera Bhawan', 'Shankar Bhawan', 'Vyas Bhawan', 'Ram Bhawan', 'Budh Bhawan']

    // Get the width and height of thne first page
    const { width, height } = firstPage.getSize()
    console.log(width, height)
    firstPage.drawText(ID.value, {
        x: 302,  
        y: 710, 
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(name.value, {
        x: 302,  
        y: 688,  
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(contact.value, {
        x: 302,  
        y: 667,  
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(hostel.value, {
        x: 302,  
        y: 637,  
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(room.value, {
        x: 302,  
        y: 607,  
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(wardens[hostels.indexOf(hostel.value)], {
        x: 302,  
        y: 587,  
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(departuredate.getDate().toString()+'-'+months[departuredate.getMonth()]+'-'+(departuredate.getYear()-100+2000).toString(), {
        x: 302,  
        y: 567, 
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(returnndate.getDate().toString()+'-'+months[returnndate.getMonth()]+'-'+(returnndate.getYear()-100+2000).toString(), {
        x: 302,  
        y: 547,  
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, ID.value+'.pdf', 'application/pdf');
    }

