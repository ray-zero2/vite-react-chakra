import React, { VFC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

interface Props {
  children: ReactNode
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
});
