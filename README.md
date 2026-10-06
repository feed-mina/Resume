# 👋 Hello! I'm Yerin Min 
> **현실 데이터를 현장이 보는 화면으로 만들고, AI와 웹 서비스로 연결하는 풀스택 개발자 민예린입니다.**
> **회사에서는 운영과 B2B 웹을, 개인 프로젝트에서는 SDUI 엔진·비동기 큐·RAG를 만들었습니다. AI 도구는 구현 초안과 디버깅 후보를 만드는 데 쓰고, 설계 결정과 검증은 제가 책임집니다.**

💼 **Fullstack Developer · Spring Boot · FastAPI · Next.js · AI** 
🏠 **Base:** Seoul, South Korea
📧 **Contact:** myelin24@naver.com
📄 **이력서 PDF:** [요약판 3쪽](resume/resume-yerin-min.pdf) · [전체판 8쪽](resume/resume-yerin-min-full.pdf) — 원본은 `resume/build_resume.py`, 재생성은 `python3 resume/build_resume.py && node resume/render_pdf.mjs`
📝 **Portfolio & Github:** [Portfolio](https://feed-mina.github.io/) / [GitHub](https://github.com/feed-mina) / [제조 × AI 사례](https://feed-mina.github.io/manufacturing-ai/) / [SDUI 데모](https://sdui-delta.vercel.app/view/MAIN_PAGE)

---

## 🚀 Why Yerin? (나의 개발 철학)

기획·마케팅 데이터 분석에서 출발해, 요청이 화면에서 서버와 DB를 거쳐 돌아오는 과정과 실패 처리를 직접 설명할 수 있는 **백엔드 엔지니어링**으로 넘어왔습니다.
EBS 파견 운영, 포스코 DX 메일 보안(DMARC) 테스트 운영, B2B 웹 솔루션 개발을 거쳤고, 최근에는 센서 데이터 조회·분석 화면과 API·DB 구조를 맡아 **관측한 움직임과 생산 가동의 정의가 다른 문제**를 코드와 문서로 추적했습니다.
개인 프로젝트에서는 **SDUI(서버 주도 UI 엔진)**와 RAG 기반 추천 서비스를 화면부터 서버·DB·배포까지 구성했습니다.

✓ **“레거시 코드는 적이 아닙니다. 개선해야 할 통계일 뿐입니다.”** (Doxygen 역공학 분석)
✓ **“주장마다 현재 코드 또는 확인 기록을 붙입니다. 아직 검증하지 않은 것은 예정으로 표시합니다.”** 

---

## 🛠️ Tech Stack 

### ⚙️ Backend & Architecture
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white) 
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/C%23-.NET-239120?style=for-the-badge&logo=c-sharp&logoColor=white)

### 💾 Data & DevOps
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) 
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### 🖥️ Frontend (Fullstack capable)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🔥 Featured Projects 

