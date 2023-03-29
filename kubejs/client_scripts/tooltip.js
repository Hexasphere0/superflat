onEvent("item.tooltip", tooltip => {
    // remove tooltips from smeltery components because it is disabled
    let smelteryComponents = [
        "tconstruct:seared_stone",
        "tconstruct:seared_cobble",
        "tconstruct:seared_paver",
        "tconstruct:seared_bricks",
        "tconstruct:seared_cracked_bricks",
        "tconstruct:seared_fancy_bricks",
        "tconstruct:seared_triangle_bricks",
        "tconstruct:seared_ladder",
        "tconstruct:seared_glass",
        "tconstruct:seared_drain",
        "tconstruct:seared_chute",
        "tconstruct:seared_duct",
        "tconstruct:seared_fuel_tank",
        "tconstruct:seared_fuel_gauge"
    ]

    tooltip.remove(smelteryComponents)
})