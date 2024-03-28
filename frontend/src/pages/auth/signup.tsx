import { useSignupMutation } from "@/apollo/graphql";
import { SignupForm } from "@/components/SignupForm";
import { chakra, Box, Flex, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Signup() {
  const router = useRouter();
  const toast = useToast();

  const [signup] = useSignupMutation({
    onCompleted: () => {
      router.push("/auth/signin");
    },
    onError: (error) => {
      toast({
        title:
          error.message === "Account ID already exists."
            ? "アカウントIDが既に利用されています"
            : "アカウントの作成に失敗しました",
        status: "error",
        duration: 2000,
      });
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({
      variables: {
        input: {
          name: e.currentTarget.account_name.value,
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
          <SignupForm />
        </chakra.form>
      </Box>
    </Flex>
  );
}
