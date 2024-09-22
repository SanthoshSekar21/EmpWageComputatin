async function empWageComputationMain() {
    console.log('Welcome to the Employee Wage Computation');
    try {
        const totalWageForMonth = await calculateMonthlyWage();
        console.log(`Total wage for the month is Rs. ${totalWageForMonth}`);
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
const partTimeHour = 4;

const dailyWageCalculation = (attendance, type) => {
    return new Promise((resolve, reject) => {
        if (attendance === 'Present') {
            let workHour = 0;
            
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
    return type; 
}


const calculateMonthlyWage = async () => {
    const workingDays = 20;
    let totalWageForMonth = 0;

    for (let day = 1; day <= workingDays; day++) {
        try {
            let attendance = await checkAttendance();  
            let type = empType();                     
            const dailyWage = await dailyWageCalculation(attendance, type); 
            totalWageForMonth += dailyWage;           
            // console.log(`Day ${day}: Employee is present \nWage for the day is Rs. ${dailyWage}`);
        } catch (error) {
            console.log(`Day ${day}: ${error}`);      
        }
    }

    return totalWageForMonth;  
}


// Execute the main function
empWageComputationMain();
