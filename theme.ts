import { buildLegacyTheme } from "sanity";

const props = {
	"--my-white": "#fff",
	"--my-black": "#101112",
	"--brand": "#d05afc",
	"--my-red": "#db4437",
	"--my-yellow": "#f4b400",
	"--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
	"--black": props["--my-black"],
	"--white": props["--my-white"],

	"--gray": "#666",
	"--gray-base": "#666",

	"--component-bg": props["--my-black"],
	"--component-text-color": props["--my-white"],

	"--brand-primary": props["--brand"],

	// default buttons
	"--default-button-color": "#666",
	"--default-button-primary-color": props["--brand"],
	"--default-button-success-color": props["--my-green"],
	"--default-button-warning-color": props["--my-yellow"],
	"--default-button-danger-color": props["--my-red"],

	// state
	"--state-info-color": props["--brand"],
	"--state-success-color": props["--my-green"],
	"--state-warning-color": props["--my-yellow"],
	"--state-danger-color": props["--my-red"],

	// navbar
	"--main-navigation-color": props["--my-black"],
	"--main-navigation-color--inverted": props["--my-white"],

	"--focus-color": props["--brand"],
});
