/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";

function Map() {
  return (
    <Mapouter>
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=1800&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <style></style>
    </Mapouter>
  );
}

export default Map;

const Mapouter = styled.div`
  position: relative;
  text-align: right;
  width: 100%;
  height: 520px;
  & .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 520px;
  }
  & .gmap_iframe {
    width: 100% !important;
    height: 520px !important;
  }
`;
