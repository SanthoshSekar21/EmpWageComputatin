function empWageComputationMain(){
    console.log('Welcome to the Employee WageComputation');
    checkAttendance();
};

const checkAttendance = () => {
    const attendance = Math.floor(Math.random() * 2);
    if (attendance === 1) 
        console.log('Present');
     else 
        console.log('Absent');
};
empWageComputationMain();