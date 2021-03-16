import React from "react"
import Masonry from "react-masonry-css"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Style = styled.div`
  .masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: ${rhythm(-3)};
    width: auto;
  }
  .masonry-grid-column {
    padding-left: ${rhythm(3)};
    background-clip: padding-box;
  }

  .masonry-grid-column > div {
    margin-bottom: ${rhythm(3)};
  }
`

export default function MasonryGalleryComponent(props) {
  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <Style>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {props.masonryGallery}
      </Masonry>
    </Style>
  )
}
