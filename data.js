var APP_DATA = {
  "scenes": [
    {
      "id": "0-vod",
      "name": "Úvod",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.005638177646737574,
        "pitch": -0.045939032767737586,
        "fov": 1.436299240778858
      },
      "linkHotspots": [
        {
          "yaw": -0.7863137696854459,
          "pitch": 0.381020898765728,
          "rotation": 0,
          "target": "1-vn-due"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vn-due",
      "name": "Vášně duše",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31964102797179805,
          "pitch": 0.2805821122157557,
          "rotation": 0,
          "target": "2-svteln-kontrasty"
        },
        {
          "yaw": -2.2509594367009296,
          "pitch": 0.35442222044830984,
          "rotation": 0,
          "target": "0-vod"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-svteln-kontrasty",
      "name": "Světelné kontrasty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7933861961707294,
          "pitch": 0.34159779133941726,
          "rotation": 0,
          "target": "3-m-antick-a-modern"
        },
        {
          "yaw": 1.2871563432021915,
          "pitch": 0.30388730305514144,
          "rotation": 0,
          "target": "1-vn-due"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-m-antick-a-modern",
      "name": "Řím antický a moderní",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5198508501182566,
          "pitch": 0.2681925202447957,
          "rotation": 0,
          "target": "2-svteln-kontrasty"
        },
        {
          "yaw": 2.1511968890264317,
          "pitch": 0.26420022156048084,
          "rotation": 0,
          "target": "4-okamik-v-ase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-okamik-v-ase",
      "name": "Okamžik v čase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4657220406404594,
          "pitch": 0.28742043644409954,
          "rotation": 0,
          "target": "3-m-antick-a-modern"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Virtuální galerie",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
