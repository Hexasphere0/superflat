let t1soulforge = {
    pattern: [
        [
            "     ",
            "     ",
            "  @  ",
            "     ",
            "     "
        ],
        [
            "     ",
            " GIG ",
            " I&I ",
            " GIG ",
            "     "
        ],
        [
            "SS SS",
            "SSSSS",
            " S&S ",
            "SSSSS",
            "SS SS"
        ]
    ],
    keys: {
        S: {
            block: "minecraft:obsidian"
        },
        A: {
            block: "#minecraft:stone"
        },
        I: {
            block: "kubejs:infused_bricks",
        },
        G: {
            block: "minecraft:glass"
        }
    }
}

onEvent("recipes", event => {
    event.custom({
        type: "spirit:soul_engulfing",
        input: {
            ingredient: {
                item: "minecraft:amethyst_shard"
            },
            multiblock: t1soulforge
        },
        duration: 80,
        destroysStructure: false,
        outputItem: "spirit:soul_crystal_shard"
    })
})