export type Project = {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Enterprise Data Pipeline',
    blurb: 'Large-scale data processing system handling millions of records using Apache Spark and Databricks, with automated data quality checks and monitoring.',
    tech: ['Scala', 'Apache Spark', 'Databricks', 'Python', 'Airflow'],
    github: 'https://github.com/hackerswastik/data-pipeline',
    image: '/assets/data-pipeline-spark.svg'
  },
  {
    id: 'proj2',
    title: 'Enterprise Data Warehouse',
    blurb: 'Designed and implemented a modern data warehouse solution using Snowflake, handling terabytes of data with optimized query performance.',
    tech: ['Snowflake', 'dbt', 'SQL', 'Python', 'Jenkins'],
    github: 'https://github.com/hackerswastik/data-warehouse',
    image: '/assets/data-warehouse-snowflake.svg'
  },
  {
    id: 'proj3',
    title: 'Enterprise Microservices',
    blurb: 'Developed a suite of microservices for a high-traffic financial system using Spring Boot and Spring Cloud, with circuit breakers and distributed tracing.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/hackerswastik/microservices',
    image: '/assets/microservices-spring.svg'
  },
  {
    id: 'proj4',
    title: 'Real-time Analytics',
    blurb: 'Built a real-time analytics system processing streaming data using Kafka and Spark Streaming, with automated scaling and fault tolerance.',
    tech: ['Scala', 'Apache Kafka', 'Spark Streaming', 'Redis', 'Kubernetes'],
    github: 'https://github.com/hackerswastik/real-time-analytics',
    image: '/assets/realtime-analytics-kafka.svg'
  },
  {
    id: 'proj5',
    title: 'DevOps Automation',
    blurb: 'Implemented enterprise-grade CI/CD pipelines with automated testing, deployment, and rollback capabilities using Jenkins and AWS.',
    tech: ['Jenkins', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    image: '/assets/cicd-jenkins-aws.svg'
  },
  {
    id: 'proj6',
    title: 'Real-time Messaging',
    blurb: 'WebSocket service with fallbacks and exponential backoff.',
    tech: ['WebSocket', 'Spring', 'Redis'],
    image: '/assets/websocket-notifications.svg'
  },
];

