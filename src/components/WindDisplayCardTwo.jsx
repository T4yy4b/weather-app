import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { FaTemperatureHigh } from "react-icons/fa";

function WindDisplayCardTwo({ weatherData }) {
  const maxTemp = weatherData?.record?.nowcast?.maxTemp;
  const units = weatherData?.record?.nowcast?.weatherParams[0]?.unit;
  const minTemp = weatherData?.record?.nowcast?.minTemp;
  return (
    <Box
      color={"white"}
      bg={"rgba( 255, 255, 255, 0.05 )"}
      borderWidth={2}
      shadow={"0 8px 0 rgba(31,38,135,0.17)"}
      backdropFilter={"blur(15px)"}
      borderColor={"rgba(255,255,255,0.18)"}
      borderRadius={"20px"}
      p={"20px"}
      h={{ base: "150px", sm: "150px", md: "170px", lg: "200px" }}
      w={{ base: "180px", sm: "220px", md: "230px", lg: "200px", xl: "full" }}
    >
      <VStack
        justify={"space-around"}
        align={"start"}
        p={"20px"}
        gap={{ base: 9, sm: 8, md: 12, lg: 14 }}
      >
        <HStack>
          <Box
            fontSize={{ base: "20px" }}
            border={"none"}
            outline={"none"}
            color={"gray.600"}
          >
            <FaTemperatureHigh />
          </Box>
          <Box fontSize={{ base: "14px", md: "18px" }}>Temperature</Box>
        </HStack>
        <VStack align={"flex-start"} spacing={{base : 0 , md :2}} flexDirection={"row"}>
          <HStack spacing={0} gap={0} align={"center"} justify={"center"}>
            <Box fontSize={{ base: "18px", md: "20px", lg: "16px" }}>
              <ArrowUpIcon />
            </Box>
            <HStack>
              <Text fontSize={{ base: "14px", md: "18px", lg: "16px" }} fontWeight={"bold"}>
                {maxTemp}
              </Text>
              <Text
                color={"rgba( 255, 255, 245, 0.40 )"}
                fontSize={{ base: "12px", sm: "14px", md: "18px", lg: "16px" }}
              >
                {units}
              </Text>
            </HStack>
          </HStack>
          <HStack spacing={0}>
            <Box fontSize={{ base: "18px", md: "20px", lg: "16px" }}>
              <ArrowDownIcon />
            </Box>
            <HStack>
              <HStack align={"center"}>
                <Text fontSize={{ base: "14px", md: "18px", lg: "16px" }} fontWeight={"bold"}>
                  {minTemp}
                </Text>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "18px",
                    lg: "16px",
                  }}
                  color={"rgba( 255, 255, 245, 0.40 )"}
                  
                >
                  {units}
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default WindDisplayCardTwo;
