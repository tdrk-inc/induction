import { LinkProps, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle<LinkProps>({
  _hover: {
    textDecoration: "none",
  },
});

const auth = defineStyle<LinkProps>({
  fontSize: "small",
  fontWeight: "bold",
  color: "gray",
});

export const Link = defineStyleConfig({
  baseStyle,
  variants: { auth },
});
