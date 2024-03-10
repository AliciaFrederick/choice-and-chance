import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Banner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const bannerImage = fileData.frontmatter?.banner_image
  
  if (bannerImage) {
    const bannerPosition = fileData.frontmatter?.banner_y ?? 0.5
    return (
        <div class={classNames(displayClass, "obsidian-banner-wrapper")}>
            <div class={classNames(displayClass, "obsidian-banner")}>
                <img class={classNames(displayClass, "banner-image", "line-width")} src={bannerImage} style="object-position: 50% 50%;"/>
            </div>
        </div>
    )
  } else {
    return null
  }
}

Banner.css = `
.obsidian-banner .banner-image {
    object-fit: cover;
    max-width: none;
    height: 100%;
    width: 100%;
}
.obsidian-banner {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: var(--banner-height);
    width: 100%;
    overflow: hidden;
    user-select: none;
}
.obsidian-banner-wrapper{
    
}
html {
    --banner-height: 250px;
    --banner-internal-embed-height: 200px;
    --banner-preview-embed-height: 120px;
}
`

export default (() => Banner) satisfies QuartzComponentConstructor