import React, { useState } from "react";
//------apollo--
import { makeVar, ApolloError } from "@apollo/client";
//------mui-----
import { Box } from "@mui/material";
/*import {
  startDateVar,
  endDateVar,
  startDateInitValue,
  endDateInitValue,
} from "_apollo/state";*/
import dayjs from "dayjs";
//import { GET_EARLIEST_DATE } from "_apollo/queries";
import { DebugBox } from "_components/debug/DebugBox";
import { DateItem } from "./DateItem";

interface IMonth {
  name: string;
  num: number;
  year: number;
}

function make2digit(num: number) {
  //let outString='';
  if ((num + "").length == 1) {
    //outString =
    return "0" + num;
  } else {
    return num + "";
  }
}

function getDaysInMonth(month: number, year: number) {
  console.log("gd");
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    //days.push(new Date(date));
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

interface IProps {
  error: ApolloError | undefined;
  data: any;
  loading?: any;

  startDateVar: any; //typeof makeVar;
  endDateVar: any; //typeof makeVar;
  startDateInitValue: any; //typeof makeVar;
  endDateInitValue: any; //typeof makeVar;
}

export const DateFiltersUI = ({
  error,
  data,
  loading,

  startDateVar,
  endDateVar,
  startDateInitValue,
  endDateInitValue,
}: IProps) => {
  const [showByMonth, setShowByMonth] = useState<boolean>(true); // or by day inside month
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  const [months, setMonths] = useState<IMonth[]>([]);

  /*const { loading, error, data } = useQuery(GET_EARLIEST_DATE, {
    variables: {
      page: 1,
    },
  });*/

  React.useEffect(() => {
    if (data) {
      let givenDateTime = data.getTasksExecutions.earliestDate; //'2022-05-05';// "2021-01-29T04:22:22.148Z";
      let createdDate = new Date(givenDateTime); //givenDateTime
      createdDate.setDate(1);
      let currentDate = new Date();
      let dateAndYearList = [
        //createdDate.toLocaleString("ru", { month: "long", year: "numeric" }),
        {
          name: createdDate
            .toLocaleString("ru", {
              month: "long",
              year: "numeric",
            })
            .replace("г.", ""),
          num: createdDate.getMonth(),
          year: createdDate.getFullYear(),
        },
      ];

      while (
        new Date(createdDate.setMonth(createdDate.getMonth() + 1)) < currentDate
      ) {
        dateAndYearList.unshift(
          //createdDate.toLocaleString("ru", { month: "long", year: "numeric" })
          {
            name: createdDate
              .toLocaleString("ru", {
                month: "long",
                year: "numeric",
              })
              .replace("г.", ""),
            num: createdDate.getMonth(),
            year: createdDate.getFullYear(),
          }
        );
      }

      console.log(dateAndYearList);
      setMonths(dateAndYearList);
    }
  }, [data]);

  return (
    <>
      <DebugBox>{JSON.stringify(data)}</DebugBox>
      <DebugBox>{JSON.stringify(error)}</DebugBox>
      {data && (
        <Box>
          {/*<DateItem
              text="Все даты"
              onClick={() => {
                console.log("all");
                endDateVar(endDateInitValue)
                startDateVar(startDateInitValue)
                //setDaysInMonth(getDaysInMonth(month.num, month.year));
                //setShowByMonth(false);
              }}
            />*/}
          {showByMonth ? (
            months.map((month, index) => (
              <DateItem
                key={"month" + index}
                text={month.name}
                onClick={() => {
                  setDaysInMonth(getDaysInMonth(month.num, month.year));
                  setShowByMonth(false);
                  startDateVar(
                    month.year + "-" + make2digit(month.num + 1) + "-" + "01"
                  );
                  endDateVar(
                    month.year +
                      "-" +
                      make2digit(month.num + 1) +
                      "-" +
                      getDaysInMonth(month.num, month.year).length
                  );
                }}
              />
            ))
          ) : (
            <>
              <DateItem
                text={"<< Назад к месяцам"}
                onClick={() => {
                  setShowByMonth(true);
                  endDateVar(endDateInitValue);
                  startDateVar(startDateInitValue);
                }}
              />
              {daysInMonth.map((day, index) => (
                <DateItem
                  key={"day" + index}
                  text={dayjs(day).format("DD.MM")}
                  onClick={() => {
                    endDateVar(dayjs(day).format("YYYY-MM-DD")); //.add(1, 'day')
                    startDateVar(dayjs(day).format("YYYY-MM-DD"));
                  }}
                />
              ))}
            </>
          )}
        </Box>
      )}
    </>
  );
};
