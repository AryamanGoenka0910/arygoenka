"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { TimelineSection } from "./TimelineSection";


const pageData1 = {
    timelines: [
        {
            title: "Work",
            milestones: [
                {
                    title: "JPMorgan Chase & Co.",
                    description: `
						Developed and integrated an automated data pipeline for classifying commercial loan operations emails, handling 1-2
						million emails annually, including extraction, summarization, and model evaluation on over 50,000 email attachments. 
					`,
                    duration: { start: "2024-01-10" },
                    tags: ["Software Engineering Intern"],
					image: "/jpmc.jpg"
                },
				{
                    title: "UofM EECS Departement",
                    description: `
						I am working as an IA for the EECS 280 departement, programming and data structures. I have helped provide help within office hours
						for a class of over 1000 students, and I taught a lab section once a week.
					`,
					duration: { start: "2024-08-22" },
                    tags: ["Instructional Aide (IA)"],
					image: "/uofm.jpg"
                },
				{
                    title: "Covanta Energy",
                    description: `
						Employed Python libraries for an algorithm to process over 4000+ PowerPoints, PDFs, emails, to structured CSV files.
						Leveraged Langchain to establish question and answer chain with chat history, and Open AIs LLM to to generate informative answers after identifying relevant documents from 1000+ entries
					`,
                    duration: { start: "2023-06-22", end: "2023-08-11" },
                    tags: ["Software Engineering Intern"],
					image: "/covanta.jpg"
                },
            ]
        },

		{
            title: "Education",
            milestones: [
                {
                    title: "University of Michigan",
                    description: `
						Coursework: Computer Organization, Discrete Math, Linear Algebra, Data Structures/Algorithms, Multi-Vec Calculus,
						Machine Learning, Probability and Statistics, Operating Systems, Computer Networks
					`,
                    duration: { start: "2022-08-28" },
                    tags: ["Computer Science", "Math"],
					image: "/uofm.jpg"
                },
				{
                    title: "Stuyvesant High School",
                    description: "",
                    duration: { start: "2018-09-10", end: "2022-06-26" },
                    tags: ["New York City"],
					image: "/stuy.png"
                },
            ]
        },		
    ]
};

export default function Example() {
	return (
		<div className="bg-gradient-to-b from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						About Me
					</h2>
				</div>

				<div className="borderw-full h-px bg-zinc-800" />
			</div>

			<div className="flex-grow px-4 md:px-16 lg:px-32">
				<div className="flex flex-col gap-4 text-black md:flex-row">
					<TimelineSection timelines={pageData1.timelines} />
				</div>
			</div>
		</div>
	);
}
