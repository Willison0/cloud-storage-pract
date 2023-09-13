import React from "react";
import { signIn, signOut } from "next-auth/react";
import { FetchUseSession } from "@/Hooks/useSession";
import Button from "@/Components/common/button";
import styles from "./Topbar.module.scss";

export default function Topbar() {
    const { session } = FetchUseSession();
    return (
      // ! This ain't looking that good
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      <div className={styles.authBtn}>
        {/* If the user is not sign in, the option to do so will appear. If the user is logged, then the button for signing out will appear */}
        {session ? (
          // <Button
          //   // ! Holy hell fix this. Can't use "() => void" so what can I use.
          //   // eslint-disable-next-line @typescript-eslint/no-misused-promises
          //   
          //   btnClass="btn-accent"
          //   text="Sign Out of GitHub!"
          // />
          // TODO This doesn't seem that bad all in all
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={styles.profileImg}
            // TODO This one, on the other side...
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => signOut()}
            src={session.user.image!}
            alt="User's image"
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
  