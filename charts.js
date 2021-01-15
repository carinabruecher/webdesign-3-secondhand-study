var ctx = document.getElementById('pie1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['stimme zu', 'stimme nicht zu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#2F8E12', '#B9B9B9'],
            data: [60, 40]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById('pie2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['stimme zu', 'stimme nicht zu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#2F8E12', '#B9B9B9'],
            data: [61, 39]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById('pie3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['stimme zu', 'stimme nicht zu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#2F8E12', '#B9B9B9'],
            data: [45, 55]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById('pie4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['stimme zu', 'stimme nicht zu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#2F8E12', '#B9B9B9'],
            data: [64, 36]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});

var ctx = document.getElementById('pie5').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['stimme zu', 'stimme nicht zu'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#2F8E12', '#B9B9B9'],
            data: [47, 53]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});

new Chart(document.getElementById("group1-chart-clima"), {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Gebrauchtkäufer*innen',
            backgroundColor: '#CE3700',
            type: 'scatter',
            data: [{
                x: 75,
                y: 1
            }, {
                x: 73,
                y: 2
            }, {
                x: 66,
                y: 3
            }, {
                x: 66,
                y: 4
            }, {
                x: 64,
                y: 5
            }, {
                x: 57,
                y: 6
            }, {
                x: 56,
                y: 7
            }, {
                x: 55,
                y: 8
            }, {
                x: 16,
                y: 9
            }],
        }],
        options: {},
    }
});

new Chart(document.getElementById("group2-chart-clima"), {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Gebrauchtkäufer*innen',
            backgroundColor: '#CE3700',
            type: 'scatter',
            data: [{
                x: 75,
                y: 1
            }, {
                x: 73,
                y: 2
            }, {
                x: 66,
                y: 3
            }, {
                x: 66,
                y: 4
            }, {
                x: 64,
                y: 5
            }, {
                x: 57,
                y: 6
            }, {
                x: 56,
                y: 7
            }, {
                x: 55,
                y: 8
            }, {
                x: 16,
                y: 9
            }],
        }],
        options: {},
    }
});

new Chart(document.getElementById("group3-chart-clima"), {
    type: 'line',
    data: {
        labels: ['0%','25%','50%','75%','100%'],
        datasets: [{
            data: [75,73,66,66,64,57,56,55,16],
            label: "Gebrauchtkäufer*innen",
            lineTension: 0,
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [67,55,28,53,58,35,50,25,27],
            label: "Neukäufer*innen",
            lineTension: 0,
            borderColor: "#8e5ea2",
            fill: false
        }
        ]
    },
    options: {
    }
});