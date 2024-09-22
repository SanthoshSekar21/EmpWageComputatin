async function empWageComputationMain() {
    console.log('Welcome to the Employee Wage Computation');
    try {
        let attendance = await checkAttendance();
        let type= empType();
        const calculateWage=await dailyWageCalculation(attendance,type);
        console.log( `employee is present \n wage of the employee is Rs. ${calculateWage}`);
    } catch (error) {
        console.log(error);
    }
}

const checkAttendance = () => {
    return new Promise((resolve, reject) => {
        const attendance = Math.floor(Math.random() * 2);
        if (attendance === 1) 
            resolve('Present');
        else 
            reject('Absent');
    });
};
const fullDayHour = 8;
const wagePerHour = 20;
const partTimeHour=4;
const dailyWageCalculation = (attendance, type) => {
    return new Promise((resolve, reject) => {
        if (attendance === 'Present') {
            let workHour = 0;
            // Use switch case for determining work hours
            switch (type) {
                case 'fullTime':
                    workHour = fullDayHour;
                    break;
                case 'partTime':
                    workHour = partTimeHour;
                    break;
                default:
                    reject('Invalid employee type');
            }
            const dailyWage = workHour * wagePerHour;
            resolve(dailyWage);
        } else {
            reject('Employee is Absent, no wage');
        }
    });
}
const empType = () => { 
    const randomValue = Math.random();
    let type;

    // Using switch case to determine the employee type
    switch (true) {
        case randomValue < 0.5:
            type = 'fullTime';
            break;
        case randomValue >= 0.5:
            type = 'partTime';
            break;
        default:
            type = 'unknown';
    }

    console.log(`The Type of Employee: ${type}`);
    return type;  // returning the type as a string
}

// Execute the main function
empWageComputationMain();


