type DeliveryTime = {
  name: string;
  minute: number;
  description: string;
  items: any[];
};

type Interval = {
  startMin: number;
  endMin: number;
  name: string;
};

const intervals: Interval[] = [
  { startMin: 0, endMin: 359, name: "Early Morning" }, // 12:00 AM - 5:59 AM
  { startMin: 360, endMin: 479, name: "Breakfast" }, // 6:00 AM - 7:59 AM
  { startMin: 480, endMin: 599, name: "Late Morning" }, // 8:00 AM - 9:59 AM
  { startMin: 600, endMin: 719, name: "Brunch" }, // 10:00 AM - 11:59 AM
  { startMin: 720, endMin: 839, name: "Early Afternoon" }, // 12:00 PM - 1:59 PM
  { startMin: 840, endMin: 959, name: "Lunch" }, // 2:00 PM - 3:59 PM
  { startMin: 960, endMin: 1079, name: "Mid Afternoon" }, // 4:00 PM - 5:59 PM
  { startMin: 1080, endMin: 1199, name: "Tea Time" }, // 6:00 PM - 7:59 PM
  { startMin: 1200, endMin: 1319, name: "Late Afternoon" }, // 8:00 PM - 9:59 PM
  { startMin: 1320, endMin: 1439, name: "Dinner" }, // 10:00 PM - 11:59 PM
];

export const getLabelByMinutes = (minutes: number): string => {
  const interval = intervals.find(
    ({ startMin, endMin }) => minutes >= startMin && minutes <= endMin
  );
  return interval ? interval.name : "Unknown Time";
};

/**
 * 
 * @param startHour 
 * @param endHour 
 * @returns 
 * 
 * // Example usage
const startHour = 6; // 6 AM
const endHour = 18;  // 6 PM

const deliveryTimes = generateDeliveryTimes(startHour, endHour);
console.log(deliveryTimes);

 */
export const generateDeliveryTimes = (
  startHour: number,
  endHour: number
): DeliveryTime[] => {
  const deliveryTimes: DeliveryTime[] = [];
  const minutesInAnHour = 60;

  for (let hour = startHour; hour <= endHour; hour += 2) {
    const minute = hour * minutesInAnHour;
    const name = getLabelByMinutes(minute);

    deliveryTimes.push({
      name,
      minute,
      description: "",
      items: [],
    });
  }

  return deliveryTimes;
};
