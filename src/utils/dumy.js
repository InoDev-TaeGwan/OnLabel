/* TEAM */
const profileName = [
    'ceo.jpg',
    'itpm.jpg',
    'leehaegyung.jpg',
    'yoondaegen.png',
    'seajoonyoung.jpg',
    'kimyoojin.png',
    'cto.jpg',
    'dev1.png',
    'dev2.jpg',
    'des1.jpg',
    'des2.png',
    'cso.png',
    'JOSE.png',
    'KEMO.png',
    'naduckyoung.png',
    'jengDaeWook.png',
    'yoondaegen.png',
    'limgyungsoo.png',
    'gwangsoo.png',
    'ChaWooJoon.png',
    'fengShiliang.png',
];

const getFileUrl = (fileName) =>
    `https://storage.googleapis.com/onlabel-cbe22.appspot.com/profile/${fileName}`;

export const partnerData = [
    {
        id: 1,
        name: '김 성 수',
        position: 'CEO',
        image: getFileUrl(profileName[0]),
        profileHistory: [
            '카이스트 기계공학, 산업 및 시스템 공학 졸업',
            '중소기업진흥공단 청년창업 사관학교 3기 졸업',
            "'2015' 카이스트 기업가정신 총장상 대상",
            '前 카이스트 사회기술혁신연구소 (KAIST RISTI) 팀장',
            '前 카이스트 휴머노이드 레인보우로보틱스 팀장',
            '前 레인보우로보틱스 코스닥 IPO 상장 기여',
        ],
    },
    {
        id: 2,
        name: '김 건 수',
        position: 'IT PM',
        image: getFileUrl(profileName[1]),
        profileHistory: [
            'IT Firm – Samsung SDS',
            'Intranet developer & DBA Mar 1997 – May 1999',
            'IT Firm – IBM Korea SWG AVP Team',
            'Informix SE & Domino SE & AVP service PM Jun 1999 – Sep 2019',
        ],
    },

    {
        id: 3,
        name: '이 해 경',
        position: 'CSO',
        image: getFileUrl(profileName[2]),
        profileHistory: ['IBM 애자일', '하나은행, NS, 매트라이프, KB금융 수행'],
    },
    {
        id: 4,
        name: '윤 대 근',
        position: '사업고문',
        image: getFileUrl(profileName[3]),
        profileHistory: [
            '前 IBM KOREA 상무',
            'NH투자증권 마이데이터 구축',
            'KB국민은행 AI ChatBot 구축',
            'POSCO 빅데이터 플랫폼 구축',
        ],
    },
    {
        id: 5,
        name: '서 준 영',
        position: 'DEVELOPER',
        image: getFileUrl(profileName[4]),
        profileHistory: [
            '現 한국IBM 부장',
            '교보,농협,신한 BPM 컨설턴트 수행',
            'KB,Metlife 클라우드 아키텍트 수행',
        ],
    },
    {
        id: 6,
        name: '김 유 진',
        position: 'CSO',
        image: getFileUrl(profileName[5]),
        profileHistory: [
            '일본 오카야마 대학원 박사 수료',
            '포스코, 삼성SDS, SKT, LG Uplus 프로젝트 수행',
            '現 LG CNS 데이터 사이언티스트',
            '前 한국아이비엠 데이터 사이언티스트',
        ],
    },
    {
        id: 7,
        name: '김 수 본',
        position: 'DEVELOPER',
        image: getFileUrl(profileName[6]),
        profileHistory: [
            '카이스트 기계공학 학/석사 졸업',
            '前 지에프테크놀로지 수석연구원',
            '수술로봇용 햅틱 피드백 연구개발',
            '경찰/군사훈련용 명중분석시스템, 수술로봇용',
            '햅틱 피드백연구개발',
            '유통관리 및 보안솔루션용 워터 마킹 기술 연구개발',
        ],
    },
    {
        id: 8,
        name: '이 규 영',
        position: 'DEVELOPER',
        image: getFileUrl(profileName[7]),
        profileHistory: [
            '블록체인,Wallet,Exchange 등 개발이력 多',
            '現 STEA Developer',
            '前 분산처리시스템 연구실 연구원',
            '前 한이음 프로젝트 참여',
        ],
    },
    {
        id: 9,
        name: '김 재 웅',
        position: 'DEVELOPER',
        image: getFileUrl(profileName[8]),
        profileHistory: [
            '서울대학교 컴퓨터공학과',
            'Python bot 다수 개발',
            'Unity 3D, C# 게임 개발',
            'Flutter 앱 개발',
        ],
    },

    {
        id: 10,
        name: '박 소 희',
        position: 'DESIGNER',
        image: getFileUrl(profileName[9]),
        profileHistory: [
            '한양대학교 디자인과',
            '前 인디텍스 자라 근무',
            '前 이랜드 근무',
            '現 STEA Designer',
        ],
    },

    {
        id: 11,
        name: '성 해 진',
        position: 'DESIGNER',
        image: getFileUrl(profileName[10]),
        profileHistory: `Farne construction(캐나다), Designer
KMJ Design Works, Design Team Manager
DNI Company(베트남, 한국) 디자이너`,
    },

    {
        id: 12,
        name: '이 성 욱',
        position: 'CSO',
        image: getFileUrl(profileName[11]),
        profileHistory: [
            '블록체인 컨설턴트',
            'Big Stone CEO',
            'Director of the Btrade Exchange',
        ],
    },
    {
        id: 13,
        name: 'JOSE',
        position: 'ENGLISH MANAGER',
        image: getFileUrl(profileName[12]),
        profileHistory: [
            '성균관대 전자공학석사',
            'Korda.us 중남미',
            '정보통신 기술 컨설팅',
        ],
    },

    {
        id: 14,
        name: 'KEMO',
        position: 'ARABIC MANAGER',
        image: getFileUrl(profileName[13]),
        profileHistory: ['Jubail, Saudi Arabia', '성균관대 전자공학석사'],
    },
    {
        id: 15,
        name: '나 덕 영',
        position: 'CHINA MANAGER',
        image: getFileUrl(profileName[14]),
        profileHistory: [
            '성균관대 중문학과',
            '중국 SONY전자 및 외주업체 근무',
            '중국 텐센트엑셀레이터',
            '㈜ STEA 중국사업부 이사',
        ],
    },
];

