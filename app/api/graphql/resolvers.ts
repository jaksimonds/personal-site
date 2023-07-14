
import projects from './projects'

const resolvers = {
  Query: {
    projects: () => projects,
    featuredProjects: () => projects.filter(project => project.id > projects.length - 4)
      .sort((a, b) => b.id - a.id),
    project: (_: any, args: any) => projects.find((project) => project.slug === args.slug)
  },
};

export default resolvers