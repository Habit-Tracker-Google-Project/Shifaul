//console.log("This is a popup!")

chrome.storage.session.get(null, function(items) {
    var table = document.getElementById("websiteData");
    for (key in items) {
       var row = table.insertRow();
       var urlCell = row.insertCell(0);
       var countCell = row.insertCell(1);
       urlCell.innerHTML = key;
       countCell.innerHTML = items[key];
    }
    // populate the table with data retrieved from session storage
 });
 
