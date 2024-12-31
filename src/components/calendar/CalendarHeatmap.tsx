import React from "react";
import { RowProps, useDayPicker, Day, WeekNumber } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const DAY_SIZE = "16px";
const DAY_MARGIN = "2px";

export default function CalendarHeatmap() {
  return (
    <Calendar
      numberOfMonths={12}
      classNames={{
        nav: "hidden",
        caption: "hidden",
        tbody: "flex",
        month: "!ml-0",
        row: "[user-select:none;] flex flex-col",
        day: "w-[var(--box-size)] h-[var(--box-size)] m-[var(--box-margin)] bg-gray-100 border rounded-sm text-xs text-transparent",
        day_outside:
          "text-transparent bg-transparent border border-transparent",
        day_today: "border border-black text-transparent",
      }}
      components={{
        Head: () => <></>,
        Row: (props) => <CustomRow rowProps={props} />,
      }}
      style={
        {
          "--box-size": DAY_SIZE,
          "--box-margin": DAY_MARGIN,
        } as React.CSSProperties
      }
    />
  );
}

interface CustomRowProps {
  rowProps: RowProps;
}

function CustomRow(props: CustomRowProps): JSX.Element {
  const { styles, classNames, showWeekNumber, components } = useDayPicker();
  const rowProps = props.rowProps;
  const DayComponent = components?.Day ?? Day;
  const WeeknumberComponent = components?.WeekNumber ?? WeekNumber;

  let weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = (
      <td className={classNames.cell} style={styles.cell}>
        <WeeknumberComponent
          number={rowProps.weekNumber}
          dates={rowProps.dates}
        />
      </td>
    );
  }

  const thisMonth = new Date(rowProps.displayMonth).getMonth();
  const monthOfData = new Date(rowProps.dates[6]).getMonth();

  return (
    <tr
      className={cn(
        classNames.row,
        thisMonth !== monthOfData &&
          "last:-mr-[calc(var(--box-margin)+var(--box-size))]"
      )}
      style={
        {
          "--box-size": DAY_SIZE,
          "--box-margin": DAY_MARGIN,
          ...styles.row,
        } as React.CSSProperties
      }
    >
      {weekNumberCell}
      {rowProps.dates.map((date) => (
        <td
          className={classNames.cell}
          style={styles.cell}
          key={date.toISOString()}
          role="presentation"
        >
          <DayComponent displayMonth={rowProps.displayMonth} date={date} />
        </td>
      ))}
    </tr>
  );
}
