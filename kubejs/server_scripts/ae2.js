onEvent('recipes', event => {
    event.custom({
        type: "ae2:inscriber",
        mode: "press",
        result: {
            item: "kubejs:printed_compatability_circuit"
        },
        ingredients: {
            middle: {
                item: "ae2:fluix_pearl"
            },
            top: {
                item: "kubejs:compatability_press"
            },
            bottom: {
                item: "arsomega:arcane_diamond"
            }
        }
    })

    event.custom({
        type: "ae2:inscriber",
        mode: "press",
        result: {
            item: "kubejs:printed_estimation_circuit"
        },
        ingredients: {
            middle: {
                item: "thermalendergy:stellarium_ingot"
            },
            top: {
                item: "kubejs:estimation_press"
            }
        }
    })

    event.custom({
        type: "ae2:inscriber",
        mode: "press",
        result: {
            item: "kubejs:printed_recursive_circuit"
        },
        ingredients: {
            middle: {
                item: "thermal:enderium_ingot"
            },
            top: {
                item: "kubejs:recursive_press"
            }
        }
    })

    event.custom({
        type: "ae2:inscriber",
        mode: "press",
        result: {
            item: "kubejs:printed_clearance_circuit"
        },
        ingredients: {
            middle: {
                item: "botania:terrasteel_ingot"
            },
            top: {
                item: "kubejs:clearance_press"
            }
        }
    })

    event.custom({
        type: "ae2:inscriber",
        mode: "press",
        result: {
            item: "kubejs:printed_probability_circuit"
        },
        ingredients: {
            middle: {
                item: "botania:dice"
            },
            top: {
                item: "kubejs:probability_press"
            }
        }
    })
})