ServerEvents.recipes(event => {
    event.smelting("occultism:silver_ingot", "create:crushed_raw_silver");
    event.blasting("occultism:silver_ingot", "create:crushed_raw_silver");
    event.custom({
        type: "occultism:crushing",
        ingredient: "create:crushed_raw_silver",
        result: {
            item: "occultism:silver_dust",
            count: 2,
        },
        ignore_crushing_multiplier: false,
    }).id("tgpack:occultism/crushing/create_silver_to_occultism_silver_dust");
});