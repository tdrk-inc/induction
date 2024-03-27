import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";

export function SigninForm() {
  return (
    <Stack alignItems="center" spacing={6} p={12}>
      <Heading as="h2">Mutter</Heading>
      <FormControl>
        <FormLabel>アカウントID</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>パスワード</FormLabel>
        <Input type="password" />
      </FormControl>
      <Link href="#" fontSize="small" fontWeight="bold" color="gray" ml="auto">
        アカウント作成はこちら
      </Link>
      <Button color="white" bgColor="black" rounded={24} w={64} mt={6}>
        ログイン
      </Button>
    </Stack>
  );
}
