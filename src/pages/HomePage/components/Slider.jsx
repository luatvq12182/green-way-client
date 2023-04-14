import React from "react";
import { Slide } from "react-slideshow-image";
import useSliders from "@/hooks/useSliders";
import { genSrcImg } from "@/utils";

const Slider = () => {
    const { data: sliders } = useSliders();

    console.log("sliders:", sliders);

    return (
        <Slide>
            <div
                key={sliders?.data?.[0]?.id}
                className='each-slide-effect'
            >
                <div
                    style={{
                        backgroundImage: `url(${genSrcImg(
                            sliders?.data?.[0]?.imageUrl
                        )})`,
                    }}
                ></div>
            </div>

            <div
                key={sliders?.data?.[1]?.id}
                className='each-slide-effect'
            >
                <div
                    style={{
                        backgroundImage: `url(${genSrcImg(
                            sliders?.data?.[1]?.imageUrl
                        )})`,
                    }}
                ></div>
            </div>

            <div
                key={sliders?.data?.[2]?.id}
                className='each-slide-effect'
            >
                <div
                    style={{
                        backgroundImage: `url(${genSrcImg(
                            sliders?.data?.[2]?.imageUrl
                        )})`,
                    }}
                ></div>
            </div>
            {/* {sliders?.data?.map((slider) => {
                return (
                    <div
                        key={slider.id}
                        className='each-slide-effect'
                    >
                        <div
                            style={{
                                backgroundImage: `url(${genSrcImg(
                                    slider.imageUrl
                                )})`,
                            }}
                        ></div>
                    </div>
                );
            })} */}
        </Slide>
    );
};

export default Slider;
