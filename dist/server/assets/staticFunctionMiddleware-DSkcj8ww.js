import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import React__default, { forwardRef, createElement, useState, useEffect, useRef, useMemo, useContext, createContext as createContext$1, useLayoutEffect, useEffectEvent, Fragment as Fragment$1, useCallback, use } from "react";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";
import * as icons from "lucide-static";
import { fromConfig } from "fumadocs-mdx/runtime/vite";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import scrollIntoView from "scroll-into-view-if-needed";
import * as Primitive from "@radix-ui/react-tabs";
import fs from "node:fs/promises";
import path from "node:path";
import { b as getDefaultSerovalPlugins } from "../server.js";
import { fromJSON, toJSONAsync } from "seroval";
const createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { middleware })
      );
    },
    inputValidator: (inputValidator) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { inputValidator })
      );
    },
    client: (client) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { client })
      );
    },
    server: (server) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { server })
      );
    }
  };
};
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(({ className, size = 24, color = "currentColor", children, ...props }, ref) => {
    return jsxs("svg", { ref, ...defaultAttributes, width: size, height: size, stroke: color, className: twMerge("lucide", className), ...props, children: [iconNode.map(([tag, attr]) => createElement(tag, attr)), children] });
  });
  Component.displayName = iconName;
  return Component;
};
const ChevronDown = createLucideIcon("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Languages = createLucideIcon("languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);
const Sidebar = createLucideIcon("panel-left", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
const ChevronsUpDown = createLucideIcon("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const Search = createLucideIcon("search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const ExternalLink = createLucideIcon("external-link", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ]
]);
const Moon = createLucideIcon("moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
const Sun = createLucideIcon("sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
const Airplay = createLucideIcon("airplay", [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["path", { d: "m12 15 5 6H7Z", key: "14qnn2" }]
]);
createLucideIcon("menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
createLucideIcon("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
createLucideIcon("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const CircleCheck = createLucideIcon("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const CircleX = createLucideIcon("circle-x", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Check = createLucideIcon("check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]);
const TriangleAlert = createLucideIcon("triangle-alert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const Info = createLucideIcon("info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
createLucideIcon("copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }
  ]
]);
const Clipboard = createLucideIcon("clipboard", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "1"
    }
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "2"
    }
  ]
]);
createLucideIcon("file-text", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7"
    }
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
const Hash = createLucideIcon("hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
const Text = createLucideIcon("text", [
  ["path", { d: "M15 18H3", key: "olowqp" }],
  ["path", { d: "M17 6H3", key: "16j9eg" }],
  ["path", { d: "M21 12H3", key: "2avoz0" }]
]);
createLucideIcon("file", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7"
    }
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
createLucideIcon("folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
createLucideIcon("folder-open", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
const Link$1 = createLucideIcon("link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo"
    }
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67"
    }
  ]
]);
const Edit = createLucideIcon("square-pen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g"
    }
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
const ChevronRight = createLucideIcon("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const ChevronLeft = createLucideIcon("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
createLucideIcon("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
createLucideIcon("trash-2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
createLucideIcon("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const variants = {
  primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
  outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
  ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
  secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
const buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring", {
  variants: {
    variant: variants,
    // fumadocs use `color` instead of `variant`
    color: variants,
    size: {
      sm: "gap-1 px-2 py-1.5 text-xs",
      icon: "p-1.5 [&_svg]:size-5",
      "icon-sm": "p-1.5 [&_svg]:size-4.5",
      "icon-xs": "p-1 [&_svg]:size-4"
    }
  }
});
var notImplemented = () => {
  throw new Error(
    "You need to wrap your application inside `FrameworkProvider`."
  );
};
var FrameworkContext = createContext("FrameworkContext", {
  useParams: notImplemented,
  useRouter: notImplemented,
  usePathname: notImplemented
});
function FrameworkProvider({
  Link: Link22,
  useRouter: useRouter2,
  useParams: useParams2,
  usePathname: usePathname2,
  Image: Image2,
  children
}) {
  const framework = React__default.useMemo(
    () => ({
      usePathname: usePathname2,
      useRouter: useRouter2,
      Link: Link22,
      Image: Image2,
      useParams: useParams2
    }),
    [Link22, usePathname2, useRouter2, useParams2, Image2]
  );
  return /* @__PURE__ */ jsx(FrameworkContext.Provider, { value: framework, children });
}
function usePathname() {
  return FrameworkContext.use().usePathname();
}
function useRouter() {
  return FrameworkContext.use().useRouter();
}
function Image$1(props) {
  const { Image: Image2 } = FrameworkContext.use();
  if (!Image2) {
    const { src, alt, priority, ...rest2 } = props;
    return /* @__PURE__ */ jsx(
      "img",
      {
        alt,
        src,
        fetchPriority: priority ? "high" : "auto",
        ...rest2
      }
    );
  }
  return /* @__PURE__ */ jsx(Image2, { ...props });
}
function Link(props) {
  const { Link: Link22 } = FrameworkContext.use();
  if (!Link22) {
    const { href, prefetch: _, ...rest2 } = props;
    return /* @__PURE__ */ jsx("a", { href, ...rest2 });
  }
  return /* @__PURE__ */ jsx(Link22, { ...props });
}
function createContext(name, v) {
  const Context = React__default.createContext(v);
  return {
    Provider: (props) => {
      return /* @__PURE__ */ jsx(Context.Provider, { value: props.value, children: props.children });
    },
    use: (errorMessage) => {
      const value = React__default.useContext(Context);
      if (!value)
        throw new Error(
          errorMessage ?? `Provider of ${name} is required but missing.`
        );
      return value;
    }
  };
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }),
  mod
));
var Link2 = forwardRef(
  ({
    href = "#",
    // any protocol
    external = href.match(/^\w+:/) || // protocol relative URL
    href.startsWith("//"),
    prefetch,
    children,
    ...props
  }, ref) => {
    if (external) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          ref,
          href,
          rel: "noreferrer noopener",
          target: "_blank",
          ...props,
          children
        }
      );
    }
    return /* @__PURE__ */ jsx(Link, { ref, href, prefetch, ...props, children });
  }
);
Link2.displayName = "Link";
function isDifferent(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]));
  }
  return a !== b;
}
function useOnChange(value, onChange, isUpdated = isDifferent) {
  const [prev, setPrev] = useState(value);
  if (isUpdated(prev, value)) {
    onChange(value, prev);
    setPrev(value);
  }
}
function normalize(url) {
  if (url.length > 1 && url.endsWith("/"))
    return url.slice(0, -1);
  return url;
}
function isActive(url, pathname, nested = true) {
  url = normalize(url);
  pathname = normalize(pathname);
  return url === pathname || nested && pathname.startsWith(`${url}/`);
}
function isTabActive(tab, pathname) {
  if (tab.urls)
    return tab.urls.has(normalize(pathname));
  return isActive(tab.url, pathname, true);
}
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = forwardRef(({ children, ...props }, ref) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return jsx(CollapsiblePrimitive.CollapsibleContent, { ref, ...props, className: twMerge("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className), children });
});
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;
const SidebarContext = createContext("SidebarContext");
function useSidebar() {
  return SidebarContext.use();
}
function SidebarProvider({ children }) {
  const closeOnRedirect = useRef(true);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  useOnChange(pathname, () => {
    if (closeOnRedirect.current) {
      setOpen(false);
    }
    closeOnRedirect.current = true;
  });
  return jsx(SidebarContext.Provider, { value: useMemo(() => ({
    open,
    setOpen,
    collapsed,
    setCollapsed,
    closeOnRedirect
  }), [open, collapsed]), children });
}
function findPath(nodes, matcher, options = {}) {
  const { includeSeparator = true } = options;
  function run(nodes2) {
    let separator2;
    for (const node of nodes2) {
      if (matcher(node)) {
        const items = [];
        if (separator2) items.push(separator2);
        items.push(node);
        return items;
      }
      if (node.type === "separator" && includeSeparator) {
        separator2 = node;
        continue;
      }
      if (node.type === "folder") {
        const items = node.index && matcher(node.index) ? [node.index] : run(node.children);
        if (items) {
          items.unshift(node);
          if (separator2) items.unshift(separator2);
          return items;
        }
      }
    }
  }
  return run(nodes) ?? null;
}
function normalizeUrl(url) {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!url.startsWith("/")) url = "/" + url;
  if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
  return url;
}
function getBreadcrumbItemsFromPath(tree, path2, options) {
  const {
    includePage = false,
    includeSeparator = false,
    includeRoot = false
  } = options;
  let items = [];
  for (let i = 0; i < path2.length; i++) {
    const item = path2[i];
    switch (item.type) {
      case "page":
        if (includePage)
          items.push({
            name: item.name,
            url: item.url
          });
        break;
      case "folder":
        if (item.root && !includeRoot) {
          items = [];
          break;
        }
        if (i === path2.length - 1 || item.index !== path2[i + 1]) {
          items.push({
            name: item.name,
            url: item.index?.url
          });
        }
        break;
      case "separator":
        if (item.name && includeSeparator)
          items.push({
            name: item.name
          });
        break;
    }
  }
  if (includeRoot) {
    items.unshift({
      name: tree.name,
      url: typeof includeRoot === "object" ? includeRoot.url : void 0
    });
  }
  return items;
}
function searchPath(nodes, url) {
  const normalizedUrl = normalizeUrl(url);
  return findPath(
    nodes,
    (node) => node.type === "page" && node.url === normalizedUrl
  );
}
const TreeContext = createContext("TreeContext");
const PathContext = createContext("PathContext", []);
function TreeContextProvider(props) {
  const nextIdRef = useRef(0);
  const pathname = usePathname();
  const tree = useMemo(() => props.tree, [props.tree.$id ?? props.tree]);
  const path2 = useMemo(() => {
    let result = searchPath(tree.children, pathname);
    if (result)
      return result;
    if (tree.fallback)
      result = searchPath(tree.fallback.children, pathname);
    return result ?? [];
  }, [tree, pathname]);
  const root = path2.findLast((item) => item.type === "folder" && item.root) ?? tree;
  root.$id ?? (root.$id = String(nextIdRef.current++));
  return jsx(TreeContext.Provider, { value: useMemo(() => ({ root, full: tree }), [root, tree]), children: jsx(PathContext.Provider, { value: path2, children: props.children }) });
}
function useTreePath() {
  return PathContext.use();
}
function useTreeContext() {
  return TreeContext.use("You must wrap this component under <DocsLayout />");
}
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => jsx(PopoverPrimitive.Portal, { children: jsx(PopoverPrimitive.Content, { ref, align, sideOffset, side: "bottom", className: twMerge("z-50 origin-(--radix-popover-content-transform-origin) overflow-y-auto max-h-(--radix-popover-content-available-height) min-w-[240px] max-w-[98vw] rounded-xl border bg-fd-popover/60 backdrop-blur-lg p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in", className), ...props }) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
function BaseLinkItem({ ref, item, ...props }) {
  const pathname = usePathname();
  const activeType = item.active ?? "url";
  const active = activeType !== "none" && isActive(item.url, pathname, activeType === "nested-url");
  return jsx(Link2, { ref, href: item.url, external: item.external, ...props, "data-active": active, children: props.children });
}
function getLinks(links = [], githubUrl) {
  let result = links ?? [];
  if (githubUrl)
    result = [
      ...result,
      {
        type: "icon",
        url: githubUrl,
        text: "Github",
        label: "GitHub",
        icon: jsx("svg", { role: "img", viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }) }),
        external: true
      }
    ];
  return result;
}
const defaultTranslations = {
  search: "Search",
  searchNoResult: "No results found",
  toc: "On this page",
  tocNoHeadings: "No Headings",
  lastUpdate: "Last updated on",
  chooseLanguage: "Choose a language",
  nextPage: "Next Page",
  previousPage: "Previous Page",
  chooseTheme: "Theme",
  editOnGithub: "Edit on GitHub"
};
const I18nContext = createContext$1({
  text: defaultTranslations
});
function I18nLabel(props) {
  const { text } = useI18n();
  return text[props.label];
}
function useI18n() {
  return useContext(I18nContext);
}
function LanguageToggle(props) {
  const context = useI18n();
  if (!context.locales)
    throw new Error("Missing `<I18nProvider />`");
  return jsxs(Popover, { children: [jsx(PopoverTrigger, { "aria-label": context.text.chooseLanguage, ...props, className: twMerge(buttonVariants({
    color: "ghost",
    className: "gap-1.5 p-1.5"
  }), props.className), children: props.children }), jsxs(PopoverContent, { className: "flex flex-col overflow-x-hidden p-0", children: [jsx("p", { className: "mb-1 p-2 text-xs font-medium text-fd-muted-foreground", children: context.text.chooseLanguage }), context.locales.map((item) => jsx("button", { type: "button", className: twMerge("p-2 text-start text-sm", item.locale === context.locale ? "bg-fd-primary/10 font-medium text-fd-primary" : "hover:bg-fd-accent hover:text-fd-accent-foreground"), onClick: () => {
    context.onChange?.(item.locale);
  }, children: item.name }, item.locale))] })] });
}
function LanguageToggleText(props) {
  const context = useI18n();
  const text = context.locales?.find((item) => item.locale === context.locale)?.name;
  return jsx("span", { ...props, children: text });
}
createContext("StylesContext", {
  tocNav: "xl:hidden",
  toc: "max-xl:hidden"
});
const NavContext = createContext("NavContext", {
  isTransparent: false
});
function NavProvider({ transparentMode = "none", children }) {
  const [transparent, setTransparent] = useState(transparentMode !== "none");
  useEffect(() => {
    if (transparentMode !== "top")
      return;
    const listener = () => {
      setTransparent(window.scrollY < 10);
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [transparentMode]);
  return jsx(NavContext.Provider, { value: useMemo(() => ({ isTransparent: transparent }), [transparent]), children });
}
function useNav() {
  return NavContext.use();
}
const SearchContext = createContext("SearchContext", {
  enabled: false,
  hotKey: [],
  setOpenSearch: () => void 0
});
function useSearchContext() {
  return SearchContext.use();
}
function MetaOrControl() {
  const [key, setKey] = useState("⌘");
  useEffect(() => {
    const isWindows = window.navigator.userAgent.includes("Windows");
    if (isWindows)
      setKey("Ctrl");
  }, []);
  return key;
}
function SearchProvider({ SearchDialog, children, preload = true, options, hotKey = [
  {
    key: (e) => e.metaKey || e.ctrlKey,
    display: jsx(MetaOrControl, {})
  },
  {
    key: "k",
    display: "K"
  }
], links }) {
  const [isOpen, setIsOpen] = useState(preload ? false : void 0);
  useEffect(() => {
    const handler = (e) => {
      if (hotKey.every((v) => typeof v.key === "string" ? e.key === v.key : v.key(e))) {
        setIsOpen(true);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [hotKey]);
  return jsxs(SearchContext.Provider, { value: useMemo(() => ({
    enabled: true,
    hotKey,
    setOpenSearch: setIsOpen
  }), [hotKey]), children: [isOpen !== void 0 && jsx(SearchDialog, {
    open: isOpen,
    onOpenChange: setIsOpen,
    // @ts-expect-error -- insert prop for official UIs
    links,
    ...options
  }), children] });
}
function SearchToggle({ hideIfDisabled, size = "icon-sm", color = "ghost", ...props }) {
  const { setOpenSearch, enabled } = useSearchContext();
  if (hideIfDisabled && !enabled)
    return null;
  return jsx("button", { type: "button", className: twMerge(buttonVariants({
    size,
    color
  }), props.className), "data-search": "", "aria-label": "Open Search", onClick: () => {
    setOpenSearch(true);
  }, children: jsx(Search, {}) });
}
function LargeSearchToggle({ hideIfDisabled, ...props }) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();
  if (hideIfDisabled && !enabled)
    return null;
  return jsxs("button", { type: "button", "data-search-full": "", ...props, className: twMerge("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className), onClick: () => {
    setOpenSearch(true);
  }, children: [jsx(Search, { className: "size-4" }), text.search, jsx("div", { className: "ms-auto inline-flex gap-0.5", children: hotKey.map((k, i) => jsx("kbd", { className: "rounded-md border bg-fd-background px-1.5", children: k.display }, i)) })] });
}
const itemVariants = cva("size-6.5 rounded-full p-1.5 text-fd-muted-foreground", {
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground",
      false: "text-fd-muted-foreground"
    }
  }
});
const full = [
  ["light", Sun],
  ["dark", Moon],
  ["system", Airplay]
];
function ThemeToggle({ className, mode = "light-dark", ...props }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);
  const container = twMerge("inline-flex items-center rounded-full border p-1", className);
  if (mode === "light-dark") {
    const value2 = mounted ? resolvedTheme : null;
    return jsx("button", { className: container, "aria-label": `Toggle Theme`, onClick: () => setTheme(value2 === "light" ? "dark" : "light"), "data-theme-toggle": "", ...props, children: full.map(([key, Icon]) => {
      if (key === "system")
        return;
      return jsx(Icon, { fill: "currentColor", className: twMerge(itemVariants({ active: value2 === key })) }, key);
    }) });
  }
  const value = mounted ? theme : null;
  return jsx("div", { className: container, "data-theme-toggle": "", ...props, children: full.map(([key, Icon]) => jsx("button", { "aria-label": key, className: twMerge(itemVariants({ active: value === key })), onClick: () => setTheme(key), children: jsx(Icon, { className: "size-full", fill: "currentColor" }) }, key)) });
}
function iconPlugin(resolveIcon) {
  function replaceIcon(node) {
    if (node.icon === void 0 || typeof node.icon === "string")
      node.icon = resolveIcon(node.icon);
    return node;
  }
  return {
    name: "fumadocs:icon",
    transformPageTree: {
      file: replaceIcon,
      folder: replaceIcon,
      separator: replaceIcon
    }
  };
}
var path_exports = {};
__export(path_exports, {
  basename: () => basename,
  dirname: () => dirname,
  extname: () => extname,
  joinPath: () => joinPath,
  slash: () => slash,
  splitPath: () => splitPath
});
function basename(path2, ext) {
  const idx = path2.lastIndexOf("/");
  return path2.substring(
    idx === -1 ? 0 : idx + 1,
    ext ? path2.length - ext.length : path2.length
  );
}
function extname(path2) {
  const dotIdx = path2.lastIndexOf(".");
  if (dotIdx !== -1) {
    return path2.substring(dotIdx);
  }
  return "";
}
function dirname(path2) {
  return path2.split("/").slice(0, -1).join("/");
}
function splitPath(path2) {
  return path2.split("/").filter((p) => p.length > 0);
}
function joinPath(...paths) {
  const out = [];
  const parsed = paths.flatMap(splitPath);
  for (const seg of parsed) {
    switch (seg) {
      case "..":
        out.pop();
        break;
      case ".":
        break;
      default:
        out.push(seg);
    }
  }
  return out.join("/");
}
function slash(path2) {
  const isExtendedLengthPath = path2.startsWith("\\\\?\\");
  if (isExtendedLengthPath) {
    return path2;
  }
  return path2.replaceAll("\\", "/");
}
function transformerFallback() {
  const addedFiles = /* @__PURE__ */ new Set();
  return {
    root(root) {
      const isolatedStorage = new FileSystem();
      for (const file of this.storage.getFiles()) {
        if (addedFiles.has(file)) continue;
        const content = this.storage.read(file);
        if (content) isolatedStorage.write(file, content);
      }
      if (isolatedStorage.getFiles().length === 0) return root;
      root.fallback = this.builder.build(isolatedStorage, {
        ...this.options,
        id: `fallback-${root.$id ?? ""}`,
        generateFallback: false
      });
      addedFiles.clear();
      return root;
    },
    file(node, file) {
      if (file) addedFiles.add(file);
      return node;
    },
    folder(node, _dir, metaPath) {
      if (metaPath) addedFiles.add(metaPath);
      return node;
    }
  };
}
var group = /^\((?<name>.+)\)$/;
var link = /^(?<external>external:)?(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
var separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
var rest = "...";
var restReversed = "z...a";
var extractPrefix = "...";
var excludePrefix = "!";
function buildAll(paths, ctx, reversed = false) {
  const items = [];
  const folders = [];
  const sortedPaths = paths.sort(
    (a, b) => a.localeCompare(b) * (reversed ? -1 : 1)
  );
  for (const path2 of sortedPaths) {
    ctx.visitedPaths.add(path2);
    const fileNode = buildFileNode(path2, ctx);
    if (fileNode) {
      if (basename(path2, extname(path2)) === "index") items.unshift(fileNode);
      else items.push(fileNode);
      continue;
    }
    const dirNode = buildFolderNode(path2, false, ctx);
    if (dirNode) folders.push(dirNode);
  }
  return [...items, ...folders];
}
function resolveFolderItem(folderPath, item, ctx, idx) {
  if (item === rest || item === restReversed) return item;
  const { resolveName } = ctx;
  let match = separator.exec(item);
  if (match?.groups) {
    let node = {
      $id: `${folderPath}#${idx}`,
      type: "separator",
      icon: match.groups.icon,
      name: match.groups.name
    };
    for (const transformer of ctx.transformers) {
      if (!transformer.separator) continue;
      node = transformer.separator.call(ctx, node);
    }
    return [node];
  }
  match = link.exec(item);
  if (match?.groups) {
    const { icon, url, name, external } = match.groups;
    let node = {
      type: "page",
      icon,
      name,
      url,
      external: external ? true : void 0
    };
    for (const transformer of ctx.transformers) {
      if (!transformer.file) continue;
      node = transformer.file.call(ctx, node);
    }
    return [node];
  }
  const isExcept = item.startsWith(excludePrefix);
  const isExtract = !isExcept && item.startsWith(extractPrefix);
  let filename = item;
  if (isExcept) {
    filename = item.slice(excludePrefix.length);
  } else if (isExtract) {
    filename = item.slice(extractPrefix.length);
  }
  const path2 = resolveName(joinPath(folderPath, filename), "page");
  ctx.visitedPaths.add(path2);
  if (isExcept) return [];
  const dirNode = buildFolderNode(path2, false, ctx);
  if (dirNode) {
    return isExtract ? dirNode.children : [dirNode];
  }
  const fileNode = buildFileNode(path2, ctx);
  return fileNode ? [fileNode] : [];
}
function buildFolderNode(folderPath, isGlobalRoot, ctx) {
  const { storage, options, resolveName, transformers } = ctx;
  const files = storage.readDir(folderPath);
  if (!files) return;
  const metaPath = resolveName(joinPath(folderPath, "meta"), "meta");
  const indexPath = resolveName(joinPath(folderPath, "index"), "page");
  let meta = storage.read(metaPath);
  if (meta?.format !== "meta") {
    meta = void 0;
  }
  const isRoot = meta?.data.root ?? isGlobalRoot;
  let index;
  let children;
  function setIndexIfUnused() {
    if (isRoot || ctx.visitedPaths.has(indexPath)) return;
    ctx.visitedPaths.add(indexPath);
    index = buildFileNode(indexPath, ctx);
  }
  if (meta && meta.data.pages) {
    const resolved = meta.data.pages.flatMap((item, i) => resolveFolderItem(folderPath, item, ctx, i));
    setIndexIfUnused();
    for (let i = 0; i < resolved.length; i++) {
      const item = resolved[i];
      if (item !== rest && item !== restReversed) continue;
      const items = buildAll(
        files.filter((file) => !ctx.visitedPaths.has(file)),
        ctx,
        item === restReversed
      );
      resolved.splice(i, 1, ...items);
      break;
    }
    children = resolved;
  } else {
    setIndexIfUnused();
    children = buildAll(
      files.filter((file) => !ctx.visitedPaths.has(file)),
      ctx
    );
  }
  let name = meta?.data.title ?? index?.name;
  if (!name) {
    const folderName = basename(folderPath);
    name = pathToName(group.exec(folderName)?.[1] ?? folderName);
  }
  let node = {
    type: "folder",
    name,
    icon: meta?.data.icon ?? index?.icon,
    root: meta?.data.root,
    defaultOpen: meta?.data.defaultOpen,
    description: meta?.data.description,
    index,
    children,
    $id: folderPath,
    $ref: !options.noRef && meta ? {
      metaFile: metaPath
    } : void 0
  };
  for (const transformer of transformers) {
    if (!transformer.folder) continue;
    node = transformer.folder.call(ctx, node, folderPath, metaPath);
  }
  return node;
}
function buildFileNode(path2, ctx) {
  const { options, getUrl, storage, locale, transformers } = ctx;
  const page = storage.read(path2);
  if (page?.format !== "page") return;
  const { title, description, icon } = page.data;
  let item = {
    $id: path2,
    type: "page",
    name: title ?? pathToName(basename(path2, extname(path2))),
    description,
    icon,
    url: getUrl(page.slugs, locale),
    $ref: !options.noRef ? {
      file: path2
    } : void 0
  };
  for (const transformer of transformers) {
    if (!transformer.file) continue;
    item = transformer.file.call(ctx, item, path2);
  }
  return item;
}
function build(id, ctx) {
  const folder = buildFolderNode("", true, ctx);
  let root = {
    $id: id,
    name: folder.name || "Docs",
    children: folder.children
  };
  for (const transformer of ctx.transformers) {
    if (!transformer.root) continue;
    root = transformer.root.call(ctx, root);
  }
  return root;
}
function createPageTreeBuilder(getUrl, plugins) {
  function getTransformers({
    generateFallback = true,
    ...options
  }) {
    const transformers = [];
    if (options.transformers) {
      transformers.push(...options.transformers);
    }
    for (const plugin of plugins ?? []) {
      if (plugin.transformPageTree) transformers.push(plugin.transformPageTree);
    }
    if (generateFallback) {
      transformers.push(transformerFallback());
    }
    return transformers;
  }
  function createFlattenPathResolver(storage) {
    const map2 = /* @__PURE__ */ new Map();
    const files = storage.getFiles();
    for (const file of files) {
      const content = storage.read(file);
      const flattenPath = file.substring(0, file.length - extname(file).length);
      map2.set(flattenPath + "." + content.format, file);
    }
    return (name, format) => {
      return map2.get(name + "." + format);
    };
  }
  return {
    build(storage, options) {
      const key = "";
      return this.buildI18n({ [key]: storage }, options)[key];
    },
    buildI18n(storages, options = {}) {
      const transformers = getTransformers(options);
      const out = {};
      for (const [locale, storage] of Object.entries(storages)) {
        const resolve = createFlattenPathResolver(storage);
        const branch = locale.length === 0 ? "root" : locale;
        out[locale] = build(options.id ? `${options.id}-${branch}` : branch, {
          transformers,
          builder: this,
          options,
          getUrl,
          locale,
          storage,
          storages,
          visitedPaths: /* @__PURE__ */ new Set(),
          resolveName(name, format) {
            return resolve(name, format) ?? name;
          }
        });
      }
      return out;
    }
  };
}
function pathToName(name) {
  const result = [];
  for (const c of name) {
    if (result.length === 0) result.push(c.toLocaleUpperCase());
    else if (c === "-") result.push(" ");
    else result.push(c);
  }
  return result.join("");
}
var FileSystem = class {
  constructor(inherit) {
    this.files = /* @__PURE__ */ new Map();
    this.folders = /* @__PURE__ */ new Map();
    if (inherit) {
      for (const [k, v] of inherit.folders) {
        this.folders.set(k, v);
      }
      for (const [k, v] of inherit.files) {
        this.files.set(k, v);
      }
    } else {
      this.folders.set("", []);
    }
  }
  read(path2) {
    return this.files.get(path2);
  }
  /**
   * get the direct children of folder (in virtual file path)
   */
  readDir(path2) {
    return this.folders.get(path2);
  }
  write(path2, file) {
    if (!this.files.has(path2)) {
      const dir = dirname(path2);
      this.makeDir(dir);
      this.readDir(dir)?.push(path2);
    }
    this.files.set(path2, file);
  }
  /**
   * Delete files at specified path.
   *
   * @param path - the target path.
   * @param [recursive=false] - if set to `true`, it will also delete directories.
   */
  delete(path2, recursive = false) {
    if (this.files.delete(path2)) return true;
    if (recursive) {
      const folder = this.folders.get(path2);
      if (!folder) return false;
      this.folders.delete(path2);
      for (const child of folder) {
        this.delete(child);
      }
      return true;
    }
    return false;
  }
  getFiles() {
    return Array.from(this.files.keys());
  }
  makeDir(path2) {
    const segments = splitPath(path2);
    for (let i = 0; i < segments.length; i++) {
      const segment = segments.slice(0, i + 1).join("/");
      if (this.folders.has(segment)) continue;
      this.folders.set(segment, []);
      this.folders.get(dirname(segment)).push(segment);
    }
  }
};
function isLocaleValid(locale) {
  return locale.length > 0 && !/\d+/.test(locale);
}
var parsers = {
  dir(path2) {
    const [locale, ...segs] = path2.split("/");
    if (locale && segs.length > 0 && isLocaleValid(locale))
      return [segs.join("/"), locale];
    return [path2];
  },
  dot(path2) {
    const dir = dirname(path2);
    const base = basename(path2);
    const parts = base.split(".");
    if (parts.length < 3) return [path2];
    const [locale] = parts.splice(parts.length - 2, 1);
    if (!isLocaleValid(locale)) return [path2];
    return [joinPath(dir, parts.join(".")), locale];
  },
  none(path2) {
    return [path2];
  }
};
function buildContentStorage(files, buildFile, plugins, i18n) {
  const parser = parsers[i18n.parser ?? "dot"];
  const storages = {};
  const normalized = files.map(
    (file) => buildFile({
      ...file,
      path: normalizePath(file.path)
    })
  );
  const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
  function scan(lang) {
    if (storages[lang]) return;
    let storage;
    if (fallbackLang && fallbackLang !== lang) {
      scan(fallbackLang);
      storage = new FileSystem(storages[fallbackLang]);
    } else {
      storage = new FileSystem();
    }
    for (const item of normalized) {
      const [path2, locale = i18n.defaultLanguage] = parser(item.path);
      if (locale === lang) storage.write(path2, item);
    }
    const context = {
      storage
    };
    for (const plugin of plugins) {
      plugin.transformStorage?.(context);
    }
    storages[lang] = storage;
  }
  for (const lang of i18n.languages) scan(lang);
  return storages;
}
function normalizePath(path2) {
  const segments = splitPath(slash(path2));
  if (segments[0] === "." || segments[0] === "..")
    throw new Error("It must not start with './' or '../'");
  return segments.join("/");
}
var priorityMap = {
  pre: 1,
  default: 0,
  post: -1
};
function buildPlugins(plugins) {
  const flatten = [];
  for (const plugin of plugins) {
    if (Array.isArray(plugin)) flatten.push(...plugin);
    else if (plugin) flatten.push(plugin);
  }
  return flatten.sort(
    (a, b) => priorityMap[b.enforce ?? "default"] - priorityMap[a.enforce ?? "default"]
  );
}
function slugsPlugin(slugsFn) {
  function isIndex(file) {
    return basename(file, extname(file)) === "index";
  }
  return {
    name: "fumadocs:slugs",
    transformStorage({ storage }) {
      const indexFiles = /* @__PURE__ */ new Set();
      const taken = /* @__PURE__ */ new Set();
      const autoIndex = slugsFn === void 0;
      for (const path2 of storage.getFiles()) {
        const file = storage.read(path2);
        if (!file || file.format !== "page" || file.slugs) continue;
        if (isIndex(path2) && autoIndex) {
          indexFiles.add(path2);
          continue;
        }
        file.slugs = slugsFn ? slugsFn({ path: path2 }) : getSlugs(path2);
        const key = file.slugs.join("/");
        if (taken.has(key)) throw new Error("Duplicated slugs");
        taken.add(key);
      }
      for (const path2 of indexFiles) {
        const file = storage.read(path2);
        if (file?.format !== "page") continue;
        file.slugs = getSlugs(path2);
        if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
      }
    }
  };
}
var GroupRegex = /^\(.+\)$/;
function getSlugs(file) {
  const dir = dirname(file);
  const name = basename(file, extname(file));
  const slugs = [];
  for (const seg of dir.split("/")) {
    if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
  }
  if (GroupRegex.test(name))
    throw new Error(`Cannot use folder group in file names: ${file}`);
  if (name !== "index") {
    slugs.push(encodeURI(name));
  }
  return slugs;
}
function indexPages(storages, getUrl) {
  const result = {
    // (locale.slugs -> page)
    pages: /* @__PURE__ */ new Map(),
    // (locale.path -> page)
    pathToMeta: /* @__PURE__ */ new Map(),
    // (locale.path -> meta)
    pathToPage: /* @__PURE__ */ new Map()
  };
  for (const [lang, storage] of Object.entries(storages)) {
    for (const filePath of storage.getFiles()) {
      const item = storage.read(filePath);
      const path2 = `${lang}.${filePath}`;
      if (item.format === "meta") {
        result.pathToMeta.set(path2, fileToMeta(item));
        continue;
      }
      const page = fileToPage(item, getUrl, lang);
      result.pathToPage.set(path2, page);
      result.pages.set(`${lang}.${page.slugs.join("/")}`, page);
    }
  }
  return result;
}
function createGetUrl(baseUrl, i18n) {
  const baseSlugs = baseUrl.split("/");
  return (slugs, locale) => {
    const hideLocale = i18n?.hideLocale ?? "never";
    let urlLocale;
    if (hideLocale === "never") {
      urlLocale = locale;
    } else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) {
      urlLocale = locale;
    }
    const paths = [...baseSlugs, ...slugs];
    if (urlLocale) paths.unshift(urlLocale);
    return `/${paths.filter((v) => v.length > 0).join("/")}`;
  };
}
function loader(...args) {
  const resolved = args.length === 2 ? resolveConfig(args[0], args[1]) : resolveConfig(args[0].source, args[0]);
  return createOutput(resolved);
}
function resolveConfig(source2, { slugs, icon, plugins = [], baseUrl, url, ...base }) {
  const getUrl = url ? (...args) => normalizeUrl(url(...args)) : createGetUrl(baseUrl, base.i18n);
  let config = {
    ...base,
    url: getUrl,
    source: source2,
    plugins: buildPlugins([
      slugsPlugin(slugs),
      icon && iconPlugin(icon),
      ...plugins
    ])
  };
  for (const plugin of config.plugins ?? []) {
    const result = plugin.config?.(config);
    if (result) config = result;
  }
  return config;
}
function createOutput({
  source: { files },
  url: getUrl,
  i18n,
  plugins = [],
  pageTree: pageTreeConfig
}) {
  const defaultLanguage = i18n?.defaultLanguage ?? "";
  const storages = buildContentStorage(
    files,
    (file) => {
      if (file.type === "page") {
        return {
          format: "page",
          path: file.path,
          slugs: file.slugs,
          data: file.data,
          absolutePath: file.absolutePath ?? ""
        };
      }
      return {
        format: "meta",
        path: file.path,
        absolutePath: file.absolutePath ?? "",
        data: file.data
      };
    },
    plugins,
    i18n ?? {
      defaultLanguage,
      parser: "none",
      languages: [defaultLanguage]
    }
  );
  const walker = indexPages(storages, getUrl);
  const builder = createPageTreeBuilder(getUrl, plugins);
  let pageTree;
  return {
    _i18n: i18n,
    get pageTree() {
      pageTree ??= builder.buildI18n(storages, pageTreeConfig);
      return i18n ? pageTree : pageTree[defaultLanguage];
    },
    set pageTree(v) {
      if (i18n) {
        pageTree = v;
      } else {
        pageTree = {
          [defaultLanguage]: v
        };
      }
    },
    getPageByHref(href, { dir = "", language = defaultLanguage } = {}) {
      const [value, hash] = href.split("#", 2);
      let target;
      if (value.startsWith(".") && (value.endsWith(".md") || value.endsWith(".mdx"))) {
        const path2 = joinPath(dir, value);
        target = walker.pathToPage.get(`${language}.${path2}`);
      } else {
        target = this.getPages(language).find((item) => item.url === value);
      }
      if (target)
        return {
          page: target,
          hash
        };
    },
    getPages(language) {
      const pages = [];
      for (const [key, value] of walker.pages.entries()) {
        if (language === void 0 || key.startsWith(`${language}.`)) {
          pages.push(value);
        }
      }
      return pages;
    },
    getLanguages() {
      const list = [];
      if (!i18n) return list;
      for (const language of i18n.languages) {
        list.push({
          language,
          pages: this.getPages(language)
        });
      }
      return list;
    },
    getPage(slugs = [], language = defaultLanguage) {
      return walker.pages.get(`${language}.${slugs.join("/")}`);
    },
    getNodeMeta(node, language = defaultLanguage) {
      const ref = node.$ref?.metaFile;
      if (!ref) return;
      return walker.pathToMeta.get(`${language}.${ref}`);
    },
    getNodePage(node, language = defaultLanguage) {
      const ref = node.$ref?.file;
      if (!ref) return;
      return walker.pathToPage.get(`${language}.${ref}`);
    },
    getPageTree(locale) {
      if (i18n) {
        return this.pageTree[locale ?? defaultLanguage];
      }
      return this.pageTree;
    },
    // @ts-expect-error -- ignore this
    generateParams(slug, lang) {
      if (i18n) {
        return this.getLanguages().flatMap(
          (entry) => entry.pages.map((page) => ({
            [slug ?? "slug"]: page.slugs,
            [lang ?? "lang"]: entry.language
          }))
        );
      }
      return this.getPages().map((page) => ({
        [slug ?? "slug"]: page.slugs
      }));
    }
  };
}
function fileToMeta(file) {
  return {
    path: file.path,
    absolutePath: file.absolutePath,
    data: file.data
  };
}
function fileToPage(file, getUrl, locale) {
  return {
    absolutePath: file.absolutePath,
    path: file.path,
    url: getUrl(file.slugs, locale),
    slugs: file.slugs,
    data: file.data,
    locale
  };
}
const create = fromConfig();
const docs = {
  doc: create.doc("docs", "content/docs", /* @__PURE__ */ Object.assign({
    "./index.mdx": () => import("./index-DzhuJvZl.js"),
    "./test.mdx": () => import("./test-DStD0Yzq.js")
  })),
  meta: create.meta("docs", "content/docs", /* @__PURE__ */ Object.assign({}))
};
const source = loader({
  source: await create.sourceAsync(docs.doc, docs.meta),
  baseUrl: "/docs",
  icon(icon) {
    if (!icon) {
      return;
    }
    if (icon in icons) return icons[icon];
  }
});
function mergeRefs$1(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var ActiveAnchorContext = createContext$1([]);
var ScrollContext = createContext$1({
  current: null
});
function useActiveAnchor() {
  return useContext(ActiveAnchorContext)[0];
}
function useActiveAnchors() {
  return useContext(ActiveAnchorContext);
}
function ScrollProvider({
  containerRef,
  children
}) {
  return /* @__PURE__ */ jsx(ScrollContext.Provider, { value: containerRef, children });
}
function AnchorProvider({
  toc,
  single = false,
  children
}) {
  const headings = useMemo(() => {
    return toc.map((item) => item.url.split("#")[1]);
  }, [toc]);
  return /* @__PURE__ */ jsx(ActiveAnchorContext.Provider, { value: useAnchorObserver(headings, single), children });
}
function TOCItem$2({
  ref,
  onActiveChange = () => null,
  ...props
}) {
  const containerRef = useContext(ScrollContext);
  const anchorRef = useRef(null);
  const activeOrder = useActiveAnchors().indexOf(props.href.slice(1));
  const isActive2 = activeOrder !== -1;
  const shouldScroll = activeOrder === 0;
  const onActiveChangeEvent = useEffectEvent(onActiveChange);
  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const container = containerRef.current;
    if (container && anchor && shouldScroll)
      scrollIntoView(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: container
      });
  }, [containerRef, shouldScroll]);
  useEffect(() => {
    return () => onActiveChangeEvent(isActive2);
  }, [isActive2]);
  return /* @__PURE__ */ jsx("a", { ref: mergeRefs$1(anchorRef, ref), "data-active": isActive2, ...props, children: props.children });
}
function useAnchorObserver(watch, single) {
  const observerRef = useRef(null);
  const [activeAnchor, setActiveAnchor] = useState(() => []);
  const stateRef = useRef(null);
  const onChange = useEffectEvent((entries) => {
    stateRef.current ??= {
      visible: /* @__PURE__ */ new Set()
    };
    const state = stateRef.current;
    for (const entry of entries) {
      if (entry.isIntersecting) {
        state.visible.add(entry.target.id);
      } else {
        state.visible.delete(entry.target.id);
      }
    }
    if (state.visible.size === 0) {
      const viewTop = entries[0].rootBounds.top;
      let fallback;
      let min = -1;
      for (const id of watch) {
        const element = document.getElementById(id);
        if (!element) continue;
        const d = Math.abs(viewTop - element.getBoundingClientRect().top);
        if (min === -1 || d < min) {
          fallback = element;
          min = d;
        }
      }
      setActiveAnchor(fallback ? [fallback.id] : []);
    } else {
      const items = watch.filter((item) => state.visible.has(item));
      setActiveAnchor(single ? items.slice(0, 1) : items);
    }
  });
  useEffect(() => {
    if (observerRef.current) return;
    observerRef.current = new IntersectionObserver(onChange, {
      rootMargin: "0px",
      threshold: 0.98
    });
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;
    const elements = watch.flatMap(
      (heading) => document.getElementById(heading) ?? []
    );
    for (const element of elements) observer.observe(element);
    return () => {
      for (const element of elements) observer.unobserve(element);
    };
  }, [watch]);
  return activeAnchor;
}
function TocThumb({ containerRef, ...props }) {
  const thumbRef = useRef(null);
  return jsxs(Fragment, { children: [jsx("div", { ref: thumbRef, role: "none", ...props }), jsx(Updater, { containerRef, thumbRef })] });
}
function Updater({ containerRef, thumbRef }) {
  const active = useActiveAnchors();
  const onPrint = useEffectEvent(() => {
    if (!containerRef.current || !thumbRef.current)
      return;
    update(thumbRef.current, calc(containerRef.current, active));
  });
  useEffect(() => {
    if (!containerRef.current)
      return;
    const container = containerRef.current;
    const observer = new ResizeObserver(onPrint);
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [containerRef]);
  if (containerRef.current && thumbRef.current) {
    update(thumbRef.current, calc(containerRef.current, active));
  }
  return null;
}
function calc(container, active) {
  if (active.length === 0 || container.clientHeight === 0) {
    return [0, 0];
  }
  let upper = Number.MAX_VALUE, lower = 0;
  for (const item of active) {
    const element = container.querySelector(`a[href="#${item}"]`);
    if (!element)
      continue;
    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(lower, element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom));
  }
  return [upper, lower - upper];
}
function update(element, info) {
  element.style.setProperty("--fd-top", `${info[0]}px`);
  element.style.setProperty("--fd-height", `${info[1]}px`);
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}
const TOCContext = createContext$1([]);
function useTOCItems() {
  return useContext(TOCContext);
}
function TOCProvider({ toc, children, ...props }) {
  return jsx(TOCContext, { value: toc, children: jsx(AnchorProvider, { toc, ...props, children }) });
}
function TOCScrollArea({ ref, className, ...props }) {
  const viewRef = useRef(null);
  return jsx("div", { ref: mergeRefs(viewRef, ref), className: twMerge("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className), ...props, children: jsx(ScrollProvider, { containerRef: viewRef, children: props.children }) });
}
function TOCItems({ ref, className, ...props }) {
  const containerRef = useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  if (items.length === 0)
    return jsx("div", { className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground", children: text.tocNoHeadings });
  return jsxs(Fragment, { children: [jsx(TocThumb, { containerRef, className: "absolute top-(--fd-top) h-(--fd-height) w-px bg-fd-primary transition-all" }), jsx("div", { ref: mergeRefs(ref, containerRef), className: twMerge("flex flex-col border-s border-fd-foreground/10", className), ...props, children: items.map((item) => jsx(TOCItem$1, { item }, item.url)) })] });
}
function TOCItem$1({ item }) {
  return jsx(TOCItem$2, { href: item.url, className: twMerge("prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8"), children: item.title });
}
const TocPopoverContext = createContext("TocPopoverContext");
function PageTOCPopoverTrigger(props) {
  const { text } = useI18n();
  const { open } = TocPopoverContext.use();
  const items = useTOCItems();
  const active = useActiveAnchor();
  const selected = useMemo(() => items.findIndex((item) => active === item.url.slice(1)), [items, active]);
  const path2 = useTreePath().at(-1);
  const showItem = selected !== -1 && !open;
  return jsxs(CollapsibleTrigger, { ...props, className: twMerge("flex w-full h-(--fd-tocnav-height) items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", props.className), children: [jsx(ProgressCircle, { value: (selected + 1) / Math.max(1, items.length), max: 1, className: twMerge("shrink-0", open && "text-fd-primary") }), jsxs("span", { className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1", children: [jsx("span", { className: twMerge("truncate transition-all", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"), children: path2?.name ?? text.toc }), jsx("span", { className: twMerge("truncate transition-all", !showItem && "opacity-0 translate-y-full pointer-events-none"), children: items[selected]?.title })] }), jsx(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })] });
}
function clamp(input, min, max) {
  if (input < min)
    return min;
  if (input > max)
    return max;
  return input;
}
function ProgressCircle({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
  const normalizedValue = clamp(value, min, max);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = normalizedValue / max * circumference;
  const circleProps = {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    fill: "none",
    strokeWidth
  };
  return jsxs("svg", { role: "progressbar", viewBox: `0 0 ${size} ${size}`, "aria-valuenow": normalizedValue, "aria-valuemin": min, "aria-valuemax": max, ...restSvgProps, children: [jsx("circle", { ...circleProps, className: "stroke-current/25" }), jsx("circle", { ...circleProps, stroke: "currentColor", strokeDasharray: circumference, strokeDashoffset: circumference - progress, strokeLinecap: "round", transform: `rotate(-90 ${size / 2} ${size / 2})`, className: "transition-all" })] });
}
function PageTOCPopoverContent(props) {
  return jsx(CollapsibleContent, { "data-toc-popover": "", ...props, className: twMerge("flex flex-col px-4 max-h-[50vh] md:px-6", props.className), children: props.children });
}
function PageTOCPopover(props) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { collapsed } = useSidebar();
  const { isTransparent } = useNav();
  const onClick = useEffectEvent((e) => {
    if (!open)
      return;
    if (ref.current && !ref.current.contains(e.target))
      setOpen(false);
  });
  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return jsx(TocPopoverContext.Provider, { value: useMemo(() => ({
    open,
    setOpen
  }), [setOpen, open]), children: jsx(Collapsible, { open, onOpenChange: setOpen, asChild: true, children: jsx("header", { ref, id: "nd-tocnav", ...props, className: twMerge("fixed pr-(--removed-body-scroll-bar-size,0) z-10 border-b backdrop-blur-sm transition-colors xl:hidden max-xl:on-root:[--fd-tocnav-height:40px]", (!isTransparent || open) && "bg-fd-background/80", open && "shadow-lg", props.className), style: {
    ...props.style,
    top: "calc(var(--fd-banner-height) + var(--fd-nav-height))",
    insetInlineStart: collapsed ? "0px" : "calc(var(--fd-sidebar-width) + var(--fd-layout-offset))",
    insetInlineEnd: 0
  }, children: props.children }) }) });
}
function PageLastUpdate({ date: value, ...props }) {
  const { text } = useI18n();
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date(value).toLocaleDateString());
  }, [value]);
  return jsxs("p", { ...props, className: twMerge("text-sm text-fd-muted-foreground", props.className), children: [text.lastUpdate, " ", date] });
}
function scanNavigationList(tree) {
  const list = [];
  tree.forEach((node) => {
    if (node.type === "folder") {
      if (node.index) {
        list.push(node.index);
      }
      list.push(...scanNavigationList(node.children));
      return;
    }
    if (node.type === "page" && !node.external) {
      list.push(node);
    }
  });
  return list;
}
const listCache = /* @__PURE__ */ new Map();
function PageFooter({ items, ...props }) {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const { previous, next } = useMemo(() => {
    if (items)
      return items;
    const cached = listCache.get(root.$id);
    const list = cached ?? scanNavigationList(root.children);
    listCache.set(root.$id, list);
    const idx = list.findIndex((item) => isActive(item.url, pathname, false));
    if (idx === -1)
      return {};
    return {
      previous: list[idx - 1],
      next: list[idx + 1]
    };
  }, [items, pathname, root]);
  return jsxs("div", { ...props, className: twMerge("@container grid gap-4 pb-6", previous && next ? "grid-cols-2" : "grid-cols-1", props.className), children: [previous ? jsx(FooterItem, { item: previous, index: 0 }) : null, next ? jsx(FooterItem, { item: next, index: 1 }) : null] });
}
function FooterItem({ item, index }) {
  const { text } = useI18n();
  const Icon = index === 0 ? ChevronLeft : ChevronRight;
  return jsxs(Link2, { href: item.url, className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"), children: [jsxs("div", { className: twMerge("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"), children: [jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), jsx("p", { children: item.name })] }), jsx("p", { className: "text-fd-muted-foreground truncate", children: item.description ?? (index === 0 ? text.previousPage : text.nextPage) })] });
}
function PageBreadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
  const path2 = useTreePath();
  const { root } = useTreeContext();
  const items = useMemo(() => {
    return getBreadcrumbItemsFromPath(root, path2, {
      includePage,
      includeSeparator,
      includeRoot
    });
  }, [includePage, includeRoot, includeSeparator, path2, root]);
  if (items.length === 0)
    return null;
  return jsx("div", { ...props, className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className), children: items.map((item, i) => {
    const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
    return jsxs(Fragment$1, { children: [i !== 0 && jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? jsx(Link2, { href: item.url, className: twMerge(className, "transition-opacity hover:opacity-80"), children: item.name }) : jsx("span", { className, children: item.name })] }, i);
  }) });
}
function PageTOC(props) {
  const { collapsed } = useSidebar();
  const offset = collapsed ? "0px" : "var(--fd-layout-offset)";
  return jsx("div", { id: "nd-toc", ...props, className: twMerge("fixed bottom-0 pt-12 pb-2 pr-(--removed-body-scroll-bar-size,0) xl:on-root:[--fd-toc-width:286px] max-xl:hidden", props.className), style: {
    ...props.style,
    top: "calc(var(--fd-banner-height) + var(--fd-nav-height))",
    insetInlineEnd: `max(${offset}, calc(50vw - var(--fd-sidebar-width)/2 - var(--fd-page-width)/2))`
  }, children: jsx("div", { className: "flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4", children: props.children }) });
}
function ClerkTOCItems({ ref, className, ...props }) {
  const containerRef = useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  const [svg, setSvg] = useState();
  useEffect(() => {
    if (!containerRef.current)
      return;
    const container = containerRef.current;
    function onResize() {
      if (container.clientHeight === 0)
        return;
      let w = 0, h = 0;
      const d = [];
      for (let i = 0; i < items.length; i++) {
        const element = container.querySelector(`a[href="#${items[i].url.slice(1)}"]`);
        if (!element)
          continue;
        const styles = getComputedStyle(element);
        const offset = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
        w = Math.max(offset, w);
        h = Math.max(h, bottom);
        d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
      }
      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h
      });
    }
    const observer = new ResizeObserver(onResize);
    onResize();
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);
  if (items.length === 0)
    return jsx("div", { className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground", children: text.tocNoHeadings });
  return jsxs(Fragment, { children: [svg ? jsx("div", { className: "absolute start-0 top-0 rtl:-scale-x-100", style: {
    width: svg.width,
    height: svg.height,
    maskImage: `url("data:image/svg+xml,${// Inline SVG
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`)}")`
  }, children: jsx(TocThumb, { containerRef, className: "mt-(--fd-top) h-(--fd-height) bg-fd-primary transition-all" }) }) : null, jsx("div", { ref: mergeRefs(containerRef, ref), className: twMerge("flex flex-col", className), ...props, children: items.map((item, i) => jsx(TOCItem, { item, upper: items[i - 1]?.depth, lower: items[i + 1]?.depth }, item.url)) })] });
}
function getItemOffset(depth) {
  if (depth <= 2)
    return 14;
  if (depth === 3)
    return 26;
  return 36;
}
function getLineOffset(depth) {
  return depth >= 3 ? 10 : 0;
}
function TOCItem({ item, upper = item.depth, lower = item.depth }) {
  const offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
  return jsxs(TOCItem$2, { href: item.url, style: {
    paddingInlineStart: getItemOffset(item.depth)
  }, className: "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", children: [offset !== upperOffset ? jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", className: "absolute -top-1.5 start-0 size-4 rtl:-scale-x-100", children: jsx("line", { x1: upperOffset, y1: "0", x2: offset, y2: "12", className: "stroke-fd-foreground/10", strokeWidth: "1" }) }) : null, jsx("div", { className: twMerge("absolute inset-y-0 w-px bg-fd-foreground/10", offset !== upperOffset && "top-1.5", offset !== lowerOffset && "bottom-1.5"), style: {
    insetInlineStart: offset
  } }), item.title] });
}
function PageTOCTitle(props) {
  return jsxs("h3", { id: "toc-title", ...props, className: twMerge("inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className), children: [jsx(Text, { className: "size-4" }), jsx(I18nLabel, { label: "toc" })] });
}
function PageTOCItems({ variant = "normal", ...props }) {
  return jsx(TOCScrollArea, { ...props, children: variant === "clerk" ? jsx(ClerkTOCItems, {}) : jsx(TOCItems, {}) });
}
function PageTOCPopoverItems({ variant = "normal", ...props }) {
  return jsx(TOCScrollArea, { ...props, children: variant === "clerk" ? jsx(ClerkTOCItems, {}) : jsx(TOCItems, {}) });
}
function PageArticle(props) {
  return jsx("article", { ...props, className: twMerge("flex min-w-0 w-full flex-col gap-4 pt-8 px-4 md:px-6 md:mx-auto", props.className), children: props.children });
}
function PageRoot({ toc = false, children, ...props }) {
  const content = jsx("div", { id: "nd-page", ...props, className: twMerge("flex flex-1 w-full mx-auto max-w-(--fd-page-width) pt-(--fd-tocnav-height) pe-(--fd-toc-width)", props.className), children });
  if (toc)
    return jsx(TOCProvider, { ...toc, children: content });
  return content;
}
function DocsPage({ editOnGithub, breadcrumb: { enabled: breadcrumbEnabled = true, component: breadcrumb, ...breadcrumbProps } = {}, footer = {}, lastUpdate, container, full: full2 = false, tableOfContentPopover: { enabled: tocPopoverEnabled, component: tocPopover, ...tocPopoverOptions } = {}, tableOfContent: { enabled: tocEnabled, component: tocReplace, ...tocOptions } = {}, toc = [], article, children }) {
  tocEnabled ?? (tocEnabled = !full2 && (toc.length > 0 || tocOptions.footer !== void 0 || tocOptions.header !== void 0));
  tocPopoverEnabled ?? (tocPopoverEnabled = toc.length > 0 || tocPopoverOptions.header !== void 0 || tocPopoverOptions.footer !== void 0);
  return jsxs(PageRoot, { toc: tocEnabled || tocPopoverEnabled ? {
    toc,
    single: tocOptions.single
  } : false, ...container, children: [tocPopoverEnabled && (tocPopover ?? jsxs(PageTOCPopover, { children: [jsx(PageTOCPopoverTrigger, {}), jsxs(PageTOCPopoverContent, { children: [tocPopoverOptions.header, jsx(PageTOCPopoverItems, { variant: tocPopoverOptions.style }), tocPopoverOptions.footer] })] })), jsxs(PageArticle, { ...article, children: [breadcrumbEnabled && (breadcrumb ?? jsx(PageBreadcrumb, { ...breadcrumbProps })), children, jsxs("div", { className: "flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden", children: [editOnGithub && jsx(EditOnGitHub, { href: `https://github.com/${editOnGithub.owner}/${editOnGithub.repo}/blob/${editOnGithub.sha}/${editOnGithub.path.startsWith("/") ? editOnGithub.path.slice(1) : editOnGithub.path}` }), lastUpdate && jsx(PageLastUpdate, { date: new Date(lastUpdate) })] }), footer.enabled !== false && (footer.component ?? jsx(PageFooter, { items: footer.items }))] }), tocEnabled && (tocReplace ?? jsxs(PageTOC, { children: [tocOptions.header, jsx(PageTOCTitle, {}), jsx(PageTOCItems, { variant: tocOptions.style }), tocOptions.footer] }))] });
}
function EditOnGitHub(props) {
  return jsx("a", { target: "_blank", rel: "noreferrer noopener", ...props, className: twMerge(buttonVariants({
    color: "secondary",
    size: "sm",
    className: "gap-1.5 not-prose"
  }), props.className), children: props.children ?? jsxs(Fragment, { children: [jsx(Edit, { className: "size-3.5" }), jsx(I18nLabel, { label: "editOnGithub" })] }) });
}
const DocsBody = forwardRef((props, ref) => jsx("div", { ref, ...props, className: twMerge("prose flex-1", props.className), children: props.children }));
DocsBody.displayName = "DocsBody";
const DocsDescription = forwardRef((props, ref) => {
  if (props.children === void 0)
    return null;
  return jsx("p", { ref, ...props, className: twMerge("mb-8 text-lg text-fd-muted-foreground", props.className), children: props.children });
});
DocsDescription.displayName = "DocsDescription";
const DocsTitle = forwardRef((props, ref) => {
  return jsx("h1", { ref, ...props, className: twMerge("text-[1.75em] font-semibold", props.className), children: props.children });
});
DocsTitle.displayName = "DocsTitle";
function Cards(props) {
  return jsx("div", { ...props, className: twMerge("grid grid-cols-2 gap-3 @container", props.className), children: props.children });
}
function Card({ icon, title, description, ...props }) {
  const E = props.href ? Link2 : "div";
  return jsxs(E, { ...props, "data-card": true, className: twMerge("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className), children: [icon ? jsx("div", { className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4", children: icon }) : null, jsx("h3", { className: "not-prose mb-1 text-sm font-medium", children: title }), description ? jsx("p", { className: "!my-0 text-sm text-fd-muted-foreground", children: description }) : null, jsx("div", { className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden", children: props.children })] });
}
const iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
const Callout = forwardRef(({ className, children, title, type = "info", icon, ...props }, ref) => {
  if (type === "warn")
    type = "warning";
  if (type === "tip")
    type = "info";
  return jsxs("div", { ref, className: twMerge("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className), ...props, style: {
    "--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
    ...props.style
  }, children: [jsx("div", { role: "none", className: "w-0.5 bg-(--callout-color)/50 rounded-sm" }), icon ?? {
    info: jsx(Info, { className: iconClass }),
    warning: jsx(TriangleAlert, { className: iconClass }),
    error: jsx(CircleX, { className: iconClass }),
    success: jsx(CircleCheck, { className: iconClass })
  }[type], jsxs("div", { className: "flex flex-col gap-2 min-w-0 flex-1", children: [title && jsx("p", { className: "font-medium !my-0", children: title }), jsx("div", { className: "text-fd-muted-foreground prose-no-margin empty:hidden", children })] })] });
});
Callout.displayName = "Callout";
function Heading({ as, className, ...props }) {
  const As = as ?? "h1";
  if (!props.id)
    return jsx(As, { className, ...props });
  return jsxs(As, { className: twMerge("flex scroll-m-28 flex-row items-center gap-2", className), ...props, children: [jsx("a", { "data-card": "", href: `#${props.id}`, className: "peer", children: props.children }), jsx(Link$1, { "aria-hidden": true, className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" })] });
}
function useCopyButton(onCopy) {
  const [checked, setChecked] = useState(false);
  const callbackRef = useRef(onCopy);
  const timeoutRef = useRef(null);
  callbackRef.current = onCopy;
  const onClick = useCallback(() => {
    if (timeoutRef.current)
      window.clearTimeout(timeoutRef.current);
    const res = Promise.resolve(callbackRef.current());
    void res.then(() => {
      setChecked(true);
      timeoutRef.current = window.setTimeout(() => {
        setChecked(false);
      }, 1500);
    });
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current)
        window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}
const listeners = /* @__PURE__ */ new Map();
function addChangeListener(id, listener) {
  const list = listeners.get(id) ?? [];
  list.push(listener);
  listeners.set(id, list);
}
function removeChangeListener(id, listener) {
  const list = listeners.get(id) ?? [];
  listeners.set(id, list.filter((item) => item !== listener));
}
const TabsContext$1 = createContext$1(null);
function useTabContext() {
  const ctx = useContext(TabsContext$1);
  if (!ctx)
    throw new Error("You must wrap your component in <Tabs>");
  return ctx;
}
const TabsList = Primitive.TabsList;
const TabsTrigger = Primitive.TabsTrigger;
function Tabs({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
  const tabsRef = useRef(null);
  const [value, setValue] = _value === void 0 ? (
    // eslint-disable-next-line react-hooks/rules-of-hooks -- not supposed to change controlled/uncontrolled
    useState(defaultValue)
  ) : [_value, _onValueChange ?? (() => void 0)];
  const onChange = useEffectEvent((v) => setValue(v));
  const valueToIdMap = useMemo(() => /* @__PURE__ */ new Map(), []);
  useLayoutEffect(() => {
    if (!groupId)
      return;
    const previous = persist ? localStorage.getItem(groupId) : sessionStorage.getItem(groupId);
    if (previous)
      onChange(previous);
    addChangeListener(groupId, onChange);
    return () => {
      removeChangeListener(groupId, onChange);
    };
  }, [groupId, persist]);
  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash)
      return;
    for (const [value2, id] of valueToIdMap.entries()) {
      if (id === hash) {
        onChange(value2);
        tabsRef.current?.scrollIntoView();
        break;
      }
    }
  }, [valueToIdMap]);
  return jsx(Primitive.Tabs, { ref: mergeRefs(ref, tabsRef), value, onValueChange: (v) => {
    if (updateAnchor) {
      const id = valueToIdMap.get(v);
      if (id) {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
    if (groupId) {
      listeners.get(groupId)?.forEach((item) => {
        item(v);
      });
      if (persist)
        localStorage.setItem(groupId, v);
      else
        sessionStorage.setItem(groupId, v);
    } else {
      setValue(v);
    }
  }, ...props, children: jsx(TabsContext$1.Provider, { value: useMemo(() => ({ valueToIdMap }), [valueToIdMap]), children: props.children }) });
}
function TabsContent({ value, ...props }) {
  const { valueToIdMap } = useTabContext();
  if (props.id) {
    valueToIdMap.set(value, props.id);
  }
  return jsx(Primitive.TabsContent, { value, ...props, children: props.children });
}
const TabsContext = createContext$1(null);
function Pre(props) {
  return jsx("pre", { ...props, className: twMerge("min-w-full w-max *:flex *:flex-col", props.className), children: props.children });
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props2) => jsx("div", { ...props2, className: twMerge("empty:hidden", props2.className) }), ...props }) {
  const inTab = use(TabsContext) !== null;
  const areaRef = useRef(null);
  return jsxs("figure", { ref, dir: "ltr", ...props, tabIndex: -1, className: twMerge(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className), children: [title ? jsxs("div", { className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4", children: [typeof icon === "string" ? jsx("div", { className: "[&_svg]:size-3.5", dangerouslySetInnerHTML: {
    __html: icon
  } }) : icon, jsx("figcaption", { className: "flex-1 truncate", children: title }), Actions({
    className: "-me-2",
    children: allowCopy && jsx(CopyButton, { containerRef: areaRef })
  })] }) : Actions({
    className: "absolute top-2 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
    children: allowCopy && jsx(CopyButton, { containerRef: areaRef })
  }), jsx("div", { ref: areaRef, ...viewportProps, role: "region", tabIndex: 0, className: twMerge("text-[13px] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className), style: {
    // space for toolbar
    "--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
    counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
    ...viewportProps.style
  }, children })] });
}
function CopyButton({ className, containerRef, ...props }) {
  const [checked, onClick] = useCopyButton(() => {
    const pre = containerRef.current?.getElementsByTagName("pre").item(0);
    if (!pre)
      return;
    const clone = pre.cloneNode(true);
    clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
      node.replaceWith("\n");
    });
    void navigator.clipboard.writeText(clone.textContent ?? "");
  });
  return jsx("button", { type: "button", "data-checked": checked || void 0, className: twMerge(buttonVariants({
    className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
    size: "icon-xs"
  }), className), "aria-label": checked ? "Copied Text" : "Copy Text", onClick, ...props, children: checked ? jsx(Check, {}) : jsx(Clipboard, {}) });
}
function CodeBlockTabs({ ref, ...props }) {
  const containerRef = useRef(null);
  const nested = use(TabsContext) !== null;
  return jsx(Tabs, { ref: mergeRefs(containerRef, ref), ...props, className: twMerge("bg-fd-card rounded-xl border", !nested && "my-4", props.className), children: jsx(TabsContext, { value: useMemo(() => ({
    containerRef,
    nested
  }), [nested]), children: props.children }) });
}
function CodeBlockTabsList(props) {
  return jsx(TabsList, { ...props, className: twMerge("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className), children: props.children });
}
function CodeBlockTabsTrigger({ children, ...props }) {
  return jsxs(TabsTrigger, { ...props, className: twMerge("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className), children: [jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children] });
}
function CodeBlockTab(props) {
  return jsx(TabsContent, { ...props });
}
function Image(props) {
  return jsx(Image$1, { sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px", ...props, src: props.src, className: twMerge("rounded-lg", props.className) });
}
function Table(props) {
  return jsx("div", { className: "relative overflow-auto prose-no-margin my-6", children: jsx("table", { ...props }) });
}
const defaultMdxComponents = {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  pre: (props) => jsx(CodeBlock, { ...props, children: jsx(Pre, { children: props.children }) }),
  Card,
  Cards,
  a: Link2,
  img: Image,
  h1: (props) => jsx(Heading, { as: "h1", ...props }),
  h2: (props) => jsx(Heading, { as: "h2", ...props }),
  h3: (props) => jsx(Heading, { as: "h3", ...props }),
  h4: (props) => jsx(Heading, { as: "h4", ...props }),
  h5: (props) => jsx(Heading, { as: "h5", ...props }),
  h6: (props) => jsx(Heading, { as: "h6", ...props }),
  table: Table,
  Callout
};
async function sha1Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
const getStaticCacheUrl = async (opts) => {
  const filename = await sha1Hash(`${opts.functionId}__${opts.hash}`);
  return `/__tsr/staticServerFnCache/${filename}.json`;
};
const jsonToFilenameSafeString = (json) => {
  const sortedKeysReplacer = (key, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.keys(value).sort().reduce((acc, curr) => {
    acc[curr] = value[curr];
    return acc;
  }, {}) : value;
  const jsonString = JSON.stringify(json ?? "", sortedKeysReplacer);
  return jsonString.replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_");
};
const staticClientCache = typeof document !== "undefined" ? /* @__PURE__ */ new Map() : null;
async function addItemToCache({
  functionId,
  data,
  response
}) {
  {
    const hash = jsonToFilenameSafeString(data);
    const url = await getStaticCacheUrl({
      functionId,
      hash
    });
    const clientUrl = "dist/client";
    const filePath = path.join(clientUrl, url);
    await fs.mkdir(path.dirname(filePath), {
      recursive: true
    });
    const stringifiedResult = JSON.stringify(await toJSONAsync({
      result: response.result,
      context: response.context.sendContext
    }, {
      plugins: getDefaultSerovalPlugins()
    }));
    await fs.writeFile(filePath, stringifiedResult, "utf-8");
  }
}
const fetchItem = async ({
  data,
  functionId
}) => {
  const hash = jsonToFilenameSafeString(data);
  const url = await getStaticCacheUrl({
    functionId,
    hash
  });
  let result = staticClientCache?.get(url);
  result = await fetch(url, {
    method: "GET"
  }).then((r) => r.json()).then((d) => fromJSON(d, {
    plugins: getDefaultSerovalPlugins()
  }));
  return result;
};
const staticFunctionMiddleware = createMiddleware({
  type: "function"
}).client(async (ctx) => {
  if (process.env.NODE_ENV === "production" && // do not run this during SSR on the server
  typeof document !== "undefined") {
    const response = await fetchItem({
      functionId: ctx.functionId,
      data: ctx.data
    });
    if (response) {
      return {
        result: response.result,
        context: {
          ...ctx.context,
          ...response.context
        }
      };
    }
  }
  return ctx.next();
}).server(async (ctx) => {
  const response = await ctx.next();
  if (process.env.NODE_ENV === "production") {
    await addItemToCache({
      functionId: ctx.functionId,
      response: {
        result: response.result,
        context: ctx
      },
      data: ctx.data
    });
  }
  return response;
});
export {
  __toESM as $,
  LanguageToggleText as A,
  BaseLinkItem as B,
  ChevronRight as C,
  DocsPage as D,
  useSidebar as E,
  FrameworkProvider as F,
  useTreeContext as G,
  Hash as H,
  I18nContext as I,
  Collapsible as J,
  isActive as K,
  Link2 as L,
  CollapsibleTrigger as M,
  NavProvider as N,
  CollapsibleContent as O,
  ExternalLink as P,
  useTreePath as Q,
  isTabActive as R,
  SearchProvider as S,
  ThemeToggle as T,
  Popover as U,
  PopoverTrigger as V,
  ChevronsUpDown as W,
  PopoverContent as X,
  Check as Y,
  Sidebar as Z,
  TreeContextProvider as _,
  SidebarProvider as a,
  __commonJS as a0,
  usePathname as b,
  useI18n as c,
  defaultTranslations as d,
  Search as e,
  buttonVariants as f,
  useOnChange as g,
  I18nLabel as h,
  source as i,
  docs as j,
  DocsTitle as k,
  DocsDescription as l,
  DocsBody as m,
  defaultMdxComponents as n,
  findPath as o,
  basename as p,
  extname as q,
  useNav as r,
  staticFunctionMiddleware as s,
  getLinks as t,
  useRouter as u,
  LargeSearchToggle as v,
  LanguageToggle as w,
  Languages as x,
  SearchToggle as y,
  ChevronDown as z
};
