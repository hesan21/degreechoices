let canvas = document.getElementById("top5-top-scoring");
let ctx = canvas.getContext("2d")

let top5_top = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [72.3, 27.7],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                'rgba(222,222,224, 1)',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                'rgba(222,222,224, 1)',
            ],
            borderWidth: 1,
            borderRadius: 5
        }]
    },
    options: {
        cutout: 110,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    },
    plugins: [
        {
            afterDraw: function (chart, option) {
                let theCenterText = "50%" ;
                const canvasBounds = canvas.getBoundingClientRect();
                const fontSz = Math.floor( canvasBounds.height * 0.15 ) ;
                chart.ctx.textBaseline = 'middle';
                chart.ctx.textAlign = 'center';
                chart.ctx.font = fontSz+'px Arial';
                chart.ctx.fillStyle= "white"
                chart.ctx.fillText(theCenterText, canvasBounds.width/2, canvasBounds.height*0.55 )
            }
        }
    ]
});



let canvas2 = document.getElementById("top5-lowest-scoring");
let ctx2 = canvas2.getContext("2d")

let top5_lowest = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [82.3, 17.7],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                'rgba(222,222,224, 1)',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                'rgba(242, 172, 87, 1)',
            ],
            borderWidth: 1,
            borderRadius:5
        }]
    },
    options: {
        cutout: 110,
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    },
    plugins: [
        {
            afterDraw: function (chart, option) {
                let theCenterText = "82%" ;
                const canvasBounds = canvas.getBoundingClientRect();
                const fontSz = Math.floor( canvasBounds.height * 0.15 ) ;
                chart.ctx.textBaseline = 'middle';
                chart.ctx.textAlign = 'center';
                chart.ctx.font = fontSz+'px Arial';
                chart.ctx.fillStyle= "white"
                chart.ctx.fillText(theCenterText, canvasBounds.width/2, canvasBounds.height*0.55 )
            }
        }
    ]
});