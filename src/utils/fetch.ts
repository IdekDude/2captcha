/* Browser Support, courtesy of @alexsnkr */

import nodeFetch from "node-fetch";

export = typeof window === "undefined" ? nodeFetch : window.fetch.bind(window);