function mapSubscribers(idx, subscriber) {
    let { id, email, enrolling_date } = subscriber;

    if (document.getElementById('admin-row-' + idx) === null) {

        let table = document.getElementById('admin-table');

        let row = document.createElement('tr');
        row.setAttribute('id', 'admin-row-' + idx);
        table.appendChild(row);

        let colId = document.createElement('td');
        row.appendChild(colId);
        colId.setAttribute('id', 'admin-col-id-' + idx)
        colId.innerHTML = id;

        let colEmail = document.createElement('td');
        row.appendChild(colEmail);
        colEmail.setAttribute('id', 'admin-col-email-' + idx)
        colEmail.innerHTML = email;

        let colDate = document.createElement('td');
        row.appendChild(colDate);
        colDate.setAttribute('id', 'admin-col-date-' + idx)
        colDate.innerHTML = enrolling_date;

        let colDelete = document.createElement('td');
        row.appendChild(colDelete);

        let btn = document.createElement('button');
        btn.setAttribute('onclick', 'deleteSubscriber(id)');
        btn.innerHTML = 'Delete';
        colDelete.appendChild(btn);
    }
}
