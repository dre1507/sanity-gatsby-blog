export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60555e2a36e57cec68e1e78b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-nepf2arh",
                  apiId: "62bc3995-88d2-477f-ba57-1867e2fbe357",
                },
                {
                  buildHookId: "60555e2b26de52ce4252d489",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-b65u8fse",
                  apiId: "3a93c0ce-86f1-4dfc-a4fb-94f673506726",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dre1507/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-b65u8fse.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
