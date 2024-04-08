import { Button, FormControl, Stack, Textarea } from "@chakra-ui/react";

export function PostForm() {
  return (
    <Stack borderColor="glay" borderWidth="1px" p={4}>
      <FormControl>
        <Textarea border="none" variant="content" />
      </FormControl>
      <Button variant="submit" type="submit" w="fit-content" ml="auto">
        投稿
      </Button>
    </Stack>
  );
}
