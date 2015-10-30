var App = (function () {
    App.dashboard = function () {
        'use strict'

        function type_radar() {
            var $chart = jQuery("#type-radar");
            if($chart.length > 0) {
                var color1 = tinycolor(App.color.primary).lighten(6);
                var data = {
                    labels: $chart.data('labels'),
                    datasets: [
                        {
                            label: $chart.data('label'),
                            fillColor: color1.setAlpha(.5).toString(),
                            pointColor: color1.setAlpha(.8).toString(),
                            strokeColor: color1.setAlpha(.8).toString(),
                            highlightFill: color1.setAlpha(.75).toString(),
                            highlightStroke: color1.toString(),
                            data: $chart.data('dataset')
                        }
                    ]
                };
                var radarChart = new Chart($chart.get(0).getContext("2d")).Radar(data, {
                    scaleShowLine: true,
                    responsive: true,
                    maintainAspectRatio: false,
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
                });
            }
        }

        type_radar();

    };
    return App;
})(App || {});