const level_1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new Endboss()
    ],
    [
        new Cloud(),
        new Cloud()
    ],
    [
        new Background ('./img/5_background/layers/air.png', -719),
        new Background ('./img/5_background/layers/3_third_layer/2.png', -719),
        new Background ('./img/5_background/layers/2_second_layer/2.png', -719),
        new Background ('./img/5_background/layers/1_first_layer/2.png', -719),
        new Background ('./img/5_background/layers/air.png', 0),
        new Background ('./img/5_background/layers/3_third_layer/1.png', 0),
        new Background ('./img/5_background/layers/2_second_layer/1.png', 0),
        new Background ('./img/5_background/layers/1_first_layer/1.png', 0),
        new Background ('./img/5_background/layers/air.png', 719),
        new Background ('./img/5_background/layers/3_third_layer/2.png', 719),
        new Background ('./img/5_background/layers/2_second_layer/2.png', 719),
        new Background ('./img/5_background/layers/1_first_layer/2.png', 719),
        new Background ('./img/5_background/layers/air.png', 719 * 2),
        new Background ('./img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new Background ('./img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new Background ('./img/5_background/layers/1_first_layer/1.png', 719 * 2),
        new Background ('./img/5_background/layers/air.png', 719 * 3),
        new Background ('./img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new Background ('./img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new Background ('./img/5_background/layers/1_first_layer/2.png', 719 * 3),
    ],
    [
        new CollectableObject('./img/8_coin/coin_1.png', 600, 350),
        new CollectableObject('./img/8_coin/coin_1.png', 700, 250),
        new CollectableObject('./img/8_coin/coin_1.png', 800, 200),
        new CollectableObject('./img/8_coin/coin_1.png', 900, 250),
        new CollectableObject('./img/8_coin/coin_1.png', 1000, 350),
        new CollectableObject('./img/8_coin/coin_1.png', 1300, 350),
        new CollectableObject('./img/8_coin/coin_1.png', 1400, 350),
        new CollectableObject('./img/8_coin/coin_1.png', 1500, 350),
    ]
);