import "dotenv/config"
import type { Config } from "drizzle-kit"

export default {
    dialect: "sqlite",
    dbCredentials: {
        url: process.env.PRIVATE_DATABASE_URL ?? "database.db",
    },
    schema: "./src/lib/server/db/schema.ts",
    out: "./drizzle",
} satisfies Config
