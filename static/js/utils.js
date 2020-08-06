function toggleStep(firstId, secondId) {
    let first = document.getElementById(firstId);
    let second = document.getElementById(secondId);

    if (second.style.display === 'none' || second.style.display === '') {
        first.style.display = 'none';
        second.style.display = 'block';
    } else {
        first.style.display = 'block';
        second.style.display = 'none';
    }
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
