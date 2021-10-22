import React from "react";
import Items from "./Items";

import company from "assets/images/useb.png";

const PartnersComponent = () => {
  return (
    <div className="partnersContainer wrap">
      <Items
        companyImg={company}
        title="KEY PARTNERS #1"
        company="유스비"
        companyEn="USEB"
        text={`
유스비는 비대면 통합인증 솔루션을 개발하는 회사로,
핀테크, 은행, 금융 파트너를 중심으로 
그에 맞는 비대면 본인인증 솔루션 (KYC, AML, AI 솔루션)
관련 업무 제휴를 체결한 레이블의 파트너입니다.
        `}
      />
      <Items
        companyImg={company}
        title="KEY PARTNERS #2"
        company="이원정보기술"
        companyEn="E1"
        text={`
이원정보기술은 IBM IIB, DatePower 등
다양한 고성능 비즈니스 솔루션을 제공하는
IT 솔루션 기업으로, 기술 및 연구 개발을 위한
업무 제휴를 체결한 레이블의 파트너입니다.
        `}
      />
      <Items
        companyImg={company}
        title="KEY PARTNERS #3"
        company="아임클라우드"
        companyEn="IMCLOUD"
        text={`
아임클라우드는 AI와 챗봇,
그리고 빅데이터 SW 플랫폼을 제공하는 기업으로,
기술 및 연구 개발을 위한 업무 제휴를 체결한
레이블의 파트너입니다.
        `}
      />
      <Items
        companyImg={company}
        title="KEY PARTNERS #4"
        company="지노바"
        companyEn="XINOVA"
        text={`
지노바는 제품 및 기술 이노베이션 서비스를 바탕으로
특허와 기술 등 다양한 분야에
엑세러레이팅, 컨설팅 등을 지원하는 글로벌 기업으로,
레이블 기술의 고도화 및 상용화를 위한
업무 제휴를 체결한 레이블의 파트너입니다.
        `}
      />
    </div>
  );
};

export default PartnersComponent;
