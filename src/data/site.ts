export const company = {
  name: 'FAKOHAUS',
  legalName: '㈜ALCMATE',
  ceo: '조정민',
  bizNo: '211-86-78868',
  tel: '1833-2190',
  fax: '031-998-3365',
  email: 'info@alcmate.com',
  address: '경기도 김포시 태장로 741 경동미르웰시티 534호',
  hours: '평일 09:00 – 18:00 (주말·공휴일 휴무)',
  youtube: 'https://www.youtube.com/@FAKOHAUS',
  // TODO: 실제 카카오톡 채널 URL로 교체
  kakaoUrl: 'https://pf.kakao.com',
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children: NavChild[] };

export const nav: NavItem[] = [
  {
    label: '주택모델',
    href: '/models',
    children: [
      { label: 'FAKOHAUS 25A', href: '/models#25a' },
      { label: 'FAKOHAUS 25B', href: '/models#25b' },
    ],
  },
  {
    label: '골조 종류',
    href: '/frame',
    children: [
      { label: 'ALC주택', href: '/frame#alc' },
      { label: 'POROTON주택', href: '/frame#poroton' },
    ],
  },
  {
    label: '주택사양',
    href: '/spec',
    children: [
      { label: '외벽시스템', href: '/spec#wall' },
      { label: '지붕시스템', href: '/spec#roof' },
      { label: '내벽마감시스템', href: '/spec#inner' },
    ],
  },
  {
    label: '시공사례',
    href: '/works',
    children: [
      { label: '완축공사', href: '/works#full' },
      { label: '반축공사', href: '/works#half' },
    ],
  },
  {
    label: 'Download',
    href: '/downloads',
    children: [
      { label: '카탈로그', href: '/downloads#catalog' },
      { label: '기술자료', href: '/downloads#tech' },
      { label: '기술정보', href: '/downloads#info' },
    ],
  },
  {
    label: '회사소개',
    href: '/company',
    children: [
      { label: '인사말', href: '/company#greeting' },
      { label: '연혁', href: '/company#history' },
      { label: '사업분야', href: '/company#business' },
      { label: '브랜드', href: '/company#brand' },
      { label: '오시는 길', href: '/company#location' },
    ],
  },
];
