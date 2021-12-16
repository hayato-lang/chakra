import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organism/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard
           imageUrl="https://source.unsplash.com/random"
           userName="はやと"
           fullName="Hayato Tajima"
           />
        </WrapItem>
    </Wrap>
  );
});