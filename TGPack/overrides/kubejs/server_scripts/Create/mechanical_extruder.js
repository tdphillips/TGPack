ServerEvents.recipes(event => {
    const r_type = "create_mechanical_extruder:extruding";
    const std_ingredients = [
        {
            fluid: "minecraft:lava",
            amount: 1000,
        },
        {
            fluid: "minecraft:water",
            amount: 1000,
        },
    ];
    event.custom({
        type: r_type,
        ingredients: std_ingredients,
        catalyst: {
            item: "primalmagick:marble_enchanted",
        },
        result: {
            item: "primalmagick:marble_raw",
        },
    });
    event.custom({
        type: r_type,
        ingredients: std_ingredients,
        catalyst: {
            item: "minecraft:polished_deepslate",
        },
        result: {
            item: "minecraft:deepslate",
        },
    });
});
