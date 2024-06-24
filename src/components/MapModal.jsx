import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { InfoIcon } from "@chakra-ui/icons";
import { BiCurrentLocation } from "react-icons/bi";
import {
  Button,
  HStack,
  Flex,
  VStack,
  Text,
  Box,
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

function MapModal({ weatherData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const coordinates = [
    weatherData?.record?.location?.coordinates[1],
    weatherData?.record?.location?.coordinates[0],
  ];
  const points = weatherData?.record?.poi;
  const distance = weatherData?.record?.distance;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}  >
        <ModalOverlay bg="rgba(0, 0, 0, 0.7)" w="100vw" h="100vw" />
        <ModalContent
          bg="white"
          w={{sm:"100vw" , lg :"65%"}}
          h="95vh"
          m="auto"
          borderRadius="8px"
        >
          <Flex w="100%" justifyContent="space-between" p="2vw" align="center">
            <ModalHeader flexGrow={1} fontWeight="bold" fontSize={{ sm:"16px" ,  lg:"23px"}}>
              Weather Point
            </ModalHeader>
            <ModalCloseButton justifyContent="end" p="10px" fontSize="10px" border={"1px solid black"} outline={"none"} _focus={{border : "none"}} />
          </Flex>

          <ModalBody overflow={"hidden"}>
            <Flex
              w="100%"
              h="70px"
              bg="orange.100"
              align="center"
              px="2vw"
              py="20px"
            >
              <HStack spacing={3} h={"55px"}>
                <Box>
                  <InfoIcon color="orange.400" fontSize="25px" />
                </Box>
                <Text fontSize={{ sm : "12px" , lg :"22px"}} lineHeight={{sm : "15px" , lg:"22px"}} textAlign={"left"}>
                  Weather point is <b>{points}</b> which is <b>{distance} Km</b>{" "}
                  away from your location
                </Text>
              </HStack>
            </Flex>
            <Box height="700px" width="100%" mt={"20px"} px={"40px"}>
              {coordinates && (
                <MapContainer
                  center={coordinates}
                  zoom={10}
                  style={{
                    height: "100%",
                    width: "100%",
                    _focus: {
                      border: "2px solid black",
                      outline: "2px solid black",
                    },
                    borderRadius: "5px",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {/* Ensure Marker is positioned correctly */}
                  <Marker position={coordinates}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button
        onClick={onOpen}
        // w="full"
        border="none"
        _hover={{ border: "none", outline: "none" }}
        _focus={{ outline: "none" }}
        
      >
        <HStack
          // maxH="50px"
          // w="full"
          justify="center"
          alignItems="flex-start"
          gap={1}
          cursor="pointer"
        >
          <Flex fontSize="25px" color="orange.400">
            {<BiCurrentLocation />}
          </Flex>
          <VStack
            m="0"
            p="0"
            gap="0px"
            align="left"
            w="30%"
            // overflow="hidden"
            alignItems="flex-start"
          >
            {weatherData && (
              <>
                <Text
                  color="white"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  w="100%"
                  fontSize="16px"
                  flexShrink={0}
                >
                  {weatherData?.record?.locality?.address}
                </Text>
                <Text color="white">{weatherData?.record?.locality?.city}</Text>
              </>
            )}
          </VStack>
        </HStack>
      </Button>
    </>
  );
}

export default MapModal;
