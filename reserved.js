const jsonData = localStorage.getItem('reservationEntry');

if (jsonData) {
    const formData = JSON.parse(jsonData);

    document.getElementById('reservationFor').textContent = formData.fname + ' ' + formData.lname;
    document.getElementById('reservationDate').textContent = formData.reservationDate;
    document.getElementById('reservationTime').textContent = formData.reservationTime;
    document.getElementById('eventType').textContent = formData.eventType;
    document.getElementById('partySize').textContent = formData.quantity;
    document.getElementById('confirmationEmail').textContent = formData.email;
}