export const adviserData = [
    {
        id: 1,
        name: '정 대 욱',
        position: '사업고문',
        image: getFileUrl(profileName[15]),
        profileHistory: `서강대학교 컴퓨터공학과 석사
前 IBM KOREA 부사장 ( IBM 30년 근속 )
現 수원과학기술대학교 컴퓨터공학과 교수
`,
    },
    {
        id: 2,
        name: '윤 대 근',
        position: '사업고문',
        image: getFileUrl(profileName[16]),
        profileHistory: `前 IBM KOREA 상무
NH투자증권 마이데이터 구축
KB국민은행 AI ChatBot 구축
POSCO 빅데이터 플랫폼 구축`,
    },
    {
        id: 3,
        name: '임 경 수',
        position: '사업고문',
        image: getFileUrl(profileName[17]),
        profileHistory: `前 KPMG 금융리스크 컨설턴트
농협, BC, KB카드 차세대 IT 시스템 개발 PMO
前 파운더스인베스트먼트 금융 컨설턴트
現 EY한영회계법인 이사`,
    },
    {
        id: 4,
        name: '서 광 수',
        position: '사업고문',
        image: getFileUrl(profileName[18]),
        profileHistory: `前 KT 네트워크본부 과장
前 KTF IT인프라운영팀 부장
前 KTds uCloud 센터장, 상무이사
現 (주)씨엔아이테크 대표이사`,
    },
    {
        id: 5,
        name: 'WooJoon Cha',
        position: '사업고문',
        image: getFileUrl(profileName[19]),
        profileHistory: `서울대학교 기계공학과, 항공우주공학과 졸업
ELYSIA CSO
ArtnGuide CTO
BTbridge lnc. CEO`,
    },

    {
        id: 6,
        name: 'Feng Shiliang',
        position: '사업고문',
        image: getFileUrl(profileName[20]),
        profileHistory: `서울대학교 사회학과 졸업
MODORI 파트너
thepaper.cn reporter of culture dept.`,
    },
    //   {
    //     id: 2,
    //     name: "김 병 하",
    //     position: "행정고문",
    //     image: getFileUrl(profileName[0]),
    //     profileHistory: `서울특별시 부시장
    // 서울특별시 도시계획 국장
    // 서울특별시 도시안전 실장`,
    //   },
    //   {
    //     id: 5,
    //     name: "김 진 홍",
    //     position: "행정고문",
    //     image: kimjinhing,
    //     profileHistory: `청와대 경제수석실 비서
    // IAEA P5
    // 교육시설공제회 회장
    // 교육부 국장
    // 과학기술부 국장`,
    //   },
];
