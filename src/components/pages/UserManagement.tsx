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
import { useLoginUser } from "../../hooks/useLoginUsers";
import { useSelectUser } from "../../hooks/useSelectUser";

import { UserCard } from "../organism/user/UserCard";
import { UserDetailModal } from "../organism/user/UserDetailModal";


export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
    onOpen();
  }, [users, onSelectUser, onOpen]);
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
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}

                  />
            </WrapItem>
        ))}
      </Wrap>
    )}
    <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
  </>
  );
});