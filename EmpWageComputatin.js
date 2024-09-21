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
const dailyWageCalculation=(attendance,type)=>{
    return new Promise((resolve,reject)=>{
        if(attendance==='Present'){
            const workHour=type ? fullDayHour : partTimeHour;
           const dailyWage=workHour*wagePerHour;
        resolve(dailyWage)
        }
        else{
            reject(' Employee is Absent no wage')
        }
    })
}
const empType=()=>
    { 
        const type = Math.random() < 0.5 ? "fullTime" : "partTime"; 
        console.log(`The Type of Employee: ${type}`);
        return type ==='fullTime'}
// Execute the main function
empWageComputationMain();


