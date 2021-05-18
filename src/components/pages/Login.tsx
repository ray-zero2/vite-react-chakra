import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { memo, VFC } from "react";
import { Box, Divider, Flex, Heading, Input, Stack, } from '@chakra-ui/react'
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  let isMounted = true;

  const [userId, setUserId] = useState('');
  const { login, loading } = useAuth();

  useEffect(() => {
    return () => {
      console.log(isMounted);
      isMounted = false;
      console.log(isMounted);
    }
  }, []);

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => {
    if(isMounted) setUserId(() => { return event.target.value });
  }

  const onClickLogin = () => {
    login(userId);
  }

  return (
    <Flex align="center" justify="center" height="100vh" >
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId === ''}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
