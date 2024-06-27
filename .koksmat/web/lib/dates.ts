// Function to convert UTC date to the current local timezone
export function convertUtcToLocal(utcDateTime: string, utcTimeZone: string) {
  // Assuming the utcTimeZone is something like 'UTC' or an offset like 'UTC+0'
  const date = new Date(utcDateTime + "Z"); // Append 'Z' to denote UTC time

  // Using toLocaleString to display in local time with desired options
  return date.toLocaleString("de-DE", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function addMinutesToMidnight(
  dateAtMidnight: Date,
  minutesSinceMidnight: number
): Date {
  // Create a new Date object to avoid modifying the original
  const resultDate = new Date(dateAtMidnight);

  // Add the minutes to the date object
  resultDate.setUTCMinutes(resultDate.getUTCMinutes() + minutesSinceMidnight);

  return resultDate;
}

export function getMidnightDate(date: Date): Date {
  // Create a new Date object to avoid modifying the original
  const midnightDate = new Date(date);

  // Set the hours, minutes, seconds, and milliseconds to zero
  midnightDate.setHours(0, 0, 0, 0);

  return midnightDate;
}

export function getMinutesSinceMidnightRounded(date: Date): number {
  if (!date) {
    return 0;
  }
  // Get the hours and minutes of the date
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Calculate the total minutes since midnight
  const totalMinutes = hours * 60 + minutes;

  // Round to the nearest 10 minutes
  const roundedMinutes = Math.round(totalMinutes / 10) * 10;

  return roundedMinutes;
}

export function addMinutesToDate(date: Date, minutes: number): Date {
  // Create a new Date object to avoid modifying the original
  const newDate = new Date(date);

  // Add the minutes to the new date object
  newDate.setMinutes(newDate.getMinutes() + minutes);

  return newDate;
}

export function timestring(hour: number, min: number) {
  return (hour * 60 + min).toString();
}

export function getRoundedMinutes(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const min = Math.round((minutes % 60) / 10) * 10;

  return min + hour * 60;
}

export function gettimestringFromMinutes(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const min = Math.round((minutes % 60) / 10) * 10;

  return timestring(hour, min);
}

/**
 * 
 * @param currentDate 
 * @param orderDate 
 * @returns 
 * 
 * 
// Example usage:
const currentDate = new Date(); // Current date and time
const orderDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // Next day
orderDate.setHours(11, 30); // Set time to 11:30 AM

const result = isOrderDateAcceptable(currentDate, orderDate);
console.log(result); // Should output { isAcceptable: true, reason: "" }

const pastDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000); // Previous day
const pastResult = isOrderDateAcceptable(currentDate, pastDate);
console.log(pastResult); // Should output { isAcceptable: false, reason: "Cannot place orders in the past" }

 */
export function isOrderDateAcceptable(
  currentDate: Date,
  orderDate: Date
): { isAcceptable: boolean; reason: string } {
  // Create dates at midnight to compare only the dates
  const currentMidnight = new Date(currentDate);
  currentMidnight.setHours(0, 0, 0, 0);

  const orderMidnight = new Date(orderDate);
  orderMidnight.setHours(0, 0, 0, 0);

  // Calculate the difference in days between the two dates
  const diffInTime = orderMidnight.getTime() - currentMidnight.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  //debugger;
  // Check if the order date is before today
  if (diffInDays <= 0) {
    return {
      isAcceptable: false,
      reason: "Cannot place orders today or in the past",
    };
  }
  // Check if the order date is on a weekend

  const orderDayOfWeek = getDayOfWeekInLocalTime(orderMidnight);
  if (orderDayOfWeek.number === 0 || orderDayOfWeek.number === 6) {
    // 0 is Sunday, 6 is Saturday
    return {
      isAcceptable: false,
      reason: "Cannot place orders on weekends",
    };
  }
  // Check if the order date is the next business day and before noon
  const isNextBusinessDay = diffInDays === 1 && orderDate.getHours() < 12;

  if (diffInDays > 1 || isNextBusinessDay) {
    return {
      isAcceptable: true,
      reason: "",
    };
  } else if (diffInDays === 1) {
    return {
      isAcceptable: false,
      reason: "Orders for the next business day must be placed before noon",
    };
  }

  // If neither condition is met, the order date is not acceptable for other reasons
  return {
    isAcceptable: true,
    reason: "Days to order " + diffInDays,
  };
}

/**
 * 
 * @param date 
 * @param days 
 * @returns 
 * 
 * // Example usage:
const currentDate = new Date(); // Current date and time
const daysToAdd = 5; // Number of days to add
const newDate = addDaysToDate(currentDate, daysToAdd);

console.log(newDate); // Should output the new date with 5 days added

 */
export function addDaysToDate(date: Date, days: number): Date {
  // Create a new Date object to avoid modifying the original
  const newDate = new Date(date);

  // Add the specified number of days
  newDate.setDate(newDate.getDate() + days);

  return newDate;
}

/**
 * 
 * @param date 
 * @returns 
 * 

// Example usage:
const zuluDate = new Date(Date.UTC(2024, 5, 27)); // June 27, 2024, at midnight UTC
const dayOfWeek = getDayOfWeekInLocalTime(zuluDate);

console.log(dayOfWeek); // Should output the day of the week in local time, e.g., "Thursday"

 */

export function getDayOfWeekInLocalTime(date: Date): {
  name: string;
  number: number;
} {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Convert the date from Zulu time to local time
  const localDate = new Date(
    date.toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })
  );

  // Get the day of the week in local time
  const dayOfWeek = localDate.getDay();

  return {
    name: daysOfWeek[dayOfWeek],
    number: dayOfWeek,
  };
}
