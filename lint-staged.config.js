export default {
  "*": [
    "pnpm _prettier --write",
    "pnpm _eslint --fix",
    () => "pnpm run types:check",
  ],
};
