"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { TimelineSection } from './TimelineSection';  // Adjust the path as necessary


const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/aryaman-g/",
		label: "Linkedin",
		handle: "Aryaman Goenka",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:aryamang@umich.edu",
		label: "Email",
		handle: "aryamang@umich.edu",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/AryamanGoenka0910",
		label: "Github",
		handle: "AryamanGoenka0910",
	},
];

const pageData1 = {
    timelines: [
        {
            title: "Work",
            milestones: [
                {
                    title: "JPMorgan Chase & Co.",
                    description: "",
                    duration: { start: "2024-01-10" },
                    tags: ["Software Engineering Intern"],
					image: "/jpmc.jpg"
                },
				{
                    title: "University of Michigan EECS Departement",
                    description: "",
                    duration: { start: "2024-08-22" },
                    tags: ["Instructional Aide (IA)"],
					image: "/uofm.jpg"
                },
				{
                    title: "Covanta Energy",
                    description: "",
                    duration: { start: "2023-06-22", end: "2023-08-11" },
                    tags: ["Software Engineering Intern"],
					image: "/covanta.jpg"
                },
            ]
        },		
    ]
};

const pageData2 = {
    timelines: [
        {
            title: "Education",
            milestones: [
                {
                    title: "University of Michigan",
                    description: "Bachelor of Science in Computer Science",
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
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="flex-grow px-4 md:px-16 lg:px-32">
				<div className="mb-14">
					<div className="flex flex-col gap-4 pt-16 text-black md:flex-row">
						<div className="w-full md:w-1/2 px-4 md:px-0">
							<div className="border-b pb-5">
								<div className="mt-2">
									<TimelineSection timelines={pageData1.timelines} />
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 px-4 md:px-0">
							<div className="border-b pb-5">
								<div className="mt-2">
									<TimelineSection timelines={pageData2.timelines} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
