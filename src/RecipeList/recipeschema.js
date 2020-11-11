export function getrecipeschema() {
    var recipeschema = 
    {
            "definitions": {},
            "$schema": "http://json-schema.org/draft-07/schema#",
            "$id": "http://example.com/root.json",
            "type": "object",
            "title": "The Root Schema",
            "required": [
              "recipeid",
              "type",
              "title",
              "subtitle",
              "description",
              "imagedescription",
              "imageUrl",
              "basehydration",
              "flourcomponents",
              "watercomponents",
              "autolysecomponents",
              "leavencomponents",
              "ingredients",
              "instructions"
            ],
            "properties": {
              "recipeid": {
                "$id": "#/properties/recipeid",
                "type": "integer",
                "title": "The Recipeid Schema",
                "default": 0,
                "examples": [
                  4
                ]
              },
              "type": {
                "$id": "#/properties/type",
                "type": "string",
                "title": "The Type Schema",
                "default": "",
                "examples": [
                  "Bread"
                ],
                "pattern": "^(.*)$"
              },

              "title": {
                "$id": "#/properties/title",
                "type": "string",
                "title": "The Title Schema",
                "default": "",
                "examples": [
                  "Wholewheat Boule"
                ],
                "pattern": "^(.*)$"
              },
              "subtitle": {
                "$id": "#/properties/subtitle",
                "type": "string",
                "title": "The Subtitle Schema",
                "default": "",
                "examples": [
                  "This is a recipe for a a simple whole wheat loaf"
                ],
                "pattern": "^(.*)$"
              },
              "description": {
                "$id": "#/properties/description",
                "type": "string",
                "title": "The Description Schema",
                "default": "",
                "examples": [
                  "Whole wheat goodness - this is a simple "
                ],
                "pattern": "^(.*)$"
              },
              "imagedescription": {
                "$id": "#/properties/imagedescription",
                "type": "string",
                "title": "The Imagedescription Schema",
                "default": "",
                "examples": [
                  "this is an alt text"
                ],
                "pattern": "^(.*)$"
              },
              "imageUrl": {
                "$id": "#/properties/imageUrl",
                "type": "string",
                "title": "The Imageurl Schema",
                "default": "",
                "examples": [
                  "/boule.jpg"
                ],
                "pattern": "^(.*)$"
              },
              "basehydration": {
                "$id": "#/properties/basehydration",
                "type": "integer",
                "title": "The Basehydration Schema",
                "default": 0,
                "examples": [
                  75
                ]
              },
              "flourcomponents": {
                "$id": "#/properties/flourcomponents",
                "type": "array",
                "title": "The Flourcomponents Schema",
                "items": {
                  "$id": "#/properties/flourcomponents/items",
                  "type": "object",
                  "title": "The Items Schema",
                  "required": [
                    "id",
                    "ratio",
                    "flourType",
                    "flourTypeName"
                  ],
                  "properties": {
                    "id": {
                      "$id": "#/properties/flourcomponents/items/properties/id",
                      "type": "integer",
                      "title": "The Id Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    },
                    "ratio": {
                      "$id": "#/properties/flourcomponents/items/properties/ratio",
                      "type": "integer",
                      "title": "The Ratio Schema",
                      "default": 0,
                      "examples": [
                        80
                      ]
                    },
                    "flourType": {
                      "$id": "#/properties/flourcomponents/items/properties/flourType",
                      "type": "integer",
                      "title": "The Flourtype Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    },
                    "flourTypeName": {
                      "$id": "#/properties/flourcomponents/items/properties/flourTypeName",
                      "type": "string",
                      "title": "The Flourtypename Schema",
                      "default": "",
                      "examples": [
                        "Whole Wheat Flour"
                      ],
                      "pattern": "^(.*)$"
                    }
                  }
                }
              },
              "watercomponents": {
                "$id": "#/properties/watercomponents",
                "type": "array",
                "title": "The Watercomponents Schema",
                "items": {
                  "$id": "#/properties/watercomponents/items",
                  "type": "object",
                  "title": "The Items Schema",
                  "required": [
                    "id",
                    "ratio"
                  ],
                  "properties": {
                    "id": {
                      "$id": "#/properties/watercomponents/items/properties/id",
                      "type": "integer",
                      "title": "The Id Schema",
                      "default": 0,
                      "examples": [
                        1
                      ]
                    },
                    "ratio": {
                      "$id": "#/properties/watercomponents/items/properties/ratio",
                      "type": "integer",
                      "title": "The Ratio Schema",
                      "default": 0,
                      "examples": [
                        100
                      ]
                    }
                  }
                }
              },
              "autolysecomponents": {
                "$id": "#/properties/autolysecomponents",
                "type": "array",
                "title": "The Autolysecomponents Schema",
                "items": {
                  "$id": "#/properties/autolysecomponents/items",
                  "type": "object",
                  "title": "The Items Schema",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "id": {
                      "$id": "#/properties/autolysecomponents/items/properties/id",
                      "type": "integer",
                      "title": "The Id Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    }
                  }
                }
              },
              "leavencomponents": {
                "$id": "#/properties/leavencomponents",
                "type": "array",
                "title": "The Leavencomponents Schema",
                "items": {
                  "$id": "#/properties/leavencomponents/items",
                  "type": "object",
                  "title": "The Items Schema",
                  "required": [
                    "id",
                    "ratio",
                    "hydration"
                  ],
                  "properties": {
                    "id": {
                      "$id": "#/properties/leavencomponents/items/properties/id",
                      "type": "integer",
                      "title": "The Id Schema",
                      "default": 0,
                      "examples": [
                        2
                      ]
                    },
                    "ratio": {
                      "$id": "#/properties/leavencomponents/items/properties/ratio",
                      "type": "integer",
                      "title": "The Ratio Schema",
                      "default": 0,
                      "examples": [
                        100
                      ]
                    },
                    "hydration": {
                      "$id": "#/properties/leavencomponents/items/properties/hydration",
                      "type": "integer",
                      "title": "The Hydration Schema",
                      "default": 0,
                      "examples": [
                        75
                      ]
                    }
                  }
                }
              },
              "ingredients": {
                "$id": "#/properties/ingredients",
                "type": "array",
                "title": "The Ingredients Schema",
                "items": {
                  "$id": "#/properties/ingredients/items",
                  "type": "object",
                  "title": "The Items Schema",
                  "required": [
                    "ratio",
                    "name",
                    "quantity",
                    "unit",
                    "id"
                  ],
                  "properties": {
                    "ratio": {
                      "$id": "#/properties/ingredients/items/properties/ratio",
                      "type": "integer",
                      "title": "The Ratio Schema",
                      "default": 0,
                      "examples": [
                        80
                      ]
                    },
                    "name": {
                      "$id": "#/properties/ingredients/items/properties/name",
                      "type": "string",
                      "title": "The Name Schema",
                      "default": "",
                      "examples": [
                        "flour"
                      ],
                      "pattern": "^(.*)$"
                    },
                    "quantity": {
                      "$id": "#/properties/ingredients/items/properties/quantity",
                      "type": "integer",
                      "title": "The Quantity Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    },
                    "unit": {
                      "$id": "#/properties/ingredients/items/properties/unit",
                      "type": "string",
                      "title": "The Unit Schema",
                      "default": "",
                      "examples": [
                        "g"
                      ],
                      "pattern": "^(.*)$"
                    },
                    "id": {
                      "$id": "#/properties/ingredients/items/properties/id",
                      "type": "integer",
                      "title": "The Id Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    }
                  }
                }
              },
              "instructions": {
                "$id": "#/properties/instructions",
                "type": "array",
                "title": "The Instructions Schema",
                "items": {
                  "$id": "#/properties/instructions/items",
                  "type": "object",
                  "title": "The Items Schema",
                  "required": [
                    "id",
                    "title",
                    "description",
                    "temp",
                    "start",
                    "duration"
                  ],
                  "properties": {
                    "id": {
                      "$id": "#/properties/instructions/items/properties/id",
                      "type": "integer",
                      "title": "The Id Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    },
                    "title": {
                      "$id": "#/properties/instructions/items/properties/title",
                      "type": "string",
                      "title": "The Title Schema",
                      "default": "",
                      "examples": [
                        "leaven mix"
                      ],
                      "pattern": "^(.*)$"
                    },
                    "description": {
                      "$id": "#/properties/instructions/items/properties/description",
                      "type": "string",
                      "title": "The Description Schema",
                      "default": "",
                      "examples": [
                        "Take the starter {id:2}, or yeast, and add some flour and lukewarm water to it and mix thoroughly to make it active. "
                      ],
                      "pattern": "^(.*)$"
                    },
                    "temp": {
                      "$id": "#/properties/instructions/items/properties/temp",
                      "type": "integer",
                      "title": "The Temp Schema",
                      "default": 0,
                      "examples": [
                        0
                      ]
                    },
                    "start": {
                      "$id": "#/properties/instructions/items/properties/start",
                      "type": "string",
                      "title": "The Start Schema",
                      "default": "",
                      "examples": [
                        "00:02"
                      ],
                      "pattern": "^(.*)$"
                    },
                    "duration": {
                      "$id": "#/properties/instructions/items/properties/duration",
                      "type": "string",
                      "title": "The Duration Schema",
                      "default": "",
                      "examples": [
                        "00:05"
                      ],
                      "pattern": "^(.*)$"
                    }
                  }
                }
              }
            }
          
  };
  return recipeschema;
}