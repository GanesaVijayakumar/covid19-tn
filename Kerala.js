import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts);

export default ({ name }) => <h1>{name}</h1>;

FusionCharts.ready(function () {
    var myDataSource = {
        chart: {
            caption: "Kerala",
            theme: "ocean"
        },
        data: [{
            label: "CHENNAI",
            value: "91"
        }, {
            label: "DINDIGUL",
            value: "43"
        }, {
            label: "TIRUNELVELI",
            value: "37"
        }, {
            label: "COIMBATORE",
            value: "33"
        }, {
            label: "ERODE",
            value: "27"
        },{
            label: "NAMAKKAL",
            value: "24"
        }, {
            label: "THENI",
            value: "23"
        }, {
            label: "RANIPET",
            value: "22"
        }, {
            label: "KARUR",
            value: "22"
        }, {
            label: "TIRUCHIRAPPALLI	",
            value: "18"
        }]
    };

    var revenueChartConfigsKl = {
        id: "revenue-chart-kl",
        type: "column3d",
        width: "100%",
        height: 500,
        dataFormat: "json",
        dataSource: myDataSource
    };

    ReactDOM.render( < ReactFC {...revenueChartConfigsKl }/>,
		document.getElementById('chart-container-kl')
	);
});
