//pie charts
//chart pie1
var chart = am4core.create("pie1", am4charts.PieChart);

chart.data = [{
    "country": "stimme zu",
    "litres": 60
}, {
    "country": "stimme nicht zu",
    "litres": 40
},];

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.dataFields.hidden = "hidden";

pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

pieSeries.colors.list = [
    am4core.color("#2F8E12"),
    am4core.color("#B9B9B9"),
];

pieSeries.slices.template.stroke = am4core.color("#ffffff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

//chart pie2
var chart = am4core.create("pie2", am4charts.PieChart);

chart.data = [{
    "country": "stimme zu",
    "litres": 61
}, {
    "country": "stimme nicht zu",
    "litres": 39
},];

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.dataFields.hidden = "hidden";

pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

pieSeries.colors.list = [
    am4core.color("#2F8E12"),
    am4core.color("#B9B9B9"),
];

pieSeries.slices.template.stroke = am4core.color("#ffffff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

//chart pie3
var chart = am4core.create("pie3", am4charts.PieChart);

chart.data = [{
    "country": "stimme zu",
    "litres": 45
}, {
    "country": "stimme nicht zu",
    "litres": 55
},];

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.dataFields.hidden = "hidden";

pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

pieSeries.colors.list = [
    am4core.color("#2F8E12"),
    am4core.color("#B9B9B9"),
];

pieSeries.slices.template.stroke = am4core.color("#ffffff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

//chart pie4
var chart = am4core.create("pie4", am4charts.PieChart);

chart.data = [{
    "country": "stimme zu",
    "litres": 64
}, {
    "country": "stimme nicht zu",
    "litres": 36
},];

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.dataFields.hidden = "hidden";

pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

pieSeries.colors.list = [
    am4core.color("#2F8E12"),
    am4core.color("#B9B9B9"),
];

pieSeries.slices.template.stroke = am4core.color("#ffffff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

//chart pie5
var chart = am4core.create("pie5", am4charts.PieChart);

chart.data = [{
    "country": "stimme zu",
    "litres": 47
}, {
    "country": "stimme nicht zu",
    "litres": 53
},];

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.dataFields.hidden = "hidden";

pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

pieSeries.colors.list = [
    am4core.color("#2F8E12"),
    am4core.color("#B9B9B9"),
];

pieSeries.slices.template.stroke = am4core.color("#ffffff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

//line charts climate
//climate line 1
var chart = am4core.create("climate1", am4charts.XYChart);

// Add data
chart.data = [{
    "question": "1",
    "used": 75,
    "new": 67,
}, {
    "question": "2",
    "used": 73,
    "new": 55,
}, {
    "question": "3",
    "used": 66,
    "new": 28,
}, {
    "question": "4",
    "used": 66,
    "new": 53,
}, {
    "question": "5",
    "used": 64,
    "new": 58,
}, {
    "question": "6",
    "used": 57,
    "new": 35,
}, {
    "question": "7",
    "used": 56,
    "new": 50,
}, {
    "question": "8",
    "used": 55,
    "new": 25,
}, {
    "question": "9",
    "used": 16,
    "new": 27,
}];

// Create axes
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inversed = true;

// Create value axis
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueX = "used";
series1.dataFields.valueY = "question";
series1.strokeWidth = 3;
series1.strokeDasharray = 4;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{valueX.value}";

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueX = "new";
series2.dataFields.valueY = "question";
series2.strokeWidth = 3;
series2.strokeDasharray = 4;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "{valueX.value}";

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Create ranges
var range = valueAxis.axisRanges.create();
range.value = 0;
range.endValue = 100;
range.strictMinMax= true;
range.renderer.minGridDistance = 25;


var range2 = valueAxis.axisRanges.create();
range2.value = 1;
range2.endValue = 9;

