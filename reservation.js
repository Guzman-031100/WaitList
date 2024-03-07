function addToReservation(event) {
    event.preventDefault();

    const formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        reservationDate: document.getElementById('Date').value,
        reservationTime: document.getElementById('hour').value + ':' + document.getElementById('minute').value,
        eventType: document.querySelector('input[name="event_type"]:checked') ? document.querySelector('input[name="event_type"]:checked').value : '',
        quantity: document.getElementById('quantity').value
    };

    const jsonData = JSON.stringify(formData);
    localStorage.setItem('reservationEntry', jsonData);

    window.location.href = 'reserved.html';
}

document.getElementById('reservationForm').addEventListener('submit', addToReservation);