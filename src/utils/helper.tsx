import { expo } from "../db/db";


export const flushData = () => {
    expo.execSync(`DELETE FROM entries;`);
    expo.execSync(`DELETE FROM sqlite_sequence WHERE name='entries';`);
}


export const generate_id = () => {
    return Math.random().toString(36).slice(2)
}


export const calcTotalHours = (
    timeIn: string, inPeriod: 'AM' | 'PM',
    timeOut: string, outPeriod: 'AM' | 'PM'
): number => {
    const to24Hr = (time: string, period: 'AM' | 'PM') => {
        let parts = time.split(':');
        let h = Number(parts[0]);
        let m = parts.length > 1 ? Number(parts[1]) : 0;
        
        if (isNaN(h)) h = 0;
        if (isNaN(m)) m = 0;

        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;
        return { h, m };
    };

    const { h: inH, m: inM } = to24Hr(timeIn, inPeriod);
    const { h: outH, m: outM } = to24Hr(timeOut, outPeriod);

    let inMinutes = inH * 60 + inM;
    let outMinutes = outH * 60 + outM;

    // Handle overnight shifts if necessary, though probably not for OJT
    if (outMinutes < inMinutes) {
        outMinutes += 24 * 60;
    }

    return parseFloat(((outMinutes - inMinutes) / 60).toFixed(2));
};