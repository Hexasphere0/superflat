// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create("rainbow_petal").displayName("Rainbow Petal")
	event.create("undead_transmutation_catalyst").displayName("Undead Transmutation Catalyst").maxDamage(100)

	event.create("printed_compatability_circuit")
	event.create("compatability_processor").displayName("Compatability Processor")
	
	event.create("printed_estimation_circuit")
	event.create("estimation_processor").displayName("Estimation Processor")

	event.create("printed_duplication_circuit")
	event.create("duplication_processor").displayName("Duplication Processor")

	event.create("printed_differential_circuit")
	event.create("differential_processor").displayName("Differential Processor")

	event.create("printed_matrix_circit")
	event.create("matrix_processor").displayName("Matrix Processor")

	event.create("printed_recursive_circuit")
	event.create("recursive_processor").displayName("Recursive Processor")

	event.create("printed_clearance_circuit")
	event.create("clearance_processor").displayName("Clearance Processor")

	event.create("printed_probability_circuit")
	event.create("probability_processor").displayName("Probability Processor")

	event.create("printed_time_circuit")
	event.create("time_processor").displayName("Time Processor")
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create("mycelial_bricks").displayName("Mycelial Bricks").hardness(2.0)
})