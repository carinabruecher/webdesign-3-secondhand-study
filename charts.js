Highcharts.chart('climate1', {
    chart: {
        type: 'line',
        inverted: true,
        height: '140 %'
    },
    title: {
        text: ' '
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },

    xAxis: {
        categories: [
            '1','2','3','4','5','6','7','8','9'
        ],
        gridLineWidth: 1
    },

    yAxis: {
        title: {
            text: 'Prozent der Zustimmung'
        },
        allowDecimals: false,
        min: 0,
        max: 100,
        gridLineWidth: 1
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Gebraucht-Käufer*innen',
        data: [75,73,66,66,64,57,56,55,16],
        color: '#c73b1a'
    }, {
        name: 'Neu-Käufer*innen',
        data: [67,55,28,53,58,35,50,25,27],
        color: '#7e0509'

    }],
    tooltip: {
        formatter: function() {
            return 'Der Frage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
        }
    }
});

Highcharts.chart('climate2', {
    chart: {
        type: 'line',
        inverted: true,
        height: '140 %'
    },
    title: {
        text: ' '
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },

    xAxis: {
        categories: [
            '1','2','3','4','5','6','7','8','9'
        ],
        gridLineWidth: 1
    },

    yAxis: {
        title: {
            text: 'Prozent der Zustimmung'
        },
        allowDecimals: false,
        min: 0,
        max: 100,
        gridLineWidth: 1
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Unter 30',
        data: [69,72,44,53,43,44,48,45,21],
        color: '#0083c2'
    }, {
        name: 'über 30',
        data: [72,62,48,61,65,47,54,40,21],
        color: '#46d3ed'

    }],
    tooltip: {
        formatter: function() {
            return 'Der Frage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
        }
    }
});

Highcharts.chart('climate3', {
    chart: {
        type: 'line',
        inverted: true,
        height: '140 %'
    },
    title: {
        text: ' '
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },

    xAxis: {
        categories: [
            '1','2','3','4','5','6','7','8','9'
        ],
        gridLineWidth: 1
    },

    yAxis: {
        title: {
            text: 'Prozent der Zustimmung'
        },
        allowDecimals: false,
        min: 0,
        max: 100,
        gridLineWidth: 1
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'West',
        data: [72,65,49,60,63,46,54,42,20],
        color: '#f8c919'
    }, {
        name: 'Ost',
        data: [69,60,42,56,53,47,49,38,25],
        color: '#F48300'

    }],
    tooltip: {
        formatter: function() {
            return 'Der Frage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
        }
    }
});