import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bgColor="teal.400"
      color="white"
      _hover={{opacity: .8}}
      isLoading={loading}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
})
