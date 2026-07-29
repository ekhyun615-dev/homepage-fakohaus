# FAKOHAUS Korea

독일 ALC·POROTON 조적식 주택 브랜드 **FAKOHAUS** 홈페이지. `㈜ALCMATE`가 운영하며, 자매 사이트로 [Gaulhofer Korea](../homepage-gaulhofer)(창호), [CREATON Korea](../homepage-creaton)(점토기와)가 있습니다.

## 실행

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # dist/ 로 정적 빌드
npm run preview    # 빌드 결과 미리보기
```

## 구조

- `src/pages/` — 페이지 라우트. 대부분 페이지는 `.tabs`/`.tabpane` 마크업 + `BaseLayout`의 공용 탭 스위처 스크립트(해시 기반)로 탭 전환을 구현합니다.
  - `index.astro` 홈, `models.astro`(25A/25B), `frame.astro`(ALC/POROTON), `spec.astro`(외벽/지붕/내벽), `works.astro`(완축/반축 + 필터·갤러리·라이트박스), `downloads.astro`, `company.astro`, `contact.astro` + `contact/thanks.astro`
- `src/layouts/BaseLayout.astro` — 공통 head/OG/구조화데이터 + 탭 스위처 스크립트
- `src/components/Header.astro`, `Footer.astro` — `src/data/site.ts`의 `nav`/`company` 데이터로 렌더링
- `src/data/site.ts` — 상단 메뉴 구조, 회사 연락처, 카카오톡 채널 URL
- `src/styles/global.css` — 퍼플 톤 디자인 시스템(CSS 변수 `--p900`~`--p100`), Pretendard Variable 폰트

## 원본 프로토타입

이 프로젝트는 사용자가 만든 단일 HTML 프로토타입(해시 라우팅 SPA)을 Astro 정적 사이트로 이식한 것입니다. 디자인·문구·탭 구조는 그대로 유지하고, 가상 라우트(`#page/tab`)를 실제 URL 경로(`/page#tab`)로 전환했습니다.

## 문의 폼

`contact.astro`는 [FormSubmit.co](https://formsubmit.co)를 통해 `info@alcmate.com`으로 전달됩니다. 별도 가입 없이 동작하지만 **최초 1회는 수신 이메일함에서 확인 링크를 클릭해 인증**해야 정상 전달됩니다(Gaulhofer/CREATON Korea 사이트와 동일 방식).

## TODO

- [ ] 실제 도메인 확정 후 `astro.config.mjs`의 `site` 값 교체 (현재 placeholder `https://www.fakohaus.com`)
- [ ] 카카오톡 채널 URL 교체 (`src/data/site.ts`의 `kakaoUrl`, 현재 `#` 아닌 임시 링크)
- [ ] 홈/모델/골조/사양 페이지의 SVG 플레이스홀더 일러스트 → 실사 이미지로 교체
- [ ] 시공사례(`works.astro`) 예시 데이터 → 실제 사례 사진/데이터로 교체
- [ ] 카탈로그·기술자료 PDF/DWG 실제 파일 업로드 및 다운로드 버튼 연결
- [ ] 파비콘/OG 이미지 추가
- [ ] 배포 방식 결정 (Gaulhofer/CREATON은 카페24 정적 호스팅 사용)
