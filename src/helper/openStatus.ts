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

    // Helper function to check if it's "Closing Soon"
    function isClosingSoon(close: string, time: string): boolean {
        const closeTime = new Date();
        closeTime.setHours(parseInt(close.slice(0, 2)), parseInt(close.slice(3, 5))); // Set close time as Date object

        const oneHourBeforeClose = new Date(closeTime.getTime() - 60 * 60 * 1000); // Subtract 1 hour

        const currentDateTime = new Date();
        currentDateTime.setHours(parseInt(time.slice(0, 2)), parseInt(time.slice(3, 5))); // Set current time as Date object

        return currentDateTime >= oneHourBeforeClose && currentDateTime < closeTime;
    }

    // Loop through opening hours to check if garage is open
    for (const slot of openingHours) {
        if (slot.status === 'Closed') {
            if (slot.days.includes(currentDay)) {
                return 'Closed';
            }
        } else if (slot.days.includes(currentDay)) {
            if (slot.open && slot.close) {
                if (isTimeWithinRange(slot.open, slot.close, currentTime)) {
                    if (isClosingSoon(slot.close, currentTime)) {
                        return 'Closing Soon';
                    }
                    return 'Open';
                } else {
                    return 'Closed';
                }
            }
        }
    }

    return 'Closed'; // If no matching slot is found, assume closed
}
