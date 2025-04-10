"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project-item';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

    const {ref} = useSectionInView("Projects", 0.3);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>Projects</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}