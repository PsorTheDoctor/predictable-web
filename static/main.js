const URL = 'http://127.0.0.1:5000';

const CURRENCIES = [
    'bitcoin', 'ethereum', 'ripple', 'tether', 'bitcoin-cash',
    'cardano', 'litecoin', 'eos', 'chainlink', 'tezos'
];

const N_CURRENCIES_TO_SHOW = 10;
const N_PAST_DAYS = 4;
const N_FUTURE_DAYS = 3;

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

async function getSubscriber(_email) {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/subscribers/' + _email, options)
    let data = await res.json();
    let { id, email, enrolling_date } = data;

//    document.getElementById('col-id').innerHTML = id;
//    document.getElementById('col-email').innerHTML = email;
//    document.getElementById('col-date').innerHTML = enrolling_date;
}

async function getSubscriberList() {

}

async function postSubscriber() {
    let email = document.getElementById('email').value;
    let date = getFormattedDate(0);
    let subscriber = {
        email: email,
        enrolling_date: date
    };
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(subscriber)
    };
    let res = await fetch(URL + '/subscribers', options);
    let data = await res.json();

    alert('You have been enrolled successfully!');
}

async function deleteSubscriber() {
    let email = document.getElementById('email-exit').value;
    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/subscribers/' + email, options);
    let data = await res.json();

    alert('You turned newsletter off successfully!');
}

async function getPastPrice(_currency, dayShift) {
    let _date = getFormattedDate(dayShift);
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/past-prices/' + _currency + '&' + _date, options);
    let data = await res.json();
    let { id, currency, date, value } = data;

    let price = Math.round(10000 * value) / 10000;
    document.getElementById(_currency + '-past-' + dayShift).innerHTML = price;
}

function getFuturePrice(currency, dayShift) {
    return 1.0;
}

function getChangeInUnits(currency, dayShift) {

}

function getChangeInPercent(currency, dayShift) {
    return 3.0;
}

function getRadioValue() {
    var radio = document.getElementsByName('table-radio');
    var priceChecked = radio[0].checked;
    var changeChecked = radio[1].checked;

    const BLACK = 'black';
    const GREEN = 'green';
    const RED = 'red';

    if (priceChecked) {
        for (let curr = 0; curr < N_CURRENCIES_TO_SHOW; curr++) {

            for (let day = 0; day < N_PAST_DAYS ; day++) {
                getPastPrice(CURRENCIES[curr], day);
                document.getElementById(CURRENCIES[curr]+ '-past-' + day)
                    .style.color = BLACK;
            }
            for (let day = 0; day < N_FUTURE_DAYS; day++) {
                document.getElementById(CURRENCIES[curr] + '-future-' + day)
                .innerHTML = getFuturePrice(CURRENCIES[curr], day);
                document.getElementById(CURRENCIES[curr]+ '-future-' + day)
                .style.color = BLACK;
            }
        }

    } else if (changeChecked) {
        for (let curr = 0; curr < N_CURRENCIES_TO_SHOW; curr++) {

            for (let day = 0; day < N_PAST_DAYS ; day++) {
                document.getElementById(CURRENCIES[curr] + '-past-' + day)
                .innerHTML = getChangeInUnits(CURRENCIES[curr], -day);

                if (getChangeInUnits(CURRENCIES[curr], day) < 0) {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = RED;
                } else {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = GREEN;
                }
            }
            for (let day = 0; day < N_FUTURE_DAYS; day++) {
                document.getElementById(CURRENCIES[curr] + '-future-' + day)
                .innerHTML = getChangeInUnits(CURRENCIES[curr], day);

                if (getChangeInUnits(CURRENCIES[curr], day) < 0) {
                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
                    .style.color = RED;
                } else {
                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
                    .style.color = GREEN;
                }
            }
        }

    } else {
        for (let curr = 0; curr < N_CURRENCIES_TO_SHOW; curr++) {

            for (let day = 0; day < N_PAST_DAYS ; day++) {
                document.getElementById(CURRENCIES[curr] + '-past-' + day)
                .innerHTML = getChangeInPercent(CURRENCIES[curr], -day)

                if (getChangeInPercent(CURRENCIES[curr], day) < 0) {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = RED;
                } else {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = GREEN;
                }
            }
            for (let day = 0; day < N_FUTURE_DAYS; day++) {
                document.getElementById(CURRENCIES[curr] + '-future-' + day)
                .innerHTML = getChangeInPercent(CURRENCIES[curr], day)

                if (getChangeInPercent(CURRENCIES[curr], day) < 0) {
                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
                    .style.color = RED;
                } else {
                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
                    .style.color = GREEN;
                }
            }
        }
    }
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

function getPriceHistory(currency, nDaysAgo, nDaysForward) {
    // TODO! fetch
    return [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];
}

function drawChart(currency) {
    var ctx = document.getElementById(currency + '-chart').getContext('2d');
    var label = currency[0].toUpperCase() + currency.substring(1) + ' price';
    var dates = getDateLabels(N_PAST_DAYS, N_FUTURE_DAYS);
    var prices = getPriceHistory(currency, N_PAST_DAYS, N_FUTURE_DAYS);

    const LINE_TENSION = 0;

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: label,
                data: prices,
                lineTension: LINE_TENSION
            }]
        },
        options: {}
    });
}

function showChart(currency) {
    drawChart(currency);
    var chart = document.getElementById(currency + '-chart');

    if (chart.style.display === 'none') {
        chart.style.display = 'block';
    } else {
        chart.style.display = 'none';
    }
}
