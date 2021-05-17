import React, { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface Props {
  onOpen: () => void
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const {onOpen} = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      icon={<HamburgerIcon />}
      onClick={onOpen}
    />
  )
});
