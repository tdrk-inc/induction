import { DisplayPostFragment } from "@/apollo/graphql";
import { HStack, Link, Stack, Text } from "@chakra-ui/react";

type Props = {
  post: DisplayPostFragment;
};

export function DisplayPost({ post }: Props) {
  return (
    <Stack
      as={Link}
      href={`/post/${post.id}`}
      borderBottomWidth="1px"
      borderBottomColor="glay"
      p={4}
    >
      <HStack>
        <Text color="blackAlpha.700">{post.account.name}</Text>
        <Text color="blackAlpha.700" fontSize="small">
          @{post.account.id}
        </Text>
      </HStack>
      <Text whiteSpace="pre-wrap">{post.content}</Text>
    </Stack>
  );
}
