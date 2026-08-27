import "./BrowserFrame.css";

interface BrowserFrameProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  fetchPriority?: "high" | "low" | "auto";
  alt: string;
  title: string;
  url?: string;
  variant?: "default" | "compact";
  loading?: "eager" | "lazy";
  className?: string;
  statusLabel?: string;
}

export const BrowserFrame = ({
  src,
  srcSet,
  sizes,
  width,
  height,
  fetchPriority,
  alt,
  title,
  url = "proyecto.acgdevstudio",
  variant = "default",
  loading = "lazy",
  className = "",
  statusLabel = "",
}: BrowserFrameProps) => {
  const classes = ["browser-frame", `browser-frame--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={classes}>
      <div className="browser-frame__chrome" aria-hidden="true">
        <span className="browser-frame__controls"><span /><span /><span /></span>
        <span className="browser-frame__address">{url}</span>
        <span className="browser-frame__status" />
      </div>

      <div className="browser-frame__viewport">
        <img src={src} srcSet={srcSet} sizes={sizes} width={width} height={height}
          fetchPriority={fetchPriority} alt={alt} loading={loading} decoding="async" />
      </div>

      <figcaption className="browser-frame__caption">
        <span>{title}</span>
        <span>{statusLabel}</span>
      </figcaption>
    </figure>
  );
};
