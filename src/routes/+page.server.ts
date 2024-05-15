import type { PageServerLoad } from "./$types"
import db from "$server/db"
import { items, bazaar } from "$server/db/schema"
import type { SelectItems, SelectBazaar } from "$server/db/schema"
import { eq } from "drizzle-orm"

export const load: PageServerLoad = async (): Promise<{}> => {
    const d1 = await db.select().from(bazaar).where(
        // @ts-ignore
        eq(bazaar.productId, "ENCHANTED_TITANIUM")
    )
    console.log(d1)
    const d2 = await db.select().from(bazaar).where(
        // @ts-ignore
        eq(bazaar.productId, "REFINED_TITANIUM")
    )
    console.log(d2)

    return {}
}
