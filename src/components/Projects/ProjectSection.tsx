import { useTranslation, Trans } from "react-i18next";
import { ProjectCarousel } from "./ProjectCarousel";
import "./ProjectsSection.css";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        <span className="section-eyebrow">{t('projects.eyebrow')}</span>
        <h2 className="section-title">
          <Trans i18nKey="projects.title" components={{ 1: <span /> }}>
            <span>Proyectos</span> Recientes
          </Trans>
        </h2>
        <p className="section-description">
          {t('projects.description')}
        </p>
      </div>

      <ProjectCarousel />
    </section>
  );
};
