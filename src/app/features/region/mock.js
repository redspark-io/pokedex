'use strict';

// =====================
// Mock
// =====================
(function() {

angular.module('rsPokedex.mocks')
  .constant('REGIONS_MOCK', regionsMock())
  .constant('REGION_MOCK', regionMock());

function regionsMock() {

  return {
    "count":6,
    "previous":null,
    "results":[
      {
          "url":"https:\/\/pokeapi.co\/api\/v2\/region\/1\/",
          "name":"kanto"
      },
      {
          "url":"https:\/\/pokeapi.co\/api\/v2\/region\/2\/",
          "name":"johto"
      },
      {
          "url":"https:\/\/pokeapi.co\/api\/v2\/region\/3\/",
          "name":"hoenn"
      },
      {
          "url":"https:\/\/pokeapi.co\/api\/v2\/region\/4\/",
          "name":"sinnoh"
      },
      {
          "url":"https:\/\/pokeapi.co\/api\/v2\/region\/5\/",
          "name":"unova"
      },
      {
          "url":"https:\/\/pokeapi.co\/api\/v2\/region\/6\/",
          "name":"kalos"
      }
    ],
    "next":null
    }
}

function regionMock() {

  return {
    "name":"kanto",
    "locations":[
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/67\/",
        "name":"celadon-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/68\/",
        "name":"cerulean-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/71\/",
        "name":"cinnabar-island"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/73\/",
        "name":"digletts-cave"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/76\/",
        "name":"fuchsia-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/80\/",
        "name":"mt-moon"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/86\/",
        "name":"pallet-town"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/87\/",
        "name":"rock-tunnel"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/88\/",
        "name":"kanto-route-1"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/89\/",
        "name":"kanto-route-10"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/90\/",
        "name":"kanto-route-11"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/91\/",
        "name":"kanto-route-12"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/92\/",
        "name":"kanto-route-13"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/93\/",
        "name":"kanto-route-14"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/94\/",
        "name":"kanto-route-15"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/95\/",
        "name":"kanto-route-16"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/96\/",
        "name":"kanto-route-17"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/97\/",
        "name":"kanto-route-18"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/98\/",
        "name":"kanto-sea-route-19"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/99\/",
        "name":"kanto-route-2"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/100\/",
        "name":"kanto-sea-route-20"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/101\/",
        "name":"kanto-sea-route-21"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/102\/",
        "name":"kanto-route-22"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/103\/",
        "name":"kanto-route-24"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/104\/",
        "name":"kanto-route-25"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/105\/",
        "name":"kanto-route-26"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/106\/",
        "name":"kanto-route-27"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/107\/",
        "name":"kanto-route-28"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/109\/",
        "name":"kanto-route-3"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/120\/",
        "name":"kanto-route-4"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/130\/",
        "name":"kanto-route-5"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/131\/",
        "name":"kanto-route-6"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/132\/",
        "name":"kanto-route-7"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/133\/",
        "name":"kanto-route-8"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/134\/",
        "name":"kanto-route-9"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/136\/",
        "name":"seafoam-islands"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/147\/",
        "name":"cerulean-cave"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/151\/",
        "name":"vermilion-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/152\/",
        "name":"kanto-victory-road-1"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/154\/",
        "name":"viridian-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/155\/",
        "name":"viridian-forest"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/157\/",
        "name":"kanto-route-23"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/158\/",
        "name":"power-plant"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/159\/",
        "name":"kanto-victory-road-2"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/160\/",
        "name":"pokemon-tower"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/161\/",
        "name":"pokemon-mansion"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/162\/",
        "name":"kanto-safari-zone"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/231\/",
        "name":"pewter-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/232\/",
        "name":"lavender-town"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/233\/",
        "name":"indigo-plateau"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/234\/",
        "name":"saffron-city"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/491\/",
        "name":"monean-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/492\/",
        "name":"liptoo-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/493\/",
        "name":"weepth-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/494\/",
        "name":"dilford-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/495\/",
        "name":"scufib-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/496\/",
        "name":"rixy-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/497\/",
        "name":"viapos-chamber"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/498\/",
        "name":"ss-anne"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/499\/",
        "name":"kanto-victory-road-3"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/500\/",
        "name":"mt-ember"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/501\/",
        "name":"berry-forest"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/502\/",
        "name":"icefall-cave"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/503\/",
        "name":"pattern-bush"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/504\/",
        "name":"lost-cave"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/505\/",
        "name":"kindle-road"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/506\/",
        "name":"treasure-beach"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/507\/",
        "name":"cape-brink"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/508\/",
        "name":"bond-bridge"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/509\/",
        "name":"three-isle-port"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/510\/",
        "name":"resort-gorgeous"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/511\/",
        "name":"water-labyrinth"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/512\/",
        "name":"five-isle-meadow"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/513\/",
        "name":"memorial-pillar"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/514\/",
        "name":"outcast-island"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/515\/",
        "name":"green-path"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/516\/",
        "name":"water-path"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/517\/",
        "name":"ruin-valley"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/518\/",
        "name":"trainer-tower"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/519\/",
        "name":"canyon-entrance"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/520\/",
        "name":"sevault-canyon"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/521\/",
        "name":"tanoby-ruins"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/522\/",
        "name":"kanto-route-19"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/523\/",
        "name":"kanto-route-20"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/524\/",
        "name":"kanto-route-21"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/526\/",
        "name":"one-island"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/527\/",
        "name":"four-island"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/528\/",
        "name":"five-island"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/529\/",
        "name":"kanto-altering-cave"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/location\/530\/",
        "name":"kanto-victory-road-4"
      }
    ],
    "version_groups":[
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/version-group\/1\/",
        "name":"red-blue"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/version-group\/2\/",
        "name":"yellow"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/version-group\/3\/",
        "name":"gold-silver"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/version-group\/4\/",
        "name":"crystal"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/version-group\/7\/",
        "name":"firered-leafgreen"
      },
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/version-group\/10\/",
        "name":"heartgold-soulsilver"
      }
    ],
    "names":[
      {
        "name":"\u30ab\u30f3\u30c8\u30fc\u5730\u65b9",
        "language":{
          "url":"https:\/\/pokeapi.co\/api\/v2\/language\/1\/",
          "name":"ja"
        }
      },
      {
        "name":"Kanto",
        "language":{
          "url":"https:\/\/pokeapi.co\/api\/v2\/language\/5\/",
          "name":"fr"
        }
      },
      {
        "name":"Kanto",
        "language":{
          "url":"https:\/\/pokeapi.co\/api\/v2\/language\/6\/",
          "name":"de"
        }
      },
      {
        "name":"Kanto",
        "language":{
          "url":"https:\/\/pokeapi.co\/api\/v2\/language\/8\/",
          "name":"it"
        }
      },
      {
        "name":"Kanto",
        "language":{
          "url":"https:\/\/pokeapi.co\/api\/v2\/language\/9\/",
          "name":"en"
        }
      }
    ],
    "main_generation":{
      "url":"https:\/\/pokeapi.co\/api\/v2\/generation\/1\/",
      "name":"generation-i"
    },
    "pokedexes":[
      {
        "url":"https:\/\/pokeapi.co\/api\/v2\/pokedex\/2\/",
        "name":"kanto"
      }
    ],
    "id":1
  }
}

})();