import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Link } from "./components/Link";
import { Modal } from "./components/Modal";
import { Textarea } from "./components/Textarea";

export const theme = extendTheme({
  components: { Button, Link, Modal, Textarea },
});
