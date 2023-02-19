function timeStamp() {
    const date = new Date(); // creates a new Date object with the current date and time
    const year = date.getFullYear(); // gets the year (four digits)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // gets the month (zero-based index), converts to a string, and pads with zeros if necessary
    const day = String(date.getDate()).padStart(2, '0'); // gets the day of the month and pads with zeros if necessary
    const hours = String(date.getHours()).padStart(2, '0'); // gets the hours and pads with zeros if necessary
    const minutes = String(date.getMinutes()).padStart(2, '0'); // gets the minutes and pads with zeros if necessary
    const seconds = String(date.getSeconds()).padStart(2, '0'); // gets the seconds and pads with zeros if necessary
    const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`; // combines the date and time components into a formatted string
    return formattedDate;
  }

  module.exports = timeStamp;