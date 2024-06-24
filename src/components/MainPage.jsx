import React, { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  VStack,
  HStack,
  Flex,
  Text,
  SimpleGrid,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import WindDisplayCard from "./WindDisplayCard";
import WindDisplayCardTwo from "./WindDisplayCardTwo";
import { getWeatherByLatLong } from "../api/weatherApi";
import WeatherPortalDataDisplay from "./WeatherPortalDataDisplay";
import WeeklyCards from "./WeeklyCards";
import HomePage from "./HomePage";
import axios from "axios";
import InternetConnection from "./InternetConnection";
import WeatherWeeklyForecast from "./WeatherWeeklyForecast";

function MainPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const defaultLocation = {
    lat: 33.6585552,
    long: 73.0533777,
  };

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });
          },
          (error) => {
            reject(error.message);
          }
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  };

  const fetchWeatherData = async (location) => {
    try {
      const data = await getWeatherByLatLong(location);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  console.log(weatherData);

  const templateArea = useBreakpointValue({
    base: `"dataPortal dataPortal"
           "weekly weekly"
           "windSpeed windDirection"
           "Humidity uvIndex"
           "rainChances Temperature"`,
    sm: `"dataPortal dataPortal"
         "weekly weekly"
         "windSpeed windDirection"
         "Humidity uvIndex"
         "rainChances Temperature"`,
    md: `"dataPortal dataPortal dataPortal"
         "weekly weekly weekly"
         "windSpeed windDirection Humidity"
         "uvIndex rainChances Temperature"`,
    lg: `"dataPortal weekly weekly weekly"
         "dataPortal windSpeed windDirection Humidity"
         "dataPortal uvIndex rainChances Temperature"`,
  });

  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "1fr",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const templateRows = useBreakpointValue({
    base: "repeat(5, auto)",
    sm: "repeat(5, auto)",
    md: "repeat(4, auto)",
    lg: "repeat(3, auto)",
  });

  useEffect(() => {
    const askForLocationPermission = async () => {
      try {
        const location = await getCurrentLocation();
        fetchWeatherData(location);
      } catch (error) {
        console.warn("Using default location due to error:", error);
        fetchWeatherData(defaultLocation);
      }
    };

    if (isOnline) {
      askForLocationPermission();
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline]);

  if (!isOnline) {
    return <InternetConnection />;
  }

  if (!weatherData) {
    return <HomePage />;
  }
  const windData = weatherData?.record?.nowcast?.weatherParams;
  const windDirection = weatherData?.record?.nowcast?.windDir;
  return (
    <Flex
      w={{ base: "100%", sm: "100%", md: "100vw", lg: "100vw" ,  }}
      h={{ base: "100%", sm: "100%", md: "100%", lg: "100%" , xl : "100vh" }}
      bg="black"
      justify="center"
      align="center"
      py={{ base: "20px", sm: "20px" }}
      px={{ base: "10px" }}
    >
      <Grid
        templateAreas={templateArea}
        templateColumns={templateColumns}
        templateRows={templateRows}
        gap={{base :4 , md : 4}}
        w={{ base: "100%", sm: "100%", md: "700px", lg: "1200px"  }}
        alignItems="center"
        // h={"650px"}
        h={{base: "100%",   lg:"650px"}}

        
        // p={"10px"}
      >
        <GridItem
          color="white"
          area="dataPortal"
          borderColor="rgba(255, 255, 255, 0.18)"
          shadow="0 8px 32px 0 rgba(31, 38, 135, 0.17)"
          borderWidth={2}
          backdropFilter="blur(15px)"
          borderRadius="2xl"
          h={{base:"200px" , lg:"full" , md :"250px" , lg : "full"}}
          alignContent="center"
          // p={{md:"2vw"}}
          w={{ base: "full", sm: "full", md: "full", lg: "300px" }}
        >
          <WeatherPortalDataDisplay weatherData={weatherData} />
        </GridItem>
        <GridItem
          area="weekly"
          color="white"
          borderColor="rgba(255, 255, 255, 0.18)"
          shadow="0 8px 32px 0 rgba(31, 38, 135, 0.17)"
          borderWidth={2}
          backdropFilter="blur(15px)"
          borderRadius="2xl"
          bg="rgba(255, 255, 255, 0.05)"
          w="full"
          h={"200px"}
          alignContent="center"
        >
          <HStack w="100%" justify="center" px={"1vw"}>
            <WeatherWeeklyForecast weatherData={weatherData} />
          </HStack>
        </GridItem>
        <GridItem area="Temperature">
          <WindDisplayCardTwo weatherData={weatherData} />
        </GridItem>
        <GridItem area="windSpeed">
          <WindDisplayCard
            icons={windData[0]?.icon?.web}
            titles={windData[0]?.title}
            values={windData[0]?.value}
            units={windData[0]?.unit}
          />
        </GridItem>
        <GridItem area="windDirection">
          <WindDisplayCard
            icons={windData[1]?.icon?.web}
            titles={windData[1]?.title}
            values={windData[1]?.value}
            units={windData[1]?.unit}
          />
        </GridItem>
        <GridItem area="Humidity">
          <WindDisplayCard
            icons={windData[2]?.icon?.web}
            titles={windData[2]?.title}
            values={windData[2]?.value}
            units={windData[2]?.unit}
          />
        </GridItem>
        <GridItem area="uvIndex">
          <WindDisplayCard
            icons={windData[3]?.icon?.web}
            titles={windData[3]?.title}
            values={windData[3]?.value}
            units={windData[3]?.unit}
          />
        </GridItem>
        <GridItem area="rainChances">
          <WindDisplayCard
            icons={windData[4]?.icon?.web}
            titles={windData[4]?.title}
            values={windData[4]?.value}
            units={windData[4]?.unit}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default MainPage;
