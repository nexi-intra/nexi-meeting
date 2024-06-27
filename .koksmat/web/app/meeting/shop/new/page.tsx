"use client";
import { OrderData, OrderForm, OrderFormProps } from "@/components/OrderForm";
import OutlookAppointmentConnect from "@/components/OutlookAppointmentConnect";
import { addDaysToDate, addMinutesToDate } from "@/lib/dates";
import { set } from "date-fns";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { generateDeliveryTimes } from "./util";
/*
  * This is the new order page
here query parameters will control the behavior of the page 
*/

type DeliveryTime = {
  name: string;
  minute: number;
  description: string;
  items: any[];
};

export default function Page() {
  const searchParams = useSearchParams();

  const [orderDateTime, setorderDateTime] = useState<Date>();
  const [startDateTime, setstartDateTime] = useState<Date>();
  const [endDateTime, setendDateTime] = useState<Date>();

  const [defaultorder, setdefaultorder] = useState<OrderData>();
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const date = searchParams.get("date");

    const startminute = searchParams.get("startminute");
    const endminute = searchParams.get("endminute");
    const orderDate = date ? new Date(date) : addDaysToDate(new Date(), 1);

    const start = startminute ? parseInt(startminute) : 60 * 9;
    const end = endminute ? parseInt(endminute) : 60 * 17;
    setorderDateTime(orderDate);
    setstartDateTime(addMinutesToDate(orderDate, start));
    setendDateTime(addMinutesToDate(orderDate, end));

    const deliveries = generateDeliveryTimes(start / 60, end / 60);
    setdefaultorder({
      datetime: orderDate,
      deliveryTimes: deliveries.map((item) => {
        const delivery: DeliveryTime = {
          name: item.name,
          minute: item.minute,
          description: item.description,
          items: item.items,
        };
        return delivery;
      }),
    });
    setisLoaded(true);
  }, []);

  return (
    <div>
      {isLoaded && (
        <OrderForm
          startDateTime={startDateTime!}
          endDateTime={endDateTime!}
          order={defaultorder!}
        />
      )}
      <pre>
        {JSON.stringify(
          { defaultorder, orderDateTime, startDateTime, endDateTime },
          null,
          2
        )}
      </pre>
    </div>
  );
}
