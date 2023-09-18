const xlsx = require("xlsx");

// Load the Excel file
const workbook = xlsx.readFile("clients.xlsx");

// Choose the worksheet you want to read (e.g., the first sheet)
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the worksheet to a JSON object
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Print the JSON data
console.log(jsonData);

// ----------------------------------------------------------
// ----------------------------------------------------------

const twilio = require("twilio");

// Your Twilio Account SID and Auth Token
const accountSid = "SID";
const authToken = "Token";

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Send an SMS
jsonData.forEach((element) => {
  console.log(element.NAME + "-" + element.PHONE);
  client.messages
    .create({
      body: "Hello from aosmanemender!",
      from: "Twilio", // Use your Twilio phone number
      to: "+" + element.PHONE, // Recipient's phone number
    })
    .then((message) => console.log(`Message sent with SID: ${message.sid} to ${element.NAME}`))
    .catch((error) => console.error(`Error: ${error.message}`));
});




