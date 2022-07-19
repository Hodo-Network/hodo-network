import React, { Suspense } from "react";
import { MemoryRouter } from "react-router";
import SplashScreen from "../src/components/SplashScreen";
import { themes } from "../src/constants/themes";
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

export const globalTypes = {
  // theme: {
  //   name: "Theme",
  //   description: "Global theme for components",
  //   defaultValue: "light",
  //   toolbar: {
  //     icon: "mirror",
  //     items: themes.sort(),
  //     showName: true,
  //   },
  // },
  themes: {
    defaultValue: themes.sort(),
  },
};
