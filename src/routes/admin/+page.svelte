<script lang="ts">
    import type { PageServerData } from "./$types"

    export let data: PageServerData

    function formatDate(date: Date): string {
        let year: string = date.getFullYear().toString()
        let month: string = (date.getMonth() + 1).toString().padStart(2, '0')
        let day: string = date.getDate().toString().padStart(2, '0')
        let hours: string = date.getHours().toString().padStart(2, '0')
        let minutes: string = date.getMinutes().toString().padStart(2, '0')
        let seconds: string = date.getSeconds().toString().padStart(2, '0')

        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
    }
</script>

<div>Skyblock Items: {data.skyblockItems}</div>
<div>Bazaar Items: {data.bazaarItems}</div>
<div>Last Refresh: {formatDate(data.lastRefresh)}</div>
<form action="/admin" method="post">
    <button type="submit">Refresh</button>
</form>
