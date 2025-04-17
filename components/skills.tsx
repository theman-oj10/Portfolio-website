"use client";

import React, { useEffect, useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionHeading from './section-heading';
import { skillsData, skillsIcons } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useAnimation } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Script from 'next/script';

const fadeInAnimationVariants = {
    hidden: (index: number) => {
        const angle = (index / skillsData.length) * Math.PI * 2;
        const x = Math.cos(angle) * 1500;
        const y = Math.sin(angle) * 1500;
        return {
            opacity: 0,
            x: Math.round(x * 100) / 100,
            y: Math.round(y * 100) / 100,
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
    const ref = React.useRef<HTMLLIElement>(null);

    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: string | symbol | null }>({
        accept: ItemTypes.SKILL,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveSkill(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.SKILL,
        item: () => {
            return { index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;
    drag(drop(ref));

    const IconComponent = skillsIcons[skill as keyof typeof skillsIcons];

    return (
        <motion.li
            ref={ref}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={fadeInAnimationVariants}
            whileHover={{ scale: 1.1 }}
            style={{ opacity }}
            className="bg-white border border-black/[0.1] rounded-xl p-4 dark:bg-white/10 dark:text-white/80 cursor-move flex items-center justify-center w-20 h-20"
            data-tooltip-id={`skill-tooltip-${index}`}
            data-tooltip-content={skill}
            data-handler-id={handlerId}
        >
            {IconComponent ? (
                <IconComponent size={36} />
            ) : (
                <span className="text-sm">{skill}</span>
            )}
            <Tooltip id={`skill-tooltip-${index}`} />
        </motion.li>
    );
}

export default function Skills() {
    const controls = useAnimation();
    const [skills, setSkills] = useState<string[]>([...skillsData]);
    const { ref } = useSectionInView("Skills", 0.5);

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const moveSkill = (fromIndex: number, toIndex: number) => {
        setSkills((prevSkills) => {
            const updatedSkills = [...prevSkills];
            const [movedSkill] = updatedSkills.splice(fromIndex, 1);
            updatedSkills.splice(toIndex, 0, movedSkill);
            return updatedSkills;
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <section 
                ref={ref}
                id="skills" 
                className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            >
                <SectionHeading>Skills</SectionHeading>
                <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
                    {skills.map((skill, index) => (
                        <DraggableSkill
                            key={skill}
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