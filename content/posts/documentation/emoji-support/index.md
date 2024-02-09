---
title: "Theme Documentation - Emoji Support"
date: 2021-01-28T22:29:15+07:00
tags: ["hugo"]
categories: ["documentation"]
thumbnail: "/icon/documentation.svg"
---

Emoji can be enabled in a Hugo project in a number of ways.

<!--more-->

The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates#inline-shortcodes).

To enable emoji globally, set `enableEmoji` to `true` in your [site configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files.

> yourblog > hugo.toml

```
enableEmoji = true
```

These begin and end with a **colon** and include the **code** of an emoji:

```markdown
Gone camping! {?:}tent: Be back soon.

That is so funny! {?:}joy:
```

The rendered output looks like this:

Gone camping! :tent: Be back soon.

That is so funny! :joy:

The following **cheat sheet** is a useful reference for emoji shorthand codes.

## Smileys & Emotion

### Face Smiling

|          icon           | code                          |        icon        | code               |
| :---------------------: | ----------------------------- | :----------------: | ------------------ |
|       :grinning:        | `grinning`                    |      :smiley:      | `smiley`           |
|         :smile:         | `smile`                       |       :grin:       | `grin`             |
|       :laughing:        | `laughing` <br /> `satisfied` |   :sweat_smile:    | `sweat_smile`      |
|         :rofl:          | `rofl`                        |       :joy:        | `joy`              |
| :slightly_smiling_face: | `slightly_smiling_face`       | :upside_down_face: | `upside_down_face` |
|         :wink:          | `wink`                        |      :blush:       | `blush`            |
|       :innocent:        | `innocent`                    |                    |                    |

### Face Affection

|         icon          | code                  |          icon          | code                   |
| :-------------------: | --------------------- | :--------------------: | ---------------------- |
|     :heart_eyes:      | `heart_eyes`          |    :kissing_heart:     | `kissing_heart`        |
|       :kissing:       | `kissing`             |       :relaxed:        | `relaxed`              |
| :kissing_closed_eyes: | `kissing_closed_eyes` | :kissing_smiling_eyes: | `kissing_smiling_eyes` |

### Face Hand

|  icon  | code   |    icon    | code       |
| :----: | ------ | :--------: | ---------- |
| :hugs: | `hugs` | :thinking: | `thinking` |

### Face Neutral Skeptical

|        icon         | code                |      icon      | code           |
| :-----------------: | ------------------- | :------------: | -------------- |
| :zipper_mouth_face: | `zipper_mouth_face` | :neutral_face: | `neutral_face` |
|  :expressionless:   | `expressionless`    |   :no_mouth:   | `no_mouth`     |
|       :smirk:       | `smirk`             |   :unamused:   | `unamused`     |
|     :roll_eyes:     | `roll_eyes`         |  :grimacing:   | `grimacing`    |
|    :lying_face:     | `lying_face`        |                |                |

### Face Sleepy

|    icon    | code       |      icon       | code            |
| :--------: | ---------- | :-------------: | --------------- |
| :relieved: | `relieved` |    :pensive:    | `pensive`       |
|  :sleepy:  | `sleepy`   | :drooling_face: | `drooling_face` |
| :sleeping: | `sleeping` |                 |                 |

### Face Unwell

|           icon           | code                     |          icon           | code                    |
| :----------------------: | ------------------------ | :---------------------: | ----------------------- |
|          :mask:          | `mask`                   | :face_with_thermometer: | `face_with_thermometer` |
| :face_with_head_bandage: | `face_with_head_bandage` |    :nauseated_face:     | `nauseated_face`        |
|     :sneezing_face:      | `sneezing_face`          |      :dizzy_face:       | `dizzy_face`            |

### Face Hat

|       icon        | code              | icon | code |
| :---------------: | ----------------- | :--: | ---- |
| :cowboy_hat_face: | `cowboy_hat_face` |      |      |

### Face Glasses

|     icon     | code         |    icon     | code        |
| :----------: | ------------ | :---------: | ----------- |
| :sunglasses: | `sunglasses` | :nerd_face: | `nerd_face` |

### Face Concerned

|           icon           | code                     |      icon       | code            |
| :----------------------: | ------------------------ | :-------------: | --------------- |
|        :confused:        | `confused`               |    :worried:    | `worried`       |
| :slightly_frowning_face: | `slightly_frowning_face` | :frowning_face: | `frowning_face` |
|       :open_mouth:       | `open_mouth`             |    :hushed:     | `hushed`        |
|       :astonished:       | `astonished`             |    :flushed:    | `flushed`       |
|        :frowning:        | `frowning`               |   :anguished:   | `anguished`     |
|        :fearful:         | `fearful`                |  :cold_sweat:   | `cold_sweat`    |
| :disappointed_relieved:  | `disappointed_relieved`  |      :cry:      | `cry`           |
|          :sob:           | `sob`                    |    :scream:     | `scream`        |
|       :confounded:       | `confounded`             |   :persevere:   | `persevere`     |
|      :disappointed:      | `disappointed`           |     :sweat:     | `sweat`         |
|         :weary:          | `weary`                  |  :tired_face:   | `tired_face`    |

### Face Negative

|          icon          | code                   |     icon      | code                 |
| :--------------------: | ---------------------- | :-----------: | -------------------- |
|       :triumph:        | `triumph`              |    :pout:     | `pout` <br /> `rage` |
|        :angry:         | `angry`                | :smiling_imp: | `smiling_imp`        |
|         :imp:          | `imp`                  |    :skull:    | `skull`              |
| :skull_and_crossbones: | `skull_and_crossbones` |               |                      |

### Face Costume

|      icon       | code                                 |       icon        | code              |
| :-------------: | ------------------------------------ | :---------------: | ----------------- |
|    :hankey:     | `hankey` <br /> `poop` <br /> `shit` |   :clown_face:    | `clown_face`      |
| :japanese_ogre: | `japanese_ogre`                      | :japanese_goblin: | `japanese_goblin` |
|     :ghost:     | `ghost`                              |      :alien:      | `alien`           |
| :space_invader: | `space_invader`                      |      :robot:      | `robot`           |

### Cat Face

|     icon      | code          |       icon        | code              |
| :-----------: | ------------- | :---------------: | ----------------- |
| :smiley_cat:  | `smiley_cat`  |    :smile_cat:    | `smile_cat`       |
|   :joy_cat:   | `joy_cat`     | :heart_eyes_cat:  | `heart_eyes_cat`  |
|  :smirk_cat:  | `smirk_cat`   |   :kissing_cat:   | `kissing_cat`     |
| :scream_cat:  | `scream_cat`  | :crying_cat_face: | `crying_cat_face` |
| :pouting_cat: | `pouting_cat` |                   |                   |

### Monkey Face

|      icon       | code            |      icon      | code           |
| :-------------: | --------------- | :------------: | -------------- |
|  :see_no_evil:  | `see_no_evil`   | :hear_no_evil: | `hear_no_evil` |
| :speak_no_evil: | `speak_no_evil` |                |                |

### Emotion

|           icon            | code                      |        icon         | code                |
| :-----------------------: | ------------------------- | :-----------------: | ------------------- |
|          :kiss:           | `kiss`                    |    :love_letter:    | `love_letter`       |
|          :cupid:          | `cupid`                   |    :gift_heart:     | `gift_heart`        |
|     :sparkling_heart:     | `sparkling_heart`         |    :heartpulse:     | `heartpulse`        |
|        :heartbeat:        | `heartbeat`               | :revolving_hearts:  | `revolving_hearts`  |
|       :two_hearts:        | `two_hearts`              | :heart_decoration:  | `heart_decoration`  |
| :heavy_heart_exclamation: | `heavy_heart_exclamation` |   :broken_heart:    | `broken_heart`      |
|          :heart:          | `heart`                   |   :yellow_heart:    | `yellow_heart`      |
|       :green_heart:       | `green_heart`             |    :blue_heart:     | `blue_heart`        |
|      :purple_heart:       | `purple_heart`            |    :black_heart:    | `black_heart`       |
|           :100:           | `100`                     |       :anger:       | `anger`             |
|          :boom:           | `boom` <br /> `collision` |       :dizzy:       | `dizzy`             |
|       :sweat_drops:       | `sweat_drops`             |       :dash:        | `dash`              |
|          :hole:           | `hole`                    |       :bomb:        | `bomb`              |
|     :speech_balloon:      | `speech_balloon`          | :eye_speech_bubble: | `eye_speech_bubble` |
|   :right_anger_bubble:    | `right_anger_bubble`      |  :thought_balloon:  | `thought_balloon`   |
|           :zzz:           | `zzz`                     |                     |                     |

## People & Body

### Hand Fingers Partial

|       icon        | code              |  icon   | code    |
| :---------------: | ----------------- | :-----: | ------- |
|     :ok_hand:     | `ok_hand`         |   :v:   | `v`     |
| :crossed_fingers: | `crossed_fingers` | :metal: | `metal` |
|  :call_me_hand:   | `call_me_hand`    |         |         |

### Hand Single Finger

|     icon     | code         |     icon      | code                        |
| :----------: | ------------ | :-----------: | --------------------------- |
| :point_left: | `point_left` | :point_right: | `point_right`               |
| :point_up_2: | `point_up_2` |     :fu:      | `fu` <br /> `middle_finger` |
| :point_down: | `point_down` |  :point_up:   | `point_up`                  |

### Hand Fingers Closed

|    icon     | code                        |     icon     | code                                              |
| :---------: | --------------------------- | :----------: | ------------------------------------------------- |
|    :+1:     | `+1` <br /> `thumbsup`      |     :-1:     | `-1` <br /> `thumbsdown`                          |
|   :fist:    | `fist` <br /> `fist_raised` | :facepunch:  | `facepunch` <br /> `fist_oncoming` <br /> `punch` |
| :fist_left: | `fist_left`                 | :fist_right: | `fist_right`                                      |

### Hands

|     icon     | code         |      icon      | code           |
| :----------: | ------------ | :------------: | -------------- |
|    :clap:    | `clap`       | :raised_hands: | `raised_hands` |
| :open_hands: | `open_hands` |  :handshake:   | `handshake`    |
|    :pray:    | `pray`       |                |                |

### Hand Prop

|      icon      | code           |    icon     | code        |
| :------------: | -------------- | :---------: | ----------- |
| :writing_hand: | `writing_hand` | :nail_care: | `nail_care` |
|    :selfie:    | `selfie`       |             |             |

### Body Parts

|   icon   | code     |   icon   | code     |
| :------: | -------- | :------: | -------- |
| :muscle: | `muscle` |  :ear:   | `ear`    |
|  :nose:  | `nose`   |  :eyes:  | `eyes`   |
|  :eye:   | `eye`    | :tongue: | `tongue` |
|  :lips:  | `lips`   |          |          |

### Person

|      icon      | code           |     icon     | code                                         |
| :------------: | -------------- | :----------: | -------------------------------------------- |
|     :baby:     | `baby`         |    :boy:     | `boy`                                        |
|     :girl:     | `girl`         | :blonde_man: | `blonde_man` <br /> `person_with_blond_hair` |
|     :man:      | `man`          |   :woman:    | `woman`                                      |
| :blonde_woman: | `blonde_woman` | :older_man:  | `older_man`                                  |
| :older_woman:  | `older_woman`  |              |

### Person Sport

|           icon           | code                                              |            icon            | code                       |
| :----------------------: | ------------------------------------------------- | :------------------------: | -------------------------- |
|     :person_fencing:     | `person_fencing`                                  |       :horse_racing:       | `horse_racing`             |
|         :skier:          | `skier`                                           |       :snowboarder:        | `snowboarder`              |
|      :golfing_man:       | `golfing_man`                                     |      :golfing_woman:       | `golfing_woman`            |
|         :surfer:         | `surfer` <br /> `surfing_man`                     |      :surfing_woman:       | `surfing_woman`            |
|        :rowboat:         | `rowboat` <br /> `rowing_man`                     |       :rowing_woman:       | `rowing_woman`             |
|        :swimmer:         | `swimmer` <br /> `swimming_man`                   |      :swimming_woman:      | `swimming_woman`           |
|     :basketball_man:     | `basketball_man`                                  |     :basketball_woman:     | `basketball_woman`         |
|   :weight_lifting_man:   | `weight_lifting_man`                              |   :weight_lifting_woman:   | `weight_lifting_woman`     |
|       :bicyclist:        | `bicyclist` <br /> `biking_man`                   |       :biking_woman:       | `biking_woman`             |
|   :mountain_bicyclist:   | `mountain_bicyclist` <br /> `mountain_biking_man` |  :mountain_biking_woman:   | `mountain_biking_woman`    |
|    :man_cartwheeling:    | `man_cartwheeling`                                |    :woman_cartwheeling:    | `woman_cartwheeling`       |
|     :men_wrestling:      | `men_wrestling`                                   |     :women_wrestling:      | `women_wrestling`          |
| :man_playing_water_polo: | `man_playing_water_polo`                          | :woman_playing_water_polo: | `woman_playing_water_polo` |
|  :man_playing_handball:  | `man_playing_handball`                            |  :woman_playing_handball:  | `woman_playing_handball`   |
|      :man_juggling:      | `man_juggling`                                    |      :woman_juggling:      | `woman_juggling`           |

### Person Resting

|  icon  | code   |      icon      | code           |
| :----: | ------ | :------------: | -------------- |
| :bath: | `bath` | :sleeping_bed: | `sleeping_bed` |

### Person Symbol

|         icon          | code                  |         icon         | code                 |
| :-------------------: | --------------------- | :------------------: | -------------------- |
|    :speaking_head:    | `speaking_head`       | :bust_in_silhouette: | `bust_in_silhouette` |
| :busts_in_silhouette: | `busts_in_silhouette` |     :footprints:     | `footprints`         |

## Animals & Nature

### Animal Mammal

|      icon       | code                       |       icon        | code              |
| :-------------: | -------------------------- | :---------------: | ----------------- |
|  :monkey_face:  | `monkey_face`              |     :monkey:      | `monkey`          |
|    :gorilla:    | `gorilla`                  |       :dog:       | `dog`             |
|     :dog2:      | `dog2`                     |     :poodle:      | `poodle`          |
|     :wolf:      | `wolf`                     |    :fox_face:     | `fox_face`        |
|      :cat:      | `cat`                      |      :cat2:       | `cat2`            |
|     :lion:      | `lion`                     |      :tiger:      | `tiger`           |
|    :tiger2:     | `tiger2`                   |     :leopard:     | `leopard`         |
|     :horse:     | `horse`                    |    :racehorse:    | `racehorse`       |
|    :unicorn:    | `unicorn`                  |      :deer:       | `deer`            |
|      :cow:      | `cow`                      |       :ox:        | `ox`              |
| :water_buffalo: | `water_buffalo`            |      :cow2:       | `cow2`            |
|      :pig:      | `pig`                      |      :pig2:       | `pig2`            |
|     :boar:      | `boar`                     |    :pig_nose:     | `pig_nose`        |
|      :ram:      | `ram`                      |      :sheep:      | `sheep`           |
|     :goat:      | `goat`                     | :dromedary_camel: | `dromedary_camel` |
|     :camel:     | `camel`                    |    :elephant:     | `elephant`        |
|  :rhinoceros:   | `rhinoceros`               |      :mouse:      | `mouse`           |
|    :mouse2:     | `mouse2`                   |       :rat:       | `rat`             |
|    :hamster:    | `hamster`                  |     :rabbit:      | `rabbit`          |
|    :rabbit2:    | `rabbit2`                  |    :chipmunk:     | `chipmunk`        |
|      :bat:      | `bat`                      |      :bear:       | `bear`            |
|     :koala:     | `koala`                    |   :panda_face:    | `panda_face`      |
|     :feet:      | `feet` <br /> `paw_prints` |                   |                   |

### Animal Bird

|     icon     | code         |       icon       | code             |
| :----------: | ------------ | :--------------: | ---------------- |
|   :turkey:   | `turkey`     |    :chicken:     | `chicken`        |
|  :rooster:   | `rooster`    | :hatching_chick: | `hatching_chick` |
| :baby_chick: | `baby_chick` | :hatched_chick:  | `hatched_chick`  |
|    :bird:    | `bird`       |    :penguin:     | `penguin`        |
|    :dove:    | `dove`       |     :eagle:      | `eagle`          |
|    :duck:    | `duck`       |      :owl:       | `owl`            |

### Animal Amphibian

|  icon  | code   | icon | code |
| :----: | ------ | :--: | ---- |
| :frog: | `frog` |

### Animal Reptile

|     icon      | code          |   icon   | code     |
| :-----------: | ------------- | :------: | -------- |
|  :crocodile:  | `crocodile`   | :turtle: | `turtle` |
|   :lizard:    | `lizard`      | :snake:  | `snake`  |
| :dragon_face: | `dragon_face` | :dragon: | `dragon` |

### Animal Marine

|      icon       | code                       |    icon    | code       |
| :-------------: | -------------------------- | :--------: | ---------- |
|     :whale:     | `whale`                    |  :whale2:  | `whale2`   |
|    :dolphin:    | `dolphin` <br /> `flipper` |   :fish:   | `fish`     |
| :tropical_fish: | `tropical_fish`            | :blowfish: | `blowfish` |
|     :shark:     | `shark`                    | :octopus:  | `octopus`  |
|     :shell:     | `shell`                    |            |            |

### Animal Bug

|    icon    | code                    |     icon     | code         |
| :--------: | ----------------------- | :----------: | ------------ |
|  :snail:   | `snail`                 | :butterfly:  | `butterfly`  |
|   :bug:    | `bug`                   |    :ant:     | `ant`        |
|   :bee:    | `bee` <br /> `honeybee` |   :beetle:   | `beetle`     |
|  :spider:  | `spider`                | :spider_web: | `spider_web` |
| :scorpion: | `scorpion`              |              |              |

### Plant Flower

|      icon      | code           |       icon       | code             |
| :------------: | -------------- | :--------------: | ---------------- |
|   :bouquet:    | `bouquet`      | :cherry_blossom: | `cherry_blossom` |
| :white_flower: | `white_flower` |    :rosette:     | `rosette`        |
|     :rose:     | `rose`         | :wilted_flower:  | `wilted_flower`  |
|   :hibiscus:   | `hibiscus`     |   :sunflower:    | `sunflower`      |
|   :blossom:    | `blossom`      |     :tulip:      | `tulip`          |

### Plant Other

|        icon        | code               |       icon       | code             |
| :----------------: | ------------------ | :--------------: | ---------------- |
|     :seedling:     | `seedling`         | :evergreen_tree: | `evergreen_tree` |
|  :deciduous_tree:  | `deciduous_tree`   |   :palm_tree:    | `palm_tree`      |
|      :cactus:      | `cactus`           |  :ear_of_rice:   | `ear_of_rice`    |
|       :herb:       | `herb`             |    :shamrock:    | `shamrock`       |
| :four_leaf_clover: | `four_leaf_clover` |   :maple_leaf:   | `maple_leaf`     |
|   :fallen_leaf:    | `fallen_leaf`      |     :leaves:     | `leaves`         |

## Food & Drink

### Food Fruit

|     icon      | code          |     icon     | code                                          |
| :-----------: | ------------- | :----------: | --------------------------------------------- |
|   :grapes:    | `grapes`      |   :melon:    | `melon`                                       |
| :watermelon:  | `watermelon`  |  :mandarin:  | `mandarin` <br /> `orange` <br /> `tangerine` |
|    :lemon:    | `lemon`       |   :banana:   | `banana`                                      |
|  :pineapple:  | `pineapple`   |   :apple:    | `apple`                                       |
| :green_apple: | `green_apple` |    :pear:    | `pear`                                        |
|    :peach:    | `peach`       |  :cherries:  | `cherries`                                    |
| :strawberry:  | `strawberry`  | :kiwi_fruit: | `kiwi_fruit`                                  |
|   :tomato:    | `tomato`      |              |                                               |

### Food Vegetable

|    icon    | code       |     icon     | code         |
| :--------: | ---------- | :----------: | ------------ |
| :avocado:  | `avocado`  |  :eggplant:  | `eggplant`   |
|  :potato:  | `potato`   |   :carrot:   | `carrot`     |
|   :corn:   | `corn`     | :hot_pepper: | `hot_pepper` |
| :cucumber: | `cucumber` |  :mushroom:  | `mushroom`   |
| :peanuts:  | `peanuts`  |  :chestnut:  | `chestnut`   |

### Food Prepared

|        icon         | code                |         icon          | code                  |
| :-----------------: | ------------------- | :-------------------: | --------------------- |
|       :bread:       | `bread`             |      :croissant:      | `croissant`           |
|  :baguette_bread:   | `baguette_bread`    |      :pancakes:       | `pancakes`            |
|      :cheese:       | `cheese`            |    :meat_on_bone:     | `meat_on_bone`        |
|    :poultry_leg:    | `poultry_leg`       |        :bacon:        | `bacon`               |
|     :hamburger:     | `hamburger`         |        :fries:        | `fries`               |
|       :pizza:       | `pizza`             |       :hotdog:        | `hotdog`              |
|       :taco:        | `taco`              |       :burrito:       | `burrito`             |
| :stuffed_flatbread: | `stuffed_flatbread` |         :egg:         | `egg`                 |
|     :fried_egg:     | `fried_egg`         | :shallow_pan_of_food: | `shallow_pan_of_food` |
|       :stew:        | `stew`              |     :green_salad:     | `green_salad`         |
|      :popcorn:      | `popcorn`           |                       |                       |

### Food Asian

|      icon      | code           |      icon      | code           |
| :------------: | -------------- | :------------: | -------------- |
|    :bento:     | `bento`        | :rice_cracker: | `rice_cracker` |
|  :rice_ball:   | `rice_ball`    |     :rice:     | `rice`         |
|    :curry:     | `curry`        |    :ramen:     | `ramen`        |
|  :spaghetti:   | `spaghetti`    | :sweet_potato: | `sweet_potato` |
|     :oden:     | `oden`         |    :sushi:     | `sushi`        |
| :fried_shrimp: | `fried_shrimp` |  :fish_cake:   | `fish_cake`    |
|    :dango:     | `dango`        |                |                |

### Food Marine

|  icon   | code    |   icon   | code     |
| :-----: | ------- | :------: | -------- |
| :crab:  | `crab`  | :shrimp: | `shrimp` |
| :squid: | `squid` |          |          |

### Food Sweet

|    icon     | code        |      icon       | code            |
| :---------: | ----------- | :-------------: | --------------- |
| :icecream:  | `icecream`  |  :shaved_ice:   | `shaved_ice`    |
| :ice_cream: | `ice_cream` |   :doughnut:    | `doughnut`      |
|  :cookie:   | `cookie`    |   :birthday:    | `birthday`      |
|   :cake:    | `cake`      | :chocolate_bar: | `chocolate_bar` |
|   :candy:   | `candy`     |   :lollipop:    | `lollipop`      |
|  :custard:  | `custard`   |   :honey_pot:   | `honey_pot`     |

### Drink

|       icon       | code             |        icon        | code               |
| :--------------: | ---------------- | :----------------: | ------------------ |
|  :baby_bottle:   | `baby_bottle`    |    :milk_glass:    | `milk_glass`       |
|     :coffee:     | `coffee`         |       :tea:        | `tea`              |
|      :sake:      | `sake`           |    :champagne:     | `champagne`        |
|   :wine_glass:   | `wine_glass`     |     :cocktail:     | `cocktail`         |
| :tropical_drink: | `tropical_drink` |       :beer:       | `beer`             |
|     :beers:      | `beers`          | :clinking_glasses: | `clinking_glasses` |
| :tumbler_glass:  | `tumbler_glass`  |                    |                    |

### Dishware

|         icon         | code                 |       icon       | code                   |
| :------------------: | -------------------- | :--------------: | ---------------------- |
| :plate_with_cutlery: | `plate_with_cutlery` | :fork_and_knife: | `fork_and_knife`       |
|       :spoon:        | `spoon`              |     :hocho:      | `hocho` <br /> `knife` |
|      :amphora:       | `amphora`            |                  |                        |

## Travel & Places

### Place Map

|      icon      | code           |          icon          | code                   |
| :------------: | -------------- | :--------------------: | ---------------------- |
| :earth_africa: | `earth_africa` |    :earth_americas:    | `earth_americas`       |
|  :earth_asia:  | `earth_asia`   | :globe_with_meridians: | `globe_with_meridians` |
|  :world_map:   | `world_map`    |        :japan:         | `japan`                |

### Place Geographic

|      icon       | code            |       icon       | code             |
| :-------------: | --------------- | :--------------: | ---------------- |
| :mountain_snow: | `mountain_snow` |    :mountain:    | `mountain`       |
|    :volcano:    | `volcano`       |   :mount_fuji:   | `mount_fuji`     |
|    :camping:    | `camping`       | :beach_umbrella: | `beach_umbrella` |
|    :desert:     | `desert`        | :desert_island:  | `desert_island`  |
| :national_park: | `national_park` |                  |                  |

### Place Building

|          icon           | code                    |          icon          | code                   |
| :---------------------: | ----------------------- | :--------------------: | ---------------------- |
|        :stadium:        | `stadium`               |  :classical_building:  | `classical_building`   |
| :building_construction: | `building_construction` |        :houses:        | `houses`               |
|    :derelict_house:     | `derelict_house`        |        :house:         | `house`                |
|   :house_with_garden:   | `house_with_garden`     |        :office:        | `office`               |
|      :post_office:      | `post_office`           | :european_post_office: | `european_post_office` |
|       :hospital:        | `hospital`              |         :bank:         | `bank`                 |
|         :hotel:         | `hotel`                 |      :love_hotel:      | `love_hotel`           |
|   :convenience_store:   | `convenience_store`     |        :school:        | `school`               |
|   :department_store:    | `department_store`      |       :factory:        | `factory`              |
|    :japanese_castle:    | `japanese_castle`       |   :european_castle:    | `european_castle`      |
|        :wedding:        | `wedding`               |     :tokyo_tower:      | `tokyo_tower`          |
|   :statue_of_liberty:   | `statue_of_liberty`     |                        |                        |

### Place Religious

|    icon     | code        |      icon       | code            |
| :---------: | ----------- | :-------------: | --------------- |
|  :church:   | `church`    |    :mosque:     | `mosque`        |
| :synagogue: | `synagogue` | :shinto_shrine: | `shinto_shrine` |
|   :kaaba:   | `kaaba`     |                 |                 |

### Place Other

|      icon      | code           |           icon           | code                     |
| :------------: | -------------- | :----------------------: | ------------------------ |
|   :fountain:   | `fountain`     |          :tent:          | `tent`                   |
|    :foggy:     | `foggy`        |    :night_with_stars:    | `night_with_stars`       |
|  :cityscape:   | `cityscape`    | :sunrise_over_mountains: | `sunrise_over_mountains` |
|   :sunrise:    | `sunrise`      |      :city_sunset:       | `city_sunset`            |
| :city_sunrise: | `city_sunrise` |    :bridge_at_night:     | `bridge_at_night`        |
|  :hotsprings:  | `hotsprings`   |     :carousel_horse:     | `carousel_horse`         |
| :ferris_wheel: | `ferris_wheel` |     :roller_coaster:     | `roller_coaster`         |
|    :barber:    | `barber`       |      :circus_tent:       | `circus_tent`            |

### Transport Ground

|           icon           | code                     |         icon          | code                  |
| :----------------------: | ------------------------ | :-------------------: | --------------------- |
|    :steam_locomotive:    | `steam_locomotive`       |     :railway_car:     | `railway_car`         |
|    :bullettrain_side:    | `bullettrain_side`       |  :bullettrain_front:  | `bullettrain_front`   |
|         :train2:         | `train2`                 |        :metro:        | `metro`               |
|       :light_rail:       | `light_rail`             |       :station:       | `station`             |
|          :tram:          | `tram`                   |      :monorail:       | `monorail`            |
|    :mountain_railway:    | `mountain_railway`       |        :train:        | `train`               |
|          :bus:           | `bus`                    |    :oncoming_bus:     | `oncoming_bus`        |
|       :trolleybus:       | `trolleybus`             |       :minibus:       | `minibus`             |
|       :ambulance:        | `ambulance`              |     :fire_engine:     | `fire_engine`         |
|       :police_car:       | `police_car`             | :oncoming_police_car: | `oncoming_police_car` |
|          :taxi:          | `taxi`                   |    :oncoming_taxi:    | `oncoming_taxi`       |
|          :car:           | `car` <br /> `red_car`   | :oncoming_automobile: | `oncoming_automobile` |
|        :blue_car:        | `blue_car`               |        :truck:        | `truck`               |
|   :articulated_lorry:    | `articulated_lorry`      |       :tractor:       | `tractor`             |
|       :racing_car:       | `racing_car`             |     :motorcycle:      | `motorcycle`          |
|     :motor_scooter:      | `motor_scooter`          |        :bike:         | `bike`                |
|      :kick_scooter:      | `kick_scooter`           |       :busstop:       | `busstop`             |
|        :motorway:        | `motorway`               |    :railway_track:    | `railway_track`       |
|        :oil_drum:        | `oil_drum`               |      :fuelpump:       | `fuelpump`            |
|     :rotating_light:     | `rotating_light`         |    :traffic_light:    | `traffic_light`       |
| :vertical_traffic_light: | `vertical_traffic_light` |      :stop_sign:      | `stop_sign`           |
|      :construction:      | `construction`           |                       |                       |

### Transport Water

|       icon       | code             |    icon     | code                     |
| :--------------: | ---------------- | :---------: | ------------------------ |
|     :anchor:     | `anchor`         |   :boat:    | `boat` <br /> `sailboat` |
|     :canoe:      | `canoe`          | :speedboat: | `speedboat`              |
| :passenger_ship: | `passenger_ship` |   :ferry:   | `ferry`                  |
|   :motor_boat:   | `motor_boat`     |   :ship:    | `ship`                   |

### Transport Air

|         icon         | code                 |          icon          | code                   |
| :------------------: | -------------------- | :--------------------: | ---------------------- |
|      :airplane:      | `airplane`           |    :small_airplane:    | `small_airplane`       |
|  :flight_departure:  | `flight_departure`   |    :flight_arrival:    | `flight_arrival`       |
|        :seat:        | `seat`               |      :helicopter:      | `helicopter`           |
| :suspension_railway: | `suspension_railway` |  :mountain_cableway:   | `mountain_cableway`    |
|   :aerial_tramway:   | `aerial_tramway`     | :artificial_satellite: | `artificial_satellite` |
|       :rocket:       | `rocket`             |                        |                        |

### Hotel

|      icon      | code           | icon | code |
| :------------: | -------------- | :--: | ---- |
| :bellhop_bell: | `bellhop_bell` |

### Time

|        icon         | code                |           icon           | code                     |
| :-----------------: | ------------------- | :----------------------: | ------------------------ |
|     :hourglass:     | `hourglass`         | :hourglass_flowing_sand: | `hourglass_flowing_sand` |
|       :watch:       | `watch`             |      :alarm_clock:       | `alarm_clock`            |
|     :stopwatch:     | `stopwatch`         |      :timer_clock:       | `timer_clock`            |
| :mantelpiece_clock: | `mantelpiece_clock` |        :clock12:         | `clock12`                |
|     :clock1230:     | `clock1230`         |         :clock1:         | `clock1`                 |
|     :clock130:      | `clock130`          |         :clock2:         | `clock2`                 |
|     :clock230:      | `clock230`          |         :clock3:         | `clock3`                 |
|     :clock330:      | `clock330`          |         :clock4:         | `clock4`                 |
|     :clock430:      | `clock430`          |         :clock5:         | `clock5`                 |
|     :clock530:      | `clock530`          |         :clock6:         | `clock6`                 |
|     :clock630:      | `clock630`          |         :clock7:         | `clock7`                 |
|     :clock730:      | `clock730`          |         :clock8:         | `clock8`                 |
|     :clock830:      | `clock830`          |         :clock9:         | `clock9`                 |
|     :clock930:      | `clock930`          |        :clock10:         | `clock10`                |
|     :clock1030:     | `clock1030`         |        :clock11:         | `clock11`                |
|     :clock1130:     | `clock1130`         |                          |                          |

etc...
