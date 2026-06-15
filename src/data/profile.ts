import type {
  Certification,
  Education,
  Experience,
  SkillGroup,
} from '../types/content'

export const experiences: Experience[] = [
  {
    period: { en: 'Current', ko: '현재' },
    title: {
      en: 'Full-stack & Machine Learning Developer',
      ko: '풀스택 및 머신러닝 개발자',
    },
    organization: {
      en: 'Private education technology',
      ko: '사교육 기술 솔루션',
    },
    description: {
      en: 'Building FastAPI workflows, server-rendered product interfaces, and computer-vision pipelines for workbook operations and review-note experiences.',
      ko: '문제집 운영과 오답노트 경험을 위한 FastAPI 워크플로, 서버 렌더링 UI, 컴퓨터 비전 파이프라인을 개발합니다.',
    },
  },
  {
    period: { en: 'Previous', ko: '이전' },
    title: { en: 'Spring Boot Web Developer', ko: 'Spring Boot 웹 개발자' },
    organization: {
      en: 'Legal technology platform',
      ko: '법률 기술 플랫폼',
    },
    description: {
      en: 'Contributed to authorization, CRUD workflows, and web publishing for a lawyer-assistance platform. Details remain pending a separate repository review.',
      ko: '변호사 보조 플랫폼의 권한 관리, CRUD 워크플로, 웹 퍼블리싱에 기여했습니다. 세부 내용은 별도 저장소 검수 후 확정합니다.',
    },
  },
  {
    period: { en: 'Foundation', ko: '시작' },
    title: { en: 'React Web Developer', ko: 'React 웹 개발자' },
    organization: {
      en: 'Frontend product development',
      ko: '프론트엔드 제품 개발',
    },
    description: {
      en: 'Started with component-based interfaces and responsive web implementation, forming the base for later full-stack work.',
      ko: '컴포넌트 기반 인터페이스와 반응형 웹 구현으로 시작해 이후 풀스택 개발의 기반을 만들었습니다.',
    },
  },
]

export const education: Education[] = [
  {
    school: {
      en: 'Konyang University, Republic of Korea',
      ko: '건양대학교, 대한민국',
    },
    program: {
      en: 'B.E. in Cybersecurity Engineering',
      ko: '사이버보안공학 전공',
    },
    detail: {
      en: 'Minor in English & Anglo-American Culture',
      ko: '영미영어문화 부전공',
    },
  },
  {
    school: {
      en: 'University of Victoria, British Columbia, Canada',
      ko: 'University of Victoria, 캐나다 BC',
    },
    program: { en: 'Exchange Student', ko: '교환학생' },
  },
]

export const certifications: Certification[] = [
  {
    name: {
      en: 'ISO/IEC 27001 Information Security Management System Associate Auditor',
      ko: 'ISO 27001 정보보안경영시스템 심사원(보)',
    },
    issuer: { en: 'Professional certification', ko: '전문 자격' },
    expires: { en: 'Valid through December 2026', ko: '2026년 12월 만료' },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Frontend', ko: '프론트엔드' },
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    label: { en: 'Backend', ko: '백엔드' },
    skills: ['Python', 'FastAPI', 'Spring Boot', 'PostgreSQL'],
  },
  {
    label: { en: 'Machine Learning', ko: '머신러닝' },
    skills: ['YOLO', 'PyTorch', 'Ultralytics', 'PyMuPDF'],
  },
  {
    label: { en: 'Security & Delivery', ko: '보안 및 운영' },
    skills: ['Secure Coding', 'ISO 27001', 'Git', 'Linux', 'Vercel'],
  },
]
