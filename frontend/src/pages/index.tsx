import { useCreatePostMutation, useGetPostsQuery } from "@/apollo/graphql";
import { PostForm } from "@/components/PostForm";
import { chakra, HStack, Stack, Text, useToast } from "@chakra-ui/react";
import { FormEvent } from "react";

export default function Home() {
  const toast = useToast();

  const { data } = useGetPostsQuery();

  const [post] = useCreatePostMutation({
    onCompleted: () => {
      toast({
        title: "投稿しました",
        status: "success",
        duration: 2000,
      });
      document.getElementsByTagName("textarea")[0].value = "";
    },
    onError: () => {
      toast({
        title: "投稿に失敗しました",
        status: "error",
        duration: 2000,
      });
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post({
      variables: {
        input: {
          content: e.currentTarget.content.value,
        },
      },
    });
  };

  return (
    <Stack alignItems="center" h="100vh">
      <Stack
        w="100%"
        maxW="750px"
        h="100%"
        boxShadow="0px 0px 100px gray"
        spacing={0}
      >
        <chakra.form onSubmit={onSubmit}>
          <PostForm />
        </chakra.form>
        {data?.posts.map((post) => (
          <Stack
            key={post.id}
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
        ))}
      </Stack>
    </Stack>
  );
}
