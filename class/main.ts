/**
 * 雇员类
 * @constructor
 * @param {string} firstName - 名
 * @param {string} lastName - 姓
 * @param {string} hiringDate - 雇佣日期
 * @param {string} departmentID - 部门ID
 * @class Employee
 */
class Employee {
    firstName: string;
    lastName: string;
    hiringDate: string;
    departmentID: string;

    constructor(firstName: string, lastName: string, hiringDate: string, departmentID: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hiringDate = hiringDate;
        this.departmentID = departmentID;
    }
}

/**
 * 经理类
 * @class Manager
 * @constructor
 * @param {string[]} manageEmployee - 雇员列表
 * @param {boolean} isManager - 是否经理
 * @extends {Employee}
 */
class Manager extends Employee {

    manageEmployee: string[];
    isManager: boolean;

    constructor(firstName: string, lastName: string, hiringDate: string, departmentID: string, manageEmployee: string[], isManager: boolean) {
        super(firstName, lastName, hiringDate, departmentID)

        this.manageEmployee = manageEmployee;
        this.isManager = isManager
    }
}