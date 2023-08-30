const currentDate = new Date();

// Format the date as desired
const formattedDate = currentDate.toDateString();

// Set the formatted date as the content of the span element
document.getElementById('currentDate').textContent = formattedDate;