onEvent('recipes', event => {
    event.custom({
        type: "occultism:crushing",
        crushing_time: 200,
        ignore_crushing_multiplier: true,
        ingredient: {
            item: "minecraft:raw_gold"
        },
        result: {
            count: 5,
            item: "thermal:gold_dust"
        }
    })
})