import { drizzle } from 'drizzle-orm/expo-sqlite';
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { openDatabaseSync } from "expo-sqlite";


// Schema
export const entries = sqliteTable('entries', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    date: text('date').notNull(),
    timeIn: text('time_in').notNull(),
    timeOut: text('time_out'),
    totalHours: real('total_hours'),
});

export const expo = openDatabaseSync('ojt.db')
export const db = drizzle(expo)

// Init — manual create table, no migrations needed
export function initDb() {
    expo.execSync(`
        CREATE TABLE IF NOT EXISTS entries (
            id INTEGER PRIMARY KEY  AUTOINCREMENT,
            date TEXT NOT NULL,
            time_in TEXT NOT NULL,
            time_out TEXT,
            total_hours REAL
        )
    
        `)
    console.log("db init! :)")
}