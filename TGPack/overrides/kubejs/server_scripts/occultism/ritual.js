ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/occultism/ritual/';
    const recipes = [
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:foliot',
            spirit_job_type: 'occultism:crush_tier1',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_foliot',
            inputs: [
                '#forge:raw_materials/iron',
                '#forge:raw_materials/gold',
                '#forge:raw_materials/copper',
                '#forge:raw_materials/silver'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            id: 'occultism:ritual/summon_foliot_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:djinni',
            spirit_job_type: 'occultism:crush_tier2',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_djinni',
            inputs: ['#forge:dusts/iron', '#forge:dusts/gold', '#forge:dusts/copper', '#forge:dusts/silver'],
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_djinni',
            duration: 90,
            id: 'occultism:ritual/summon_djinni_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:afrit',
            spirit_job_type: 'occultism:crush_tier3',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_afrit',
            inputs: ['#forge:gems/diamond', '#forge:dusts/iesnium', '#forge:dusts/iesnium', '#forge:gems/emerald'],
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_afrit',
            duration: 120,
            id: 'occultism:ritual/summon_afrit_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:marid',
            spirit_job_type: 'occultism:crush_tier4',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_marid',
            inputs: [
                '#forge:storage_blocks/diamond',
                'minecraft:ghast_tear',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/emerald'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_marid_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_marid',
            duration: 150,
            id: 'occultism:ritual/summon_marid_crusher'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherstone_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_otherstone_trader',
            inputs: ['minecraft:stone', 'minecraft:granite', 'minecraft:diorite', 'minecraft:andesite'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_otherstone_trader'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherworld_saplings_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_sapling_trader',
            inputs: [
                'minecraft:oak_sapling',
                'minecraft:birch_sapling',
                'minecraft:spruce_sapling',
                'minecraft:jungle_sapling'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_sapling_trader'

        }
    ];

    /*
        Ingredient Display in JEI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.activation_item = recipe.activation_item.startsWith('#')
            ? { tag: recipe.activation_item.slice(1) }
            : { item: recipe.activation_item };

        if (recipe.item_to_use)
            recipe.item_to_use = recipe.item_to_use.startsWith('#')
                ? { tag: recipe.item_to_use.slice(1) }
                : { item: recipe.item_to_use };

        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});