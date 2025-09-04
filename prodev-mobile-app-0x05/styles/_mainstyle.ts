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

  // Added styles for Home screen
  searchGroup: {
    marginTop: SPACING.medium,
    marginBottom: SPACING.small,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: BORDER_RADIUS.medium,
    padding: SPACING.small,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
    marginRight: SPACING.small,
  },
  searchFormText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.gray,
    fontWeight: "500",
  },
  searchControl: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: BORDER_RADIUS.small,
    padding: SPACING.xs,
    marginTop: SPACING.xs,
    backgroundColor: COLORS.white,
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.medium,
    padding: SPACING.small,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.small,
    height: 72,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.medium,
    width: 60,
    height: 60,
    backgroundColor: COLORS.lightGray,
    borderRadius: BORDER_RADIUS.medium,
    padding: SPACING.xs,
  },
  listingContainer: {
    flex: 1,
    marginTop: SPACING.medium,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: SPACING.medium,
  },
  showMoreButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.medium,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
  },
  showMoreButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
    fontWeight: "600",
  },
});

export { styles, COLORS, FONT_SIZE, SPACING, BORDER_RADIUS, height, width };
