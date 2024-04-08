import { useGetAccountQuery } from "@/apollo/graphql";
import { ReactNode, createContext } from "react";

type AccountContextProps = {
  accountId?: string;
};

export const AccountContext = createContext<AccountContextProps>({
  accountId: undefined,
});

type Props = {
  token: string;
  children: ReactNode;
};

export function AccountProvider({ token, children }: Props) {
  let accountId: string | undefined;
  if (token) {
    const { data } = useGetAccountQuery();
    accountId = data?.account.id;
  }

  return (
    <AccountContext.Provider value={{ accountId }}>
      {children}
    </AccountContext.Provider>
  );
}
