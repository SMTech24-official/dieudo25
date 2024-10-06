/* eslint-disable @typescript-eslint/no-unused-vars */
// /components/BookingModal.tsx

"use client"; // Ensure this component is client-side
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Import the calendar
import "react-calendar/dist/Calendar.css"; // Calendar styles
import { useForm, Controller } from "react-hook-form"; // Import React Hook Form
import { Input } from "@/components/ui/input"; // ShadCN input component
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // ShadCN Select components
import { Button } from "@/components/ui/button"; // ShadCN button component
import Modal from "../modal/Modal"; // Import your Modal component

interface ModalProps {
  isOpen: boolean;
  onClose: () => void | null;
}

interface FormData {
  time: string;
  location: string;
  mobile: string;
}

const BookingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [bookedTimes, setBookedTimes] = useState<string[]>([
    "09:00 AM", // Mock booked time for testing
  ]);
  const [error, setError] = useState<string>("");
  const [locationCoords, setLocationCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [humanReadableLocation, setHumanReadableLocation] =
    useState<string>("");

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  // Use React Hook Form
  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      time: "",
      location: "",
      mobile: "",
    },
  });

  useEffect(() => {
    const checkAvailability = () => {
      if (date) {
        const available = timeSlots.filter(
          (slot) => !bookedTimes.includes(slot)
        );
        setAvailableTimes(available);
        setError(""); // Clear error message when date is selected

        if (available.length === 0) {
          setError(
            "No available times for this date. Please select another date."
          );
          setValue("time", ""); // Clear time selection if no slots available
        }
      } else {
        setAvailableTimes([]); // Clear available times if no date selected
      }
    };

    checkAvailability();
  }, [date, bookedTimes, setValue]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocationCoords({ latitude, longitude });
        fetchHumanReadableLocation(latitude, longitude); // Fetch the human-readable address
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchHumanReadableLocation = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      setHumanReadableLocation(data.display_name); // Set the human-readable address
      setValue("location", data.display_name); // Store location in the form
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const onSubmit = (data: FormData) => {
    if (!date) {
      setError("Please select a date.");
      return;
    }

    // Simulate booking confirmation
    console.log("Booking confirmed:", {
      date: date.toISOString(),
      ...data,
    });

    // Reset the form
    setDate(null);
    setValue("time", "");
    setValue("location", "");
    setValue("mobile", "");
    setAvailableTimes([]);
    setLocationCoords(null); // Clear location on booking
    setHumanReadableLocation(""); // Clear the human-readable address
    onClose(); // Close modal after booking
  };

  return (
    <Modal
      className="max-w-5xl "
      title="Book Now"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-4">
        {/* Left Side: Calendar */}
        <div className="flex justify-center">
          <Calendar
            onChange={(value, event) => {
              if (value instanceof Date) {
                setDate(value); // Only set the date if it's a valid Date object
              }
            }}
            value={date}
            className="rounded-lg border border-gray-300 shadow-lg overflow-hidden"
            minDate={new Date()} // Disable previous dates
          />
        </div>

        {/* Right Side: Booking Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4 border rounded-lg shadow-lg bg-white"
        >
          <div>
            <label className="block text-sm font-medium">Select Time</label>
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  onValueChange={(value) => field.onChange(value)} // Ensure the selected value is set
                  disabled={!date}
                  value={field.value || ""}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((slot, index) => (
                      <SelectItem key={index} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {!date && (
              <p className="text-red-500">Please select a date first.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            <Input
              type="text"
              value={watch("location")}
              onChange={(e) => setValue("location", e.target.value)}
              placeholder="Enter your location"
              required
              onFocus={getLocation} // Get user's location on focus
            />
          </div>

          {/* Display Human-Readable Location */}
          {humanReadableLocation && (
            <div className="text-sm text-gray-600">
              <p>Location: {humanReadableLocation}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Mobile Number</label>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <Input
                  type="tel"
                  {...field}
                  placeholder="Enter your mobile number"
                  required
                />
              )}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <Button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Book Now
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default BookingModal;
