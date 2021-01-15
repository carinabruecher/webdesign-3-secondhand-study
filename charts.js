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