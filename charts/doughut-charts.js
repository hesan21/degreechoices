let canvas = document.getElementById("top5-top-scoring");
let ctx = canvas.getContext("2d")
let canvas2 = document.getElementById("top5-lowest-scoring");
let ctx2 = canvas2.getContext("2d")

let top5_top = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [91.26, 8.74],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
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
                let theCenterText = "91.26" ;
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
let top5_lowest = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [52.69, 47.31],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
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
                let theCenterText = "52.69" ;
                const canvasBounds = canvas2.getBoundingClientRect();
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

// Diversity
let canvas3 = document.getElementById("diversity-top-scoring");
let ctx3 = canvas3.getContext("2d")
let canvas4 = document.getElementById("diversity-lowest-scoring");
let ctx4 = canvas4.getContext("2d")

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [58.59, 41.41],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
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
                let theCenterText = "58.59" ;
                const canvasBounds = canvas3.getBoundingClientRect();
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

new Chart(ctx4, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [10.81, 89.29],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
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
                let theCenterText = "10.81" ;
                const canvasBounds = canvas4.getBoundingClientRect();
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
