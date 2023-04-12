// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create("rainbow_petal").displayName("Rainbow Petal")
	event.create("undead_transmutation_catalyst").displayName("Undead Transmutation Catalyst").maxDamage(100)

	event.create("printed_compatability_circuit").displayName("Printed Compatability Circuit")
	event.create("compatability_processor").displayName("Compatability Processor")
	event.create("compatability_press").displayName("Inscriber Compatability Press")
	
	event.create("printed_estimation_circuit").displayName("Printed Estimation Circuit")
	event.create("estimation_processor").displayName("Estimation Processor")
	event.create("estimation_press").displayName("Inscriber Estimation Press")

	event.create("printed_duplication_circuit").displayName("Printed Duplication Circuit")
	event.create("duplication_processor").displayName("Duplication Processor")
	event.create("duplication_press").displayName("Inscriber Duplication Press")

	event.create("printed_differential_circuit").displayName("Printed Differential Circuit")
	event.create("differential_processor").displayName("Differential Processor")
	event.create("differential_press").displayName("Inscriber Differential Press")

	event.create("printed_matrix_circit").displayName("Printed Matrix Circuit")
	event.create("matrix_processor").displayName("Matrix Processor")
	event.create("matrix_press").displayName("Inscriber Matrix Press")

	event.create("printed_recursive_circuit").displayName("Printed Recursive Circuit")
	event.create("recursive_processor").displayName("Recursive Processor")
	event.create("recursive_press").displayName("Inscriber Recursive Press")

	event.create("printed_clearance_circuit").displayName("Printed Clearance Circuit")
	event.create("clearance_processor").displayName("Clearance Processor")
	event.create("clearance_press").displayName("Inscriber Clearance Press")

	event.create("printed_probability_circuit").displayName("Printed Probability Circuit")
	event.create("probability_processor").displayName("Probability Processor")
	event.create("probability_press").displayName("Inscriber Probability Press")

	event.create("printed_time_circuit").displayName("Printed Time Circuit")
	event.create("time_processor").displayName("Time Processor")
	event.create("time_press").displayName("Inscriber Time Press")
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create("mycelial_bricks").displayName("Mycelial Bricks").hardness(2.0)
})