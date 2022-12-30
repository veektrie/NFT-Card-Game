import React from "react";
import { PageHOC, CustomInput } from "../components";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();

  return (
    <div className="flex flex-col">
      <CustomInput />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br />a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web# Battle Card
    Game
  </>
);
