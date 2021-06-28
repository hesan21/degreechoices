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
            data: [74.3, 25.7],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "74.3" ;
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
            data: [48.8, 51.2],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius:0
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
                let theCenterText = "48.8" ;
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
            data: [95.0, 5.0],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "95.0" ;
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
            data: [30.0, 70.0],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "30.0" ;
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

// Inclusivity
let canvas5 = document.getElementById("inclusivity-top-scoring");
let ctx5 = canvas5.getContext("2d")
let canvas6 = document.getElementById("inclusivity-lowest-scoring");
let ctx6 = canvas6.getContext("2d")

new Chart(ctx5, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [95.0, 5.0],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "95.0" ;
                const canvasBounds = canvas5.getBoundingClientRect();
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
new Chart(ctx6, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [30.0, 70.0],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "30.0" ;
                const canvasBounds = canvas6.getBoundingClientRect();
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

// Sustainability
let canvas7 = document.getElementById("sustainability-top-scoring");
let ctx7 = canvas7.getContext("2d")
let canvas8 = document.getElementById("sustainability-lowest-scoring");
let ctx8 = canvas8.getContext("2d")

new Chart(ctx7, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [95.0, 5.0],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "95.0" ;
                const canvasBounds = canvas7.getBoundingClientRect();
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
new Chart(ctx8, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [30.0, 70.0],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "30.0" ;
                const canvasBounds = canvas8.getBoundingClientRect();
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

// Freedom
let canvas9 = document.getElementById("freedom-top-scoring");
let ctx9 = canvas9.getContext("2d")
let canvas10 = document.getElementById("freedom-lowest-scoring");
let ctx10 = canvas10.getContext("2d")

new Chart(ctx9, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [95.0, 5.0],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "95.0" ;
                const canvasBounds = canvas9.getBoundingClientRect();
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
new Chart(ctx10, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [30.0, 70.0],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "30.0" ;
                const canvasBounds = canvas10.getBoundingClientRect();
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

// Health
let canvas11 = document.getElementById("health-top-scoring");
let ctx11 = canvas11.getContext("2d")
let canvas12 = document.getElementById("health-lowest-scoring");
let ctx12 = canvas12.getContext("2d")

new Chart(ctx11, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [95.0, 5.0],
            backgroundColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(245, 81, 81, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "95.0" ;
                const canvasBounds = canvas11.getBoundingClientRect();
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
new Chart(ctx12, {
    type: 'doughnut',
    data: {
        // labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: 'Scores',
            data: [30.0, 70.0],
            backgroundColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderColor: [
                'rgba(242, 172, 87, 1)',
                '#999',
            ],
            borderWidth: 1,
            borderRadius: 0
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
                let theCenterText = "30.0" ;
                const canvasBounds = canvas12.getBoundingClientRect();
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
