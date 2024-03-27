import { SigninForm } from "@/components/SigninForm";
import { Box, Flex } from "@chakra-ui/react";

export default function Signin() {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box w="500px" boxShadow="15px 25px 75px gray">
        <SigninForm />
      </Box>
    </Flex>
  );
}
