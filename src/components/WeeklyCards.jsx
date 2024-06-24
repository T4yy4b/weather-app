import { VStack, Box, HStack, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
// import sunIcon from "../assets/images/sun.png"
import { FaRegDotCircle } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";

function WeeklyCards({ day, image, maxTemp, minTemp, condition }) {
  return (
    <VStack
      w={"150px"}
      // h={"150px"}
      h={{md : "150px"}}
      align={"center"}
      flexShrink={0}
      // bg={"red"}
    >
      <Heading>{day}</Heading>
      <Img src={image} h={"60px"} />

      <HStack align={"center"}>
        <Box color={"white"}> {maxTemp}°</Box>
        <BiSolidCircle fontSize={"6px"} />
        <Box color={"gray.500"}> {minTemp}°</Box>
      </HStack>
      <Text fontSize={"12px"}>{condition}</Text>
    </VStack>
  );
}

export default WeeklyCards;
