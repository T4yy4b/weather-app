import { HStack, Flex } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import WeeklyCards from "./WeeklyCards";

function WeatherWeeklyForecast({ weatherData }) {
  const hStackRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const dailyData = weatherData?.record?.daily;

  const updateScrollPosition = () => {
    if (hStackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = hStackRef.current;
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (hStackRef.current) {
      hStackRef.current.scrollBy({ left: -900, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (hStackRef.current) {
      hStackRef.current.scrollBy({ left: 900, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (dailyData) {
      updateScrollPosition();
    }

    const hStackElement = hStackRef.current;
    if (hStackElement) {
      hStackElement.addEventListener('scroll', updateScrollPosition);
    }

    return () => {
      if (hStackElement) {
        hStackElement.removeEventListener('scroll', updateScrollPosition);
      }
    };
  }, [dailyData]);

  console.log(dailyData);

  return (
    <Flex h={"100%"} w={"100%"} align={"center"}>
      <ChevronLeftIcon
        fontSize={"30px"}
        cursor={isLeftDisabled ? "default" : "pointer"}
        color={isLeftDisabled ? "gray" : "white"}
        onClick={isLeftDisabled ? null : scrollLeft}
      />
      <HStack
        ref={hStackRef}
        w={"90%"}
        overflowX={"scroll"}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          'msOverflowStyle': 'none',
          'scrollbarWidth': 'none',
          'scrollBehavior': 'smooth'
        }}
        gap={{base : 5 , md : 3 , lg : 1 , xl :12}}
      >
        {dailyData && dailyData.map((days, index) => (
          <WeeklyCards
            key={index}
            day={days?.dayOfWeek}
            image={days?.weatherConditionImage}
            maxTemp={days?.maxTemp}
            minTemp={days?.minTemp}
            condition={days?.weatherConditionEnglish}
          />
        ))}
      </HStack>
      <ChevronRightIcon
        fontSize={"30px"}
        cursor={isRightDisabled ? "default" : "pointer"}
        color={isRightDisabled ? "gray" : "white"}
        onClick={isRightDisabled ? null : scrollRight}
      />
    </Flex>
  );
}

export default WeatherWeeklyForecast;
