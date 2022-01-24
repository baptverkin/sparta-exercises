import moment from "moment";

function formatDate (date){
  return moment(date).format("dddd Do MMMM YYYY");
};

function yearsSinceDate (date){
  const stringOfYears = moment(date).fromNow();
  const trimString = stringOfYears.substring(0,2);
  const makeNumber = Number(trimString);
  return makeNumber;
};

function daysSinceDate (date){
  const stringOfYears = moment(date).fromNow();
  const trimString = stringOfYears.substring(0,2);
  const makeNumber = (Number(trimString)*365)+41;
  return makeNumber;
}

function getDayFromDate (date) {
  return moment(date).format("dddd");

}


export {
  formatDate,
  yearsSinceDate,
  getDayFromDate,
  daysSinceDate,
};
