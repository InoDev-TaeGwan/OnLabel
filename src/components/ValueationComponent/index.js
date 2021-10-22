import React from "react";

import Items from "./Items";
import video1 from "assets/video/video1.mp4";
import video2 from "assets/video/video2.mp4";
import video3 from "assets/video/video3.mp4";

const ValueationComponent = () => {
  return (
    <div className="valueationContainer wrap">
      <Items
        title={`디지털 자산에는 아직 해결되지 못한
        문제들이 있습니다.`}
        subTitle={`
            NFT는 이름 그대로 완전 대체 불가능할까요?
            아티스트가 처음으로 게시한 NFT는 어느 누구라도
            작품을 복사해 자신만의 NFT로 만들 수 있고 그것의 원작자의 증명은
            아직 명확하게 이루어지지 않고 있습니다.
        `}
        video={video1}
      />
      <Items
        title="Waterlabel은 원본파일을 증명합니다."
        subTitle={`
저희는 마침내 원작자의 작품을 해치지 않고
인간의 눈에 보이지 않는 LABEL을
디지털 파일에 삽입하는 것을 성공했습니다.
LABEL이 삽입된 작품은
그 자체로 정보를 확인할 수 있습니다.
`}
        video={video2}
        reverse
      />
      <Items
        title="진짜 대체 불가능한 자산으로"
        subTitle={`
        작품 그 자체에 삽입된 LABEL은
        빈번히 일어나는 작품에 대한 도난을 완벽히 차단합니다.
        누군가 NFT로 등록된 사진 파일을 자신의 주소에 발행해도
        LABEL은 처음 발행한 아티스트를 증명해줍니다.
             `}
        video={video3}
      />
    </div>
  );
};

export default ValueationComponent;
