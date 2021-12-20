/* eslint-disable react-hooks/exhaustive-deps */
import { 
  Wrap, 
  WrapItem, 
  Center, 
  Spinner, 
  Modal, 
  ModalContent, 
  ModalOverlay, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  useDisclosure 
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";

import { UserCard } from "../organism/user/UserCard";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => onOpen(), []);
  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
    ): (
      <Wrap p={{ base: 4, md: 10 }}>
        {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
                  <UserCard
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                  />
            </WrapItem>
        ))}
      </Wrap>
    )}
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
    </>
  );
});