export interface TimelineEntry {
  id: number;
  title: string;
  subtitle: string;
  when: string;
  year?: number;
  description: string;
}

export const internships: TimelineEntry[] = [
  {
    id: 1,
    title: 'BAC S SI',
    subtitle: 'Victor Duruy highschool A-level',
    when: '2009 to 2012',
    year: 2012,
    description:
      'French A-level equivalent obtained in 2012 following the science and engineering course.\nI did a bit of programming in C during that time but it was pretty minor.',
  },
  {
    id: 2,
    title: 'Web Developer',
    subtitle: 'Internship at Aca-o',
    when: 'september to december 2013',
    year: 2013,
    description:
      '3 months internship as a web developer for the Aca-o web agency.\nI mainly used php with the yii web framework and mysql.\nIt was my first ever job in IT.',
  },
  {
    id: 3,
    title: 'C# Developer',
    subtitle: 'Internship at Potez Aeronautique',
    when: 'june to august 2014',
    year: 2014,
    description:
      '3 months internship as a .Net developer.\nBack then we were using old .Net framework versions with C#, wpf and vb6.\nWe were working on software for industrial level furnaces designed for plane parts.',
  },
  {
    id: 4,
    title: 'Web Developer',
    subtitle: 'Internship at CGPME',
    when: 'february to may 2015',
    year: 2015,
    description:
      '3 months internship as a web developer.\nI had to collect the requirements, design and build a complete web app from scratch.\nAs the only tech on the project, I used php and mysql for this.',
  },
  {
    id: 5,
    title: 'Php Developer',
    subtitle: 'Internship at Cartegie',
    when: 'october 2015 to february 2016',
    description:
      '4 months internship as a php developer.\nI worked in php on a web tracking tool based on matomo and elasticsearch.\nDuring the internship I also designed a querying tool in C#.',
  },
  {
    id: 6,
    title: 'C# Developer',
    subtitle: 'Internship at Cartegie',
    when: 'february to july 2017',
    year: 2017,
    description:
      '6 months internship working as a .Net developer.\nI worked on a full-scale back-office web app in .Net framework with asp.Net mvc and sql server.\nI also helped handle and plan sprints with the project manager.',
  },
  {
    id: 7,
    title: 'SI Manager Diploma',
    subtitle: "Cesi engineering school master's degree",
    when: '2012 to 2017',
    description:
      "Master's degree from the Cesi Engineering school.\nAfter all those classes and internships, it was time for me to start my working life!",
  },
];

export const works: TimelineEntry[] = [
  {
    id: 8,
    title: 'C# Software Developer',
    subtitle: 'Cdiscount for SII',
    when: 'september 2017 to november 2018',
    year: 2017,
    description:
      'On-site Consultant integrated with the .Net Technical Specialists team.\nI worked in .Net implementing company-specific rules for the Roslyn compiler.\nApart from the meta-programming stuff, I helped with the global migration for all developers including:\n- .Net framework to .Net core migration, preparing example projects and tutorials\n- monolithic to micro-services migration with architectural example and specific connectors',
  },
  {
    id: 9,
    title: 'Software Engineer',
    subtitle: 'Idaia Group',
    when: 'november 2018 to september 2022',
    year: 2018,
    description:
      'As part of the Editing team, I worked on a collection of both internal and client apps.\nThe main stack I used was .Net 6 and angular as well as docker, sql server, RabbitMQ and elasticsearch.\nI was responsible for architectural choices and code conception.\nI emphasized code quality and technical presentations to teach developers.',
  },
  {
    id: 10,
    title: 'Backend Developer',
    subtitle: 'SLB for Sfeir',
    when: 'october 2022 to october 2025',
    year: 2022,
    description:
      'As part of a full-remote .Net team, I worked on a desktop app aimed to be deployed on oil rigs.\nThe technical stack was composed of mostly .Net with WinForms components.\nDuring my time there, I was also responsible for the .Net framework to .Net 8 migration,\nthe decrease of technical debt as well as the refresh of the CI/CD pipeline on Azure DevOps.\n\nIn the meantime at my employer Sfeir I was organizing and presenting internal tech events.\nI was also participating in recruiting talents by doing technical .Net tests for recruits.',
  },
  {
    id: 11,
    title: '.Net Advanced Developer',
    subtitle: 'Betclic for Sfeir',
    when: 'october 2025 to april 2026',
    year: 2025,
    description:
      'As part of the Trading Intelligence team, I was tasked with building a cloud-first and performant\nsuite of micro-services to analyze and react to events from various sports to generate real-time odds.\nThe technical stack was .Net 10, Kafka, Datadog, Github Actions with Terraform on an AWS Fargate environment.\n\nIn the meantime at my employer Sfeir I was still participating in recruiting talents by doing technical .Net tests.\nI also continued to organize and present popular tech events in Bordeaux.',
  },
  {
    id: 12,
    title: 'Lead Tech',
    subtitle: 'AJ Innov',
    when: 'april 2026 to current day',
    year: 2026,
    description:
      "I'm currently working at AJ Innov, working on multiple cloud-first projects.\nI also have to manage and train a team of developers and am responsible for building various tech tools for the company.\nI like the challenge and work with php, python and .Net as well as AWS, Sentry and Terraform.\nI'm still presenting tech events in Bordeaux.",
  },
];
