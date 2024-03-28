import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Link } from "./components/Link";

export const theme = extendTheme({
  components: { Button, Link },
});
