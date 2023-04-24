onEvent('recipes', event => {
    event.shaped(
        "thermal:drill_head",
        [
            "TI ",
            "IRI",
            " IT"
        ],
        {
            "T": "thermal:tin_ingot",
            "I": "minecraft:iron_ingot",
            "R": "tconstruct:rose_gold_ingot"
        }
    )

    event.shaped(
        "thermal:saw_blade",
        [
            "TTT",
            "IRI",
            "TTT"
        ],
        {
            "T": "thermal:tin_ingot",
            "I": "minecraft:iron_ingot",
            "R": "tconstruct:rose_gold_ingot"
        }
    )
})