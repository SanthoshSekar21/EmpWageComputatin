class Employee {
    static fullDayHour = 8;
    static wagePerHour = 20;
    static partTimeHour = 4;
    static maxWorkingDays = 20;
    static maxWorkingHours = 100;

    constructor() {
        this.totalWageForMonth = 0;
        this.totalHoursWorked = 0;
        this.totalDaysWorked = 0;
    }

    static checkAttendance() {
        return new Promise((resolve, reject) => {
            const attendance = Math.floor(Math.random() * 2);
            if (attendance === 1) 
                resolve('Present');
            else 
                reject('Absent');
        });
    }

    static empType() {
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
        return type;}

    dailyWageCalculation(attendance, type) {
        return new Promise((resolve, reject) => {
            if (attendance === 'Present') {
                let workHour = 0;
                switch (type) {
                    case 'fullTime':
                        workHour = Employee.fullDayHour;
                        break;
                    case 'partTime':
                        workHour = Employee.partTimeHour;
                        break;
                    default:
                        reject('Invalid employee type');
                }
                const dailyWage = workHour * Employee.wagePerHour;
                resolve({ dailyWage, workHour });
            } else {
                reject('Employee is Absent, no wage');
            }
        });
    }

    async calculateMonthlyWage() {
        while (this.totalDaysWorked < Employee.maxWorkingDays && this.totalHoursWorked < Employee.maxWorkingHours) {
            try {
                const attendance = await Employee.checkAttendance();
                const type = Employee.empType();
                const { dailyWage, workHour } = await this.dailyWageCalculation(attendance, type);

                this.totalWageForMonth += dailyWage;
                this.totalHoursWorked += workHour;
                this.totalDaysWorked += 1;

                console.log(`Day ${this.totalDaysWorked}: Wage for the day is Rs. ${dailyWage}, Total hours worked: ${this.totalHoursWorked}`);
            } catch (error) {
                console.log(`Day ${this.totalDaysWorked + 1}: ${error}`);
                this.totalDaysWorked += 1; 
            }

            if (this.totalHoursWorked >= Employee.maxWorkingHours) {
                console.log(`Reached maximum working hours: ${this.totalHoursWorked}`);
                break;
            }
        }

        return this.totalWageForMonth;
    }
}

async function empWageComputationMain() {
    console.log('Welcome to the Employee Wage Computation');
    const employee = new Employee(); // Create an instance of Employee
    try {
        const totalWageForMonth = await employee.calculateMonthlyWage();
        console.log(`Total wage for the month is Rs. ${totalWageForMonth}`);
    } catch (error) {
        console.log(error);
    }
}

empWageComputationMain();


