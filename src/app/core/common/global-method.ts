
export class GlobalMethod{
  /***
   * format date
   */
  public static  formatDate(date:any) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  /**
   * convert local time into UTC for API data
   * @param date 
   */
  public static timeIntoUTC(date:any) {
    let val = new Date(date).toUTCString();
    return new Date(val).getTime();
  }

  public static getTimezone(){
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  public static getOffset(){
    return new Date().getTimezoneOffset()
  }

}