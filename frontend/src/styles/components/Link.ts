import { LinkProps, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const auth = defineStyle<LinkProps>({
  fontSize: "small",
  fontWeight: "bold",
  color: "gray",
});

export const Link = defineStyleConfig({
  variants: { auth },
});
