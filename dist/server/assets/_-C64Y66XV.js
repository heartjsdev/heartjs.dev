import { jsx, jsxs } from "react/jsx-runtime";
import { D as DocsLayout, b as baseOptions } from "./layout.shared-D0uitGZ9.js";
import { useMemo } from "react";
import { j as docs, D as DocsPage, k as DocsTitle, l as DocsDescription, m as DocsBody, n as defaultMdxComponents } from "./staticFunctionMiddleware-DSkcj8ww.js";
import { createClientLoader } from "fumadocs-mdx/runtime/vite";
import { R as Route } from "./router-B6vVXVXg.js";
import "tailwind-merge";
import "@radix-ui/react-scroll-area";
import "class-variance-authority";
import "@radix-ui/react-presence";
import "@radix-ui/react-popover";
import "next-themes";
import "lucide-static";
import "@radix-ui/react-collapsible";
import "scroll-into-view-if-needed";
import "@radix-ui/react-tabs";
import "node:fs/promises";
import "node:path";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "@radix-ui/react-direction";
import "@radix-ui/react-dialog";
import "@orama/orama";
import "lucide-react";
import "react-dom";
import "clsx";
import "@radix-ui/react-navigation-menu";
const clientLoader = createClientLoader(docs.doc, {
  id: "docs",
  component({
    toc,
    frontmatter,
    default: MDX
  }) {
    return /* @__PURE__ */ jsxs(DocsPage, { toc, children: [
      /* @__PURE__ */ jsx(DocsTitle, { children: frontmatter.title }),
      /* @__PURE__ */ jsx(DocsDescription, { children: frontmatter.description }),
      /* @__PURE__ */ jsx(DocsBody, { children: /* @__PURE__ */ jsx(MDX, { components: {
        ...defaultMdxComponents
      } }) })
    ] });
  }
});
function Page() {
  const data = Route.useLoaderData();
  const Content = clientLoader.getComponent(data.path);
  const tree = useMemo(() => transformPageTree(data.tree), [data.tree]);
  return /* @__PURE__ */ jsx(DocsLayout, { ...baseOptions(), tree, children: /* @__PURE__ */ jsx(Content, {}) });
}
function transformPageTree(root) {
  function mapNode(item) {
    if (typeof item.icon === "string") {
      item = {
        ...item,
        icon: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: {
          __html: item.icon
        } })
      };
    }
    if (item.type === "folder") {
      return {
        ...item,
        index: item.index ? mapNode(item.index) : void 0,
        children: item.children.map(mapNode)
      };
    }
    return item;
  }
  return {
    ...root,
    children: root.children.map(mapNode),
    fallback: root.fallback ? transformPageTree(root.fallback) : void 0
  };
}
export {
  Page as component
};
