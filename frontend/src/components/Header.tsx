import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { MdArrowBackIos } from "react-icons/md";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <HStack
      alignItems="center"
      as={Link}
      href="/"
      h={10}
      spacing={4}
      px={4}
      pt={4}
    >
      <Icon as={MdArrowBackIos} boxSize={6} />
      <Text fontSize="lg">{title}</Text>
    </HStack>
  );
}
