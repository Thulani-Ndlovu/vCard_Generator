let vCardsJS = require("vcards-js"); //access the dependancy 


let vCard = vCardsJS(); //vCardsJS object

// Setting contact info
vCard.firstName = "Thulani";
vCard.lastName = "Ndlovu";
vCard.organization = "University of the Witwatersrand";
vCard.title = "Teaching Assistant";
vCard.email = "1430949@students.wits.ac.za";
vCard.cellPhone = "084 827 6141";
vCard.birthday = new Date(1997, 8, 28);

vCard.saveToFile(`thulani.vcf`); // Saving contact to VCF file

console.log(vCard.getFormattedString());
