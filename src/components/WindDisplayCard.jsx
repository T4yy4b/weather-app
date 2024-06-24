import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "./RangeSlider";

function WindDisplayCard({icons , units ,titles , values }) {
  return (
    <Box
      color={"white"}
      borderColor="rgba( 255, 255, 255, 0.18 )"
      shadow="0 8px 32px 0 rgba( 31, 38, 135, 0.17 )"
      borderWidth={2}
      backdropFilter={"blur(15px)"}
      borderRadius="2xl"
      bg="rgba( 255, 255, 255, 0.05 )"
      h={{base : "150px" , sm : "150px" , md : "170px" , lg : "200px" } }
      w={{base : "180px" , sm :"220px" , md: "230px" , lg : "200px" , xl:"full"}}


    >
      <HStack w={"full"} justify={"space-between"} h={"full"} p={ "20px"}  >
        <VStack justify={"space-around"} h={"full"} align={"start"} >
         
          <HStack align={"center"} spacing={{base:4 ,sm:4 }}    w={"100%"}>
            <Box >
              <img src={icons}  width={"20px"}/>
            </Box>
            <Text fontSize={{base : "14px" , md: "16px"}}>{titles}</Text>
          </HStack>
          <VStack>
            <HStack align={"baseline"} justify={"center"} spacing={2}>
              <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="bold">
               {values}
              </Text>
              <Text
                fontSize={{ base : "16px ",sm : "14px" , md: "20px"}}
                fontWeight={"400"}
                color={"rgba( 255, 255, 245, 0.40 )"}
              >
               {units}
              </Text>
            </HStack>
          </VStack>
        </VStack>
        {/* <Slider  defaultValues={props.defaultValues} gridentColor={props.gridentColor}/> */}
      </HStack>
    </Box>
  );
}

export default WindDisplayCard;
