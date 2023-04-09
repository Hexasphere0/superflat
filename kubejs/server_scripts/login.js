onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')

        event.player.give('kubejs:undead_transmutation_catalyst')
        event.player.give('minecraft:oak_sapling')
    }
})