function getChangeInUnits(currency, dayShift) {

    if (dayShift < 1) {
        let price = document.getElementById(currency + '-past-' + dayShift);
        let prevPrice = document.getElementById(currency + '-past-' + dayShift - 1);
        let change = price - prevPrice;

        document.getElementById(currency + '-past-' + dayShift).innerHTML = change;
    }
//    else {
//        let price = getFuturePrice(currency, dayShift);
//        let prevPrice = getFuturePrice(currency, dayShift - 1);
//        let change = price - prevPrice;
//
//        document.getElementById(currency + '-future-' + dayShift).innerHTML = change;
//    }
}

function getChangeInPercent(currency, dayShift) {

    if (dayShift < 1) {
        let price = getPastPrice(currency, dayShift);
        let prevPrice = getPastPrice(currency, dayShift - 1);
        let percent = Math.round((price - prevPrice) * 100) / 100;

        document.getElementById(currency + '-past-' + dayShift).innerHTML = percent + '%';
    }
//    else {
//        let price = getFuturePrice(currency, dayShift);
//        let prevPrice = getFuturePrice(currency, dayShift - 1);
//        let percent = Math.round((price - prevPrice) * 100) / 100;
//
//        document.getElementById(currency + '-future-' + dayShift).innerHTML = percent + '%';
//    }
}

function getPriceHistory(currency, nDaysAgo, nDaysForward) {
    // TODO! past + future
    return [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];
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

            for (let day = N_PAST_DAYS - 1; day > 0; day--) {
                getPastPrice(CURRENCIES[curr], -day);
                document.getElementById(CURRENCIES[curr]+ '-past-' + day)
                    .style.color = BLACK;
            }
            getFreshPrice(CURRENCIES[curr]);
            document.getElementById(CURRENCIES[curr]+ '-past-0').style.color = BLACK;

            for (let day = 0; day < N_FUTURE_DAYS; day++) {
//                document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                .innerHTML = getFuturePrice(CURRENCIES[curr], day);
//                document.getElementById(CURRENCIES[curr]+ '-future-' + day)
//                .style.color = BLACK;
            }
        }

    } else if (changeChecked) {
        for (let curr = 0; curr < N_CURRENCIES_TO_SHOW; curr++) {

            for (let day = 0; day < N_PAST_DAYS ; day++) {
                let change = getChangeInUnits(CURRENCIES[curr], day);

                if (change < 0) {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = RED;
                } else {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = GREEN;
                }
            }
            for (let day = 0; day < N_FUTURE_DAYS; day++) {
//                document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                .innerHTML = getChangeInUnits(CURRENCIES[curr], day);
//
//                if (getChangeInUnits(CURRENCIES[curr], day) < 0) {
//                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                    .style.color = RED;
//                } else {
//                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                    .style.color = GREEN;
//                }
            }
        }

    } else {
        for (let curr = 0; curr < N_CURRENCIES_TO_SHOW; curr++) {

            for (let day = 0; day < N_PAST_DAYS ; day++) {
                let percent = getChangeInPercent(CURRENCIES[curr], -day);

                if (percent < 0) {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = RED;
                } else {
                    document.getElementById(CURRENCIES[curr] + '-past-' + day)
                    .style.color = GREEN;
                }
            }
            for (let day = 0; day < N_FUTURE_DAYS; day++) {
//                document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                .innerHTML = getChangeInPercent(CURRENCIES[curr], day)
//
//                if (getChangeInPercent(CURRENCIES[curr], day) < 0) {
//                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                    .style.color = RED;
//                } else {
//                    document.getElementById(CURRENCIES[curr] + '-future-' + day)
//                    .style.color = GREEN;
//                }
            }
        }
    }
}
