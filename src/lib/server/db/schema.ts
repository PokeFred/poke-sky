import { sqliteTable, text, int } from "drizzle-orm/sqlite-core"
import type { SQLiteTable } from "drizzle-orm/sqlite-core"
import type { InferSelectModel, InferInsertModel } from "drizzle-orm"

export const items: SQLiteTable = sqliteTable("items", {
    productId: text("product_id", { length: 255 }),
    name: text("name", { length: 255 }),
    category: text("category", { length: 255 }),
    tier: text("tier", { length: 255 }),
    npcSellPrice: int("npc_sell_price"),
})
export type SelectItems = InferSelectModel<typeof items>
export type InsertItems = InferInsertModel<typeof items>

export const bazaar: SQLiteTable = sqliteTable("bazaar", {
    productId: text("product_id", { length: 255 }),
    buyAmount: int("buy_amount"),
    buyPrice: int("buy_price"),
    buyVolume: int("buy_volume"),
    buyOrders: int("buy_orders"),
    buyMovingWeek: int("buy_moving_week"),
    sellAmount: int("sell_amount"),
    sellPrice: int("sell_price"),
    sellVolume: int("sell_volume"),
    sellOrders: int("sell_orders"),
    sellMovingWeek: int("sell_moving_week"),
})
export type SelectBazaar = InferSelectModel<typeof bazaar>
export type InsertBazaar = InferInsertModel<typeof bazaar>
