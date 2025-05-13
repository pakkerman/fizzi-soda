"use client";

import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { View } from "@react-three/drei";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import grainImage from "@/assets/textures/grain.jpg";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText: FC<AlternatingTextProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950 "
    >
      <div>
        <div className="relative z-[100] grid">
          {/* View goes here */}
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>
          {slice.primary.text_group.map(({ heading, body }, idx) => (
            <div
              key={asText(heading)}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2 relative"
            >
              <div className="backdrop-blur-lg [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-md:bg-white/20 -z-20">
                <div
                  className="absolute inset-0 opacity-5 -z-30 md:hidden"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                />
                <div
                  className={clsx(
                    idx % 2 === 0 ? "col-start-1" : "md:col-start-2",
                    "rounded-lg py-20 p-4 ",
                  )}
                >
                  <h2 className="text-balance text-6xl font-bold">
                    <PrismicText field={heading} />
                  </h2>
                  <div className="mt-6 text-xl">
                    <PrismicText field={body} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
