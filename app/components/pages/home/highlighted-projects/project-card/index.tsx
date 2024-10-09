import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

const projects = [
  {
    title: "To Do List",
    description: "Este é um projeto de uma aplicação simples e eficiente de lista de tarefas (To-Do List), desenvolvida com o objetivo de facilitar o gerenciamento e a organização de atividades diárias.",
    imageUrl: "/images/Tambmail To Do List.png",
    altText: "Thumbnail do projeto To Do List",
    techs: ["JavaScript", "HTML", "CSS"],
    link: "/projects/To Do List",
  },
  {
    title: "Relógio Analógico",
    description: "Este projeto é um relógio analógico simples, desenvolvido em JavaScript, HTML e CSS. Conta também com um botão para alternar entre os modos claro e escuro.",
    imageUrl: "/images/Page Thumbnail Relogio Analogico.png",
    altText: "Page Thumbnail do projeto Relogio Analógico",
    techs: ["JavaScript", "HTML", "CSS"],
    link: "/projects/Relogio Analogico",
  },
  // Adicionar mais projetos aqui
];

export const ProjectCard = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
          <Image
            width={420}
            height={304}
            src={project.imageUrl}
            alt={project.altText} 
            className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:h-[300px] object-cover rounded-lg"
          />
            
          <div className="lg:py-[18px]">
            <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
              <Image
                width={20}
                height={20}
                alt=""
                src="/images/icons/project-title-icon.svg"
              />
              {project.title}
            </h3>

            <p className="text-gray-400 my-6">
              {project.description}
            </p>

            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
              {project.techs.map((tech, techIndex) => (
                <TechBadge name={tech} key={techIndex} />
              ))}
            </div>

            <Link href={project.link}>
              Ver projeto
              <HiArrowNarrowRight />
            </Link>

            {index < projects.length - 1 && (
              <HorizontalDivider className="my-16" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}