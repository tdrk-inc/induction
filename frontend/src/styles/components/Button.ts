import { ButtonProps, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const submit = defineStyle<ButtonProps>({
  bgColor: "black",
  color: "white",
  rounded: 24,
  w: 64,
  mt: 6,
});

export const Button = defineStyleConfig({
  variants: {
    submit,
  },
});
