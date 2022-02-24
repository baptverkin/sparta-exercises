import * as mongo from "mongodb";

export const sweaterProperties = {
      bsonType: "object",
      required: ["_id", "name", "color", "category", "size"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          maxLength: 30,
          description: "must be a string, 30 characters max and is required",
        },
        color: {
          bsonType: "string",
          maxLength: 15,
          description: "must be a string, 15 characters max and is required",
        },
        category: {
          bsonType: "string",
          enum: ["sweater"],
          description: "must be a string and is required",
        },
        size: {
          bsonType: "string",
          enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          description: "must be a string and is required",
        }
      }
};

export const shoesProperties = {
      bsonType: "object",
      required: ["_id", "name", "color", "category", "size"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          maxLength: 30,
          description: "must be a string, 30 characters max and is required",
        },
        color: {
          bsonType: "string",
          maxLength: 15,
          description: "must be a string, 15 characters max and is required",
        },
        category: {
          bsonType: "string",
          enum: ["shoes"],
          description: "must be a string and is required",
        },
        size: {
          bsonType: "int",
          minimum: 30,
          maximum: 50,
          description: "must be an integer and is required",
        },
        material: {
          bsonType: "string",
          enum: ["leather", "textile", "synthetic"],
          description: "must be a string and take one of the three enum values"
        }
  }
};

export const pantsProperties = {
      bsonType: "object",
      required: ["_id", "name", "color", "category", "size"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          maxLength: 30,
          description: "must be a string, 30 characters max and is required",
        },
        color: {
          bsonType: "string",
          maxLength: 15,
          description: "must be a string, 15 characters max and is required",
        },
        category: {
          bsonType: "string",
          enum: ["pants"],
          description: "must be a string and is required",
        },
        size: {
          bsonType: "object",
          additionalProperties: false,
          required: ["width"],
          properties : {
            width: {
              bsonType: "int",
              minimum: 32,
              maximum: 46,
          },
          cut: {
            bsonType: "string",
            enum: ["slim", "skinny", "regular", "straight"],
          }
          }
        },
      }
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      oneOf: [pantsProperties, shoesProperties, sweaterProperties],
      }
    }
  };

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
