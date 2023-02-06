import { useWeb3Modal } from "@web3modal/react";
import cn from "classnames";
import { FC, useEffect, useMemo } from "react";
import { useAccount, useNetwork } from "wagmi";
import { selectUser, setWallet } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const ConnectButton: FC = () => {
  const { open, isOpen } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const shortAddress = useMemo(
    () => user.wallet?.slice(0, 9) + "..." + user.wallet?.slice(-4),
    [user.wallet]
  );

  const onClick = async () => {
    await open();
  };

  useEffect(() => {
    dispatch(setWallet(address));
  }, [address]);

  useEffect(() => {
    if (isConnected && chain?.name !== "Goerli") {
      alert("Please, select Goerli network");
    }
  }, [chain]);

  return (
    <>
      {isConnected ? (
        <button
          className={cn("btn", "btn_tertiary", "btn_large", "btn_with_logo")}
          onClick={onClick}
          disabled={isOpen}
        >
          <div>
            <img
              src={process.env.PUBLIC_URL + "assets/logos/logo_metamask.svg"}
              alt="Metamask logo"
            />
          </div>
          <div>{shortAddress}</div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "assets/icons/disconnect.svg"}
              alt="Disconnect icon"
            />
          </div>
        </button>
      ) : (
        <button
          className={cn("btn", "btn_primary", "btn_large")}
          onClick={onClick}
          disabled={isOpen}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default ConnectButton;
