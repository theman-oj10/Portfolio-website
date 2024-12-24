"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import pfp from "@/public/devpic.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView, useIsClient } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import TypewriterEffect from './TypewriterEffect';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX, useAnimations} from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';

const Model = () => {
  const gltf = useGLTF('/3dmodel.glb');
  const fbx = useFBX('/hands.fbx');

  const mixer = new THREE.AnimationMixer(gltf.scene);
  const modelScale = 4;    
  const yPosition = -4;
  const zPosition = 0;

  useEffect(() => {
    if (fbx.animations && fbx.animations.length > 0) {
      const clock = new THREE.Clock();
      const animation = fbx.animations[0];
      const action = mixer.clipAction(animation);
      action.play();

      const animate = () => {
        const delta = clock.getDelta();
        mixer.update(delta);
        requestAnimationFrame(animate);
      };
      animate();

      return () => {
        action.stop();
        mixer.stopAllAction();
      };
    }
  }, [fbx, mixer]);

  return (
    <primitive 
      object={gltf.scene}
      scale={modelScale} 
      position={[0, yPosition, zPosition]}
      rotation={[0, 0, 0]}
    />
  );
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const isClient = useIsClient();

  return (
    <section
      id="home"
      ref={ref}
      className="max-w-[90rem] text-center scroll-mt-0 min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 z-10 px-8">
          <motion.h1
            className="mb-10 text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-8 text-7xl font-bold">Manoj Narender</p>
            <p className="mb-8 text-4xl font-semibold">
              NUS Computer Science and Quantitative Finance
            </p>
            
            <p className="mb-8 text-3xl font-normal">
              I&#39;m interested in{" "}
              {isClient && <TypewriterEffect />}
            </p>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-10 py-4 text-xl flex items-center gap-3 rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact{" "}
              <BsArrowRight className="text-xl opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-10 py-4 text-xl flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
              href="/resume.pdf"
              download
            >
              Resume{" "}
              <HiDownload className="text-xl opacity-70 group-hover:translate-y-1 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/manoj-narender-99a363228/"
              className="bg-white p-5 text-gray-700 flex items-center gap-2 rounded-full dark:bg-white/60 dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
            >
              <BsLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/theman-oj10"
              className="bg-white p-5 text-gray-700 flex items-center gap-2 rounded-full dark:bg-white/60 dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
            >
              <FaGithub className="text-2xl" />
            </a>
          </motion.div>
        </div>

        {/* Right side - 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="w-full lg:w-1/2 h-screen relative"
        >
          <Canvas 
            camera={{ 
              position: [0, 1, 10],
              fov: 50,
              near: 0.1,
              far: 1000
            }}
            className="h-full"
          >
            <ambientLight intensity={1} />
            <spotLight
              position={[0, 0, 5]}
              intensity={2}
              angle={0.5}
              penumbra={0.5}
              castShadow
            />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1}
            />
            <directionalLight 
              position={[-5, 5, -5]} 
              intensity={1}
            />
            
            <Suspense fallback={null}>
              <Model />
              <OrbitControls 
                enableZoom={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                enablePan={false}
                rotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}