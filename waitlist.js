const jsonData = localStorage.getItem('waitlistEntry');

if (jsonData) {
    const formData = JSON.parse(jsonData);

    const waitlistTable = document.getElementById('waitlistTable');
    const newRow = waitlistTable.insertRow();

    newRow.insertCell().textContent = formData.fname + ' ' + formData.lname;
    newRow.insertCell().textContent = formData.quantity;
    newRow.insertCell().textContent = 'Walk In';
    const waitTimeCell = newRow.insertCell();

    function updateWaitTime() {
        let waitTime = 10; // this is just meant to it easy 120 (2 minutes is reasonable)

        const timerInterval = setInterval(function () {
            const minutes = Math.floor(waitTime / 60);
            const seconds = waitTime % 60;
            const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            waitTimeCell.textContent = formattedTime;

            waitTime--;

            if (waitTime < 0) {
                clearInterval(timerInterval);
                waitTimeCell.textContent = "Table Ready!";
                waitTimeCell.style.color = "green";
                waitTimeCell.style.fontWeight = "bold";
            }
        }, 1000);
    }
    updateWaitTime();

}