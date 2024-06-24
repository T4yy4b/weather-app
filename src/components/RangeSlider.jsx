import { Box, Slider, SliderTrack, SliderFilledTrack } from "@chakra-ui/react";
import React from "react";

function RangeSlider({ defaultValues, gridentColor }) {
   const gradient = `linear(to-t, ${gridentColor.join(", ")})`
  return (
    
      <Slider
        aria-label="slider-ex-3"
        defaultValue={defaultValues}
        bgGradient= {gradient}
        orientation="vertical"
        minH="full"
        w={"20px"}
        shadow="0 8px 32px 0 rgba(31, 38, 135, 0.17)"
        borderColor="rgba(255, 255, 255, 0.18)"
        backdropFilter={"blur(15px)"}
        borderRadius="2xl"
        borderWidth={2}
        
        
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
      </Slider>
    
  );
}

export default RangeSlider;
