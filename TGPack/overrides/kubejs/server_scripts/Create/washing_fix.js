ServerEvents.recipes(event => {
    const washing = "create:splashing";

    event.remove({
        type: washing,
        input: "create:crushed_raw_gold",
        output: "minecraft:gold_nugget",
    });
    event.recipes.create.splashing(
        [
            "minecraft:gold_ingot",
            Item.of("minecraft:quartz").withChance(0.5),
        ],
        "create:crushed_raw_gold",
    );
});