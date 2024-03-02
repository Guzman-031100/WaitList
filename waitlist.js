const jsonData = localStorage.getItem('waitlistEntry');

if (jsonData) {
    const formData = JSON.parse(jsonData);

    const waitlistTable = document.getElementById('waitlistTable');
    const newRow = waitlistTable.insertRow();

    newRow.insertCell().textContent = formData.fname + ' ' + formData.lname;
    newRow.insertCell().textContent = formData.quantity;
    newRow.insertCell().textContent = 'Walk In';

}
