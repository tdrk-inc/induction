import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";

export function SignupForm() {
  return (
    <Stack alignItems="center" spacing={6} p={12}>
      <Heading as="h2">Mutter</Heading>
      <FormControl>
        <FormLabel>アカウント名</FormLabel>
        <Input name="account_name" />
      </FormControl>
      <FormControl>
        <FormLabel>アカウントID</FormLabel>
        <Input name="account_id" />
      </FormControl>
      <FormControl>
        <FormLabel>パスワード</FormLabel>
        <Input name="password" type="password" />
      </FormControl>
      <Link
        href="/auth/signin"
        fontSize="small"
        fontWeight="bold"
        color="gray"
        ml="auto"
      >
        ログインはこちら
      </Link>
      <Button
        color="white"
        bgColor="black"
        rounded={24}
        w={64}
        mt={6}
        type="submit"
      >
        登録
      </Button>
    </Stack>
  );
}
