import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Banner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const bannerImage = fileData.frontmatter?.banner
  const bannerPosition = fileData.frontmatter?.banner_y ?? 50%
  
  if (bannerImage) {
    return (
        <div class={classNames(displayClass, "obsidian-banner-wrapper")}>
            <div class={classNames(displayClass, "obsidian-banner")}>
                <img class={classNames(displayClass, "banner-image")} src={bannerImage}/>
            </div>
        </div>
    )
  } else {
    return null
  }
}

Banner.css = `
.obsidian-banner .banner-image {
    position: relative;
    object-fit: cover;
    max-width: none;
    height: 100%;
    width: 100%;
    object-position: 50% {bannerPosition};
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
.obsidian-banner-wrapper{
    height:250px;
    width:100%;
    margin-top:calc(var(--banner-height) - 15px);
    padding-top:.5em;
}
html {
    --banner-height: 250px;
    --banner-internal-embed-height: 200px;
    --banner-preview-embed-height: 120px;
}
`

export default (() => Banner) satisfies QuartzComponentConstructor