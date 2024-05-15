import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import type { SQLiteTable } from "drizzle-orm/sqlite-core"
import type { InferSelectModel, InferInsertModel } from "drizzle-orm"

export const test: SQLiteTable = sqliteTable("test", {
    test: text("test", { length: 255 }),
})
export type SelectTest = InferSelectModel<typeof test>
export type InsertTest = InferInsertModel<typeof test>
