import type { Project } from "./types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GalleryModal } from "./GalleryModal";
import "./ProjectCard.css";

interface Props {
  project: Project;
  onMoreDetails: () => void;
}

export const ProjectCard = ({ project, onMoreDetails }: Props) => {
  const [openGallery, setOpenGallery] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="showcase-card">
        <div className="showcase-image" onClick={() => setOpenGallery(true)}>
          <img src={project.image} alt={t(project.titleKey)} />
          <div className="showcase-image-overlay" />
        </div>

        <div className="showcase-content">
          <span className="showcase-index">{t('projectsSection.label')}</span>

          <h2>{t(project.titleKey)}</h2>

          <p>{t(project.descriptionKey)}</p>

          <div className="showcase-divider" />

          <section className="project-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                {t('projectsSection.modalLabels.viewProject')}
              </a>
            )}
          </section>

          <div className="showcase-buttons">
            <button onClick={onMoreDetails}>{t('projectsSection.viewProject')} →</button>
          </div>
        </div>
      </div>
      {openGallery && project.gallery && (
        <GalleryModal projectTitle={t(project.titleKey)}
          images={project.gallery}
          onClose={() => setOpenGallery(false)}
        />
      )}
    </>
  );
};
