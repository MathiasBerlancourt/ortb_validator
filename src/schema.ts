import { JSONSchemaType } from "ajv";
import { BidRequest } from "./types";

const schema: JSONSchemaType<BidRequest> = {
  type: "object",
  required: ["id", "imp", "site", "device", "user", "at", "tmax", "cur"],
  properties: {
    id: { type: "string" },
    imp: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        required: ["id", "banner", "bidfloor"],
        properties: {
          id: { type: "string" },
          banner: {
            type: "object",
            required: ["format"],
            properties: {
              format: {
                type: "array",
                minItems: 1,
                items: {
                  type: "object",
                  required: ["w", "h"],
                  properties: {
                    w: { type: "number", minimum: 1 },
                    h: { type: "number", minimum: 1 },
                  },
                },
              },
            },
          },
          bidfloor: { type: "number", minimum: 0 },
        },
      },
    },
    site: {
      type: "object",
      required: ["id", "name", "domain", "page", "publisher"],
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        domain: { type: "string" },
        page: { type: "string" },
        publisher: {
          type: "object",
          required: ["id", "name"],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
          },
        },
      },
    },
    device: {
      type: "object",
      required: ["ua", "ip", "geo", "dnt", "lmt", "language"],
      properties: {
        ua: { type: "string" },
        ip: { type: "string" },
        geo: {
          type: "object",
          required: ["country", "lat", "lon"],
          properties: {
            country: { type: "string" },
            lat: { type: "number", minimum: -90, maximum: 90 },
            lon: { type: "number", minimum: -180, maximum: 180 },
          },
        },
        dnt: { type: "number", enum: [0, 1] },
        lmt: { type: "number", enum: [0, 1] },
        language: { type: "string" },
      },
    },
    user: {
      type: "object",
      required: ["id", "buyeruid", "yob", "gender"],
      properties: {
        id: { type: "string" },
        buyeruid: { type: "string" },
        yob: {
          type: "number",
          minimum: 1900,
          maximum: new Date().getFullYear(),
        },
        gender: { type: "string", enum: ["M", "F", "O"] },
      },
    },
    at: { type: "number", enum: [1, 2] },
    tmax: { type: "number", minimum: 0 },
    cur: {
      type: "array",
      minItems: 1,
      items: { type: "string" },
    },
    wseat: {
      type: "array",
      items: { type: "string" },
      nullable: true,
    },
    allimps: { type: "number", enum: [0, 1], nullable: true },
    bcat: {
      type: "array",
      items: { type: "string" },
      nullable: true,
    },
    badv: {
      type: "array",
      items: { type: "string" },
      nullable: true,
    },
  },
};

export default schema;
