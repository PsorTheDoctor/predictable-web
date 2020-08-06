function getFormattedDate(dayShift) {
    var date = new Date();
    var today = date.getDate();
    date.setDate(today + dayShift);

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if (day < 10) { day = '0' + day; }
    if (month < 10) { month = '0' + month; }

    return day + '-' + month + '-' + year;
}

function getDateLabels(nDaysAgo, nDaysForward) {
    var today = new Date();
    var date = new Date();
    var pastDates = [];
    var futureDates = [];
    var day, month, monthLabel, dateLabel;

    const MONTHS = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    for (let i = nDaysAgo; i > 0; i--) {
        date.setDate(today.getDate() - i + 1);

        day = date.getDate();
        month = date.getMonth();
        monthLabel = MONTHS[month + 1];
        dateLabel = day + ' ' + monthLabel;
        pastDates.push(dateLabel);
    }

    for (let i = 0; i < nDaysForward; i++) {
        date.setDate(today.getDate() + i + 1);

        day = date.getDate();
        month = date.getMonth();
        monthLabel = MONTHS[month + 1];
        dateLabel = day + ' ' + monthLabel;
        futureDates.push(dateLabel);
    }

    return pastDates.concat(futureDates);
}
