import React from "react";
import { RowProps, useDayPicker, Day, WeekNumber } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const DAY_SIZE = "16px";
const DAY_MARGIN = "2px";

interface CalendarHeatmapProps {
  date: Date;
  count: number;
}

export default function CalendarHeatmap({
  data,
}: {
  data: CalendarHeatmapProps[];
}) {
  const formatCaption = (date: Date) => {
    return date.toLocaleString("default", { month: "short" });
  };
  const heatmapModify = () => {
    const zero: Date[] = [];
    const one: Date[] = [];
    const two: Date[] = [];
    const three: Date[] = [];
    const four: Date[] = [];
    for (const item of data) {
      if (item.count === 0) {
        zero.push(item.date);
      } else if (item.count === 1) {
        one.push(item.date);
      } else if (item.count === 2) {
        two.push(item.date);
      } else if (item.count === 3) {
        three.push(item.date);
      } else if (item.count === 4) {
        four.push(item.date);
      }
    }
    return {
      zero: zero,
      one: one,
      two: two,
      three: three,
      four: four,
    };
  };

  const heatmapClassNames = {
    zero: "bg-gray-100",
    one: "bg-red-200",
    two: "bg-red-400",
    three: "bg-red-600",
    four: "bg-red-800",
  };

  return (
    <Calendar
      formatters={{ formatCaption }}
      numberOfMonths={12}
      classNames={{
        nav: "hidden",
        caption: "text-xs",
        caption_label: "font-normal",
        tbody: "flex",
        month: "!ml-0",
        row: "[user-select:none;] flex flex-col",
        day: "w-[var(--box-size)] h-[var(--box-size)] m-[var(--box-margin)] bg-gray-100 border rounded-sm text-xs text-transparent",
        day_outside:
          "text-transparent bg-transparent border border-transparent",
        day_today: "border border-black text-transparent",
      }}
      modifiers={heatmapModify()}
      modifiersClassNames={heatmapClassNames}
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
