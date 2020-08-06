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
    let chart = document.getElementById(currency + '-chart');
    console.log(typeof chart.style.display);
    console.log(chart.style.display);

    if (chart.style.display === 'none' || chart.style.display === '') {
        chart.style.display = 'block';
    } else {
        chart.style.display = 'none';
    }
}
