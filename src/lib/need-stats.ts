export type NeedSource = {
  id: string;
  shortLabel: string;
  label: string;
  href: string;
};

export const NEED_SOURCES: NeedSource[] = [
  {
    id: "afcars-2023",
    shortLabel: "AFCARS FY 2023",
    label:
      "U.S. HHS, Administration for Children and Families, AFCARS FY 2023 (children in care on Sept. 30, 2023; exits to emancipation during FY 2023).",
    href: "https://acf.gov/sites/default/files/documents/cb/2023-afcars-dashboard-printable.pdf",
  },
  {
    id: "midwest-26",
    shortLabel: "Chapin Hall Midwest Study",
    label:
      "Courtney, Dworsky, et al., Midwest Evaluation of the Adult Functioning of Former Foster Youth: Outcomes at Age 26 (Chapin Hall). Sample from Illinois, Iowa, and Wisconsin—not a national census. Ever incarcerated by age 26: 74% of young men, 43% of young women.",
    href: "https://www.chapinhall.org/wp-content/uploads/Midwest-Eval-Outcomes-at-Age-26.pdf",
  },
  {
    id: "census-2021",
    shortLabel: "Census ACS 2021",
    label:
      "U.S. Census Bureau, Grandparents and Their Coresident Grandchildren: 2021 (P20-588). About 2.1 million grandparents were responsible for most of their coresident grandchildren’s basic care (of 6.7 million grandparents living with a grandchild under 18).",
    href: "https://www2.census.gov/library/publications/2024/demo/p20-588.pdf",
  },
  {
    id: "census-story-2024",
    shortLabel: "Census Bureau 2024",
    label:
      "U.S. Census Bureau, America Counts story (March 2024): Southern States Had Higher Than Average Share of Adults Age 30 and Over Who Lived With Grandchildren in 2021.",
    href: "https://www.census.gov/library/stories/2024/03/grandparents-living-with-grandchildren.html",
  },
];

export const NEED_STATS = [
  {
    id: "in-care",
    color: "#3c48cc",
    kicker: "In care",
    display: "343,077",
    detail:
      "Children in U.S. foster care on September 30, 2023—a single-day count, not everyone served that year.",
    sourceIds: ["afcars-2023"],
  },
  {
    id: "age-out",
    color: "#d81818",
    kicker: "Aging out",
    display: "15,590",
    detail:
      "Young people who left foster care to emancipation in FY 2023—often called aging out—without a permanent family.",
    sourceIds: ["afcars-2023"],
  },
  {
    id: "justice",
    color: "#6c48a8",
    kicker: "Later justice involvement",
    display: "3 in 4",
    detail:
      "Young men in the Midwest Study who had been incarcerated by age 26 after aging out of care. More than two in five young women had too.",
    secondary: {
      display: "2 in 5",
      detail: "young women, same study",
    },
    sourceIds: ["midwest-26"],
  },
  {
    id: "grandparents",
    color: "#f09000",
    kicker: "Kinship",
    display: "2.1M",
    detail:
      "Grandparents responsible for grandchildren’s basic care (2021). Many kinship homes never appear in foster-care counts.",
    sourceIds: ["census-2021", "census-story-2024"],
  },
] as const;
