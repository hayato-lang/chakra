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
  ModalFooter,
  Stack 
} from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, isAdmin = false, onClose, user } = props;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setUsername(user?.username ?? "")
    setName(user?.name ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  }, [user]);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
  setUsername(e.target.value);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
  setName(e.target.value);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
  setEmail(e.target.value);

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
  setPhone(e.target.value);

  const onClickUpdate = () => alert();
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={username } onChange={onChangeName} isReadOnly={!isAdmin}/>
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} onChange={onChangeUsername} isReadOnly={!isAdmin}/>
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin}/>
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin}/>
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>
                更新
              </PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
})