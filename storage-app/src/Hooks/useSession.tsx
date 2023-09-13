import { useSession} from "next-auth/react";

export const FetchUseSession = () => {
    
  const { data: session } = useSession();

  return { session }
};
