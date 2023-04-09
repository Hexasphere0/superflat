onEvent("recipes", event => {
    let removes = [
        "immersiveengineering:hammer",
        "immersiveengineering:cokebrick",
        "immersiveengineering:blastbrick",
        "immersiveengineering:reinforced_blastbrick",
        "immersiveengineering:light_engineering",
        "immersiveengineering:heavy_engineering",
        "immersiveengineering:rs_engineering",
        "immersiveengineering:wirecoil_copper",
        "immersiveengineering:treated_wood_planks",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:stonecutter",
        "minecraft:paper",
        "minecraft:nether_brick",
        "tconstruct:scorched_glass",
        "tconstruct:scorched_brick",
        "tconstruct:grout",
        "tconstruct:seared_melter",
        "tconstruct:seared_heater",
        "tconstruct:seared_faucet",
        "tconstruct:seared_channel",
        "tconstruct:seared_basin",
        "tconstruct:seared_basin",
        "tconstruct:seared_table",
        "tconstruct:seared_drain",
        "tconstruct:seared_chute",
        "tconstruct:seared_duct",
        "tconstruct:molten_amethyst_bronze",
        "tconstruct:smeltery_controller",
        "tconstruct:crafting_station",
        "tconstruct:pattern",
        "tconstruct:seared_controller",
        "extendedmushrooms:honey_fungus",
        "extendedmushrooms:poisonous_mushroom",
        "extendedmushrooms:slime_fungus",
        "spirit:soul_crystal_shard"
    ]

    for(let i = 0; i < removes.length; i++){
        event.remove({output: removes[i]})
    }

    event.remove({output: "immersiveengineering:component_steel", type: "minecraft:shaped"})
    event.remove({output: "immersiveengineering:component_iron", type: "minecraft:shaped"})
    
    event.remove({output: "minecraft:flint", type: "create:milling"})

    let removeShapedOnly = [
        "minecraft:campfire",
        "immersiveengineering:component_steel",
        "immersiveengineering:component_iron",
        "minecraft:flint",
        "minecraft:andesite"
    ]

    for (let i = 0; i < removeShapedOnly.length; i++){
        event.remove({output: removeShapedOnly[i], type: "minecraft:shaped"})
    }

    event.remove({output: "tconstruct:seared_brick", type: "minecraft:smelting"})
    event.remove({output: "minecraft:fermented_spider_eye", type: "extendedmushrooms:fairy_ring_recipe"})
})