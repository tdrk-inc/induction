import { DisplayPostFragment } from "@/apollo/graphql";
import {
  chakra,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";
import { UpdatePostModal } from "./UpdatePostModal";
import { useContext } from "react";
import { AccountContext } from "@/providers/AccountProvider";
import { FiTrash } from "react-icons/fi";
import { RemovePostAlert } from "./RemovePostAlert";

type Props = {
  post: DisplayPostFragment;
};

export function DisplayPost({ post }: Props) {
  const context = useContext(AccountContext);

  const {
    isOpen: isUpdateModalOpen,
    onOpen: onUpdateModalOpen,
    onClose: onUpdateModalClose,
  } = useDisclosure();
  const {
    isOpen: isRemoveAlertOpen,
    onOpen: onRemoveAlertOpen,
    onClose: onRemoveAlertClose,
  } = useDisclosure();

  return (
    <Stack borderBottomWidth="1px" borderBottomColor="glay" pt={4}>
      <Stack as={Link} href={`/post/${post.id}`} px={4}>
        <HStack>
          <Text color="blackAlpha.700">{post.account.name}</Text>
          <Text color="blackAlpha.700" fontSize="small">
            @{post.account.id}
          </Text>
        </HStack>
        <Text whiteSpace="pre-wrap">{post.content}</Text>
      </Stack>
      <HStack justifyContent="end" spacing={8} px={4}>
        <chakra.button
          color={
            post.account.id === context.accountId ? "black" : "blackAlpha.400"
          }
          onClick={onUpdateModalOpen}
          disabled={post.account.id !== context.accountId}
        >
          <Icon as={MdOutlineEdit} boxSize={5} />
        </chakra.button>
        <UpdatePostModal
          post={post}
          isOpen={isUpdateModalOpen}
          onClose={onUpdateModalClose}
        />
        <chakra.button
          color={
            post.account.id === context.accountId
              ? "red"
              : "rgba(255, 0, 0, 0.4)"
          }
          onClick={onRemoveAlertOpen}
          disabled={post.account.id !== context.accountId}
        >
          <Icon as={FiTrash} boxSize={5} />
        </chakra.button>
        <RemovePostAlert
          id={post.id}
          isOpen={isRemoveAlertOpen}
          onClose={onRemoveAlertClose}
        />
      </HStack>
    </Stack>
  );
}
