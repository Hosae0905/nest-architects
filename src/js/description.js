let awardElements = document.querySelector('#count-awards');
let buildingElements = document.querySelector('#count-buildings');
let customerElements = document.querySelector('#count-customers');

let startCount = 0;

let countAwards = awardElements.textContent;
let countBuildings = buildingElements.textContent.split('+')[0];
let countCustomers = customerElements.textContent.replace(',', '').split('+')[0];

function counting(element, start, end, speed) {
    let increment = end / speed;

    let test = setInterval(function () {
        start += increment;
        if (start >= end) {
            start = end;
            clearInterval(test);
        }
        element.textContent = Math.floor(start);
    }, 30);
}


counting(awardElements, startCount, countAwards, 100);
counting(buildingElements, startCount, countBuildings, 100);
counting(customerElements, startCount, countCustomers, 100);

function movedDescription() {
    let selector = document.querySelector('#description-section').offsetTop;
    selector -= 100;
    window.scrollTo({top : selector, behavior : 'smooth'})
}
