import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Banner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const bannerImage = fileData.frontmatter?.banner
  const bannerPosition = fileData.frontmatter?.banner_y ?? 0.5
  
  if (bannerImage) {
    return (
        <div class={classNames(displayClass, "obsidian-banner")}>
            <img class={classNames(displayClass, "banner-image")} src={bannerImage}>
        </div>
    )
  } else {
    return null
  }
}

Banner.css = `
:root {
    --banner-height: 250px;
    --banner-internal-embed-height: 200px;
    --banner-preview-embed-height: 120px;
}

.obsidian-banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--banner-height);
    width: 100%;
    overflow: hidden;
    user-select: none;
}

.obsidian-banner .banner-image {
    position: relative;
    object-fit: cover;
    max-width: none;
    height: 100%;
    width: 100%;
    object-position: 50% {bannerPosition};
}

`

export default (() => Banner) satisfies QuartzComponentConstructor