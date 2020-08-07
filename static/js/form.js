// TODO!

//function toggleStep(firstId, secondId) {
//    let first = document.getElementById(firstId);
//    let second = document.getElementById(secondId);
//
//    if (second.style.display === 'none' || second.style.display === '') {
//        first.style.display = 'none';
//        second.style.display = 'block';
//    } else {
//        first.style.display = 'block';
//        second.style.display = 'none';
//    }
//}

function goToFirstStep(step) {
    let first = document.getElementById('first-step');
    let second = document.getElementById('second-step');
    let third = document.getElementById('third-step');

    switch (step) {
        case 'second-step':
            first.style.display = 'block';
            second.style.display = 'none';
            third.style.display = 'none';
            break;
        case 'third-step':
            first.style.display = 'block';
            second.style.display = 'none';
            third.style.display = 'none';
            break;
        default:
            break;
    }
}

function nextStep(step) {
    let first = document.getElementById('first-step');
    let second = document.getElementById('second-step');
    let third = document.getElementById('third-step');

    switch (step) {
        case 'first-step':
            first.style.display = 'none';
            second.style.display = 'block';
            third.style.display = 'none';
            break;
        case 'second-step':
            first.style.display = 'none';
            second.style.display = 'none';
            third.style.display = 'block';
            break;
        default:
            break;
    }
}

function secondStep(emailId, stepId) {

    sendConfirmationMail(emailId);
    nextStep(stepId);
}

function thirdStep(emailId, codeId, stepId) {

    postSubscriber(emailId, codeId);
    goToFirstStep(stepId);
}