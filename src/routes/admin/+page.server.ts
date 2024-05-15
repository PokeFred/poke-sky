import type { PageServerLoad, Actions } from "./$types"
import db from "$server/db"
import { items, bazaar } from "$server/db/schema"

export const load: PageServerLoad = async (): Promise<{ skyblockItems: number, bazaarItems: number, lastRefresh: Date }> => {
    return {
        skyblockItems: (await db.select().from(items)).length,
        bazaarItems: (await db.select().from(bazaar)).length,
        lastRefresh: new Date(0)
    }
}

export const actions: Actions = {
    default: async ({ fetch }): Promise<{}> => {
        async function refreshItems() {
            await db.delete(items)

            const response: Response = await fetch("https://api.hypixel.net/v2/resources/skyblock/items", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            for (let i: number = 0; i < data.items.length; i++) {
                const element = data.items[i]

                await db.insert(items).values({
                    productId: element.id ?? "",
                    name: element.name ?? "",
                    category: element.category ?? "",
                    tier: element.tier ?? "",
                    npcSellPrice: element.npcSellPrice ?? 0
                })
            }
        }

        async function refreshBazaar() {
            await db.delete(bazaar)

            const response: Response = await fetch("https://api.hypixel.net/v2/skyblock/bazaar", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            for (let key in data.products) {
                const element = data.products[key]

                await db.insert(bazaar).values({
                    productId: element.product_id ?? "",
                    buyAmount: element.quick_status.buyAmount ?? 0,
                    buyPrice: element.quick_status.buyPrice ?? 0,
                    buyVolume: element.quick_status.buyVolume ?? 0,
                    buyOrders: element.quick_status.buyOrders ?? 0,
                    buyMovingWeek: element.quick_status.buyMovingWeek ?? 0,
                    sellAmount: element.quick_status.sellAmount ?? 0,
                    sellPrice: element.quick_status.sellPrice ?? 0,
                    sellVolume: element.quick_status.sellVolume ?? 0,
                    sellOrders: element.quick_status.sellOrders ?? 0,
                    sellMovingWeek: element.quick_status.sellMovingWeek ?? 0
                })
            }
        }

        await refreshItems()
        await refreshBazaar()

        return {}
    }
} satisfies Actions
