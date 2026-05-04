import { calcTotalHours } from "../utils/helper";
import { db, entries } from "./db";

export const fetchAllEntry = async () => {
    const all = await db.select().from(entries)
    return all
}


export const logEntry = async (data: { timeIn: string; timeInPeriod: 'AM' | 'PM'; timeOut: string; timeOutPeriod: 'AM' | 'PM' }) => {
    if (!data) return
    const { timeIn, timeInPeriod, timeOut, timeOutPeriod } = data;

    await db.insert(entries).values({
        date: new Date().toISOString().split('T')[0],
        timeIn: `${timeIn} ${timeInPeriod}`,
        timeOut: `${timeOut} ${timeOutPeriod}`,
        totalHours: calcTotalHours(timeIn, timeInPeriod, timeOut, timeOutPeriod)
    })
}



