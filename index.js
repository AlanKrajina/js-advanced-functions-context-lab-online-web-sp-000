/* Your Code Here */

function createEmployeeRecord(array){
  let obj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return obj;
}

function createEmployeeRecords(twoRows){
  return twoRows.map(person => createEmployeeRecord(person))
}

function createTimeInEvent(date){
  let newTime = {
    type: 'TimeIn',
    hour: parseInt(date.slice(-4),10),
    date: date.slice(0,10)
  }
  this.timeInEvents.push(newTime)
  return this
}

function createTimeOutEvent(date){
  let newTime = {
    type: 'TimeOut',
    hour: parseInt(date.slice(-4),10),
    date: date.slice(0,10)
  }
  this.timeOutEvents.push(newTime)
  return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.filter(d => d.date === date)[0]
    let timeOut = this.timeOutEvents.filter(d => d.date===date)[0]
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(record, date) {
    let hours = hoursWorkedOnDate(record,date)
    return hours * record.payPerHour
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
