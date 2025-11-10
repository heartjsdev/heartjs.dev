import { useParams, useRouter as useRouter$1, useLocation, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { ThemeProvider } from "next-themes";
import * as React from "react";
import { lazy, useRef, useMemo, useState, createContext, useEffectEvent, useEffect, Fragment, useContext, useCallback } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
import { S as SearchProvider, a as SidebarProvider, u as useRouter, b as usePathname, I as I18nContext, d as defaultTranslations, F as FrameworkProvider, c as useI18n, e as Search, f as buttonVariants, g as useOnChange, h as I18nLabel, C as ChevronRight, H as Hash, s as staticFunctionMiddleware, i as source, j as docs, D as DocsPage, k as DocsTitle, l as DocsDescription, m as DocsBody, n as defaultMdxComponents, o as findPath, p as basename, q as extname, r as useNav, L as Link2, B as BaseLinkItem, N as NavProvider, t as getLinks, v as LargeSearchToggle, T as ThemeToggle, w as LanguageToggle, x as Languages, y as SearchToggle, z as ChevronDown, A as LanguageToggleText } from "./staticFunctionMiddleware-DSkcj8ww.js";
import { twMerge } from "tailwind-merge";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import scrollIntoView from "scroll-into-view-if-needed";
import { create, search, getByID, save, insertMultiple } from "@orama/orama";
import { Sun, Moon, Check, Copy } from "lucide-react";
import { flushSync } from "react-dom";
import { clsx } from "clsx";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { createClientLoader } from "fumadocs-mdx/runtime/vite";
import * as Primitive from "@radix-ui/react-navigation-menu";
const appCss = "/assets/app-B41D9XWi.css";
const DefaultSearchDialog$1 = lazy(() => import("./search-default-_Vk9-xYQ.js"));
function RootProvider$1({ children, dir = "ltr", theme = {}, search: search2, i18n }) {
  let body = children;
  if (search2?.enabled !== false)
    body = jsx(SearchProvider, { SearchDialog: DefaultSearchDialog$1, ...search2, children: body });
  if (theme?.enabled !== false)
    body = jsx(ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, ...theme, children: body });
  if (i18n) {
    body = jsx(I18nProvider, { ...i18n, children: body });
  }
  return jsx(DirectionProvider, { dir, children: jsx(SidebarProvider, { children: body }) });
}
function I18nProvider({ locales = [], locale, onLocaleChange, children, translations }) {
  const router2 = useRouter();
  const pathname = usePathname();
  const onChange = (value) => {
    if (onLocaleChange) {
      return onLocaleChange(value);
    }
    const segments = pathname.split("/").filter((v) => v.length > 0);
    if (segments[0] !== locale) {
      segments.unshift(value);
    } else {
      segments[0] = value;
    }
    router2.push(`/${segments.join("/")}`);
  };
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  return jsx(I18nContext.Provider, { value: useMemo(() => ({
    locale,
    locales,
    text: {
      ...defaultTranslations,
      ...translations
    },
    onChange: (v) => onChangeRef.current(v)
  }), [locale, locales, translations]), children });
}
var framework = {
  Link({ href, prefetch, ...props }) {
    return /* @__PURE__ */ jsx(Link, { to: href, preload: prefetch ? "intent" : false, ...props, children: props.children });
  },
  usePathname() {
    return useLocation().pathname;
  },
  useRouter() {
    const router2 = useRouter$1();
    return useMemo(
      () => ({
        push(url) {
          void router2.navigate({
            href: url
          });
        },
        refresh() {
          void router2.invalidate();
        }
      }),
      [router2]
    );
  },
  useParams() {
    return useParams({ strict: false });
  }
};
function TanstackProvider({ children }) {
  return /* @__PURE__ */ jsx(FrameworkProvider, { ...framework, children });
}
function RootProvider(props) {
  return jsx(TanstackProvider, { children: jsx(RootProvider$1, { ...props, children: props.children }) });
}
const Context = createContext(null);
const ListContext = createContext(null);
const TagsListContext = createContext(null);
function SearchDialog({ open, onOpenChange, search: search2, onSearchChange, isLoading = false, children }) {
  const [active, setActive] = useState(null);
  return jsx(Dialog, { open, onOpenChange, children: jsx(Context.Provider, { value: useMemo(() => ({
    open,
    onOpenChange,
    search: search2,
    onSearchChange,
    active,
    setActive,
    isLoading
  }), [active, isLoading, onOpenChange, onSearchChange, open, search2]), children }) });
}
function SearchDialogHeader(props) {
  return jsx("div", { ...props, className: twMerge("flex flex-row items-center gap-2 p-3", props.className) });
}
function SearchDialogInput(props) {
  const { text } = useI18n();
  const { search: search2, onSearchChange } = useSearch();
  return jsx("input", { ...props, value: search2, onChange: (e) => onSearchChange(e.target.value), placeholder: text.search, className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none" });
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
  const { onOpenChange } = useSearch();
  return jsx("button", { type: "button", onClick: () => onOpenChange(false), className: twMerge(buttonVariants({
    color: "outline",
    size: "sm",
    className: "font-mono text-fd-muted-foreground"
  }), className), ...props, children });
}
function SearchDialogFooter(props) {
  return jsx("div", { ...props, className: twMerge("bg-fd-secondary/50 p-3 empty:hidden", props.className) });
}
function SearchDialogOverlay(props) {
  return jsx(DialogOverlay, { ...props, className: twMerge("fixed inset-0 z-50 backdrop-blur-xs bg-fd-overlay data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", props.className) });
}
function SearchDialogContent({ children, ...props }) {
  const { text } = useI18n();
  return jsxs(DialogContent, { "aria-describedby": void 0, ...props, className: twMerge("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-xl border bg-fd-popover text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", props.className), children: [jsx(DialogTitle, { className: "hidden", children: text.search }), children] });
}
function SearchDialogList({ items = null, Empty = () => jsx("div", { className: "py-12 text-center text-sm text-fd-muted-foreground", children: jsx(I18nLabel, { label: "searchNoResult" }) }), Item = (props2) => jsx(SearchDialogListItem, { ...props2 }), ...props }) {
  const ref = useRef(null);
  const [active, setActive] = useState(() => items && items.length > 0 ? items[0].id : null);
  const { onOpenChange } = useSearch();
  const router2 = useRouter();
  const onOpen = (item) => {
    if (item.type === "action") {
      item.onSelect();
    } else if (item.external) {
      window.open(item.url, "_blank")?.focus();
    } else {
      router2.push(item.url);
    }
    onOpenChange(false);
  };
  const onKey = useEffectEvent((e) => {
    if (!items || e.isComposing)
      return;
    if (e.key === "ArrowDown" || e.key == "ArrowUp") {
      let idx = items.findIndex((item) => item.id === active);
      if (idx === -1)
        idx = 0;
      else if (e.key === "ArrowDown")
        idx++;
      else
        idx--;
      setActive(items.at(idx % items.length)?.id ?? null);
      e.preventDefault();
    }
    if (e.key === "Enter") {
      const selected = items.find((item) => item.id === active);
      if (selected)
        onOpen(selected);
      e.preventDefault();
    }
  });
  useEffect(() => {
    const element = ref.current;
    if (!element)
      return;
    const observer = new ResizeObserver(() => {
      const viewport2 = element.firstElementChild;
      element.style.setProperty("--fd-animated-height", `${viewport2.clientHeight}px`);
    });
    const viewport = element.firstElementChild;
    if (viewport)
      observer.observe(viewport);
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useOnChange(items, () => {
    if (items && items.length > 0) {
      setActive(items[0].id);
    }
  });
  return jsx("div", { ...props, ref, "data-empty": items === null, className: twMerge("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className), children: jsx("div", { className: twMerge("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"), children: jsxs(ListContext.Provider, { value: useMemo(() => ({
    active,
    setActive
  }), [active]), children: [items?.length === 0 && Empty(), items?.map((item) => jsx(Fragment, { children: Item({ item, onClick: () => onOpen(item) }) }, item.id))] }) }) });
}
function SearchDialogListItem({ item, className, children, renderHighlights: render = renderHighlights, ...props }) {
  const { active: activeId, setActive } = useSearchList();
  const active = item.id === activeId;
  if (item.type === "action") {
    children ?? (children = item.node);
  } else {
    children ?? (children = jsxs(Fragment$1, { children: [jsx("div", { className: "inline-flex items-center text-fd-muted-foreground text-xs empty:hidden", children: item.breadcrumbs?.map((item2, i) => jsxs(Fragment, { children: [i > 0 && jsx(ChevronRight, { className: "size-4" }), item2] }, i)) }), item.type !== "page" && jsx("div", { role: "none", className: "absolute start-3 inset-y-0 w-px bg-fd-border" }), jsxs("p", { className: twMerge("min-w-0 truncate", item.type !== "page" && "ps-4", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80"), children: [item.type === "heading" && jsx(Hash, { className: "inline me-1 size-4 text-fd-muted-foreground" }), item.contentWithHighlights ? render(item.contentWithHighlights) : item.content] })] }));
  }
  return jsx("button", { type: "button", ref: useCallback((element) => {
    if (active && element) {
      scrollIntoView(element, {
        scrollMode: "if-needed",
        block: "nearest",
        boundary: element.parentElement
      });
    }
  }, [active]), "aria-selected": active, className: twMerge("relative select-none px-2.5 py-2 text-start text-sm rounded-lg", active && "bg-fd-accent text-fd-accent-foreground", className), onPointerMove: () => setActive(item.id), ...props, children });
}
function SearchDialogIcon(props) {
  const { isLoading } = useSearch();
  return jsx(Search, { ...props, className: twMerge("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className) });
}
const itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", {
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground"
    }
  }
});
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
  return jsx("div", { ...props, className: twMerge("flex items-center gap-1 flex-wrap", props.className), children: jsx(TagsListContext.Provider, { value: useMemo(() => ({
    value: tag,
    onValueChange: onTagChange,
    allowClear
  }), [allowClear, onTagChange, tag]), children: props.children }) });
}
function TagsListItem({ value, className, ...props }) {
  const { onValueChange, value: selectedValue, allowClear } = useTagsList();
  const selected = value === selectedValue;
  return jsx("button", { type: "button", "data-active": selected, className: twMerge(itemVariants({ active: selected, className })), onClick: () => {
    onValueChange(selected && allowClear ? void 0 : value);
  }, tabIndex: -1, ...props, children: props.children });
}
function renderHighlights(highlights) {
  return highlights.map((node, i) => {
    if (node.styles?.highlight) {
      return jsx("span", { className: "text-fd-primary underline", children: node.content }, i);
    }
    return jsx(Fragment, { children: node.content }, i);
  });
}
function useSearch() {
  const ctx = useContext(Context);
  if (!ctx)
    throw new Error("Missing <SearchDialog />");
  return ctx;
}
function useTagsList() {
  const ctx = useContext(TagsListContext);
  if (!ctx)
    throw new Error("Missing <TagsList />");
  return ctx;
}
function useSearchList() {
  const ctx = useContext(ListContext);
  if (!ctx)
    throw new Error("Missing <SearchDialogList />");
  return ctx;
}
function useDebounce(value, delayMs = 1e3) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    if (delayMs === 0) return;
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);
    return () => clearTimeout(handler);
  }, [delayMs, value]);
  if (delayMs === 0) return value;
  return debouncedValue;
}
function isDifferentDeep(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferentDeep(v, b[i]));
  }
  if (typeof a === "object" && a && typeof b === "object" && b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return aKeys.length !== bKeys.length || aKeys.some(
      (key) => isDifferentDeep(a[key], b[key])
    );
  }
  return a !== b;
}
function useDocsSearch(clientOptions) {
  const { delayMs = 100, allowEmpty = false, ...client } = clientOptions;
  const [search2, setSearch] = useState("");
  const [results, setResults] = useState("empty");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedValue = useDebounce(search2, delayMs);
  const onStart = useRef(void 0);
  useOnChange(
    [client, debouncedValue],
    () => {
      if (onStart.current) {
        onStart.current();
        onStart.current = void 0;
      }
      setIsLoading(true);
      let interrupt = false;
      onStart.current = () => {
        interrupt = true;
      };
      async function run() {
        if (debouncedValue.length === 0 && !allowEmpty) return "empty";
        if (client.type === "fetch") {
          const { fetchDocs } = await import("./fetch-2XFMBLBA-uKSSbneq.js");
          return fetchDocs(debouncedValue, client);
        }
        if (client.type === "algolia") {
          const { searchDocs } = await import("./algolia-IZEDLPHE-SbDPSBDu.js");
          return searchDocs(debouncedValue, client);
        }
        if (client.type === "orama-cloud") {
          const { searchDocs } = await import("./orama-cloud-UZAPMPFV-9p9bAbIj.js");
          return searchDocs(debouncedValue, client);
        }
        if (client.type === "static") {
          const { search: search22 } = await import("./static-A2YJ5TXV-CiXA82Rr.js");
          return search22(debouncedValue, client);
        }
        if (client.type === "mixedbread") {
          const { search: search22 } = await import("./mixedbread-RAHDVXGJ-xi1UxZUx.js");
          return search22(debouncedValue, client);
        }
        throw new Error("unknown search client");
      }
      void run().then((res) => {
        if (interrupt) return;
        setError(void 0);
        setResults(res);
      }).catch((err) => {
        setError(err);
      }).finally(() => {
        setIsLoading(false);
      });
    },
    isDifferentDeep
  );
  return { search: search2, setSearch, query: { isLoading, data: results, error } };
}
function initOrama() {
  return create({
    schema: { _: "string" },
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: "english"
  });
}
function DefaultSearchDialog(props) {
  const { locale } = useI18n();
  const { search: search2, setSearch, query } = useDocsSearch({
    type: "static",
    initOrama,
    locale
  });
  return /* @__PURE__ */ jsxs(
    SearchDialog,
    {
      search: search2,
      onSearchChange: setSearch,
      isLoading: query.isLoading,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SearchDialogOverlay, {}),
        /* @__PURE__ */ jsxs(SearchDialogContent, { children: [
          /* @__PURE__ */ jsxs(SearchDialogHeader, { children: [
            /* @__PURE__ */ jsx(SearchDialogIcon, {}),
            /* @__PURE__ */ jsx(SearchDialogInput, {}),
            /* @__PURE__ */ jsx(SearchDialogClose, {})
          ] }),
          /* @__PURE__ */ jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : null })
        ] })
      ]
    }
  );
}
const Route$3 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "heartjs.dev"
      }
    ],
    links: [
      {
        rel: "icon",
        href: "/heart.png"
        // Or the path to your favicon file
      },
      // Google Fonts preconnect
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      // Link to the Crimson Pro and DM Sans font stylesheet
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
      },
      // Your existing app stylesheet
      { rel: "stylesheet", href: appCss }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsx(RootProvider, { search: { SearchDialog: DefaultSearchDialog }, children }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, []);
  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;
    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      });
    }).ready;
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)"
      }
    );
  }, [isDark, duration]);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ref: buttonRef,
      onClick: toggleTheme,
      className: cn(className),
      ...props,
      children: [
        isDark ? /* @__PURE__ */ jsx(Sun, {}) : /* @__PURE__ */ jsx(Moon, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
};
const Route$2 = createFileRoute("/")({
  component: Home
});
const images = [
  { src: "/h.png", alt: "Hono" },
  { src: "/e.png", alt: "Expo" },
  { src: "/a.png", alt: "AI SDK" },
  { src: "/r.png", alt: "React" },
  { src: "/t.png", alt: "Tanstack Router" }
];
const ORBIT_RADIUS = 150;
const IMAGE_SIZE = 64;
const animationKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes reverse-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;
const OrbitingEmoji = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("style", { children: animationKeyframes }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-64 lg:h-96 lg:w-96", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full motion-safe:animate-[spin_40s_linear_infinite]", children: images.map((image, index) => {
        const angle = index / images.length * 2 * Math.PI;
        const x = Math.cos(angle) * ORBIT_RADIUS;
        const y = Math.sin(angle) * ORBIT_RADIUS;
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-1/2 top-1/2",
            style: {
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image.src,
                alt: image.alt,
                className: "shadow-lg motion-safe:animate-[reverse-spin_40s_linear_infinite] lg:h-16 lg:w-16",
                style: { width: IMAGE_SIZE, height: IMAGE_SIZE }
              }
            )
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 motion-safe:animate-[float_10s_ease-in-out_infinite] rounded-2xl  transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg]", children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center text-8xl", children: "🫰" }) })
    ] }) })
  ] });
};
function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "Light Weight",
    "Super Fast",
    "Cross Platform",
    "Model Agnostic",
    "AI Ready",
    "Huge Ecosystem",
    "Platform Agnostic",
    "Type Safe"
  ];
  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 2e3);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : text === currentWord ? 2e3 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);
  return /* @__PURE__ */ jsxs("span", { className: "inline-block min-w-[300px] text-left lg:min-w-[400px]", children: [
    text,
    /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "|" })
  ] });
}
function Home() {
  const [currentPM, setCurrentPM] = useState("npm");
  const [copied, setCopied] = useState(false);
  const commands = {
    npm: "npm create heartjs@latest",
    yarn: "yarn create heartjs",
    pnpm: "pnpm create heartjs@latest",
    bun: "bun create heartjs@latest"
  };
  const copyCommand = () => {
    navigator.clipboard.writeText(commands[currentPM]).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-[95vw] mx-12 items-center flex py-8 justify-between", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-2xl", children: [
        "🫰 heartjs",
        /* @__PURE__ */ jsx("span", { className: "text-[#f34]", children: "." }),
        "dev"
      ] }),
      /* @__PURE__ */ jsx(AnimatedThemeToggler, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("section", { className: "container relative py-12 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-6 font-serif text-5xl font-semibold leading-tight tracking-tight lg:text-7xl", children: /* @__PURE__ */ jsx(TypewriterText, {}) }),
          /* @__PURE__ */ jsxs("p", { className: "mx-auto mb-12 max-w-2xl text-lg text-muted-foreground lg:mx-0 lg:text-xl", children: [
            "Heartjs.dev is a modular TypeScript starter that runs",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Hono, Expo, AI SDK, React, and TanStack Router" }),
            " ",
            "together without tying your frontend and backend into one runtime."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex max-w-2xl flex-col items-center gap-4 sm:flex-row lg:mx-0", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3 font-mono text-sm sm:text-base", children: [
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: commands[currentPM] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: copyCommand,
                className: "rounded-md p-2 hover:bg-muted transition-colors",
                "aria-label": "Copy command",
                children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start", children: [
            /* @__PURE__ */ jsx("span", { children: "Also works with" }),
            ["npm", "yarn", "pnpm", "bun"].map((pm) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setCurrentPM(pm),
                className: `rounded-md px-3 py-1 font-mono transition-colors ${currentPM === pm ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`,
                children: pm
              },
              pm
            ))
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/docs/$",
              params: { _splat: "" },
              className: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: [
                "View Documentation",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "h-4 w-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 5l7 7-7 7"
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "relative h-64 w-64 lg:h-96 lg:w-96", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-float rounded-2xl transition-transform hover:scale-105 hover:rotate-[-2deg]", children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center text-8xl", children: /* @__PURE__ */ jsx(OrbitingEmoji, {}) }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "container py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl", children: "What's Inside" }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 text-4xl", children: "🔥" }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold", children: "Hono" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-muted-foreground", children: "Edge-ready, ultrafast web framework for APIs and microservices. Hono powers your backend and runs everywhere Node, Bun, Deno, or Cloudflare." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "⚡ Fast & Lightweight" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🌐 Edge Ready" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🔗 Hono RPC" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 text-4xl", children: "⚛️" }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold", children: "React + TanStack Router" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-muted-foreground", children: "React powered by Vite and TanStack Router for typed routing, loaders, and actions. Includes shadcn/ui out of the box for a beautiful design system." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🎯 Type Safe" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "⚡ Vite Builds" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🎨 shadcn/ui" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 text-4xl", children: "📱" }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold", children: "Expo + React Native Reusables" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-muted-foreground", children: "Cross-platform apps made simple. Expo comes pre-integrated with react native reusables — unstyled, accessible primitives for UI consistency." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "📱 Cross Platform" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "♿ Accessible" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🚀 Fast Dev" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 text-4xl", children: "🤖" }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold", children: "AI SDK" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-muted-foreground", children: "Optional, but powerful. Integrate AI quickly using Vercel's AI SDK. Stream responses, handle embeddings, and connect to OpenAI or Anthropic instantly." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🧠 Multiple Providers" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🌊 Streaming" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "💬 Chat Ready" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg md:col-span-2", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 text-4xl", children: "🐳" }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold", children: "Docker Ready" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-muted-foreground", children: "The create-heartjs CLI can set up your choice of database automatically with Docker Compose. Spin up PostgreSQL, MySQL, MongoDB, or Redis in seconds with environment variables wired up in your Hono API." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🐘 PostgreSQL" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🐬 MySQL" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "🍃 MongoDB" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-muted px-3 py-1 text-xs", children: "⚡ Redis" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "container py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl", children: "Why Heart.js?" }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-neutral dark:prose-invert mx-auto", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground", children: [
            "I've always loved full-stack frameworks like SvelteKit and Next.js — they're amazing for building fast, connected apps. But when it comes time to add a",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "mobile app" }),
            " or an",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "external API" }),
            ", things start to get messy. The frontend and backend are too intertwined, and separating them feels like un-weaving a sweater."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Heart.js" }),
            " is my answer to that. A clean separation where each layer can still share code, types, and structure without getting in each other's way. One command sets up:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "🧩 A ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Hono" }),
              " backend that runs anywhere with RPC for type-safe APIs"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "📱 An ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Expo" }),
              " app powered by react-native-reusables"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "🤖 Optional",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "AI SDK" }),
              " ",
              "integration when you need intelligent features"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "⚛️ A",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "React + TanStack Router" }),
              " ",
              "frontend built with Vite and shadcn/ui"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "🐳 Easy ",
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Docker" }),
              " ",
              "setup for your databases when you're ready to scale"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground", children: [
            "No magic, no lock-in — just tools that play well together. Because I wanted a stack that feels ",
            /* @__PURE__ */ jsx("em", { children: "modular" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("em", { children: "type-safe" }),
            ", and ",
            /* @__PURE__ */ jsx("em", { children: "fun" }),
            " to build with again."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "container py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-3xl font-bold tracking-tight sm:text-4xl", children: "Compose Your Stack. Keep It Yours." }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-2xl flex-col items-center gap-4 sm:flex-row", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3 font-mono text-sm sm:text-base", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: commands[currentPM] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: copyCommand,
              className: "rounded-md p-2 hover:bg-muted transition-colors",
              "aria-label": "Copy command",
              children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("footer", { className: "border-t", children: /* @__PURE__ */ jsx("div", { className: "container text-center text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-center gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Built with 🫰 by",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://youtube.com/anirudhisonline",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "font-medium underline underline-offset-4 hover:text-foreground",
              children: "anirudhisonline"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/heartjsdev/create-heartjs",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-foreground transition-colors",
            children: "GitHub"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.npmjs.com/package/create-heartjs",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-foreground transition-colors",
            children: "npm"
          }
        )
      ] }) }) })
    ] })
  ] });
}
const createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter = () => import("./_-C64Y66XV.js");
const Route$1 = createFileRoute("/docs/$")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const slugs = params._splat?.split("/") ?? [];
    const data = await loader({
      data: slugs
    });
    await clientLoader.preload(data.path);
    return data;
  }
});
const loader_createServerFn_handler = createSsrRpc("3dffc64eabe29fc8f5f4021f5e1cdf4bfea9319ffba3a59848ead9dcd2fa0308");
const loader = createServerFn({
  method: "GET"
}).inputValidator((slugs) => slugs).middleware([staticFunctionMiddleware]).handler(loader_createServerFn_handler, async ({
  data: slugs
}) => {
  const page = source.getPage(slugs);
  if (!page) throw notFound();
  return {
    tree: source.pageTree,
    path: page.path
  };
});
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
function removeUndefined(value, deep = false) {
  const obj = value;
  for (const key in obj) {
    if (obj[key] === void 0) delete obj[key];
    if (!deep) continue;
    const entry = obj[key];
    if (typeof entry === "object" && entry !== null) {
      removeUndefined(entry, deep);
      continue;
    }
    if (Array.isArray(entry)) {
      for (const item of entry) removeUndefined(item, deep);
    }
  }
  return value;
}
function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildRegexFromQuery(q) {
  const trimmed = q.trim();
  if (trimmed.length === 0) return null;
  const terms = Array.from(
    new Set(
      trimmed.split(/\s+/).map((t) => t.trim()).filter(Boolean)
    )
  );
  if (terms.length === 0) return null;
  const escaped = terms.map(escapeRegExp).join("|");
  return new RegExp(`(${escaped})`, "gi");
}
function createContentHighlighter(query) {
  const regex = typeof query === "string" ? buildRegexFromQuery(query) : query;
  return {
    highlight(content) {
      if (!regex) return [{ type: "text", content }];
      const out = [];
      let i = 0;
      for (const match of content.matchAll(regex)) {
        if (i < match.index) {
          out.push({
            type: "text",
            content: content.substring(i, match.index)
          });
        }
        out.push({
          type: "text",
          content: match[0],
          styles: {
            highlight: true
          }
        });
        i = match.index + match[0].length;
      }
      if (i < content.length) {
        out.push({
          type: "text",
          content: content.substring(i)
        });
      }
      return out;
    }
  };
}
async function searchSimple(db, query, params = {}) {
  const highlighter = createContentHighlighter(query);
  const result = await search(db, {
    term: query,
    tolerance: 1,
    ...params,
    boost: {
      title: 2,
      ..."boost" in params ? params.boost : void 0
    }
  });
  return result.hits.map((hit) => ({
    type: "page",
    content: hit.document.title,
    breadcrumbs: hit.document.breadcrumbs,
    contentWithHighlights: highlighter.highlight(hit.document.title),
    id: hit.document.url,
    url: hit.document.url
  }));
}
async function searchAdvanced(db, query, tag = [], {
  mode = "fulltext",
  ...override
} = {}) {
  if (typeof tag === "string") tag = [tag];
  let params = {
    ...override,
    mode,
    where: removeUndefined({
      tags: tag.length > 0 ? {
        containsAll: tag
      } : void 0,
      ...override.where
    }),
    groupBy: {
      properties: ["page_id"],
      maxResult: 8,
      ...override.groupBy
    }
  };
  if (query.length > 0) {
    params = {
      ...params,
      term: query,
      properties: mode === "fulltext" ? ["content"] : ["content", "embeddings"]
    };
  }
  const highlighter = createContentHighlighter(query);
  const result = await search(db, params);
  const list = [];
  for (const item of result.groups ?? []) {
    const pageId = item.values[0];
    const page = getByID(db, pageId);
    if (!page) continue;
    list.push({
      id: pageId,
      type: "page",
      content: page.content,
      breadcrumbs: page.breadcrumbs,
      contentWithHighlights: highlighter.highlight(page.content),
      url: page.url
    });
    for (const hit of item.result) {
      if (hit.document.type === "page") continue;
      list.push({
        id: hit.document.id.toString(),
        content: hit.document.content,
        breadcrumbs: hit.document.breadcrumbs,
        contentWithHighlights: highlighter.highlight(hit.document.content),
        type: hit.document.type,
        url: hit.document.url
      });
    }
  }
  return list;
}
function createEndpoint(server2) {
  const { search: search2 } = server2;
  return {
    ...server2,
    async staticGET() {
      return Response.json(await server2.export());
    },
    async GET(request) {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      if (!query) return Response.json([]);
      return Response.json(
        await search2(query, {
          tag: url.searchParams.get("tag")?.split(",") ?? void 0,
          locale: url.searchParams.get("locale") ?? void 0,
          mode: url.searchParams.get("mode") === "vector" ? "vector" : "full"
        })
      );
    }
  };
}
var advancedSchema = {
  content: "string",
  page_id: "string",
  type: "string",
  breadcrumbs: "string[]",
  tags: "enum[]",
  url: "string",
  embeddings: "vector[512]"
};
async function createDB({
  indexes,
  tokenizer,
  search: _,
  ...rest
}) {
  const items = typeof indexes === "function" ? await indexes() : indexes;
  const db = create({
    schema: advancedSchema,
    ...rest,
    components: {
      ...rest.components,
      tokenizer: tokenizer ?? rest.components?.tokenizer
    }
  });
  const mapTo = [];
  items.forEach((page) => {
    const pageTag = page.tag ?? [];
    const tags = Array.isArray(pageTag) ? pageTag : [pageTag];
    const data = page.structuredData;
    let id = 0;
    mapTo.push({
      id: page.id,
      page_id: page.id,
      type: "page",
      content: page.title,
      breadcrumbs: page.breadcrumbs,
      tags,
      url: page.url
    });
    const nextId = () => `${page.id}-${id++}`;
    if (page.description) {
      mapTo.push({
        id: nextId(),
        page_id: page.id,
        tags,
        type: "text",
        url: page.url,
        content: page.description
      });
    }
    for (const heading of data.headings) {
      mapTo.push({
        id: nextId(),
        page_id: page.id,
        type: "heading",
        tags,
        url: `${page.url}#${heading.id}`,
        content: heading.content
      });
    }
    for (const content of data.contents) {
      mapTo.push({
        id: nextId(),
        page_id: page.id,
        tags,
        type: "text",
        url: content.heading ? `${page.url}#${content.heading}` : page.url,
        content: content.content
      });
    }
  });
  await insertMultiple(db, mapTo);
  return db;
}
function defaultBuildIndex(source2) {
  function isBreadcrumbItem(item) {
    return typeof item === "string" && item.length > 0;
  }
  return async (page) => {
    let breadcrumbs;
    let structuredData;
    if ("structuredData" in page.data) {
      structuredData = page.data.structuredData;
    } else if ("load" in page.data && typeof page.data.load === "function") {
      structuredData = (await page.data.load()).structuredData;
    }
    if (!structuredData)
      throw new Error(
        "Cannot find structured data from page, please define the page to index function."
      );
    const pageTree = source2.getPageTree(page.locale);
    const path = findPath(
      pageTree.children,
      (node) => node.type === "page" && node.url === page.url
    );
    if (path) {
      breadcrumbs = [];
      path.pop();
      if (isBreadcrumbItem(pageTree.name)) {
        breadcrumbs.push(pageTree.name);
      }
      for (const segment of path) {
        if (!isBreadcrumbItem(segment.name)) continue;
        breadcrumbs.push(segment.name);
      }
    }
    return {
      title: page.data.title ?? basename(page.path, extname(page.path)),
      breadcrumbs,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData
    };
  };
}
function createFromSource(source2, options = {}) {
  const { buildIndex = defaultBuildIndex(source2) } = options;
  if (source2._i18n) {
    return createI18nSearchAPI("advanced", {
      ...options,
      i18n: source2._i18n,
      indexes: async () => {
        const indexes = source2.getLanguages().flatMap((entry) => {
          return entry.pages.map(async (page) => ({
            ...await buildIndex(page),
            locale: entry.language
          }));
        });
        return Promise.all(indexes);
      }
    });
  }
  return createSearchAPI("advanced", {
    ...options,
    indexes: async () => {
      const indexes = source2.getPages().map((page) => buildIndex(page));
      return Promise.all(indexes);
    }
  });
}
var STEMMERS = {
  arabic: "ar",
  armenian: "am",
  bulgarian: "bg",
  czech: "cz",
  danish: "dk",
  dutch: "nl",
  english: "en",
  finnish: "fi",
  french: "fr",
  german: "de",
  greek: "gr",
  hungarian: "hu",
  indian: "in",
  indonesian: "id",
  irish: "ie",
  italian: "it",
  lithuanian: "lt",
  nepali: "np",
  norwegian: "no",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "rs",
  slovenian: "ru",
  spanish: "es",
  swedish: "se",
  tamil: "ta",
  turkish: "tr",
  ukrainian: "uk",
  sanskrit: "sk"
};
async function getTokenizer(locale) {
  return {
    language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale
  };
}
async function initAdvanced(options) {
  const map = /* @__PURE__ */ new Map();
  if (options.i18n.languages.length === 0) {
    return map;
  }
  const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
  for (const locale of options.i18n.languages) {
    const localeIndexes = indexes.filter((index) => index.locale === locale);
    const mapped = options.localeMap?.[locale] ?? await getTokenizer(locale);
    map.set(
      locale,
      typeof mapped === "object" ? initAdvancedSearch({
        ...options,
        indexes: localeIndexes,
        ...mapped
      }) : initAdvancedSearch({
        ...options,
        language: mapped,
        indexes: localeIndexes
      })
    );
  }
  return map;
}
function createI18nSearchAPI(type, options) {
  const get = initAdvanced(options);
  return createEndpoint({
    async export() {
      const map = await get;
      const entries = Array.from(map.entries()).map(async ([k, v]) => [
        k,
        await v.export()
      ]);
      return {
        type: "i18n",
        data: Object.fromEntries(await Promise.all(entries))
      };
    },
    async search(query, searchOptions) {
      const map = await get;
      const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
      const handler = map.get(locale);
      if (handler) return handler.search(query, searchOptions);
      return [];
    }
  });
}
function createSearchAPI(type, options) {
  return createEndpoint(initAdvancedSearch(options));
}
function initAdvancedSearch(options) {
  const get = createDB(options);
  return {
    async export() {
      return {
        type: "advanced",
        ...save(await get)
      };
    },
    async search(query, searchOptions) {
      const db = await get;
      const mode = searchOptions?.mode;
      return searchAdvanced(db, query, searchOptions?.tag, {
        ...options.search,
        mode: mode === "vector" ? "vector" : "fulltext"
      }).catch((err) => {
        if (mode === "vector") {
          throw new Error(
            "failed to search, make sure you have installed `@orama/plugin-embeddings` according to their docs.",
            {
              cause: err
            }
          );
        }
        throw err;
      });
    }
  };
}
const server = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "english"
});
const Route = createFileRoute("/api/search")({
  server: {
    handlers: {
      GET: () => server.staticGET()
    }
  }
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const DocsSplatRoute = Route$1.update({
  id: "/docs/$",
  path: "/docs/$",
  getParentRoute: () => Route$3
});
const ApiSearchRoute = Route.update({
  id: "/api/search",
  path: "/api/search",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  ApiSearchRoute,
  DocsSplatRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const NavigationMenu = Primitive.Root;
const NavigationMenuList = Primitive.List;
const NavigationMenuItem = React.forwardRef(({ className, children, ...props }, ref) => jsx(Primitive.NavigationMenuItem, { ref, className: twMerge("list-none", className), ...props, children }));
NavigationMenuItem.displayName = Primitive.NavigationMenuItem.displayName;
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => jsx(Primitive.Trigger, { ref, className: twMerge("data-[state=open]:bg-fd-accent/50", className), ...props, children }));
NavigationMenuTrigger.displayName = Primitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => jsx(Primitive.Content, { ref, className: twMerge("absolute inset-x-0 top-0 overflow-auto fd-scroll-container max-h-[80svh] data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft", className), ...props }));
NavigationMenuContent.displayName = Primitive.Content.displayName;
const NavigationMenuLink = Primitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => jsx("div", { ref, className: "flex w-full justify-center", children: jsx(Primitive.Viewport, { ...props, className: twMerge("relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in", className) }) }));
NavigationMenuViewport.displayName = Primitive.Viewport.displayName;
const navItemVariants = cva("[&_svg]:size-4", {
  variants: {
    variant: {
      main: "inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary",
      button: buttonVariants({
        color: "secondary",
        className: "gap-1.5"
      }),
      icon: buttonVariants({
        color: "ghost",
        size: "icon"
      })
    }
  },
  defaultVariants: {
    variant: "main"
  }
});
function Navbar(props) {
  const [value, setValue] = useState("");
  const { isTransparent } = useNav();
  return jsx(NavigationMenu, { value, onValueChange: setValue, asChild: true, children: jsxs("header", { id: "nd-nav", ...props, className: twMerge("fixed top-(--fd-banner-height) z-40 left-0 right-(--removed-body-scroll-bar-size,0) backdrop-blur-lg border-b transition-colors *:mx-auto *:max-w-fd-container", value.length > 0 && "max-lg:shadow-lg max-lg:rounded-b-2xl", (!isTransparent || value.length > 0) && "bg-fd-background/80", props.className), children: [jsx(NavigationMenuList, { className: "flex h-14 w-full items-center px-4", asChild: true, children: jsx("nav", { children: props.children }) }), jsx(NavigationMenuViewport, {})] }) });
}
function NavbarLinkItem({ item, ...props }) {
  if (item.type === "custom")
    return jsx("div", { ...props, children: item.children });
  if (item.type === "menu") {
    const children = item.items.map((child, j) => {
      if (child.type === "custom") {
        return jsx(Fragment, { children: child.children }, j);
      }
      const { banner = child.icon ? jsx("div", { className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4", children: child.icon }) : null, ...rest } = child.menu ?? {};
      return jsx(NavigationMenuLink, { asChild: true, children: jsx(Link2, { href: child.url, external: child.external, ...rest, className: twMerge("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground", rest.className), children: rest.children ?? jsxs(Fragment$1, { children: [banner, jsx("p", { className: "text-[15px] font-medium", children: child.text }), jsx("p", { className: "text-sm text-fd-muted-foreground empty:hidden", children: child.description })] }) }) }, `${j}-${child.url}`);
    });
    return jsxs(NavigationMenuItem, { children: [jsx(NavigationMenuTrigger, { ...props, className: twMerge(navItemVariants(), "rounded-md", props.className), children: item.url ? jsx(Link2, { href: item.url, external: item.external, children: item.text }) : item.text }), jsx(NavigationMenuContent, { className: "grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3", children })] });
  }
  return jsx(NavigationMenuItem, { children: jsx(NavigationMenuLink, { asChild: true, children: jsx(BaseLinkItem, { item, "aria-label": item.type === "icon" ? item.label : void 0, ...props, className: twMerge(navItemVariants({ variant: item.type }), props.className), children: item.type === "icon" ? item.icon : item.text }) }) });
}
const Menu = NavigationMenuItem;
function MenuLinkItem({ item, ...props }) {
  if (item.type === "custom")
    return jsx("div", { className: twMerge("grid", props.className), children: item.children });
  if (item.type === "menu") {
    const header = jsxs(Fragment$1, { children: [item.icon, item.text] });
    return jsxs("div", { className: twMerge("mb-4 flex flex-col", props.className), children: [jsx("p", { className: "mb-1 text-sm text-fd-muted-foreground", children: item.url ? jsx(NavigationMenuLink, { asChild: true, children: jsx(Link2, { href: item.url, external: item.external, children: header }) }) : header }), item.items.map((child, i) => jsx(MenuLinkItem, { item: child }, i))] });
  }
  return jsx(NavigationMenuLink, { asChild: true, children: jsxs(BaseLinkItem, { item, className: twMerge({
    main: "inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",
    icon: buttonVariants({
      size: "icon",
      color: "ghost"
    }),
    button: buttonVariants({
      color: "secondary",
      className: "gap-1.5 [&_svg]:size-4"
    })
  }[item.type ?? "main"], props.className), "aria-label": item.type === "icon" ? item.label : void 0, children: [item.icon, item.type === "icon" ? void 0 : item.text] }) });
}
function MenuTrigger({ enableHover = false, ...props }) {
  return jsx(NavigationMenuTrigger, { ...props, onPointerMove: enableHover ? void 0 : (e) => e.preventDefault(), children: props.children });
}
function MenuContent(props) {
  return jsx(NavigationMenuContent, { ...props, className: twMerge("flex flex-col p-4", props.className), children: props.children });
}
function HomeLayout(props) {
  const { nav = {}, links, githubUrl, i18n, themeSwitch = {}, searchToggle, ...rest } = props;
  return jsx(NavProvider, { transparentMode: nav?.transparentMode, children: jsxs("main", { id: "nd-home-layout", ...rest, className: twMerge("flex flex-1 flex-col pt-14", rest.className), children: [nav.enabled !== false && (nav.component ?? jsx(Header, { links, nav, themeSwitch, searchToggle, i18n, githubUrl })), props.children] }) });
}
function Header({ nav = {}, i18n = false, links, githubUrl, themeSwitch = {}, searchToggle = {} }) {
  const finalLinks = useMemo(() => getLinks(links, githubUrl), [links, githubUrl]);
  const navItems = finalLinks.filter((item) => ["nav", "all"].includes(item.on ?? "all"));
  const menuItems = finalLinks.filter((item) => ["menu", "all"].includes(item.on ?? "all"));
  return jsxs(Navbar, { children: [jsx(Link2, { href: nav.url ?? "/", className: "inline-flex items-center gap-2.5 font-semibold", children: nav.title }), nav.children, jsx("ul", { className: "flex flex-row items-center gap-2 px-6 max-sm:hidden", children: navItems.filter((item) => !isSecondary(item)).map((item, i) => jsx(NavbarLinkItem, { item, className: "text-sm" }, i)) }), jsxs("div", { className: "flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden", children: [searchToggle.enabled !== false && (searchToggle.components?.lg ?? jsx(LargeSearchToggle, { className: "w-full rounded-full ps-2.5 max-w-[240px]", hideIfDisabled: true })), themeSwitch.enabled !== false && (themeSwitch.component ?? jsx(ThemeToggle, { mode: themeSwitch?.mode })), i18n && jsx(LanguageToggle, { children: jsx(Languages, { className: "size-5" }) }), jsx("ul", { className: "flex flex-row gap-2 items-center empty:hidden", children: navItems.filter(isSecondary).map((item, i) => jsx(NavbarLinkItem, { item, className: twMerge(item.type === "icon" && [
    "-mx-1",
    i === 0 && "ms-0",
    i === navItems.length - 1 && "me-0"
  ]) }, i)) })] }), jsxs("ul", { className: "flex flex-row items-center ms-auto -me-1.5 lg:hidden", children: [searchToggle.enabled !== false && (searchToggle.components?.sm ?? jsx(SearchToggle, { className: "p-2", hideIfDisabled: true })), jsxs(Menu, { children: [jsx(MenuTrigger, { "aria-label": "Toggle Menu", className: twMerge(buttonVariants({
    size: "icon",
    color: "ghost",
    className: "group [&_svg]:size-5.5"
  })), enableHover: nav.enableHoverToOpen, children: jsx(ChevronDown, { className: "transition-transform duration-300 group-data-[state=open]:rotate-180" }) }), jsxs(MenuContent, { className: "sm:flex-row sm:items-center sm:justify-end", children: [menuItems.filter((item) => !isSecondary(item)).map((item, i) => jsx(MenuLinkItem, { item, className: "sm:hidden" }, i)), jsxs("div", { className: "-ms-1.5 flex flex-row items-center gap-1.5 max-sm:mt-2", children: [menuItems.filter(isSecondary).map((item, i) => jsx(MenuLinkItem, { item, className: "-me-1.5" }, i)), jsx("div", { role: "separator", className: "flex-1" }), i18n ? jsxs(LanguageToggle, { children: [jsx(Languages, { className: "size-5" }), jsx(LanguageToggleText, {}), jsx(ChevronDown, { className: "size-3 text-fd-muted-foreground" })] }) : null, themeSwitch.enabled !== false && (themeSwitch.component ?? jsx(ThemeToggle, { mode: themeSwitch?.mode }))] })] })] })] })] });
}
function isSecondary(item) {
  if ("secondary" in item && item.secondary != null)
    return item.secondary;
  return item.type === "icon";
}
function NotFound() {
  return /* @__PURE__ */ jsx(
    HomeLayout,
    {
      nav: {
        title: "heartjs.dev"
      },
      className: "text-center py-32 justify-center",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold text-fd-muted-foreground", children: "404" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Page Not Found" }),
        /* @__PURE__ */ jsx("p", { className: "text-fd-muted-foreground max-w-md", children: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: "mt-4 px-4 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity",
            children: "Back to Home"
          }
        )
      ] })
    }
  );
}
function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  SearchDialog as S,
  TagsList as T,
  SearchDialogOverlay as a,
  SearchDialogContent as b,
  SearchDialogHeader as c,
  SearchDialogIcon as d,
  SearchDialogInput as e,
  SearchDialogClose as f,
  SearchDialogList as g,
  SearchDialogFooter as h,
  TagsListItem as i,
  createContentHighlighter as j,
  searchAdvanced as k,
  router as l,
  removeUndefined as r,
  searchSimple as s,
  useDocsSearch as u
};
