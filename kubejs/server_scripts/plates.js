onEvent("recipes", event => {
    let plates = [
        "thermal:invar",
        "thermal:bronze",
        "thermal:steel"
    ]

    for (let i = 0; i < plates.length; i++){
        let plateName = plates[i] + "_plate"
        let plateIngot = plates[i] + "_ingot"

        event.remove({output: plateName, type: "minecraft:shaped"})
        event.shapeless(
            plateName,
            [
                "immersiveengineering:hammer",
                "2x " + plateIngot
            ]
        )
    }

    event.remove({output: "thermal:copper_plate", type: "minecraft:shaped"})
    event.shapeless("thermal:copper_plate", ["immersiveengineering:hammer", "2x minecraft:copper_ingot"])
})