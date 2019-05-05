/**
 * 
 * @param {*} jetpacks 
 * @param {*} availabilities 
 * @param {*} startDate 
 * @param {*} endDate 
 * returns jetpacks whose ids are in availabilities.
 * availabilities filtered within the the range startDate - endDate
 */
function filterByDate(jetpacks,availabilities,startDate,endDate){
    if(startDate.length == 0 || endDate.length == 0){
        return [];
    }
    startDateObj = new Date(startDate);
    endDateObj = new Date(endDate);
    availabilities = availabilities.filter(a => (startDateObj.getTime() <= (new Date(a.start_date)).getTime() &&
                                                endDateObj.getTime() >= (new Date(a.end_date)).getTime()));
    return jetpacks.filter(jetpack => availabilities.some(a => a.jetpack_id == jetpack.id));
}

module.exports = filterByDate;