export const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = a.getHours();
    const min = a.getMinutes();
    const time =  (hour <= 9 ? `0${hour}` : hour) + ':' +   (min <= 9 ? `0${min}` : min);
    return time;
  }