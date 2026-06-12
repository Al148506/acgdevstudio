import type { ProjectModalData } from "../../data/projects.modal.data"
import { useTranslation } from "react-i18next"
import "./ProjectModal.css"

interface Props {
  project: ProjectModalData | null
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: Props) => {
  const { t } = useTranslation()

  if (!project) return null

  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal">

        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="modal-image-wrapper">
          <img src={project.image} alt={t(project.titleKey)} />
          <div className="modal-image-overlay">
            <h3>{t(project.titleKey)}</h3>
          </div>
        </div>

        <div className="modal-content-body">
          <section>
            <h6><i className="bi bi-bullseye me-2"></i>{t('projectsSection.modalLabels.objective')}</h6>
            <p>{t(project.objectiveKey)}</p>
          </section>

          <section>
            <h6><i className="bi bi-tools me-2"></i>{t('projectsSection.modalLabels.technologies')}</h6>
            <div className="tech-badges">
              {project.technologies.map((tech: string, index: number) => (
                <span key={index} className="badge bg-primary">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default ProjectModal
