import FullCalendar from '@fullcalendar/react';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import "../calendar.css";
import { DatesSetArg, EventContentArg } from '@fullcalendar/core';
import { Balance, CalendarContent, Transaction } from '../types';
import { calculateDailyBalances } from '../utils/financeCalculation';
import { formatCurrency } from '../utils/formatting';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { useTheme } from '@mui/material';
import { isSameMonth } from 'date-fns';

interface CalendarProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>;
  currentDay: string;
  today: string;
  onDateClick: (dateInfo: DateClickArg) => void;
}

const Calendar = ({
  monthlyTransactions,
  setCurrentMonth,
  setCurrentDay,
  currentDay,
  today,
  onDateClick,
}: CalendarProps) => {

  const theme = useTheme()
  const events = [
    { title: 'Meeting', start: new Date() },
  ]

  // 1.各日付の収支を計算する関数（呼び出し）
  const dailyBalances = calculateDailyBalances(monthlyTransactions);

  const createCalendarEvents = (dailyBalances: Record<string, Balance>): CalendarContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const { income, expense, balance } = dailyBalances[date]
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      }
    })
  }

  const calendarEvents = createCalendarEvents(dailyBalances);

  const backgroundEvent = {
    start: currentDay,
    display: "background",
    backgroundColor: "#CCFFFF",
  }

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className='money' id='event-income'>
          {eventInfo.event.extendedProps.income}
        </div>
        <div className='money' id='event-expense'>
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className='money' id='event-balance'>
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  };

  //月の日付取得
  const handleDateSet = (datesetInfo: DatesSetArg) => {
    const currentMonth = datesetInfo.view.currentStart;
    setCurrentMonth(currentMonth);
    const todayDate = new Date();
    if (isSameMonth(todayDate, currentMonth)) {
      setCurrentDay(today);
    }
  };

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      events={[...calendarEvents, backgroundEvent]}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
      dateClick={onDateClick}
    />
  )
}

export default Calendar
