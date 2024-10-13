import { OpeningHour } from "@/types/types";

export function isGarageOpen(openingHours: OpeningHour[]): string {
    // Get current day and time
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }); // Get current day in full format, e.g., "Monday"
    const currentTime = now.toTimeString().slice(0, 5); // Get current time in "HH:MM" format

    // Helper function to compare times
    function isTimeWithinRange(open: string, close: string, time: string): boolean {
        return time >= open && time <= close;
    }

    // Loop through opening hours to check if garage is open
    for (const slot of openingHours) {
        if (slot.status === 'Closed') {
            if (slot.days.includes(currentDay)) {
                return 'Closed';
            }
        } else if (slot.days.includes(currentDay)) {
            if (slot.open && slot.close && isTimeWithinRange(slot.open, slot.close, currentTime)) {
                return 'Open';
            } else {
                return 'Closed';
            }
        }
    }

    return 'Closed'; // If no matching slot is found, assume closed
}
