import { Button, FormControl, Stack, Textarea } from "@chakra-ui/react";

export function PostForm() {
  return (
    <Stack borderColor="glay" borderWidth="1px" p={4}>
      <FormControl>
        <Textarea
          name="content"
          border="none"
          resize="none"
          overflowY="hidden"
          rounded={0}
          h={32}
          p={0}
          _focus={{ boxShadow: "none" }}
        />
      </FormControl>
      <Button variant="submit" type="submit" w="fit-content" ml="auto">
        投稿
      </Button>
    </Stack>
  );
}
