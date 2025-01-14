import { DefaultColors } from "tailwindcss/types/generated/colors";

type ShadeMapping = {
  [key: string]: string;
};

type ThemeObject = {
  [color: string]: {
    [shade: string]: string;
  };
};

const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

export const genererateThemeObject = (
  colors: DefaultColors,
  mapping: ShadeMapping,
  invert = false
) => {
  const theme: ThemeObject = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = (
        colors[color as keyof DefaultColors] as Record<string, string>
      )[shadeKey];
    });
  });
  return theme;
};
