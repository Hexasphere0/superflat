function getItemsForMaterials(ores){
    let oresraw = []
    let oresingots = []

    for(let i = 0; i < ores.length; i++){
        oresraw.push(AlmostUnified.getPreferredItemForTag("#forge:raw_materials/" + ores[i]))
        oresingots.push(AlmostUnified.getPreferredItemForTag("#forge:ingots/" + ores[i]))
    }

    return [oresraw, oresingots]
}

onEvent("recipes", event => {
    // ########## metal ores ##########

    // ores that can be processed through a blast furnace for 1x
    let t1ores = [
        "copper",
    ]

    let t1oresraw;
    let t1oresingots;

    [t1oresraw, t1oresingots] = getItemsForMaterials(t1ores)

    for(let i = 0; i < t1ores.length; i++){
        event.remove({output: t1oresingots[i], type: "minecraft:smelting"})
    }

    // requires tinkers meltery for 1x
    // crushing/pulverizing for 2x
    let t2ores = [
        "iron",
        "nickel",
    ]
    
    let t2oresraw;
    let t2oresingots;

    [t2oresraw, t2oresingots] = getItemsForMaterials(t2ores)

    for(let i = 0; i < t1ores.length; i++){
        event.remove({output: t1oresingots[i], type: "minecraft:smelting"})
        event.remove({output: t1oresingots[i], type: "minecraft:blasting"})
    }

    // ########## gems ##########

    // silk touch + crushing for 2x
    // default fortune drops unchanged
    let t1gemores = [
        "redstone", 
        "diamonds"
    ]
})