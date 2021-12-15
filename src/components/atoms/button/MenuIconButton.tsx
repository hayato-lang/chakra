import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton 
    aria-label="メニューボタン" 
    size="sm" 
    variant="unstyled" 
    display={{ base:"block", md: "none" }}
    onClick={onOpen}
    />
  );
})