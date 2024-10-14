import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};

const datePicker: React.FC<Props> = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      showTimeSelect
      showPopperArrow={false}
      dateFormat="MMMM d, h:mm aa" // Show the month, day, and time
      placeholderText="Select Date and Time"
      className="border rounded p-2 w-full"
    />
  );
};

export default datePicker;
