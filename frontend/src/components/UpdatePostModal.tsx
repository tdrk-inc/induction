import {
  GetPostDocument,
  GetPostsDocument,
  UpdatePostFragment,
  useUpdatePostMutation,
} from "@/apollo/graphql";
import {
  chakra,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FormEvent } from "react";

type Props = {
  post: UpdatePostFragment;
  isOpen: boolean;
  onClose: () => void;
};

export function UpdatePostModal({ post, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <UpdatePostModalContent post={post} onClose={onClose} />
    </Modal>
  );
}

type ModalContentProps = {
  post: UpdatePostFragment;
  onClose: () => void;
};

function UpdatePostModalContent({ post, onClose }: ModalContentProps) {
  const toast = useToast();

  const [update] = useUpdatePostMutation({
    onCompleted: () => {
      toast({
        title: "更新しました",
        status: "success",
        duration: 2000,
      });
      onClose();
    },
    onError: () => {
      toast({
        title: "更新に失敗しました",
        status: "error",
        duration: 2000,
      });
    },
    refetchQueries: [GetPostsDocument, GetPostDocument],
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    update({
      variables: {
        input: {
          id: post.id,
          content: e.currentTarget.content.value,
        },
      },
    });
  };

  return (
    <ModalContent>
      <chakra.form onSubmit={onSubmit}>
        <ModalHeader>コンテント編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Textarea
              name="content"
              variant="content"
              borderWidth={1}
              defaultValue={post.content}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            キャンセル
          </Button>
          <Button variant="ghost" type="submit">
            更新
          </Button>
        </ModalFooter>
      </chakra.form>
    </ModalContent>
  );
}
