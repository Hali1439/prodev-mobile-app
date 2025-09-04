import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

// 🎨 Theme constants
const COLORS = {
  primary: "#34967C",
  secondary: "#FFA800",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#7E7B7B",
  lightGray: "#E9E9E9",
};

const FONT_SIZE = {
  small: 14,
  medium: 18,
  large: 24,
  xlarge: 32,
};

const SPACING = {
  xs: 5,
  small: 10,
  medium: 20,
  large: 30,
  xl: 40,
};

const BORDER_RADIUS = {
  small: 8,
  medium: 16,
  large: 30,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.medium,
  },
  title: {
    fontSize: FONT_SIZE.large,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: SPACING.small,
  },
  subtitle: {
    fontSize: FONT_SIZE.medium,
    fontWeight: "400",
    color: COLORS.gray,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimaryText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
    fontWeight: "600",
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondaryText: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.medium,
    fontWeight: "500",
  },
});

export { styles, COLORS, FONT_SIZE, SPACING, BORDER_RADIUS, height, width };
