ServerEvents.recipes(event => {
    const crushing = "create:crushing";
    const gold_ores = "#minecraft:gold_ores";

    event.remove({
        type: crushing,
        input: gold_ores,
        output: "minecraft:gold_nugget",
    });
    event.remove({
        type: crushing,
        input: gold_ores,
        output: "minecraft:cobblestone",
    });
});