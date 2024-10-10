import { TechBadge } from '@/app/components/tech-badge'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'

const experiences = [
  {
    companyName: "Compass Uol",
    companyUrl: "https://www.linkedin.com/company/compass-uol/posts/?feedView=all",
    companyLogo: "/images/LogoBlackCompass.png",
    role: "DevSecOps JR - Estágio",
    description: [
      "Desenvolvimento e arquitetura de projetos e-commerce em AWS Cloud utilizando Linux.",
      "Implementação e gerenciamento de contêineres com Docker e orquestração com Kubernetes.",
      "Colaboração em equipes multifuncionais para o desenvolvimento seguro de aplicações."
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Linux"],
    startDate: "2024-01-22",
    endDate: "2024-06-22",
  }
  // Adicione mais experiências conforme necessário
]

type ExperienceItemProps = {
  experience: typeof experiences[0] // Adapta o tipo para o objeto de experiência
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    technologies,
  } = experience

  const startDate = new Date(experience.startDate)
  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const end = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo}
            width={40}
            height={40}
            className="rounded-full"
            alt={`Logo da empresa ${companyName}`}
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <ul className="list-disc list-inside">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map(tech => (
            <TechBadge
              name={tech}
              key={`experience-${companyName}-tech-${tech}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Faz o mapeamento de todas as experiências do array e renderiza o componente ExperienceItem para cada uma.
export const ExperienceList = () => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </div>
  )
}