import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useMemo, Fragment, useRef, createContext, useContext } from "react";
import { E as useSidebar, G as useTreeContext, g as useOnChange, J as Collapsible, b as usePathname, K as isActive, L as Link2, z as ChevronDown, M as CollapsibleTrigger, O as CollapsibleContent, P as ExternalLink, Q as useTreePath, R as isTabActive, U as Popover, V as PopoverTrigger, W as ChevronsUpDown, X as PopoverContent, Y as Check, r as useNav, Z as Sidebar$1, f as buttonVariants, y as SearchToggle, t as getLinks, _ as TreeContextProvider, N as NavProvider, B as BaseLinkItem, w as LanguageToggle, x as Languages, A as LanguageToggleText, T as ThemeToggle, v as LargeSearchToggle } from "./staticFunctionMiddleware-DSkcj8ww.js";
import { twMerge } from "tailwind-merge";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cva } from "class-variance-authority";
import { Presence } from "@radix-ui/react-presence";
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => jsxs(ScrollAreaPrimitive.Root, { ref, type: "scroll", className: twMerge("overflow-hidden", className), ...props, children: [children, jsx(ScrollAreaPrimitive.Corner, {}), jsx(ScrollBar, { orientation: "vertical" })] }));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollViewport = React.forwardRef(({ className, children, ...props }, ref) => jsx(ScrollAreaPrimitive.Viewport, { ref, className: twMerge("size-full rounded-[inherit]", className), ...props, children }));
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => jsx(ScrollAreaPrimitive.Scrollbar, { ref, orientation, className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className), ...props, children: jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" }) }));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
function useMediaQuery(query, disabled = false) {
  const [isMatch, setMatch] = useState(null);
  useEffect(() => {
    if (disabled) return;
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => {
      setMatch(mediaQueryList.matches);
    };
    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [disabled, query]);
  return isMatch;
}
const itemVariants = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 ps-(--sidebar-item-offset) text-start text-fd-muted-foreground [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    active: {
      true: "bg-fd-primary/10 text-fd-primary",
      false: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
    }
  }
});
const Context = createContext(null);
const FolderContext = createContext(null);
function Sidebar({ defaultOpenLevel = 0, prefetch = true, Mobile, Content }) {
  const isMobile = useMediaQuery("(width < 768px)") ?? false;
  const context = useMemo(() => {
    return {
      defaultOpenLevel,
      prefetch,
      level: 1
    };
  }, [defaultOpenLevel, prefetch]);
  return jsx(Context.Provider, { value: context, children: isMobile && Mobile != null ? Mobile : Content });
}
function SidebarContent(props) {
  const { collapsed } = useSidebar();
  const [hover, setHover] = useState(false);
  const timerRef = useRef(0);
  const closeTimeRef = useRef(0);
  useOnChange(collapsed, () => {
    setHover(false);
    closeTimeRef.current = Date.now() + 150;
  });
  return jsx("aside", { id: "nd-sidebar", ...props, "data-collapsed": collapsed, className: twMerge("fixed left-0 rtl:left-auto rtl:right-(--removed-body-scroll-bar-size,0) flex flex-col items-end top-(--fd-sidebar-top) bottom-(--fd-sidebar-margin) z-20 bg-fd-card text-sm border-e transition-[top,opacity,translate,width] duration-200 max-md:hidden *:w-(--fd-sidebar-width)", collapsed && [
    "rounded-xl border translate-x-(--fd-sidebar-offset) rtl:-translate-x-(--fd-sidebar-offset)",
    hover ? "z-50 shadow-lg" : "opacity-0"
  ], props.className), style: {
    ...props.style,
    "--fd-sidebar-offset": hover ? "calc(var(--spacing) * 2)" : "calc(16px - 100%)",
    "--fd-sidebar-margin": collapsed ? "0.5rem" : "0px",
    "--fd-sidebar-top": `calc(var(--fd-banner-height) + var(--fd-nav-height) + var(--fd-sidebar-margin))`,
    width: collapsed ? "var(--fd-sidebar-width)" : "calc(var(--spacing) + var(--fd-sidebar-width) + var(--fd-layout-offset))"
  }, onPointerEnter: (e) => {
    if (!collapsed || e.pointerType === "touch" || closeTimeRef.current > Date.now())
      return;
    window.clearTimeout(timerRef.current);
    setHover(true);
  }, onPointerLeave: (e) => {
    if (!collapsed || e.pointerType === "touch")
      return;
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setHover(false);
      closeTimeRef.current = Date.now() + 150;
    }, Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
  }, children: props.children });
}
function SidebarContentMobile({ className, children, ...props }) {
  const { open, setOpen } = useSidebar();
  const state = open ? "open" : "closed";
  return jsxs(Fragment$1, { children: [jsx(Presence, { present: open, children: jsx("div", { "data-state": state, className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", onClick: () => setOpen(false) }) }), jsx(Presence, { present: open, children: ({ present }) => jsx("aside", { id: "nd-sidebar-mobile", ...props, "data-state": state, className: twMerge("fixed text-[15px] flex flex-col shadow-lg border-s end-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", !present && "invisible", className), children }) })] });
}
function SidebarHeader(props) {
  return jsx("div", { ...props, className: twMerge("flex flex-col gap-3 p-4 pb-2", props.className), children: props.children });
}
function SidebarFooter(props) {
  return jsx("div", { ...props, className: twMerge("flex flex-col border-t p-4 pt-2", props.className), children: props.children });
}
function SidebarViewport(props) {
  return jsx(ScrollArea, { ...props, className: twMerge("h-full", props.className), children: jsx(ScrollViewport, { className: "p-4 overscroll-contain", style: {
    "--sidebar-item-offset": "calc(var(--spacing) * 2)",
    maskImage: "linear-gradient(to bottom, transparent, white 12px, white calc(100% - 12px), transparent)"
  }, children: props.children }) });
}
function SidebarSeparator(props) {
  return jsx("p", { ...props, className: twMerge("inline-flex items-center gap-2 mb-1.5 px-2 ps-(--sidebar-item-offset) empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0", props.className), children: props.children });
}
function SidebarItem({ icon, ...props }) {
  const pathname = usePathname();
  const active = props.href !== void 0 && isActive(props.href, pathname, false);
  const { prefetch } = useInternalContext();
  return jsxs(Link2, { ...props, "data-active": active, className: twMerge(itemVariants({ active }), props.className), prefetch, children: [icon ?? (props.external ? jsx(ExternalLink, {}) : null), props.children] });
}
function SidebarFolder({ defaultOpen = false, ...props }) {
  const [open, setOpen] = useState(defaultOpen);
  useOnChange(defaultOpen, (v) => {
    if (v)
      setOpen(v);
  });
  return jsx(Collapsible, { open, onOpenChange: setOpen, ...props, children: jsx(FolderContext.Provider, { value: useMemo(() => ({ open, setOpen }), [open]), children: props.children }) });
}
function SidebarFolderTrigger({ className, ...props }) {
  const { open } = useFolderContext();
  return jsxs(CollapsibleTrigger, { className: twMerge(itemVariants({ active: false }), "w-full", className), ...props, children: [props.children, jsx(ChevronDown, { "data-icon": true, className: twMerge("ms-auto transition-transform", !open && "-rotate-90") })] });
}
function SidebarFolderLink(props) {
  const { open, setOpen } = useFolderContext();
  const { prefetch } = useInternalContext();
  const pathname = usePathname();
  const active = props.href !== void 0 && isActive(props.href, pathname, false);
  return jsxs(Link2, { ...props, "data-active": active, className: twMerge(itemVariants({ active }), "w-full", props.className), onClick: (e) => {
    if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
      setOpen(!open);
      e.preventDefault();
    } else {
      setOpen(active ? !open : true);
    }
  }, prefetch, children: [props.children, jsx(ChevronDown, { "data-icon": true, className: twMerge("ms-auto transition-transform", !open && "-rotate-90") })] });
}
function SidebarFolderContent(props) {
  const { level, ...ctx } = useInternalContext();
  return jsx(CollapsibleContent, { ...props, className: twMerge("relative", level === 1 && [
    "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:start-2.5",
    "**:data-[active=true]:before:content-[''] **:data-[active=true]:before:bg-fd-primary **:data-[active=true]:before:absolute **:data-[active=true]:before:w-px **:data-[active=true]:before:inset-y-2.5 **:data-[active=true]:before:start-2.5"
  ], props.className), style: {
    "--sidebar-item-offset": `calc(var(--spacing) * ${(level + 1) * 3})`,
    ...props.style
  }, children: jsx(Context.Provider, { value: useMemo(() => ({
    ...ctx,
    level: level + 1
  }), [ctx, level]), children: props.children }) });
}
function SidebarTrigger({ children, ...props }) {
  const { setOpen } = useSidebar();
  return jsx("button", { ...props, "aria-label": "Open Sidebar", onClick: () => setOpen((prev) => !prev), children });
}
function SidebarCollapseTrigger(props) {
  const { collapsed, setCollapsed } = useSidebar();
  return jsx("button", { type: "button", "aria-label": "Collapse Sidebar", "data-collapsed": collapsed, ...props, onClick: () => {
    setCollapsed((prev) => !prev);
  }, children: props.children });
}
function useFolderContext() {
  const ctx = useContext(FolderContext);
  if (!ctx)
    throw new Error("Missing sidebar folder");
  return ctx;
}
function useInternalContext() {
  const ctx = useContext(Context);
  if (!ctx)
    throw new Error("<Sidebar /> component required.");
  return ctx;
}
function SidebarPageTree(props) {
  const { root } = useTreeContext();
  return useMemo(() => {
    const { Separator, Item, Folder } = props.components ?? {};
    function renderSidebarList(items, level) {
      return items.map((item, i) => {
        if (item.type === "separator") {
          if (Separator)
            return jsx(Separator, { item }, i);
          return jsxs(SidebarSeparator, { className: twMerge(i !== 0 && "mt-6"), children: [item.icon, item.name] }, i);
        }
        if (item.type === "folder") {
          const children = renderSidebarList(item.children, level + 1);
          if (Folder)
            return jsx(Folder, { item, level, children }, i);
          return jsx(PageTreeFolder, { item, children }, i);
        }
        if (Item)
          return jsx(Item, { item }, item.url);
        return jsx(SidebarItem, { href: item.url, external: item.external, icon: item.icon, children: item.name }, item.url);
      });
    }
    return jsx(Fragment, { children: renderSidebarList(root.children, 1) }, root.$id);
  }, [props.components, root]);
}
function PageTreeFolder({ item, ...props }) {
  const { defaultOpenLevel, level } = useInternalContext();
  const path = useTreePath();
  return jsxs(SidebarFolder, { defaultOpen: (item.defaultOpen ?? defaultOpenLevel >= level) || path.includes(item), children: [item.index ? jsxs(SidebarFolderLink, { href: item.index.url, external: item.index.external, ...props, children: [item.icon, item.name] }) : jsxs(SidebarFolderTrigger, { ...props, children: [item.icon, item.name] }), jsx(SidebarFolderContent, { children: props.children })] });
}
function RootToggle({ options, placeholder, ...props }) {
  const [open, setOpen] = useState(false);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.findLast((item2) => isTabActive(item2, pathname));
  }, [options, pathname]);
  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };
  const item = selected ? jsxs(Fragment$1, { children: [jsx("div", { className: "size-9 shrink-0 empty:hidden md:size-5", children: selected.icon }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: selected.title }), jsx("p", { className: "text-[13px] text-fd-muted-foreground empty:hidden md:hidden", children: selected.description })] })] }) : placeholder;
  return jsxs(Popover, { open, onOpenChange: setOpen, children: [item && jsxs(PopoverTrigger, { ...props, className: twMerge("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className), children: [item, jsx(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })] }), jsx(PopoverContent, { className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) p-1 fd-scroll-container", children: options.map((item2) => {
    const isActive2 = selected && item2.url === selected.url;
    if (!isActive2 && item2.unlisted)
      return;
    return jsxs(Link2, { href: item2.url, onClick, ...item2.props, className: twMerge("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item2.props?.className), children: [jsx("div", { className: "shrink-0 size-9 md:mt-1 md:mb-auto md:size-5 empty:hidden", children: item2.icon }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: item2.title }), jsx("p", { className: "text-[13px] text-fd-muted-foreground empty:hidden", children: item2.description })] }), jsx(Check, { className: twMerge("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive2 && "invisible") })] }, item2.url);
  }) })] });
}
function Navbar(props) {
  const { isTransparent } = useNav();
  return jsx("header", { id: "nd-subnav", ...props, className: twMerge("fixed top-(--fd-banner-height) left-0 right-(--removed-body-scroll-bar-size,0) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm", !isTransparent && "bg-fd-background/80", props.className), children: props.children });
}
function LayoutBody(props) {
  const { collapsed } = useSidebar();
  return jsx("main", { id: "nd-docs-layout", ...props, className: twMerge("flex flex-1 flex-col pt-(--fd-nav-height) transition-[padding] fd-default-layout", !collapsed && "mx-(--fd-layout-offset)", props.className), style: {
    ...props.style,
    paddingInlineStart: collapsed ? "min(calc(100vw - var(--fd-page-width)), var(--fd-sidebar-width))" : "var(--fd-sidebar-width)"
  }, children: props.children });
}
function CollapsibleControl() {
  const { collapsed } = useSidebar();
  return jsxs("div", { className: twMerge("fixed flex shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10 max-md:hidden xl:start-4 max-xl:end-4", !collapsed && "pointer-events-none opacity-0"), style: {
    top: "calc(var(--fd-banner-height) + var(--fd-tocnav-height) + var(--spacing) * 4)"
  }, children: [jsx(SidebarCollapseTrigger, { className: twMerge(buttonVariants({
    color: "ghost",
    size: "icon-sm",
    className: "rounded-lg"
  })), children: jsx(Sidebar$1, {}) }), jsx(SearchToggle, { className: "rounded-lg", hideIfDisabled: true })] });
}
function LayoutTabs({ options, ...props }) {
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.findLast((option) => isTabActive(option, pathname));
  }, [options, pathname]);
  return jsx("div", { ...props, className: twMerge("flex flex-row items-end gap-6 overflow-auto", props.className), children: options.map((option) => jsx(LayoutTab, { selected: selected === option, option }, option.url)) });
}
function LayoutTab({ option: { title, url, unlisted, props }, selected = false }) {
  return jsx(Link2, { href: url, ...props, className: twMerge("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", unlisted && !selected && "hidden", selected && "border-fd-primary text-fd-primary", props?.className), children: title });
}
const defaultTransform = (option, node) => {
  if (!node.icon)
    return option;
  return {
    ...option,
    icon: jsx("div", { className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary", children: node.icon })
  };
};
function getSidebarTabs(tree, { transform = defaultTransform } = {}) {
  const results = [];
  function scanOptions(node, unlisted) {
    if ("root" in node && node.root) {
      const urls = getFolderUrls(node);
      if (urls.size > 0) {
        const option = {
          url: urls.values().next().value ?? "",
          title: node.name,
          icon: node.icon,
          unlisted,
          description: node.description,
          urls
        };
        const mapped = transform ? transform(option, node) : option;
        if (mapped)
          results.push(mapped);
      }
    }
    for (const child of node.children) {
      if (child.type === "folder")
        scanOptions(child, unlisted);
    }
  }
  scanOptions(tree);
  if (tree.fallback)
    scanOptions(tree.fallback, true);
  return results;
}
function getFolderUrls(folder, output = /* @__PURE__ */ new Set()) {
  if (folder.index)
    output.add(folder.index.url);
  for (const child of folder.children) {
    if (child.type === "page" && !child.external)
      output.add(child.url);
    if (child.type === "folder")
      getFolderUrls(child, output);
  }
  return output;
}
function DocsLayout({ nav: { transparentMode, ...nav } = {}, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled = true, ...sidebarProps } = {}, searchToggle = {}, themeSwitch = {}, tabMode = "auto", i18n = false, children, tree, ...props }) {
  const tabs = useMemo(() => {
    if (Array.isArray(sidebarTabs)) {
      return sidebarTabs;
    }
    if (typeof sidebarTabs === "object") {
      return getSidebarTabs(tree, sidebarTabs);
    }
    if (sidebarTabs !== false) {
      return getSidebarTabs(tree);
    }
    return [];
  }, [tree, sidebarTabs]);
  const links = getLinks(props.links ?? [], props.githubUrl);
  const sidebarVariables = twMerge("md:[--fd-sidebar-width:268px] lg:[--fd-sidebar-width:286px]");
  function sidebar() {
    const { footer, banner, collapsible = true, component, components, defaultOpenLevel, prefetch, ...rest } = sidebarProps;
    if (component)
      return component;
    const iconLinks = links.filter((item) => item.type === "icon");
    const viewport = jsxs(SidebarViewport, { children: [links.filter((v) => v.type !== "icon").map((item, i, list) => jsx(SidebarLinkItem, { item, className: twMerge(i === list.length - 1 && "mb-4") }, i)), jsx(SidebarPageTree, { components })] });
    const mobile = jsxs(SidebarContentMobile, { ...rest, children: [jsxs(SidebarHeader, { children: [jsxs("div", { className: "flex text-fd-muted-foreground items-center gap-1.5", children: [jsx("div", { className: "flex flex-1", children: iconLinks.map((item, i) => jsx(BaseLinkItem, { item, className: twMerge(buttonVariants({
      size: "icon-sm",
      color: "ghost",
      className: "p-2"
    })), "aria-label": item.label, children: item.icon }, i)) }), i18n ? jsxs(LanguageToggle, { children: [jsx(Languages, { className: "size-4.5" }), jsx(LanguageToggleText, {})] }) : null, themeSwitch.enabled !== false && (themeSwitch.component ?? jsx(ThemeToggle, { className: "p-0", mode: themeSwitch.mode })), jsx(SidebarTrigger, { className: twMerge(buttonVariants({
      color: "ghost",
      size: "icon-sm",
      className: "p-2"
    })), children: jsx(Sidebar$1, {}) })] }), tabs.length > 0 && jsx(RootToggle, { options: tabs }), banner] }), viewport, jsx(SidebarFooter, { className: "empty:hidden", children: footer })] });
    const content = jsxs(SidebarContent, { ...rest, children: [jsxs(SidebarHeader, { children: [jsxs("div", { className: "flex", children: [jsx(Link2, { href: nav.url ?? "/", className: "inline-flex text-[15px] items-center gap-2.5 font-medium me-auto", children: nav.title }), nav.children, collapsible && jsx(SidebarCollapseTrigger, { className: twMerge(buttonVariants({
      color: "ghost",
      size: "icon-sm",
      className: "mb-auto text-fd-muted-foreground"
    })), children: jsx(Sidebar$1, {}) })] }), searchToggle.enabled !== false && (searchToggle.components?.lg ?? jsx(LargeSearchToggle, { hideIfDisabled: true })), tabs.length > 0 && tabMode === "auto" && jsx(RootToggle, { options: tabs }), banner] }), viewport, (i18n || iconLinks.length > 0 || themeSwitch?.enabled !== false || footer) && jsxs(SidebarFooter, { children: [jsxs("div", { className: "flex text-fd-muted-foreground items-center empty:hidden", children: [i18n && jsx(LanguageToggle, { children: jsx(Languages, { className: "size-4.5" }) }), iconLinks.map((item, i) => jsx(BaseLinkItem, { item, className: twMerge(buttonVariants({ size: "icon-sm", color: "ghost" })), "aria-label": item.label, children: item.icon }, i)), themeSwitch.enabled !== false && (themeSwitch.component ?? jsx(ThemeToggle, { className: "ms-auto p-0", mode: themeSwitch.mode }))] }), footer] })] });
    return jsx(Sidebar, { defaultOpenLevel, prefetch, Mobile: mobile, Content: jsxs(Fragment$1, { children: [collapsible && jsx(CollapsibleControl, {}), content] }) });
  }
  return jsx(TreeContextProvider, { tree, children: jsxs(NavProvider, { transparentMode, children: [nav.enabled !== false && (nav.component ?? jsxs(Navbar, { className: "h-(--fd-nav-height) on-root:[--fd-nav-height:56px] md:on-root:[--fd-nav-height:0px] md:hidden", children: [jsx(Link2, { href: nav.url ?? "/", className: "inline-flex items-center gap-2.5 font-semibold", children: nav.title }), jsx("div", { className: "flex-1", children: nav.children }), searchToggle.enabled !== false && (searchToggle.components?.sm ?? jsx(SearchToggle, { className: "p-2", hideIfDisabled: true })), sidebarEnabled && jsx(SidebarTrigger, { className: twMerge(buttonVariants({
    color: "ghost",
    size: "icon-sm",
    className: "p-2"
  })), children: jsx(Sidebar$1, {}) })] })), jsxs(LayoutBody, { ...props.containerProps, className: twMerge("md:[&_#nd-page_article]:pt-12 xl:[&_#nd-page_article]:px-8", sidebarEnabled && sidebarVariables, props.containerProps?.className), children: [sidebarEnabled && sidebar(), tabMode === "top" && tabs.length > 0 && jsx(LayoutTabs, { options: tabs, className: "sticky top-[calc(var(--fd-nav-height)+var(--fd-tocnav-height))] z-10 bg-fd-background border-b px-6 pt-3 xl:px-8 max-md:hidden" }), children] })] }) });
}
function SidebarLinkItem({ item, ...props }) {
  if (item.type === "menu")
    return jsxs(SidebarFolder, { ...props, children: [item.url ? jsxs(SidebarFolderLink, { href: item.url, external: item.external, children: [item.icon, item.text] }) : jsxs(SidebarFolderTrigger, { children: [item.icon, item.text] }), jsx(SidebarFolderContent, { children: item.items.map((child, i) => jsx(SidebarLinkItem, { item: child }, i)) })] });
  if (item.type === "custom")
    return jsx("div", { ...props, children: item.children });
  return jsx(SidebarItem, { href: item.url, icon: item.icon, external: item.external, ...props, children: item.text });
}
function baseOptions() {
  return {
    nav: {
      title: "🫰 heartjs.dev"
    }
  };
}
export {
  DocsLayout as D,
  baseOptions as b
};
