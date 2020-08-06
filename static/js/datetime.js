function getFormattedDate(dayShift) {
    let date = new Date();
    let today = date.getDate();
    date.setDate(today + dayShift);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) { day = '0' + day; }
    if (month < 10) { month = '0' + month; }

    return day + '-' + month + '-' + year;
}

function getDaysOfWeek() {
    let today = new Date();
    let date = today.getDay();

    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < N_PAST_DAYS; i++) {
        let day = date - i;
        if (day > 6) {
            day %= 7;
        } else {
            while (day < 0) { day += 7; }
        }
        document.getElementById('past-day-' + i).innerHTML = DAYS[day];
    }
    for (let i = 0; i < N_FUTURE_DAYS; i++) {
        let day = date + i + 1;
        if (day > 6) {
            day %= 7;
        } else {
            while (day < 0) { day += 7; }
        }
        document.getElementById('future-day-' + i).innerHTML = DAYS[day];
    }
}

function getDateLabels(nDaysAgo, nDaysForward) {
    let today = new Date();
    let date = new Date();
    let pastDates = [];
    let futureDates = [];
    let day, month, monthLabel, dateLabel;

    const MONTHS = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    for (let i = nDaysAgo; i > 0; i--) {
        date.setDate(today.getDate() - i + 1);

        day = date.getDate();
        month = date.getMonth();
        monthLabel = MONTHS[month];
        dateLabel = day + ' ' + monthLabel;
        pastDates.push(dateLabel);
    }

    for (let i = 0; i < nDaysForward; i++) {
        date.setDate(today.getDate() + i + 1);

        day = date.getDate();
        month = date.getMonth();
        monthLabel = MONTHS[month];
        dateLabel = day + ' ' + monthLabel;
        futureDates.push(dateLabel);
    }

    return pastDates.concat(futureDates);
}
