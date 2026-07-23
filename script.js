function calculateAge() {
    const dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        alert("Please select your Date of Birth");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        alert("Date of Birth cannot be in the future");
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `Your Age is ${years} Years, ${months} Months, ${days} Days`;
}