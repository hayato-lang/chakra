import { 
  FormControl,
  FormLabel, 
  Input, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay, 
  Stack 
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="勇人" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="hayato tajima" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value="aggerenrique@yahoo.co.jp" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input value="090-1234-5678" isReadOnly/>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
})