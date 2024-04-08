import {
  TextareaProps,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";

const content = defineStyle<TextareaProps>({
  resize: "none",
  overflowY: "hidden",
  rounded: 0,
  h: 32,
  p: 4,
  _focus: {
    boxShadow: "none",
  },
});

export const Textarea = defineStyleConfig({
  variants: {
    content,
  },
});
