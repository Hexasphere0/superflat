// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create("rainbow_petal").displayName("Rainbow Petal");
	event.create("undead_transumatation_catalyst").displayName("Undead Transmutation Catalyst").maxDamage(100);
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create("mycelial_bricks").displayName("Mycelial Bricks").hardness(2.0)
})