onEvent('recipes', event => {
    event.shaped(
        "create:andesite_casing",
        [
            "ARA",
            "ALA",
            "BRB"
        ],
        {
            "L": "#forge:stripped_logs",
            "A": "create:andesite_alloy",
            "R": "thermal:rose_gold_plate",
            "B": "tconstruct:amethyst_bronze_ingot"
        }
    )
    event.shaped(
        "create:mechanical_saw",
        [
            " S ",
            "PCP",
            "IRI"
        ],
        {
            "C": "create:andesite_casing",
            "P": "thermal:iron_plate",
            "R": "tconstruct:amethyst_bronze_ingot",
            "I": "thermal:iron_gear",
            "S": "thermal:saw_blade"
        }
    )

    event.shaped(
        "create:mechanical_drill",
        [
            " D ",
            "PCP",
            "IRI"
        ],
        {
            "C": "create:andesite_casing",
            "P": "thermal:iron_plate",
            "R": "tconstruct:amethyst_bronze_ingot",
            "I": "thermal:iron_gear",
            "D": "thermal:drill_head"
        }
    )
})