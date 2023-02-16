// astro.config.mjs

import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          // Define a blog post collection
          {
            name: "posts",
            label: "Blog Posts",
            folder: "src/pages/posts",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              { name: "body", widget: "markdown", label: "Post Body" },
            ],
          },
        ],
      },
      previewStyles: [
        // Path to a local CSS file, relative to your project’s root directory
        "/src/styles/blog.css",
        // An npm module identifier
        // "@fontsource/roboto",
        // A URL to an externally hosted CSS file
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",
        // Raw CSS!
        ["p { color: red; }", { raw: true }],
      ],
    }),
  ],
});
