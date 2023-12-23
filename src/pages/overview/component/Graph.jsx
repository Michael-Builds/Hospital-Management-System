
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';

const weekly = [
    { label: 'Monday', Patient: 21, Inpatient: 20 },
    { label: 'Tuesday', Patient: 35, Inpatient: 15 },
    { label: 'Wednesday', Patient: 75, Inpatient: 5 },
    { label: 'Thursday', Patient: 51, Inpatient: 9 },
    { label: 'Friday', Patient: 41, Inpatient: 22 },
    { label: 'Saturday', Patient: 47, Inpatient: 24 },
    { label: 'Sunday', Patient: 30, Inpatient: 20 },
];

const monthly = [
    { label: 'Jan', Patient: 21, Inpatient: 20 },
    { label: 'Feb', Patient: 35, Inpatient: 15 },
    { label: 'Mar', Patient: 75, Inpatient: 5 },
    { label: 'Apr', Patient: 51, Inpatient: 9 },
    { label: 'May', Patient: 41, Inpatient: 22 },
    { label: 'Jun', Patient: 47, Inpatient: 24 },
    { label: 'Jul', Patient: 30, Inpatient: 20 },
    { label: 'Aug', Patient: 25, Inpatient: 20 },
    { label: 'Sep', Patient: 38, Inpatient: 20 },
    { label: 'Oct', Patient: 42, Inpatient: 26 },
    { label: 'Nov', Patient: 32, Inpatient: 23 },
    { label: 'Dec', Patient: 28, Inpatient: 32 }
];

const generateRandomPatient = () => Math.floor(Math.random() * 1000);
const generateRandomInpatient = () => Math.floor(Math.random() * 2000);

const generateWeeklyData = () => {
    return weekly.map((day) => ({
        label: day,
        Patient: generateRandomPatient(),
        Inpatient: generateRandomInpatient(),
    }));
};

const generateMonthlyData = () => {
    return monthly.map((month) => ({
        label: month,
        Patient: generateRandomPatient(),
        Inpatient: generateRandomInpatient(),
    }));
};

export default function Recharts({ selectedItem }) {
    const chartData = selectedItem === "Weekly" ? generateWeeklyData() : generateMonthlyData();

    return (
        <div className="row bg-white rounded-lg p-4">
            <div className="section col-md-6">
                <h3 className="text-lg font-semibold text-gray font-quicksand ">Patients Statistics</h3>
                <div className="section-content">
                    <ResponsiveContainer width="100%" height={332} className="font-quicksand">
                        <BarChart data={chartData} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                            <XAxis dataKey="label" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Patient" fill="#4CAF50" />
                            <Bar dataKey="Inpatient" fill="#FFA500" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

Recharts.propTypes = {
    selectedItem: PropTypes.string.isRequired,
};
