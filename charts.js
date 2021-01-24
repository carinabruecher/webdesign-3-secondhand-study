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
        plotBands: [{
            color: 'rgba(47, 142, 18, 0.09)',
            from: 0.5,
            to: 1.5
        }, {
            color: 'rgba(0, 255, 0, 0.05)',
            from: 3
        }, {
            color: 'rgba(250, 0, 0, 0.05)',
            from: 6
        }],
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
            return 'Der Aussage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
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


Highcharts.chart('consum1', {
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
            '1','2','3','4','5','6','7'
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
        data: [88,83,63,48,45,14,10],
        color: '#c73b1a'
    }, {
        name: 'Neu-Käufer*innen',
        data: [86,83,30,42,33,16,12],
        color: '#7e0509'

    }],
    tooltip: {
        formatter: function() {
            return 'Der Frage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
        }
    }
});

Highcharts.chart('consum2', {
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
            '1','2','3','4','5','6','7'
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
        data: [79,77,50,47,45,21,18],
        color: '#0083c2'
    }, {
        name: 'über 30',
        data: [88,83,46,44,38,14,10],
        color: '#46d3ed'

    }],
    tooltip: {
        formatter: function() {
            return 'Der Frage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
        }
    }
});

Highcharts.chart('consum3', {
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
            '1','2','3','4','5','6','7'
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
        data: [87,84,47,45,40,14,11],
        color: '#f8c919'
    }, {
        name: 'Ost',
        data: [86,77,44,44,36,20,13],
        color: '#F48300'

    }],
    tooltip: {
        formatter: function() {
            return 'Der Frage ' + this.x + ' stimmen ' +  this.y + '% der ' + this.series.name + ' zu.' ;
        }
    }
});


Highcharts.chart('pie1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: '90 %'

    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        name: 'Meinungen',
        colorByPoint: true,
        data: [{
            name: 'stimme zu',
            y: 60,
            color: '#2F8E12'
        }, {
            name: 'stimme nicht zu',
            y: 40,
            color: '#B9B9B9'
        }]
    }]
});

Highcharts.chart('pie2', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: '90 %'

    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        name: 'Meinungen',
        colorByPoint: true,
        data: [{
            name: 'stimme zu',
            y: 61,
            color: '#2F8E12'
        }, {
            name: 'stimme nicht zu',
            y: 39,
            color: '#B9B9B9'
        }]
    }]
});

Highcharts.chart('pie3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: '90 %'

    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        name: 'Meinungen',
        colorByPoint: true,
        data: [{
            name: 'stimme zu',
            y: 45,
            color: '#2F8E12'
        }, {
            name: 'stimme nicht zu',
            y: 55,
            color: '#B9B9B9'
        }]
    }]
});

Highcharts.chart('pie4', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: '90 %'

    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        name: 'Meinungen',
        colorByPoint: true,
        data: [{
            name: 'stimme zu',
            y: 64,
            color: '#2F8E12'
        }, {
            name: 'stimme nicht zu',
            y: 36,
            color: '#B9B9B9'
        }]
    }]
});

Highcharts.chart('pie5', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: '90 %'

    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        name: 'Meinungen',
        colorByPoint: true,
        data: [{
            name: 'stimme zu',
            y: 47,
            color: '#2F8E12'
        }, {
            name: 'stimme nicht zu',
            y: 53,
            color: '#B9B9B9'
        }]
    }]
});