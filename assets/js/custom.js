
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50, 60, 70],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: [5, 15, 25, 35, 45, 55, 65],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            yAxisID: 'y1',
        }
    ]
};
// Chart Configuration
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        }
    },
};
// Initialize Chart
const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, config);
  




  