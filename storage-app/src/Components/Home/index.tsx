import React from "react";
import { signIn, signOut } from "next-auth/react";
import { FetchUseSession } from "@/Hooks/useSession";
import Button from "@/Components/common/button";
import styles from "./Home.module.scss";

export default function HomeComponent() {
  const { session } = FetchUseSession();
  return (
    // ! This ain't looking that good
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    <div className={styles.authBtn}>
      {/* If the user is not sign in, the option to do so will appear. If the user is logged, then the button for signing out will appear */}
      {session ? (
        <Button
          // ! Holy hell fix this. Can't use "() => void" so what can I use.
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => signOut()}
          btnClass="btn-accent"
          text="Sign Out of GitHub!"
        />
      ) : (
        <Button
          // ! Holy hell fix this. Can't use "() => void" so what can I use.
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => signIn("github")}
          btnClass="btn-accent"
          text="Sign In with GitHub!"
        />
      )}
    </div>
  );
}
