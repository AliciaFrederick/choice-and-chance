import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Banner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const bannerImage = fileData.frontmatter?.banner
  
  if (bannerImage) {
    const bannerPosition = fileData.frontmatter?.banner_y ?? 0.5
    return (
        <div class={classNames(displayClass, "obsidian-banner-wrapper")}>
            <div class={classNames(displayClass, "obsidian-banner")}>
                <img class={classNames(displayClass, "banner-image")} src={bannerImage} style="object-position: 50% {{bannerPosition}};"/>
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