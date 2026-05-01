"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import Button from "../../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    rotation: -8,
    z: 5,
    desktop: { w: 380, h: 280, x: "-28vw", y: "-20vh" },
    tablet: { w: 240, h: 180, x: "-18vw", y: "-16vh" },
    mobile: { w: 200, h: 150, x: "-14vw", y: "-20vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    rotation: 12,
    z: 25,
    desktop: { w: 340, h: 440, x: "32vw", y: "8vh" },
    tablet: { w: 220, h: 300, x: "18vw", y: "6vh" },
    mobile: { w: 180, h: 230, x: "14vw", y: "4vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    rotation: -4,
    z: 15,
    desktop: { w: 440, h: 300, x: "-12vw", y: "28vh" },
    tablet: { w: 260, h: 180, x: "-8vw", y: "18vh" },
    mobile: { w: 260, h: 150, x: "-6vw", y: "14vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3",
    rotation: 15,
    z: 5,
    desktop: { w: 360, h: 480, x: "22vw", y: "-28vh" },
    tablet: { w: 230, h: 310, x: "14vw", y: "-18vh" },
    mobile: { w: 200, h: 250, x: "10vw", y: "-14vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1536337005238-94b997371b40",
    rotation: -10,
    z: 25,
    desktop: { w: 420, h: 320, x: "-32vw", y: "15vh" },
    tablet: { w: 250, h: 190, x: "-20vw", y: "10vh" },
    mobile: { w: 250, h: 150, x: "-14vw", y: "8vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    rotation: 6,
    z: 15,
    desktop: { w: 400, h: 340, x: "12vw", y: "22vh" },
    tablet: { w: 250, h: 210, x: "8vw", y: "14vh" },
    mobile: { w: 250, h: 180, x: "6vw", y: "10vh" },
  },
];

const ANIM_DURATION = 40;

export default function MomentOfImpact() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        mobile: "(max-width: 767px)",
        tablet: "(min-width: 768px) and (max-width: 1023px)",
        desktop: "(min-width: 1024px)",
      },
      (context) => {
        const { mobile, tablet } = context.conditions;

        const travel = mobile ? "105vh" : tablet ? "115vh" : "130vh";

        const imgs = gsap.utils.toArray(".impact-img");
        const step = (100 - ANIM_DURATION) / (images.length - 1);

        imgs.forEach((img, i) => {
          const start = i * step;
          const end = start + ANIM_DURATION;

          gsap.fromTo(
            img,
            {
              y: travel,
              rotation: images[i].rotation * 0.5,
            },
            {
              y: `-${travel}`,
              rotation: images[i].rotation,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: `${start}% top`,
                end: `${end}% top`,
                scrub: 1,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ minHeight: `${(images.length + 1) * 100}vh` }}
    >
      {/* TEXT */}
      <div className="sticky top-0 h-screen flex items-center justify-center text-center px-6 z-10">
        <div className="max-w-5xl">
          <h2 className="font-helixa font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
            Moments of Impact
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Explore highlights from our initiatives, community outreach, and the
            lives we are touching.
          </p>

          <Button 
            label="Explore Gallery" 
            href="/gallery" 
            variant="primary"
            className="mt-8"
          />
        </div>
      </div>

      {/* IMAGES */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        {images.map((img, i) => (
          <div
            key={i}
            className="impact-img absolute inset-0 flex items-center justify-center"
            style={{ zIndex: img.z }}
          >
            <ResponsiveImage img={img} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ResponsiveImage({ img }) {
  const ref = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      mobile: "(max-width: 767px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
      desktop: "(min-width: 1024px)"
    }, (context) => {
      const { mobile, tablet } = context.conditions;
      const layout = mobile ? img.mobile : tablet ? img.tablet : img.desktop;

      gsap.set(ref.current, {
        width: layout.w,
        height: layout.h,
        x: layout.x,
        y: layout.y,
        rotation: img.rotation,
      });
    });

    return () => mm.revert();
  }, [img]);

  return (
    <div
      ref={ref}
      className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    >
      <Image
        src={img.src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}