import { env } from "$env/dynamic/private"
import Database from "better-sqlite3"
import type {} from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3"
import * as schema from "./schema"

const sqlite = new Database(env.PRIVATE_DATABASE_URL ?? "database.db")
const db: BetterSQLite3Database<typeof schema> = drizzle<typeof schema>(sqlite, { schema: schema })

export default db
