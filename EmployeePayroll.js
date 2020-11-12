class EmployeePayrollData{
    //properties
    id;
    salary;
    gender;
    startDate;

    //constructors
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter methods
    get name() {return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name)) this._name = name;
        else throw 'Name is incorrect';
    }

    //toString method
    toString(){
        const options={year:'numeric', month:'long', day:'numeric'};
        const empDate=this.startDate==undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+" : name="+this.name+" : salary="+this.salary+
                " : gender="+this.gender+" : Start Date="+empDate;
    }
}

let employeePayrollData=new EmployeePayrollData(1,"Suyash",30000);
process.stdout.write(employeePayrollData.toString()+"\n");
try{
    employeePayrollData.name="Harshit";
    process.stdout.write(employeePayrollData.toString()+"\n");
}catch(exception){
    console.error(exception);
}
let employeePayrollData2=new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
process.stdout.write(employeePayrollData2.toString());
