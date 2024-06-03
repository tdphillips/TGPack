ServerEvents.recipes(event => {
    const r_type = "create_mechanical_extruder:extruding";
    const lava = {fluid: "minecraft:lava", amount: 1000};
    const std_ingredients = [
        lava,
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

    const block_makes_itself = [
        "minecraft:granite",
        "minecraft:diorite",
        "minecraft:tuff",
        "create:scorchia",
    ];
    for (const result of block_makes_itself) {
        event.custom({
            type: r_type,
            ingredients: std_ingredients,
            catalyst: {
                item: result,
            },
            result: {
                item: result,
            },
        });
    }

    const quirky_fluid_interaction = [
        {
            ingredients: [
                lava,
                {
                    fluid: "create:chocolate",
                    amount: 1000,
                },
            ],
            result: {
                item: "create:scoria",
            },
        },
        {
            ingredients: [
                lava,
                {
                    fluid: "create:honey",
                    amount: 1000,
                },
            ],
            result: {
                item: "create:limestone",
            },
        },
    ];
    for (const result of quirky_fluid_interaction) {
        event.custom({
            type: r_type,
            ingredients: result["ingredients"],
            result: result["result"],
        });
    }

});
