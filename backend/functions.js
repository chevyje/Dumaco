export function dateToISO(date) {
    let parsedDate;
    let isoDate;
    try{
        parsedDate = new Date(date)
        if(isNaN(parsedDate)) return null;
        isoDate = parsedDate.toISOString();
        return isoDate;
    }catch(e){
        console.error(e);
        return null;
    }
}