import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '742d96d29805f06604c54594075623f8f03f2829', queries });
export default client;
  