function undeadTransmutationShaped(event, output, ingredients, map){
    event.shaped(
        output,
        ingredients,
        map
    ).damageIngredient(Item.of("kubejs:undead_transmutation_catalyst")).keepIngredient("kubejs:undead_transmutation_catalyst")
}

function undeadTransmutationShapeless(event, output, inputs){
    event.shapeless(
        output,
        inputs
    ).damageIngredient(Item.of("kubejs:undead_transmutation_catalyst")).keepIngredient("kubejs:undead_transmutation_catalyst")
}

onEvent('recipes', event => {
    undeadTransmutationShaped(
        event,
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
    )

    undeadTransmutationShaped(
        event,
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
    )

    undeadTransmutationShapeless(
        event,
        '3x minecraft:clay',
        [
            "2x minecraft:oak_sapling",
            Item.of("kubejs:undead_transmutation_catalyst"),
            "3x minecraft:sand"
        ],
    )

    undeadTransmutationShaped(
        event,
        'minecraft:granite',
        [
            "RRR",
            "RAR",
            "RRR"
        ],
        {
            "R": "minecraft:cobblestone",
            "A": "kubejs:undead_transmutation_catalyst"
        }
    )

    undeadTransmutationShapeless(
        event,
        'minecraft:raw_copper',
        [
            "2x minecraft:granite",
            "kubejs:undead_transmutation_catalyst"
        ]
    )

    undeadTransmutationShapeless(
        event,
        'minecraft:andesite',
        [
            "2x minecraft:granite"
        ]
    )

    undeadTransmutationShapeless(
        event,
        'minecraft:red_sand',
        [
            "minecraft:terracotta"
        ]
    )

    event.shapeless(
        'minecraft:flint',
        [
            "3x minecraft:gravel"
        ]
    )

    event.shaped(
        "minecraft:campfire",
        [
            " S ",
            "SFS",
            "BBB"
        ],
        {
            "S": "minecraft:stick",
            "F": "minecraft:flint",
            "B": "#minecraft:logs"
        }
    )

    event.shaped(
        "woodenbucket:wooden_bucket",
        [
            "W W",
            "W W",
            "CWC"
        ],
        {
            "W": "#minecraft:logs",
            "C": "minecraft:clay"
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

    event.shapeless(
        "minecraft:raw_iron",
        [
            "minecraft:water_bucket",
            "2x minecraft:red_sand"
        ]
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

    // rocks create
    event.recipes.createMilling(
        "minecraft:sand",
        "minecraft:gravel"
    )

    event.recipes.createMilling(
        "minecraft:raw_copper",
        "minecraft:granite"
    )

    event.recipes.createMilling(
        "minecraft:flint",
        "minecraft:gravel"
    )

    event.recipes.createMixing(
        'minecraft:andesite',
        [
            'minecraft:sand',
            'minecraft:cobblestone',
            Fluid.of('minecraft:lava', 10)
        ]
    )

    event.recipes.createSplashing(
        [
            Item.of('minecraft:iron_nugget').withChance(0.5),
            Item.of('minecraft:raw_copper').withChance(0.2),
        ],
        'minecraft:red_sand'
    )

    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "minecraft:andesite"
            }
        ],
        results: [
            {
                item: "create:asurine"
            }
        ]
    })

    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "create:scoria"
            }
        ],
        results: [
            {
                item: "create:veridium"
            }
        ]
    })

    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "minecraft:calcite"
            }
        ],
        results: [
            {
                item: "create:ochrum"
            }
        ]
    })

    event.recipes.createMixing(
        Fluid.of('create:chocolate', 250),
        [
            '3x minecraft:sugar',
            'minecraft:cocoa_beans',
            Fluid.of('minecraft:milk', 250)
        ]
    )

    event.recipes.createMixing(
        'create:crimsite',
        [
            'minecraft:granite',
            Fluid.of('minecraft:lava', 100)
        ]
    )

    event.recipes.createCrushing(
        [
            "2x minecraft:raw_iron",
            Item.of('create:zinc_nugget').withChance(0.3),
            Item.of("minecraft:redstone").withChance(0.8)
        ],
        'create:crimsite'
    )

    event.recipes.createMilling(
        [
            "2x minecraft:raw_iron",
            Item.of("minecraft:redstone").withChance(0.5)
        ],
        'create:crimsite'
    )

    event.recipes.createCrushing(
        [
            "minecraft:lapis_lazuli",
            Item.of('thermal:tin_nugget').withChance(0.5)
        ],
        'create:asurine'
    )

    event.recipes.createCompacting(
        'minecraft:calcite',
        [
            '2x minecraft:tuff',
            Fluid.of("minecraft:lava", 50)
        ]
    )

    event.recipes.createCompacting(
        "minecraft:tuff",
        [
            "minecraft:andesite",
            Fluid.of("minecraft:lava", 50)
        ]
    )

    event.recipes.createMilling(
        [
            Item.of('2x minecraft:quartz'),
            'minecraft:soul_sand'
        ],
        'create:scoria'
    )

    event.recipes.createMilling(
        Item.of('minecraft:diamond').withChance(0.6),
        'create:veridium'
    )
})