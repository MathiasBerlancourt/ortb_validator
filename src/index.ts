import Ajv from "ajv";
import schema from "./schema";
import { isValidIp } from "./utils";
import { BidRequest } from "./types";

const ajv = new Ajv({ allErrors: true });

// Exemple de bid request à valider
const bidRequest: BidRequest = {
  id: "80ce30c53c16e6ede735f123ef6e32361bfc7b22",
  imp: [
    {
      id: "1",
      banner: {
        format: [
          {
            w: 300,
            h: 250,
          },
          {
            w: 728,
            h: 90,
          },
        ],
      },
      bidfloor: 0.5,
    },
  ],
  site: {
    id: "102855",
    name: "Example Publisher",
    domain: "example.com",
    page: "http://example.com/page?param=value",
    publisher: {
      id: "8953",
      name: "Example Publisher",
    },
  },
  device: {
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    ip: "123.145.167.189",
    geo: {
      country: "USA",
      lat: 35.012345,
      lon: -115.123456,
    },
    dnt: 0,
    lmt: 0,
    language: "en",
  },
  user: {
    id: "55816b39711f9b5acf3b90e313ed29e51665623f",
    buyeruid: "5456787654",
    yob: 1984,
    gender: "M",
  },
  at: 2,
  tmax: 120,
  cur: ["USD"],
};

// Fonction pour valider le bid request
function validateBidRequest(bidRequest: BidRequest) {
  const validate = ajv.compile(schema);
  const valid = validate(bidRequest);

  if (valid) {
    console.log("Le bid request est valide.");

    // Vérification supplémentaire de l'adresse IP
    if (!isValidIp(bidRequest.device.ip)) {
      console.error("L'adresse IP n'est pas valide ou est une adresse privée.");
    } else {
      console.log("L'adresse IP est valide et publique.");
    }
  } else {
    console.error("Le bid request est invalide:", validate.errors);
  }
}

// Appeler la fonction pour valider le bid request
validateBidRequest(bidRequest);
