import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./components/smart/layout/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("profile", "./routes/profile.tsx"),
    route("returns", "./routes/returns.tsx"),
    route("messages", "./routes/messages.tsx"),
    route("friends", "./routes/friends.tsx"),
  ]),
] satisfies RouteConfig;
