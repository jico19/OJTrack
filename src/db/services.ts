import { sum } from "drizzle-orm";
import { calcTotalHours } from "../utils/helper";
import { db, entries, expo } from "./db";


export const fetchAllEntry = async () => {
    const all = await db.select().from(entries)
    return all
}


export const flushData = () => {
    expo.execSync(`DELETE FROM entries;`);
    expo.execSync(`DELETE FROM sqlite_sequence WHERE name='entries';`);
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

export const getTotalHours = async () => {
    const result = await db.select({ total: sum(entries.totalHours) }).from(entries);
    return result
}



