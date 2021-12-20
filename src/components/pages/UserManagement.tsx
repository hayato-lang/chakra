/* eslint-disable react-hooks/exhaustive-deps */
import { 
  Wrap, 
  WrapItem, 
  Center, 
  Spinner, 
  useDisclosure 
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";

import { UserCard } from "../organism/user/UserCard";
import { UserDetailModal } from "../organism/user/UserDetailModal";

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
    <UserDetailModal isOpen={isOpen} onClose={onClose} />
  </>
  );
});