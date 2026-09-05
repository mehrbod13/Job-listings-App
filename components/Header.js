import { Box, Image } from "@chakra-ui/react";

const HeaderImage = () => {
  return (
    <>
      <Image
        alt="hero bg"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${detail.logo}`}
        display={{ md: "none" }}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
      />

      <Image
        alt="hero bg"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${detail.logo}`}
        display={{ base: "none", md: "block" }}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
      />
    </>
  );
};

export default function Header() {
  return (
    <Box
      width={"full"}
      height={"200px"}
      position={"relative"}
      bgColor={"var(--dark-cyan)"}
    >
      <HeaderImage />
    </Box>
  );
}
