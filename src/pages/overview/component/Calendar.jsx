import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Total',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            labels: {
                font: {
                    family: 'Quicksand, sans-serif',
                },
            },
        },
    },
};

const PieChart = () => {
    return (
        <div className='bg-white p-1 rounded-lg h-[100%]'>
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    );
}

export default PieChart;
