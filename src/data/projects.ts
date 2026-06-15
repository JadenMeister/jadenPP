import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    slug: 'education-ai-workbook-platform',
    status: 'approved',
    title: {
      en: 'AI Workbook & Review-note Platform',
      ko: 'AI 문제집 및 오답노트 플랫폼',
    },
    eyebrow: {
      en: 'Private education technology · Production case study',
      ko: '사교육 기술 솔루션 · 운영 사례',
    },
    summary: {
      en: 'An anonymized production platform that supports academy operations, workbook registration and comparison, answer mapping, review notes, and computer-vision-assisted question extraction.',
      ko: '학원 운영, 문제집 등록·비교, 정답 매핑, 오답노트, 컴퓨터 비전 기반 문항 추출을 지원하는 익명화된 운영 플랫폼입니다.',
    },
    role: {
      en: 'Full-stack & Machine Learning Development',
      ko: '풀스택 및 머신러닝 개발',
    },
    technologies: [
      'FastAPI',
      'PostgreSQL',
      'Jinja2',
      'PyMuPDF',
      'YOLO',
      'PyTorch',
    ],
    sections: [
      {
        heading: { en: 'Problem', ko: '문제' },
        body: {
          en: 'Workbook layouts vary significantly by publisher and series. A single extraction and post-processing strategy does not reliably cover titles, numbered questions, tables, diagrams, and descriptive formats.',
          ko: '출판사와 교재 시리즈마다 제목, 번호형 문항, 표, 도형, 서술형 배치가 달라 단일 추출·후처리 방식만으로 안정적인 품질을 내기 어렵습니다.',
        },
      },
      {
        heading: { en: 'Contribution', ko: '기여' },
        body: {
          en: 'Contributed across FastAPI routes, shared server-rendered layouts, workbook workflows, handwriting-matching experiences, and the YOLO-assisted extraction pipeline. Specific ownership claims remain limited to reviewed commits.',
          ko: 'FastAPI 라우터, 서버 렌더링 공통 레이아웃, 문제집 워크플로, 필기 매칭 경험, YOLO 기반 추출 파이프라인 전반에 기여했습니다. 구체적인 소유 범위는 검토된 커밋으로 제한합니다.',
        },
      },
      {
        heading: { en: 'Engineering approach', ko: '기술적 접근' },
        body: {
          en: 'The repository separates general and book-specific model paths and treats model routing, logging, validation, and conservative post-processing as operational concerns. Training and production inference are kept as distinct workflows.',
          ko: '일반 교재와 교재별 모델 경로를 분리하고 모델 라우팅, 로그 검증, 보수적인 후처리를 운영 이슈로 다룹니다. 학습과 운영 추론도 별도 워크플로로 관리합니다.',
        },
      },
      {
        heading: { en: 'Current learning', ko: '현재 학습' },
        body: {
          en: 'Expanding practical understanding of fine-tuning, hard-example collection, and reinforcement-learning concepts without presenting unverified performance claims.',
          ko: '검증되지 않은 성능 수치를 제시하지 않고 파인튜닝, 하드 예제 수집, 강화학습 개념에 대한 실무 이해를 확장하고 있습니다.',
        },
      },
    ],
    disclosure: {
      en: 'Organization, product name, source code, customer data, infrastructure details, internal URLs, and original screenshots are intentionally withheld.',
      ko: '조직명, 제품명, 소스 코드, 고객 데이터, 인프라 상세, 내부 URL, 원본 화면은 의도적으로 공개하지 않습니다.',
    },
  },
  {
    slug: 'immersive-photo-gallery',
    status: 'approved',
    repositoryUrl: 'https://github.com/JadenMeister/gallery',
    liveUrl: 'https://gallery-wine-psi.vercel.app/',
    image: {
      src: '/projects/gallery/overview.jpg',
      alt: {
        en: 'Deployed PicformJaden gallery showing the Captured: Moments, Fragments exhibition',
        ko: 'Captured: Moments, Fragments 전시를 보여주는 PicformJaden 배포 화면',
      },
    },
    title: {
      en: 'Immersive Photo Gallery & CMS',
      ko: '인터랙티브 사진 갤러리 및 CMS',
    },
    eyebrow: {
      en: 'Personal toy project · Open source',
      ko: '개인 토이 프로젝트 · 공개 저장소',
    },
    summary: {
      en: 'A personal digital exhibition that combines an immersive photo-browsing interface with an authenticated content-management workspace.',
      ko: '몰입형 사진 탐색 인터페이스와 인증 기반 콘텐츠 관리 작업공간을 결합한 개인 디지털 전시 프로젝트입니다.',
    },
    role: {
      en: 'Design & Full-stack Development',
      ko: '디자인 및 풀스택 개발',
    },
    technologies: [
      'Astro',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase',
    ],
    sections: [
      {
        heading: { en: 'Concept', ko: '기획' },
        body: {
          en: 'Instead of a conventional thumbnail grid, the project treats photographs as exhibition objects. It explores how horizontal movement, layered composition, and tactile interaction can make a personal archive feel like a digital gallery.',
          ko: '일반적인 썸네일 목록 대신 사진을 전시 오브제로 다룹니다. 수평 이동, 겹쳐진 구성, 직접 조작하는 인터랙션을 통해 개인 사진 기록을 디지털 갤러리처럼 경험하도록 설계했습니다.',
        },
      },
      {
        heading: { en: 'Gallery experience', ko: '갤러리 경험' },
        body: {
          en: 'Built corridor and grid viewing modes, motion-based entrance and hover effects, a detailed lightbox, location metadata, view-mode persistence, responsive controls, and dark-mode presentation.',
          ko: '복도형·그리드형 보기, 모션 기반 등장·호버 효과, 상세 라이트박스, 위치 메타데이터, 보기 방식 저장, 반응형 컨트롤과 다크 모드를 구현했습니다.',
        },
      },
      {
        heading: { en: 'Content management', ko: '콘텐츠 관리' },
        body: {
          en: 'Created a Supabase-backed admin workspace with email/password sessions, exhibition CRUD, multi-image upload progress, browser-side image compression, storage cleanup, and country-state-city metadata selection.',
          ko: 'Supabase 이메일·비밀번호 세션, 전시 CRUD, 다중 이미지 업로드 진행률, 브라우저 이미지 압축, 스토리지 정리, 국가·주·도시 메타데이터 선택을 포함한 관리자 작업공간을 구현했습니다.',
        },
      },
      {
        heading: { en: 'Architecture', ko: '구조' },
        body: {
          en: 'Used Astro for page composition and initial data loading while React islands handle the highly interactive gallery and admin dashboard. Supabase provides database, storage, RPC, and authentication capabilities.',
          ko: 'Astro가 페이지 구성과 초기 데이터 로딩을 담당하고, 상호작용이 많은 갤러리와 관리자 대시보드는 React 아일랜드로 구현했습니다. Supabase를 데이터베이스, 스토리지, RPC, 인증 계층으로 사용했습니다.',
        },
      },
    ],
    disclosure: {
      en: 'This is a personal open-source project. The portfolio includes a screenshot of the public deployment, but excludes Supabase credentials, administrator access, and non-public data.',
      ko: '개인 공개 프로젝트입니다. 공개 배포 화면의 스크린샷은 포함하지만 Supabase 인증 정보, 관리자 접근 정보, 비공개 데이터는 포함하지 않습니다.',
    },
  },
  {
    slug: 'legal-work-management-platform',
    status: 'approved',
    title: {
      en: 'Legal Work Management Platform',
      ko: '법률 업무 통합 관리 플랫폼',
    },
    eyebrow: {
      en: 'Legal technology · Production case study',
      ko: '법률 기술 · 운영 사례',
    },
    summary: {
      en: 'An anonymized platform for legal professionals and clients to manage matters, advisory work, documents, schedules, permissions, and communication in shared workspaces.',
      ko: '법률 전문가와 의뢰인이 사건·자문, 문서, 일정, 권한, 커뮤니케이션을 공동 업무공간에서 관리하는 익명화된 플랫폼입니다.',
    },
    role: {
      en: 'Full-stack Web Development',
      ko: '풀스택 웹 개발',
    },
    technologies: [
      'Spring Boot',
      'Java',
      'React',
      'TypeScript',
      'Thymeleaf',
      'Spring Security',
      'PostgreSQL',
      'Redis',
    ],
    sections: [
      {
        heading: { en: 'Product context', ko: '제품 맥락' },
        body: {
          en: 'Legal work requires different views and permissions for lawyers, staff, organizations, and clients. Matters, advisory requests, files, schedules, and conversations must remain connected without exposing unauthorized actions.',
          ko: '법률 업무는 변호사, 실무자, 기관, 의뢰인마다 다른 화면과 권한이 필요합니다. 사건·자문 요청, 파일, 일정, 대화는 연결되어야 하지만 허용되지 않은 작업은 노출되거나 실행되어서는 안 됩니다.',
        },
      },
      {
        heading: { en: 'Contribution', ko: '기여' },
        body: {
          en: 'Contributed to matter and advisory workspace flows, dashboards, document handling, responsive interfaces, chat experiences, and validation. Repository history shows sustained work across Spring controllers and services, server-rendered templates, and React/TypeScript components.',
          ko: '사건·자문 업무공간, 대시보드, 문서 처리, 반응형 인터페이스, 채팅 경험, 입력 검증에 기여했습니다. 저장소 기록에서 Spring 컨트롤러·서비스, 서버 렌더링 템플릿, React·TypeScript 컴포넌트 전반의 지속적인 작업이 확인됩니다.',
        },
      },
      {
        heading: { en: 'Authorization design', ko: '권한 설계' },
        body: {
          en: 'Implemented and refined role-aware rendering and server-side access conditions for editing, deleting, uploading, and viewing matter or advisory resources. Unassigned work was treated as read-only, with direct URL access protected as well as UI controls.',
          ko: '사건·자문 리소스의 수정, 삭제, 업로드, 조회에 대해 역할 기반 렌더링과 서버 측 접근 조건을 구현·개선했습니다. 미배정 업무는 읽기 전용으로 처리하고 UI 버튼뿐 아니라 직접 URL 접근도 함께 보호했습니다.',
        },
      },
      {
        heading: { en: 'Workflow & UX', ko: '워크플로 및 UX' },
        body: {
          en: 'Improved upload progress and size validation, navigation warnings during active uploads, responsive dashboards, data presentation, form validation, PWA metadata, and home-screen installation support.',
          ko: '업로드 진행률과 용량 검증, 업로드 중 페이지 이동 경고, 반응형 대시보드, 데이터 표시, 폼 검증, PWA 메타데이터와 홈 화면 설치 지원을 개선했습니다.',
        },
      },
      {
        heading: { en: 'Engineering scope', ko: '기술 범위' },
        body: {
          en: 'Worked in a multi-module Spring Boot system with a hybrid frontend: Thymeleaf and JavaScript for core business screens, plus React and TypeScript for interactive chat and file workflows.',
          ko: '멀티 모듈 Spring Boot 시스템에서 핵심 업무 화면은 Thymeleaf·JavaScript, 상호작용이 많은 채팅·파일 흐름은 React·TypeScript를 사용하는 하이브리드 프론트엔드 구조를 다뤘습니다.',
        },
      },
    ],
    disclosure: {
      en: 'The client, organization, repository, internal architecture identifiers, source code, production configuration, URLs, legal data, and original screenshots are not disclosed.',
      ko: '고객사, 조직, 저장소, 내부 아키텍처 식별자, 소스 코드, 운영 설정, URL, 법률 데이터, 원본 화면은 공개하지 않습니다.',
    },
  },
]

export const approvedProjects = projects.filter(
  (project) => project.status === 'approved',
)

export const findApprovedProject = (slug: string) =>
  approvedProjects.find((project) => project.slug === slug)
