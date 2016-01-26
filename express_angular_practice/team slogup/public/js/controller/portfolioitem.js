
function PortfolioitemCtrl($scope, $location){
  $scope.portfolioitem = [
    {
      url: 'url("./image/portfolio/1-bombling-web/main.jpg")',
      info1: "봄블링 원페이저",
      info2: "자체서비스",
      info3: "웹 / 반응형 / 랜딩페이지",
      index: 3,
      modal: {
        logo: 'url(./image/portfolio/1-bombling-web/logo.jpg)',
        info: "자체서비스 봄블링의 원페이지 사이트입니다. 페이지 전환 없이도 다국어 지원이 되도록 구현하였습니다. 앱 다운로드를 위한 랜딩페이지 답게 군더더기 없는 심플한 레아이웃을 적용했습니다.",
        line: "612",
        num: "3",
        time: "7",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "AWS"},
          {title: "HTML5"},
          {title: "CSS3"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Bitbucket"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/1-bombling-web/shot1.jpg"},
          {url: "./image/portfolio/1-bombling-web/shot2.jpg"},
          {url: "./image/portfolio/1-bombling-web/shot3.jpg"},
          {url: "./image/portfolio/1-bombling-web/shot4.jpg"},
          {url: "./image/portfolio/1-bombling-web/shot5.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/2-idealinvest/main.jpg")',
      info1: "(주)아이딜인베스트 홈페이지",
      info2: "(주)아이딜인베스트",
      info3: "웹 / 회사홈페이지",
      index: 0,
      modal: {
        logo: 'url(./image/portfolio/2-idealinvest/logo.jpg)',
        info: "분양 대행 및 컨설팅 전문기업인 (주)아이딜인베스트의 홈페이지. 사업성격에 맞게끔 무게감 있는 묵직한 색상과 진취적인 느낌의 디자인을 적용했습니다. 고객층의 연령대가 높은 점을 감안해, 하위버전인 IE8을 포함한 모든 브라우저에서 호환되는 PC버전과 HTML5/CSS3로만 이루어진 모바일버전을 나누어 구현했습니다.",
        line: "920",
        num: "8",
        time: "3",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "HTML4/5"},
          {title: "CSS2/3"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/2-idealinvest/shot1.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot2.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot3.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot4.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot5.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot6.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot7.jpg"},
          {url: "./image/portfolio/2-idealinvest/shot8.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/3-bravo114/main.jpg")',
      info1: "아파트형공장114 부동산솔루션",
      info2: "(주)아파트형공장114",
      info3: "웹 / 부동산 솔루션 / CMS / PaaS",
      index: 1,
      modal: {
        logo: 'url(./image/portfolio/3-bravo114/logo.jpg)',
        info: "가산/구로 지역 최대 사무실 중개법인인 (주)아파트형공장114의 부동산 솔루션을 개발하였습니다. 솔루션은 CMS형태로 제공되며, 다시 리셀링할수 있도록 Linux Docker기반의 Dokku 오픈소스를 통해서 Heroku와 비슷한 PaaS서비스를 구축하였습니다. 관리자페이지를 통해 배너, 이미지 등을 자유롭게 수정할 수 있습니다. 또한 모든 서버단은 API형태로 제공되어 클라이언트의 플랫폼 종속없이 확장이 가능하도록 구현했고, 안드로이드 모바일 관리자 어플리케이션을 별도로 제공했습니다.",
        line: "40210",
        num: "9",
        time: "15",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "AWS"},
          {title: "HTML4/5"},
          {title: "CSS2/3"},
          {title: "Bootstrap2"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/3-bravo114/shot1.jpg"},
          {url: "./image/portfolio/3-bravo114/shot2.jpg"},
          {url: "./image/portfolio/3-bravo114/shot3.jpg"},
          {url: "./image/portfolio/3-bravo114/shot4.jpg"},
          {url: "./image/portfolio/3-bravo114/shot5.jpg"},
          {url: "./image/portfolio/3-bravo114/shot6.jpg"},
          {url: "./image/portfolio/3-bravo114/shot7.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/4-penta/main.jpg")',
      info1: "펜타포트 전광판 앱",
      info2: "(주)트위터코리아",
      info3: "웹 / 방송어플리케이션",
      index: 4,
      modal: {
        logo: 'url(./image/portfolio/4-penta/logo.jpg)',
        info: "펜타포트 락 페스티벌을 위한 트윗전용 전광판 어플리케이션을 개발했습니다. 페스티벌 당일 이 전광판 어플리케이션을 통해 많은 사람들이 서로의 트윗을 실시간으로 공유하며 교류를 할 수 있었습니다. (주)트위터코리아의 의뢰로 이 외에도 <슈퍼스타K6> <개판오분전> 등 여러 프로그램의 트위터 피딩 앱을 개발하였습니다.",
        line: "1450",
        num: "5",
        time: "3",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "HTML5"},
          {title: "CSS3"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
        ]
      }
    },
    {
      url: 'url("./image/portfolio/5-k6/main.jpg")',
      info1: "트윗 Visualization Module",
      info2: "(주)트위터코리아",
      info3: "웹 / 방송어플리케이션",
      index: 5,
      modal: {
        logo: 'url(./image/portfolio/5-k6/logo.jpg)',
        info: "(주)트위터코리아 내부에서 사용할 트위터 사용자 투표 Visualization 모듈을 개발하였습니다. <슈퍼스타K6> <개판오분전> 등에서 사용되었습니다.",
        line: "1130",
        num: "5",
        time: "3",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "HTML4/5"},
          {title: "CSS2/3"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Heroku"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/5-k6/shot1.jpg"},
          {url: "./image/portfolio/5-k6/shot2.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/6-park/main.jpg")',
      info1: "박정희대통령전자도서관",
      info2: "박정희대통령기념사업회",
      info3: "웹 / 도서관홈페이지 / 데이터 및 플랫폼 이전",
      index: 2,
      modal: {
        logo: 'url(./image/portfolio/6-park/logo.jpg)',
        info: "기존 20여년된 박정희대통령전자도서관 홈페이지를 개편하는 작업을 하였습니다. ASP + Oracle기반의 모든 데이터를 Node.js + MariaDB기반으로 모두 이전작업을 하였으며, 최적화를 통해 기존 유지비를 1/10 가량으로 줄였습니다. 또한 데이터 이전을 위해 다양한 크롤링 어플리케이션을 함께 개발하였습니다.",
        line: "21330",
        num: "3",
        time: "7",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "XHTML"},
          {title: "CSS2"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/6-park/shot1.jpg"},
          {url: "./image/portfolio/6-park/shot2.jpg"},
          {url: "./image/portfolio/6-park/shot3.jpg"},
          {url: "./image/portfolio/6-park/shot4.jpg"},
          {url: "./image/portfolio/6-park/shot5.jpg"},
          {url: "./image/portfolio/6-park/shot6.jpg"},
          {url: "./image/portfolio/6-park/shot7.jpg"},
          {url: "./image/portfolio/6-park/shot8.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/7-yys/main.jpg")',
      info1: "육영수여사전자기념관",
      info2: "육영수여사기념사업회",
      info3: "웹 / 홈페이지 / 데이터이전",
      index: 6,
      modal: {
        logo: 'url(./image/portfolio/7-yys/logo.jpg)',
        info: "육영수여사기념사업회에서 의뢰하여 기존 홈페이지의 이전작업을 시행하였습니다. ASP & Oracle기반으로 되어있던 기존 체제에서 Node.js & MariaDB로 이전해 효율을 높였습니다. 모든 데이터는 그대로 이전이 되었으며, CMS게시판 기능을 추가했습니다. 또한 해당 CMS게시판과 기존 게시판데이터를 통합해 정상작동되도록 만들었습니다.",
        line: "1800",
        num: "4",
        time: "3",
        skill: [
          {title: "Node.js"},
          {title: "Angular.js"},
          {title: "XHTML"},
          {title: "CSS2"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/7-yys/shot1.jpg"},
          {url: "./image/portfolio/7-yys/shot2.jpg"},
          {url: "./image/portfolio/7-yys/shot3.jpg"},
          {url: "./image/portfolio/7-yys/shot4.jpg"},
          {url: "./image/portfolio/7-yys/shot5.jpg"},
          {url: "./image/portfolio/7-yys/shot6.jpg"},
          {url: "./image/portfolio/7-yys/shot7.jpg"},
          {url: "./image/portfolio/7-yys/shot8.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/8-bombling-app/main.jpg")',
      info1: "봄블링 어플리케이션",
      info2: "자체서비스",
      info3: "iOS / Android / 자체서비스",
      index: 7,
      modal: {
        logo: 'url(./image/portfolio/8-bombling-app/logo.jpg)',
        info: "팀슬로그업의 자체서비스 '봄블링 - 그린라이트게임' 입니다. 특히 20대 사용자들의 호평을 받아 출시 6개월만에 10만회원을 유치했고, 여러 정부지원사업에 선정되며 '칭워(卿我)'라는 이름으로 국내 매치메이킹 서비스 최초로 중국에서도 글로벌서비스 되고 있습니다. 건강하고 밝은 이미지로 인해 가장 많은 여성회원비율을 갖고 있는 서비스이기도 합니다. 아이폰, 안드로이드, 서버 및 토탈 관리페이지를 모두 자체 제작하였습니다.",
        line: "107612",
        num: "60",
        time: "24",
        skill: [
          {title: "Objective-C"},
          {title: "CocoaSDK"},
          {title: "ADK"},
          {title: "JAVA"},
          {title: "Node.js"},
          {title: "AWS"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Bitbucket"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/8-bombling-app/shot1.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot2.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot3.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot4.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot5.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot6.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot7.jpg"},
          {url: "./image/portfolio/8-bombling-app/shot8.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/9-mike/main.jpg")',
      info1: "마이크&밀크박스",
      info2: "개인",
      info3: "게임 / 아이폰게임 / 물리엔진 / 코코스2D",
      index: 8,
      modal: {
        logo: 'url(./image/portfolio/9-mike/logo.jpg)',
        info: "기획 및 디자인을 제외하고 팀슬로그업이 프로그래밍을 전담하여 만든 물리엔진 게임입니다. Cocos2D엔진 및 Box2D를 이용한 물리엔진을 적극 활용했습니다. 다양한 난이도의 스테이지와 퍼즐요소를 풀어나가며 재미있게 즐길 수 있는 아케이드 게임입니다.",
        line: "82990",
        num: "0",
        time: "20",
        skill: [
          {title: "Objective-C"},
          {title: "Cocos2D"},
          {title: "Box2D"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/9-mike/shot1.jpg"},
          {url: "./image/portfolio/9-mike/shot2.jpg"},
          {url: "./image/portfolio/9-mike/shot3.jpg"},
          {url: "./image/portfolio/9-mike/shot4.jpg"},
          {url: "./image/portfolio/9-mike/shot5.jpg"}
        ]
      }
    },
    {
      url: 'url("./image/portfolio/10-cari/main.jpg")',
      info1: "캐리티콘 고객전용 앱",
      info2: "(주)LSP",
      info3: "안드로이드 / 모바일앱 / 아바타생성 / 서버API",
      index: 9,
      modal: {
        logo: 'url(./image/portfolio/10-cari/logo.jpg)',
        info: "(주)LSP는 2014년 창업맞춤형사업에 선정된 업체입니다. 1회성이 아쉽던 기존 캐리커쳐를 앱과 연동해서 지속적으로 업데이트 할 수 있도록 하는 서비스 '캐리티콘'을 운영하고 있습니다. 이 앱은 캐리커쳐를 주문한 고객 전용 안드로이드 앱으로, 사용자/관리자가 언제든 다양한 의상, 배경, 소품 등으로 자신의 캐리커쳐를 꾸밀 수 있습니다.",
        line: "4210",
        num: "3",
        time: "8",
        skill: [
          {title: "ADK"},
          {title: "JAVA"},
          {title: "AWS"},
          {title: "Node.js"},
          {title: "Wordpress"},
          {title: "HTML5"},
          {title: "CSS3"},
          {title: "Bootstrap3"},
          {title: "Grunt"}
        ],
        util: [
          {title: "Git"},
          {title: "Trello"},
          {title: "Github"},
          {title: "Slack"}
        ],
        picture: [
          {url: "./image/portfolio/10-cari/shot1.jpg"},
          {url: "./image/portfolio/10-cari/shot2.jpg"}
        ]
      }
    }
  ];
};