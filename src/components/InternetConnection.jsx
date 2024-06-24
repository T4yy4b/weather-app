import React from "react";
import { VStack, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { WiNightAltSleetStorm } from "react-icons/wi";

function InternetConnection() {
  // Use useBreakpointValue to make fontSize responsive
  const iconSize = useBreakpointValue({ base: "100px", md: "200px", lg: "300px" });
  const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const gap = useBreakpointValue({ base: 1, md: 4 });

  return (
    <VStack
      w={"100vw"}
      h={"100vh"}
      bg={"blue.900"}
      justify={"center"}
      color={"white"}
      p={4} // Use the padding value here
    >
      <HStack justify={"center"} fontSize={iconSize}>
        <WiNightAltSleetStorm />
      </HStack>
      <VStack textAlign={"center"} spacing={gap}>
        <Text fontSize={textSize}>No Internet connection found.</Text>
        <Text fontSize={textSize}>Check your connection or try again.</Text>
      </VStack>
    </VStack>
  );
}

export default InternetConnection;