### 0. 가이드롤 생산 모니터링: 제조 지표 정의 재합의와 '항상 맞아야 할 규칙' 검증 (대표 · 회사 프로젝트)
> **"데이터는 기준부터, AI는 근거부터."** (2026.08 ~ 2026.09 · 이볼빅스)  
* 센서 노드 4대가 10분마다 측정한 속도·진동 사이클을 일간·주간·월간 화면으로 보여 주는 FastAPI · React · DuckDB 모니터링 시스템.
* 한 주 통계에 '가동 1.2시간'과 '가동 0회'가 함께 뜨던 모순을 찾아 현장과 '가동 1회'의 정의를 다시 합의하고 합산 함수를 하나로 통일. 36일치 화면을 '항상 맞아야 할 규칙'으로 전수 대조(위반 0건), 계약 테스트 26건으로 고정.
* 첫 조회 18.0초 → 0.89초(95% 단축) 공개 샘플 배포 기록. 정지 중 '유령 속도'는 가설 검증까지만 했고 임계값은 **미정**.  
🔗 **[Case Study]** (https://feed-mina.github.io/evol-case-study.html)
🔗 **[제조 × AI 사례 한 장]** (https://feed-mina.github.io/manufacturing-ai/)

### 1. KMovement 3.0: 의미 검색 + 관계 기반 검색 여행 추천
> **"지역 같은 정확 조건과 의미 검색을 분리해서 다룹니다."** (2026.03 ~ )  
* 장소 설명의 의미 검색(multilingual-e5-small + ChromaDB)과 관계 기반 검색(Neo4j GraphRAG)을 결합한 K-Culture 여행 추천 프로젝트. FastAPI · PostGIS · Celery/Redis 비동기 큐 · MLflow 기록.
* 지역 같은 정확 조건, 검색 점수의 의미(QA 경로 distance ≤ 0.25), 근거가 없을 때의 응답을 **경로별로 구분**합니다. 무거운 영상·음성 생성은 비동기 큐로 API 응답과 분리했습니다.
* 추천 정답성과 비용 개선은 **별도 평가가 필요한 상태**이며, 지역 불일치 회귀 테스트는 검증 후 추가합니다.  
🔗 **[Repository]** (https://github.com/feed-mina/KMovement)
🔗 **[Live]** (https://yerin.duckdns.org/)

### 2. SDUI: Server-Driven UI Metadata Engine
> **"DB row를 바꾸면 다음 UI 트리 요청에 반영됩니다."** (2026.01 ~ )  
* `ui_metadata`의 화면 정보를 Spring Boot에서 트리로 변환하고 Next.js DynamicEngine에서 재귀 렌더링하는 구조를 구현.
* DB 변경은 다음 UI 트리 요청에 반영되며, 현재 UI 트리 조회는 **PostgreSQL을 직접 사용**합니다. (Redis TTL 코드는 호출 경로에 미연결)
* Template Kit Studio: 그 화면 데이터를 개발자가 아니어도 브라우저에서 고치는 편집기. 엔진 → 편집기 → Planning Harness 기획 루프가 "화면과 기획을 코드가 아니라 데이터로 다룬다"는 한 규칙을 공유.  
🔗 **[Repository]** (https://github.com/feed-mina/SDUI)
🔗 **[product]** (https://sdui-delta.vercel.app/view/MAIN_PAGE)
🔗 **[Studio]** (https://sdui-template-kit-productization.pages.dev/studio/)

### 3. JustSaying: Hybrid Auth & Diary System
> **"보안과 운영의 안정성 테스트베드."** (2025.04 ~ )
* Spring Boot(Auth/Board)와 FastAPI(AI/NLP)를 논리적으로 분리하고 연동한 MSA 아키텍처 웹.
* **통합 JWT / 로컬과 카카오 OAuth 2.0 로직 이중화 / Axios Interceptor 보안 구조** 구현.  
🔗 **[Repository]** (https://github.com/feed-mina/Diary) | ⚠️ *(AWS 운영 종료)*

### 4. Click Your Taste! (Gomgom-AI)
> **"AI 입맛 추천 알고리즘 챗봇 서비스."** (2025.04)
* OpenAI GPT 기반 감성 처리 서비스 및 지형 인프라(Geolocation) API 결합 추천 앱.
* 외부 환경의 불안정성을 막기 위한 **httpx(비동기 호출) 통신 설계** 구축.  
🔗 **[Repository]** (https://github.com/feed-mina/gomgom-ai) | ⚠️ *(AWS 운영 종료)*

---

## 🤖 AI-Assisted Development & Orchestration

AI 도구(Claude Code 등)로 구현 초안과 디버깅 후보를 만들고, 요구사항과 코드 흐름을 대조하며 수정합니다.

* **Architecture First**: 전체 시스템 다이어그램과 핵심 로직(SDUI 렌더링 트리, MSA 통신 등)의 설계 결정은 제가 내리고, 검토한 대안을 기록합니다.
* **역할 구분**: 프로젝트별로 AI가 생성한 부분, 제가 결정한 기준, 실제 실행한 검증, 아직 확인하지 못한 부분을 구분해 적습니다.
* **Troubleshooting**: 에러 발생 시 시스템 로그와 아키텍처 맥락을 AI에 전달해 원인 후보를 좁히고, 제가 최종 리뷰·병합(Merge)합니다. 속도 개선 수치는 측정 기록이 없어 적지 않습니다.

---

## 📈 Experience Roadmap 

- 💼 **센서 데이터 조회·분석 웹 개발 / 이볼빅스** _(2026.08.02 - 2026.09.30)_ - 전임연구원. 센서 데이터 조회·분석 화면과 API·DB 구조, 배포 작업 수행. 관측한 움직임과 생산 가동의 정의 차이를 코드와 문서로 추적. (공식 회사명·직함 표기는 경력 자료와 최종 대조 예정)
- 💼 **포스코 DX 사내 시스템 파견 / AI Peoples** _(2025.08 - 2026.01)_ - 전사 스팸메일 차단 필터 시스템 운영 및 DMARC 리포트 통계 엔지니어.
- 💼 **EBS 사내 아키텍처 백오피스 운영 / 유인시스(상록에스)** _(2024.05 - 2025.02)_ - 자동 모니터링 구축(Crontab 환경) 및 ISMS-P 인증 기술 분석. 개인추천서비스 역공학 소스/구조 심도 검토. 
- 💼 **웹솔루션 B2B 파트 개발 / 솔앤드** _(2023.06 - 2024.02)_ - KT 멤버십, 순천향대학교 공자학당 앱(React, Vue API), Spring Boot 및 JPA 트랜잭션 관리 B2B API 서버/관리자페이지 설계. 등급별 권한 관리(Spring Auth) 도입.
- 💼 **ASP.NET 역공학 분석 / 무브인터렉티브** _(2023.01 - 2023.04)_ - Doxygen / DB Dictionary 구조 도식화 및 C# 기반 결제 모듈 DB 참조 관계 (FK) 분석.

---

### Stats
[![Yerin's GitHub stats](https://github-readme-stats.vercel.app/api?username=feed-mina&show_icons=true&theme=radical)](https://github.com/feed-mina)

💬 **“Talk is cheap. Show me the architecture.”**
