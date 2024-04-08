import { GetPostsDocument, useRemovePostMutation } from "@/apollo/graphql";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

type Props = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
};

export function RemovePostAlert({ id, isOpen, onClose }: Props) {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay />
      <RemovePostAlertContent id={id} onClose={onClose} />
    </AlertDialog>
  );
}

type AlertContentProps = {
  id: number;
  onClose: () => void;
};

function RemovePostAlertContent({ id, onClose }: AlertContentProps) {
  const toast = useToast();

  const [remove] = useRemovePostMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      toast({
        title: "削除しました",
        status: "success",
        duration: 2000,
      });
      onClose();
    },
    onError: () => {
      toast({
        title: "削除に失敗しました",
        status: "error",
        duration: 2000,
      });
    },
    refetchQueries: [GetPostsDocument],
  });

  return (
    <AlertDialogContent>
      <AlertDialogHeader>削除</AlertDialogHeader>
      <AlertDialogBody>投稿を削除しますか？</AlertDialogBody>
      <AlertDialogFooter>
        <Button variant="ghost" onClick={onClose}>
          キャンセル
        </Button>
        <Button variant="ghost" onClick={() => remove()}>
          削除
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
