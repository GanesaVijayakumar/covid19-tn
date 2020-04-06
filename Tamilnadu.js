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
            caption: "Tamilnadu",
            theme: "ocean"
        },
        data: [{
            label: "CHENNAI",
            value: "98"
        }, {
            label: "COIMBATORE",
            value: "62"
        }, {
            label: "DINDIGUL",
            value: "42"
        }, {
            label: "TIRUNELVELI",
            value: "38"
        }, {
            label: "ERODE",
            value: "27"
        },{
            label: "NAMAKKAL",
            value: "25"
        }, {
            label: "THENI",
            value: "24"
        }, {
            label: "RANIPET",
            value: "24"
        }, {
            label: "KARUR",
            value: "22"
        }, {
            label: "VILUPPURAM",
            value: "19"
        }]
    };

    var revenueChartConfigs = {
        id: "revenue-chart",
        type: "column3d",
        width: "100%",
        height: 500,
        dataFormat: "json",
        dataSource: myDataSource
    };

    ReactDOM.render( < ReactFC {...revenueChartConfigs }/>,
		document.getElementById('chart-container-tn')
	);
});
