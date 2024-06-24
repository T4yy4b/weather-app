import React from "react";
import { Center, Image, useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Text,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { InfoIcon } from "@chakra-ui/icons";
import { BiCurrentLocation } from "react-icons/bi";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import MapModal from "./MapModal";

function WeatherPortalDataDisplay({ weatherData }) {
  const weatherCondtionImg =
    weatherData?.record?.nowcast?.weatherConditionImage;
  const weatherTemp = weatherData?.record?.nowcast?.temp;
  const weatherUnits = weatherData?.record?.nowcast?.weatherParams[0]?.unit;
  const weatherCondtion = weatherData?.record?.nowcast?.weatherConditionEnglish;

  return (
    <>
      <VStack   h={{sm:"100%" , lg :"90%"}} w={"full"}  spacing={3} >
        <Flex  color="white">
          <MapModal weatherData={weatherData} />
        </Flex>

        <Flex
          w="full"
          flex={1}
          align={"center"}
          justify={"center"}
          flexDirection={{ base: "row", md: "row" ,lg:"column" }}
          // bg={"orange"}
          gap={{base : 12 , md:16}}
          
        >
          <Image
            src={weatherCondtionImg}
            alt="Weather condition"
            h={{ base: "73px", md: "150px", lg: "250px" }}
          />
          <VStack mt={{ base:"0px", lg :"50px"}} align={"center"}>
            <HStack align="center">
              {weatherData && (
                <Text
                  color="white"
                  w="full"
                  fontSize={["sm", "md", "lg", "xl"]}
                  fontWeight="bold"
                >
                  {weatherTemp}
                </Text>
              )}
              <Text fontSize={["sm", "md", "lg", "xl"]} fontWeight="bold">
                {weatherUnits}
              </Text>
            </HStack>
            <Box
              color="rgba( 255, 255, 245, 0.40 )"
              fontSize={["sm", "md", "lg", "xl"]}
            >
              {weatherCondtion}
            </Box>
          </VStack>
        </Flex>
      </VStack>
    </>
  );
}

export default WeatherPortalDataDisplay;
