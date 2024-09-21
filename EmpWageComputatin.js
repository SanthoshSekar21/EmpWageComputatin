async function empWageComputationMain() {
    console.log('Welcome to the Employee Wage Computation');
    try {
        let attendance = await checkAttendance();
        const calculateWage=await dailyWageCalculation(attendance);
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
const dailyWageCalculation=(attendance)=>{
    return new Promise((resolve,reject)=>{
        if(attendance==='Present'){
           const dailyWage=fullDayHour*wagePerHour;
        resolve(dailyWage)
        }
        else{
            reject(' Employee is Absent no wage')
        }
    })
}
// Execute the main function
empWageComputationMain();


