import { SigninForm } from "@/components/SigninForm";
import { chakra, Box, Flex } from "@chakra-ui/react";
import { FormEvent } from "react";

export default function Signin() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
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
