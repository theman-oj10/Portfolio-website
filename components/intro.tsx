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
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 z-10 px-12">
          <motion.div
            className="mb-16 space-y-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 text-transparent bg-clip-text">
              Manoj Narender
            </h1>
            <p className="mb-8 text-5xl font-semibold text-gray-200">
              NUS Computer Science and Quantitative Finance
            </p>
            <p className="text-2xl text-gray-300 font-medium">
              Specialising in AI and Database Systems
            </p>
            <div className="text-3xl font-normal text-gray-200 mt-8">
              I&#39;m interested in{" "}
              {isClient && <TypewriterEffect />}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              className="group bg-gray-800 text-white px-12 py-4 text-xl flex items-center gap-3 rounded-full 
                         outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 
                         shadow-lg hover:shadow-gray-500/50 hover:bg-gray-700"
              href="/resume.pdf"
              download
            >
              Resume{" "}
              <HiDownload className="text-xl opacity-70 group-hover:translate-y-1 transition-all duration-300" />
            </a>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/manoj-narender-99a363228/"
                className="bg-gray-800 p-5 text-blue-400 flex items-center gap-2 rounded-full 
                           cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                           transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <BsLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/theman-oj10"
                className="bg-gray-800 p-5 text-gray-200 flex items-center gap-2 rounded-full 
                           cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                           transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/30"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right side - 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
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
            <ambientLight intensity={1.2} />
            <spotLight
              position={[0, 0, 5]}
              intensity={2.5}
              angle={0.5}
              penumbra={0.5}
              castShadow
            />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1.2}
            />
            <directionalLight 
              position={[-5, 5, -5]} 
              intensity={1.2}
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