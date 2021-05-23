// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Six Sigma',
    competency: 4,
    category: ['Process improvement'],
  },
  {
    title: 'Lean Manufacturing',
    competency: 3,
    category: ['Process improvement'],
  },
  {
    title: 'Doctec publishing',
    competency: 3,
    category: ['Technical documentation software'],
  },
  {
    title: 'MSG-3 Analysis',
    competency: 4,
    category: ['Maintenance program optimization and development for aircraft'],
  },
  {
    title: 'Part 107 pilot certificate',
    competency: 4,
    category: ['commercial drone certification'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
