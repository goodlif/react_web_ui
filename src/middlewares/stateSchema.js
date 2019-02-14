export default {
    
        "definitions": {},
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "http://example.com/root.json",
        "type": "object",
        "title": "The Root Schema",
        "required": [
          "features",
          "auth"
        ],
        "properties": {
          "features": {
            "$id": "#/properties/features",
            "type": "array",
            "title": "The Features Schema",
            "items": {
              "$id": "#/properties/features/items",
              "type": "string",
              "title": "The Items Schema",
              "default": "",
              "examples": [
                "Comment 1",
                "Comment 2"
              ],
              "pattern": "^(.*)$"
            }
          },
          "auth": {
            "$id": "#/properties/auth",
            "type": "boolean",
            "title": "The Auth Schema",
            "default": false,
            "examples": [
              true
            ]
          }
        }     
};