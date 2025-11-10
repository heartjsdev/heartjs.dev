import { jsxs, jsx } from "react/jsx-runtime";
import { u as useDocsSearch, S as SearchDialog, a as SearchDialogOverlay, b as SearchDialogContent, c as SearchDialogHeader, d as SearchDialogIcon, e as SearchDialogInput, f as SearchDialogClose, g as SearchDialogList, h as SearchDialogFooter, T as TagsList, i as TagsListItem } from "./router-B6vVXVXg.js";
import { useState, useMemo } from "react";
import { c as useI18n, g as useOnChange } from "./staticFunctionMiddleware-DSkcj8ww.js";
import "@tanstack/react-router";
import "next-themes";
import "@radix-ui/react-direction";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "scroll-into-view-if-needed";
import "@orama/orama";
import "lucide-react";
import "react-dom";
import "clsx";
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
import "fumadocs-mdx/runtime/vite";
import "@radix-ui/react-navigation-menu";
import "@radix-ui/react-popover";
import "lucide-static";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-tabs";
import "node:fs/promises";
import "node:path";
function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = "fetch", allowClear = false, links = [], footer, ...props }) {
  const { locale } = useI18n();
  const [tag, setTag] = useState(defaultTag);
  const { search, setSearch, query } = useDocsSearch(type === "fetch" ? {
    type: "fetch",
    api,
    locale,
    tag,
    delayMs
  } : {
    type: "static",
    from: api,
    locale,
    tag,
    delayMs
  });
  const defaultItems = useMemo(() => {
    if (links.length === 0)
      return null;
    return links.map(([name, link]) => ({
      type: "page",
      id: name,
      content: name,
      url: link
    }));
  }, [links]);
  useOnChange(defaultTag, (v) => {
    setTag(v);
  });
  return jsxs(SearchDialog, { search, onSearchChange: setSearch, isLoading: query.isLoading, ...props, children: [jsx(SearchDialogOverlay, {}), jsxs(SearchDialogContent, { children: [jsxs(SearchDialogHeader, { children: [jsx(SearchDialogIcon, {}), jsx(SearchDialogInput, {}), jsx(SearchDialogClose, {})] }), jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }), jsxs(SearchDialogFooter, { children: [tags.length > 0 && jsx(TagsList, { tag, onTagChange: setTag, allowClear, children: tags.map((tag2) => jsx(TagsListItem, { value: tag2.value, children: tag2.name }, tag2.value)) }), footer] })] });
}
export {
  DefaultSearchDialog as default
};
