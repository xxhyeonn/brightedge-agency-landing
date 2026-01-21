"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const bottomLabelRef = useRef<HTMLDivElement>(null); // 우측 하단 라벨 Ref 추가
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const tlScroll = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=150%",
                        pin: true,
                        scrub: 1,
                    }
                });

                // 1. 왼쪽 흰색 마스크 레이어 슬라이드 (기존과 동일)
                tlScroll.to(maskRef.current, {
                    xPercent: -150,
                    ease: "none",
                    duration: 1
                }, 0);

                // 2. 우측 하단 라벨 애니메이션 (왼쪽 텍스트와 대칭적으로 사라짐)
                tlScroll.to(bottomLabelRef.current, {
                    //yPercent: 120, // 아래로 슬라이딩하며 사라짐
                    xPercent: 150, // 아래로 슬라이딩하며 사라짐
                    opacity: 0,
                    ease: "none",
                    duration: 1
                }, 0);

                // 3. 비디오 스케일 효과
                tlScroll.fromTo(videoRef.current,
                    { scale: 1.2 },
                    { scale: 1, ease: "none", duration: 1 },
                    0
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* 1. Background Layer */}
            <div className="absolute inset-0 z-0">
                <video ref={videoRef} src="/videos/hero01.mp4" autoPlay muted loop playsInline className="object-cover w-full h-full" />
            </div>

            {/* 2. Floating Badge & Label (Highest Z-Index) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {/* 회전하는 배지 */}
                <div className="absolute right-8 lg:right-20 bottom-1/3 flex items-center justify-center pointer-events-auto">
                    <div className="relative w-28 h-28 lg:w-40 lg:h-40 animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                            <text className="text-[10px] uppercase font-bold tracking-widest fill-white">
                                <textPath href="#curve">Create • Idea • Insight • Solution •</textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="absolute w-14 h-14 lg:w-20 lg:h-20 bg-[#FF5733] rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                    </div>
                </div>

                {/* 수정된 부분: 우측 하단 라벨 (ref 추가 및 스타일 조정) */}
                <div
                    ref={bottomLabelRef}
                    className="absolute bottom-0 right-0 bg-white p-6 lg:p-10 rounded-tl-[2.5rem] hidden lg:block max-w-sm pointer-events-auto"
                >
                    <h3 className="font-heading text-xl lg:text-2xl font-extrabold leading-tight uppercase text-black tracking-tighter">
                        Creating Work <br /> That Inspires
                    </h3>
                </div>
            </div>

            {/* 3. Mask Layer (Middle Z-Index) */}
            <div
                ref={maskRef}
                className="absolute inset-0 z-20 flex w-full lg:w-1/2 h-full bg-white px-6 lg:px-16 items-center"
            >
                <div className="flex flex-col gap-6 lg:gap-8">
                    <div className="flex items-center gap-2 text-[#FF4500]">
                        <span className="text-xl lg:text-2xl">*</span>
                        <span className="text-sm lg:text-base text-[#333] font-medium tracking-tight">We are digital design</span>
                    </div>

                    <h1 className="text-[11vw] lg:text-[9.5vw] leading-[0.85] font-extrabold tracking-tighter uppercase text-[#1a1a1a] whitespace-nowrap">
                        CREATORS
                    </h1>

                    <p className="text-sm lg:text-base text-gray-500 max-w-xs lg:max-w-sm font-light leading-relaxed">
                        From Concept to Creation — Beautiful design has the power to captivate audiences.
                    </p>

                    <div className="flex flex-col gap-3 mt-4 lg:mt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                        <Image src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`} alt="Team" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <Button size="icon" className="rounded-full w-10 h-10 lg:w-12 lg:h-12 border border-gray-300 bg-transparent text-black hover:bg-gray-100 transition-colors">
                                <MoveRight className="w-4 h-4 lg:w-5 lg:h-5" />
                            </Button>
                        </div>
                        <span className="text-gray-400 text-xs lg:text-sm font-medium">Meet Our Team</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
