import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const projects = [
  {
  title: 'FairPlay',
  description:
    'A full-stack football team management app that uses a Snake Draft Algorithm to generate balanced teams. Users can register, build a player roster from other registered users, assign skill ratings, and generate fairly distributed teams across multiple sides.',
  impact: 'Turns chaotic kickabout planning into a fair, data-driven team selection experience.',
  stack: ['Python', 'Django', 'SQLite', 'Bootstrap 5', 'GitHub Actions', 'CI/CD'],
  liveUrl: 'https://fairplay-lake.vercel.app/',
  githubUrl: 'https://github.com/Stembetevo/fairplay',
},

{
  title: 'OpenSignal',
  description:
    'A sponsored-transaction API and developer portal for Sui dApps that abstracts away gas fees entirely. dApps submit transaction payloads via API key, OpenSignal validates, sponsor-signs, and returns bytes ready for user wallet signing with a full portal for app and API key management.',
  impact: 'Removes the biggest UX barrier in Web3 making gasless Sui transactions accessible to any dApp.',
  stack: ['TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Sui SDK', 'React', 'Vite'],
  liveUrl: 'https://opensignal.onrender.com',
  githubUrl: 'https://github.com/Stembetevo/OpenSignal',
},
  {
  title: 'Quiflix',
  description:
    'A Web3 film platform where movies are minted and shared as NFTs on the Lisk Sepolia blockchain. Filmmakers can publish their work on-chain, giving audiences true ownership of the content they support — no middlemen, no gatekeepers.',
  impact: 'Redefining film distribution for African creators by putting ownership directly on-chain.',
  stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Lisk Sepolia', 'NFT', 'Web3'],
  liveUrl: 'https://quiflix.xyz',
  githubUrl: '#',
},
]

export const experience = [
  {
  title: 'Resident Developer, Adamur',
  text: 'Led frontend feature delivery and platform refinements across a Web3 product, owning the full cycle from design handoff to production deployment. Worked closely with the product and design teams to build responsive, accessible UI components using React and TypeScript, maintained a shared component library to enforce consistency across the platform, and introduced workflow improvements that reduced friction in the dev feedback loop.',
  impact:
    'This role sharpened my product thinking and execution speed by teaching me how to ship user-facing improvements that balance business goals, UX quality, and technical reliability — while working within the constraints of a fast-moving Web3 startup.',
},
{
  title: 'Technical Lead, Sui Community',
  text: 'Coordinated technical direction for a growing community of Sui ecosystem builders, serving as the go-to resource for development patterns, tooling decisions, and Move smart contract concepts. Organised onboarding sessions for new contributors, reviewed community-built projects, and helped align builder initiatives with the broader Sui ecosystem roadmap. Acted as a bridge between technical contributors and non-technical stakeholders.',
  impact:
    'It strengthened my leadership and communication by forcing me to distill complex Web3 and blockchain concepts into approachable guidance, mentor contributors at different skill levels, and make technical decisions that served the community rather than just the codebase.',
},
]

export const skills = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Responsive UI',
  'Python Django',
  'JavaScript',
  'Next Js',
  'Blockchain Technology',
  'Sui Move'
]

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stephen-karuru-b78167279/', icon: FaLinkedin },
  { label: 'X', href: 'https://x.com/step27227', icon: FaXTwitter },
  { label: 'GitHub', href: 'https://github.com/Stembetevo', icon: FaGithub },
]