import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

// get a pre-configured url-builder from the sanity client
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
	return builder.image(source);
};
