"use client";

import React, { useEffect, useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useAnimation, useInView } from "framer-motion";

const fadeInAnimationVariants = {
    hidden: (index: number) => {
        const angle = (index / skillsData.length) * Math.PI * 2; // Calculate angle for circular motion
        const x = Math.cos(angle) * 1500; // Set X coordinate based on angle, larger value to move outside the viewport
        const y = Math.sin(angle) * 1500; // Set Y coordinate based on angle, larger value to move outside the viewport
        return {
            opacity: 0,
            x,
            y,
        };
    },
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            delay: 0.05 * index,
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }),
};

const ItemTypes = {
    SKILL: 'skill',
};

interface SkillProps {
    skill: string;
    index: number;
    moveSkill: (fromIndex: number, toIndex: number) => void;
    controls: any;
}

interface DragItem {
    index: number;
    type: string;
}

function DraggableSkill({ skill, index, moveSkill, controls }: SkillProps) {
    const [, ref] = useDrag({
        type: ItemTypes.SKILL,
        item: { index },
    });

    const [, drop] = useDrop<DragItem>({
        accept: ItemTypes.SKILL,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveSkill(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <motion.li
            ref={(node) => ref(drop(node))}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={fadeInAnimationVariants}
            whileHover={{ scale: 1.2 }}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
        >
            {skill}
        </motion.li>
    );
}

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const [skills, setSkills] = useState<string[]>([...skillsData]); // Convert to mutable array
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    const moveSkill = (fromIndex: number, toIndex: number) => {
        const updatedSkills = [...skills];
        const [movedSkill] = updatedSkills.splice(fromIndex, 1);
        updatedSkills.splice(toIndex, 0, movedSkill);
        setSkills(updatedSkills);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <section id="skills" ref={sectionRef} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
                <SectionHeading>Skills</SectionHeading>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {skills.map((skill, index) => (
                        <DraggableSkill
                            key={index}
                            index={index}
                            skill={skill}
                            moveSkill={moveSkill}
                            controls={controls}
                        />
                    ))}
                </ul>
            </section>
        </DndProvider>
    );
}
