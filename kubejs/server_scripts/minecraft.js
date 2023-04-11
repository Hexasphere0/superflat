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
        'minecraft:clay', 
        [
            '2x minecraft:sand',
            'minecraft:gravel',
            Fluid.of('minecraft:water', 500)
        ]
    )

    event.recipes.createSplashing(
        [
            Item.of('create:zinc_nugget').withChance(50),
            'minecraft:raw_copper'
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
            Item.of('create:zinc_nugget').withChance(0.3)
        ],
        'create:crimsite'
    )

    event.recipes.createCrushing(
        [
            "minecraft:lapis",
            Item.of('create:tin_nugget').withChance(0.5)
        ],
        'create:asurine'
    )
})