import React from "react"
import Masonry from "react-masonry-css"
import styled from "styled-components"

const Style = styled.div`
  .masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .masonry-grid-column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .masonry-grid-column > div {
    background: #f2f2f2;
    margin-bottom: 30px;
    padding: 1rem;
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
