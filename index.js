function addToWaitlist(event) {
    event.preventDefault();

    const formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        phone: document.getElementById('phone').value,
        quantity: document.getElementById('quantity').value
    };

    const jsonData = JSON.stringify(formData);
    localStorage.setItem('waitlistEntry', jsonData);

    window.location.href = 'waitlist.html';
}
document.getElementById('waitlistForm').addEventListener('submit', addToWaitlist);
