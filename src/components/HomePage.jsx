import React from "react";
import { VStack, HStack, Spinner,Text , useBreakpointValue } from "@chakra-ui/react";
import { WiDayCloudy } from "react-icons/wi";

function HomePage() {
  const iconSize = useBreakpointValue({ base: "100px", md: "200px", lg: "300px" });
  const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  // const gap = useBreakpointValue({ base: 1, md: 4 });
  return (
    <VStack
      w={"100vw"}
      h={"100vh"}
      bg={"blue.900"}
      justify={"center"}
      color={"white"}
    >
      <HStack justify={"center"} fontSize={iconSize}>
        <WiDayCloudy />
      </HStack>
      <VStack>
        <Text fontSize={textSize}>LOOKING OUTSIDE FOR YOU ...</Text>
        <Text fontSize={textSize}>Just a Moment</Text>
      </VStack>
      <Spinner w={"20px"} h={"20px"} />
    </VStack>
  );
}

export default HomePage;
