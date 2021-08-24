import React, { Suspense } from "react";
import { MemoryRouter } from "react-router";
import SplashScreen from "../src/components/SplashScreen";
import "../src/styles/tailwind.output.css";

const withSuspense = (Story, context) => {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Suspense fallback={<SplashScreen />}>
        <Story {...context} />
      </Suspense>
    </MemoryRouter>
  );
};

export const decorators = [withSuspense];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
