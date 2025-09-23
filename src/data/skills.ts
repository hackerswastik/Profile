export type Skill = { name: string };
export type SkillGroup = { category: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java' },
      { name: 'Scala' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Backend & Frameworks',
    skills: [
      { name: 'Spring Boot' },
      { name: 'Spring Cloud' },
      { name: 'Hibernate/JPA' },
      { name: 'Microservices' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
    ],
  },
  {
    category: 'Big Data & Analytics',
    skills: [
      { name: 'Apache Spark' },
      { name: 'Databricks' },
      { name: 'Snowflake' },
      { name: 'Apache Kafka' },
      { name: 'Data Warehousing' },
      { name: 'ETL Pipelines' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Jenkins' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'CI/CD Pipelines' },
    ],
  },
];

