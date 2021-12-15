/* eslint-disable react-hooks/exhaustive-deps */

import { HamburgerIcon } from "@chakra-ui/icons";
import { 
  Flex, 
  Heading, 
  Box, 
  Link, 
  useDisclosure,
  IconButton
 } from "@chakra-ui/react";
import { memo, VFC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuDrawer } from "../../molcules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
  return (
    <>
      <Flex 
      as="nav" 
      bg="teal.500" 
      color="gray.50" 
      align="center" 
      justify="space-between"
      padding={{base: 3, md: 5}}
      >
        <Flex 
        align="center"
        as="a" 
        mr={8} 
        _hover={{ cursor: "pointer" }}
        onClick={onClickHome}
        >
          <Heading 
          as="h1" 
          fontSize={{ base:"md", md: "lg" }}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex 
        align="center" 
        fontSize="sm" 
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <IconButton 
         aria-label="メニューボタン"
         icon={<HamburgerIcon />}
         onClick={onOpen}
         size="sm"
         variant="unstyled"
         display={{ base:"block", md: "none" }}
         />
      </Flex>
      <MenuDrawer
       onClose={onClose}
        isOpen={isOpen} 
        onClickHome={onClickHome} 
        onClickSetting={onClickSetting} 
        onClickUserManagement={onClickUserManagement}
         />
    </>
  );
});