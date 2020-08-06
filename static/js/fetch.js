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

function getPriceHistory(currency, nDaysAgo, nDaysForward) {
    // TODO! fetch
    return [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];
}