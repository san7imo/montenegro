import type { ImageAsset } from "../../types/content";

interface VisualPanelProps {
  asset?: ImageAsset;
  className?: string;
}

export function VisualPanel({ asset, className = "" }: VisualPanelProps) {
  if (asset?.src) {
    return (
      <figure className={["visual-panel", className].filter(Boolean).join(" ")}>
        <img
          alt={asset.alt}
          className="visual-panel__image"
          decoding="async"
          loading="lazy"
          src={asset.src}
        />
        {asset.caption ? <figcaption className="visual-panel__caption">{asset.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <div className={["visual-panel", "visual-panel--placeholder", className].filter(Boolean).join(" ")}>
      <div className="visual-panel__placeholder-mark" aria-hidden="true" />
      <p>{asset?.caption ?? "Espacio listo para integrar una imagen aprobada."}</p>
    </div>
  );
}
