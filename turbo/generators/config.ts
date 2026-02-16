import { PlopTypes } from "@turbo/gen";

// Helper to convert kebab-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("pascalCase", (text: string) => toPascalCase(text));

  plop.setGenerator("package", {
    description: "Create a new package in the monorepo",
    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "What is the name of the package?",
        validate: (input: string) => {
          if (input.includes(" ")) {
            return "package name cannot include spaces";
          }
          if (!input) {
            return "package name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "packageType",
        message: "What type of package?",
        choices: [
          { name: "Infrastructure", value: "infrastructure" },
          { name: "Package", value: "package" },
          { name: "App", value: "app" },
        ],
      },
      {
        type: "list",
        name: "template",
        message: "Use TypeScript library boilerplate or empty package?",
        choices: [
          { name: "TypeScript library boilerplate", value: "ts-library" },
          { name: "Empty package", value: "empty" },
        ],
      },
    ],
    actions: (data) => {
      if (!data) {
        return [];
      }

      const { packageName, packageType, template } = data;
      const basePath =
        packageType === "app"
          ? `apps/${packageName}`
          : `${packageType}s/${packageName}`;
      const actions: PlopTypes.ActionType[] = [];

      if (template === "empty") {
        // Empty package - just package.json
        actions.push({
          type: "add",
          path: `${basePath}/package.json`,
          templateFile: `templates/${packageType}/empty/package.json.hbs`,
        });
      } else {
        // TypeScript library boilerplate
        if (packageType === "infrastructure") {
          actions.push(
            {
              type: "add",
              path: `${basePath}/package.json`,
              templateFile: "templates/infrastructure/ts-library/package.json.hbs",
            },
            {
              type: "add",
              path: `${basePath}/tsconfig.json`,
              templateFile: "templates/infrastructure/ts-library/tsconfig.json.hbs",
            },
            {
              type: "add",
              path: `${basePath}/index.ts`,
              templateFile: "templates/infrastructure/ts-library/index.ts.hbs",
            }
          );
        } else if (packageType === "package") {
          actions.push(
            {
              type: "add",
              path: `${basePath}/package.json`,
              templateFile: "templates/package/ts-library/package.json.hbs",
            },
            {
              type: "add",
              path: `${basePath}/tsconfig.json`,
              templateFile: "templates/package/ts-library/tsconfig.json.hbs",
            },
            {
              type: "add",
              path: `${basePath}/vite.config.ts`,
              templateFile: "templates/package/ts-library/vite.config.ts.hbs",
            },
            {
              type: "add",
              path: `${basePath}/vitest.config.ts`,
              templateFile: "templates/package/ts-library/vitest.config.ts.hbs",
            },
            {
              type: "add",
              path: `${basePath}/eslint.config.js`,
              templateFile: "templates/package/ts-library/eslint.config.js.hbs",
            },
            {
              type: "add",
              path: `${basePath}/src/index.ts`,
              templateFile: "templates/package/ts-library/src/index.ts.hbs",
            },
            {
              type: "add",
              path: `${basePath}/src/index.test.ts`,
              templateFile: "templates/package/ts-library/src/index.test.ts.hbs",
            }
          );
        } else if (packageType === "app") {
          actions.push(
            {
              type: "add",
              path: `${basePath}/package.json`,
              templateFile: "templates/app/ts-library/package.json.hbs",
            },
            {
              type: "add",
              path: `${basePath}/tsconfig.json`,
              templateFile: "templates/app/ts-library/tsconfig.json.hbs",
            },
            {
              type: "add",
              path: `${basePath}/vite.config.ts`,
              templateFile: "templates/app/ts-library/vite.config.ts.hbs",
            },
            {
              type: "add",
              path: `${basePath}/eslint.config.js`,
              templateFile: "templates/app/ts-library/eslint.config.js.hbs",
            },
            {
              type: "add",
              path: `${basePath}/src/main.ts`,
              templateFile: "templates/app/ts-library/src/main.ts.hbs",
            }
          );
        }
      }

      return actions;
    },
  });
}
