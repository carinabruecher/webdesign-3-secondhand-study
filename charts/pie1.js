var ctx = document.getElementById('pie1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['stimme zu', 'stimme nicht zu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#2F8E12','#B9B9B9'],
            data: [60,40]
        }]
    },

    // Configuration options go here
    options: {}
});