// PRIVATE_DATABASE_URL

import "dotenv/config"
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3"
import * as schema from "../src/lib/server/db/schema"

async function SEEDER(db: DB): Promise<void> {}

/** ----------------------------------------------------------------------------- */
/** Don't change the code under this block */
/** ----------------------------------------------------------------------------- */

function logger(message: string): void {
    console.log(`[seeder] ${message}`)
}

type DB = BetterSQLite3Database<typeof schema>

async function main(): Promise<void> {
    try {
        const sqlite = new Database(process.env.PRIVATE_DATABASE_URL ?? "database.db")
        const db: DB = drizzle(sqlite, { schema: schema })

        logger("Seeding database...")
        await SEEDER(db)
        logger("Database seeded successfully!")
    } catch (error: unknown) {
        logger(`Error: ${error}`)
    }
}

main()
