onEvent('recipes', event => {
    event.shaped(
        '6x minecraft:gravel',
        [
            "DDD",
            "DAD",
            "DDD"
        ],
        {
            "D": "minecraft:dirt",
            "A": Item.of("kubejs:undead_transmutation_catalyst")
        }
    ).damageIngredient(Item.of("kubejs:undead_transmutation_catalyst")).keepIngredient("kubejs:undead_transmutation_catalyst")

    event.shaped(
        '6x minecraft:sand',
        [
            "GGG",
            "GAG",
            "GGG"
        ],
        {
            "G": "minecraft:gravel",
            "A": Item.of("kubejs:undead_transmutation_catalyst")
        }
    ).damageIngredient(Item.of("kubejs:undead_transmutation_catalyst")).keepIngredient("kubejs:undead_transmutation_catalyst")

    event.shapeless(
        '6x minecraft:clay',
        [
            "2x minecraft:oak_sapling",
            Item.of("kubejs:undead_transmutation_catalyst"),
            "3x minecraft:sand"
        ],
    ).damageIngredient(Item.of("kubejs:undead_transmutation_catalyst")).keepIngredient("kubejs:undead_transmutation_catalyst")

    event.shapeless(
        'minecraft:flint',
        [
            "3x minecraft:gravel"
        ]
    )


    event.shaped(
        "minecraft:campfire",
        [
            " C ",
            "SFS",
            "BBB"
        ],
        {
            "S": "minecraft:stick",
            "F": "minecraft:flint",
            "C": "minecraft:coal",
            "B": "#minecraft:logs"
        }
    )
    
    event.shaped(
        "minecraft:furnace",
        [
            "BBB",
            "BFB",
            "SSS"
        ],
        {
            "B": "minecraft:bricks",
            "F": "minecraft:flint",
            "S": "minecraft:cobblestone"
        }
    )

    event.shaped(
        "minecraft:blast_furnace",
        [
            "SSS",
            "SFS",
            "BBB"
        ],
        {
            "S": "minecraft:smooth_stone",
            "F": "minecraft:furnace",
            "B": "minecraft:stone"
        }
    )
    
    event.shaped(
        "minecraft:stonecutter",
        [
            " C ",
            "LCL",
            "SSS"
        ],
        {
            "S": "minecraft:smooth_stone",
            "L": "#minecraft:wooden_slabs",
            "C": "thermal:copper_plate"
        }
    )

    event.shapeless("minecraft:paper", ["3x minecraft:sugar_cane"])


    event.campfireCooking("minecraft:brick", "minecraft:clay_ball")
})