import { useSigninLazyQuery } from "@/apollo/graphql";
import { SigninForm } from "@/components/SigninForm";
import { chakra, Box, Flex, useToast } from "@chakra-ui/react";
import { setCookie } from "nookies";
import { FormEvent } from "react";

export default function Signin() {
  const toast = useToast();

  const [signin] = useSigninLazyQuery({
    onCompleted: (data) => {
      setCookie(null, "token", data.signin);
    },
    onError: () => {
      toast({
        title: "サインインに失敗しました",
        status: "error",
        duration: 2000,
      });
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin({
      variables: {
        input: {
          id: e.currentTarget.account_id.value,
          password: e.currentTarget.password.value,
        },
      },
    });
  };

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box w="500px" boxShadow="15px 25px 75px gray">
        <chakra.form onSubmit={onSubmit}>
          <SigninForm />
        </chakra.form>
      </Box>
    </Flex>
  );
}
