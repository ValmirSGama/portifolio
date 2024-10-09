import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { FaAws, FaDocker, FaJava } from 'react-icons/fa'
import { GrMysql } from "react-icons/gr";
import { SiKubernetes, SiSpringboot } from "react-icons/si";

const TECHS = [
  {
    tech: 'Docker',
    icon: <FaDocker size={24} />,
    startDate: '2024-04-30',
  },
  {
    tech: 'AWS',
    icon: <FaAws size={24} />,
    startDate: '2024-02-14',
  },
  {
    tech: 'MySQL',
    icon: <GrMysql size={24} />,
    startDate: '2022-12-09',
  },
  {
    tech: 'Spring Boot',
    icon: <SiSpringboot size={24} />,
    startDate: '2023-10-15',
  },
  {
    tech: 'Java',
    icon: <FaJava size={24} />,
    startDate: '2023-08-16',
  },
  {
    tech: 'Kubernetes',
    icon: <SiKubernetes size={24} />,
    startDate: '2024-05-13',
  },
]

export const KnownTechs = () => {
  return (
    <section className="container my-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {TECHS.map((tech) => (
          <KnownTech key={tech.tech} tech={tech} />
        ))}
      </div>
    </section>
  )
}