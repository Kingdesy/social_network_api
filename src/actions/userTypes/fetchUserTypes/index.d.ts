declare module "~root/actions/userTypes/fetchUserTypes" {
  export type UserTypes = {};

  export type FetchUserTypesResult = {
    userTypes: UserTypes[];
  };

  export type FetchUserTypesArguments = {
    userTypeId: number;
    userType: string;
  };

  const fetchUserTypes: (
    args: FetchUserTypesArguments
  ) => Promise<FetchUserTypesResult>;

  export = fetchUserTypes;
}
