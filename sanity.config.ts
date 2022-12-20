import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import SanityNavbar from "./components/SanityNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export default defineConfig({
	basePath: "/studio",
	name: "MY_CONTENT_STUDIO",
	title: "MY CONTENT STUDIO",

	projectId,
	dataset,

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			navbar: SanityNavbar,
		},
	},
	theme: myTheme,
});
