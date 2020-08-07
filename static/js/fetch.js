async function getSubscriber(_email) {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/subscribers/' + _email, options)
    let data = await res.json();
    let { id, email, enrolling_date } = data;
}

async function getSubscriberList() {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/subscribers', options)
    let data = await res.json();

    let idx = 0;
    let subscribers = data.map(function(subscriber) {
        mapSubscribers(idx, subscriber)
        idx ++;
    });
}

async function getSubscribersQty() {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/subscribers', options)
    let data = await res.json();
    let qty = data.length;

    document.getElementById('sub-qty').innerHTML = qty;
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

async function sendConfirmationMail() {
    let email = document.getElementById('email-confirm').value;
    const code = 123456;

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/mail/' + email + '&' + code, options);
    let data = await res.json();
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
    document.getElementById(_currency + '-past-' + -dayShift).innerHTML = price;
    // return price;
}

async function getFreshPrice(currency) {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    let res = await fetch(URL + '/price/' + currency, options);
    let data = await res.json();
    let { price } = data;

    let _price = Math.round(10000 * price) / 10000;
    document.getElementById(currency + '-past-0').innerHTML = _price;
}

async function getFuturePrice(_currency, dayShift) {
//    let _date = getFormattedDate(dayShift);
//    const options = {
//        method: 'GET',
//        headers: {'Content-Type': 'application/json'}
//    }
//    let res = await fetch(URL + '/future-prices/' + _currency + '&' + _date, options);
//    let data = await res.json();

    // TODO!
    return 4.0;
}
