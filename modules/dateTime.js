import { DateTime } from 'luxon';

const dateTime = () => {
  const dateT = DateTime.now;
  dateT.toLocaleString(DateTime.DATETIME_MED);
};

export default dateTime;