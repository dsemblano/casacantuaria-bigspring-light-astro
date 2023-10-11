import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/de3fa612-2cc0-404c-bdaa-ce554cb5f017/github/main', token: '742d96d29805f06604c54594075623f8f03f2829', queries });
export default client;
  