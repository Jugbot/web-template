import { test } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import * as AppStories from "./App.stories";

const { Application } = composeStories(AppStories);

test("app", async () => {
  await Application.run();
  screen.getByText(/Vite \+ React/i);
});
