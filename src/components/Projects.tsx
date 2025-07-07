
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: 'Tetris Inventory',
      description: 'Tetris-style Unity inventory with item rotation and types. Built under strict deadlines to showcase system design skills.',
      mediaType: "video", 
      mediaUrl: "https://www.youtube.com/embed/7PDsUQXIJmA?si=tBRQbRaF1LHrsPlJ", 
      tags: ['UniProj', 'C#', 'UI', 'Prototype'],
      category: 'unity',
      featured: true,
      blog: 'blog/TetrisInventory',
      code: 'https://github.com/jacobvillard/InventorySystemV2',
      demo: 'https://darknerior.itch.io/inventorysystem'
    },
    {
      id: 8,
      title: 'Gobsmacked!',
      description: 'A collaborative multiplayer Unreal Engine goblin party game, showcasing my C++ and networking skills.',
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/Ly_5AczJ51U?si=-ObtEhXen8fWw51T",
      tags: ['IN4', 'C++', 'EOS', 'Networking'],
      category: 'unreal',
      featured: true,
      code: 'https://github.com/jacobvillard/RoomOne',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'This portfolio showcases how I rapidly picked up HTML, CSS, JavaScript, and now React, Tailwind, and Vite to build a site.',
      mediaType: "image",
      mediaUrl: '/images/site.png',
      tags: ['React', 'Tailwind', 'Vite', 'HTML', 'CSS'],
      category: 'frontend',
      featured: true,
      blog: 'blog/Portfolio',
      code: 'https://github.com/jacobvillard/jacobvillard.github.io'
    },
    {
      id: 2,
      title: 'FPS Demo',
      description: 'A stylized visual rapid FPS prototype built for my creative portfolio module, showcasing AI agents.',
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/wgS8k-1sniw?si=Fd5xHaMd72j1vUm0",
      tags: ['UniProj', 'C#', 'Prototype'],
      category: 'unity',
      featured: false,
      blog: 'blog/FpsDemo',
      code: 'https://github.com/jacobvillard/FpsScripts',
      demo: 'https://darknerior.itch.io/fps-demo'
    },
    {
      id: 3,
      title: 'Hierarchical A* Pathfinding',
      description: 'A complex hierarchical A* system built for enemy AI navigation, and optimized for performance.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/fuYp80CRjw4?si=jGk-MJzExJhCzOTf',
      tags: ['UniProj', 'AI', 'Prototype', 'Pathfinding'],
      category: 'unity',
      featured: false,
      blog: 'blog/AStar',
      code: 'https://github.com/jacobvillard/Astar',
      demo: 'https://darknerior.itch.io/a-hide-and-seek'
    },
    
    {
      id: 5,
      title: 'Guild Hall Environment',
      description: 'Guild Hall Environment is a 3D Unity HDRP, showcasing god rays and screen space reflections.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/ARTBy8aUvf0?si=GI1IzGVf4tYI1iFw',
      tags: ['HDRP', 'SSR', 'Level Design','Environment'],
      category: 'unity',
      featured: false,
      demo: 'https://drive.google.com/file/d/1dJbLjG9sWKq2eNcCekkVDyodkcyQ2Szg/view?usp=sharing'
    },
    {
      id: 7,
      title: 'Poly Racer',
      description: 'Poly Racer was my first game project using procedural generation, created before university, and a personal milestone.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/OMUCxoXWQ-U?si=syANycEV9PrlsHKk',
      tags: ['C#', 'Procedural Generation', 'Prototype'],
      category: 'unity',
      featured: false,
      demo: 'https://darknerior.itch.io/poly-racer'
    },
    {
      id: 9,
      title: 'Fallen Vestige',
      description: 'A release steam game made for a uni module in which I was a lead programmer, implementing core mechanics and systems.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/e6kSAcnKfjU?si=KN4aE04W3xomJVkH',
      tags: ['C#', 'Steam', 'UniProj'],
      category: 'unity',
      featured: false,
      blog: 'blog/FallenVestige',
      demo: 'https://store.steampowered.com/app/3517090/Fallen_Vestige/'
    },
    {
      id: 10,
      title: 'Port Forwarded Maze',
      description: 'A multiplayer maze game where players must port forward to connect, designed to prototype networking concepts.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/EumqgTZIGVg?si=uvXNb5L2lmH6Xtwl',
      tags: ['IN4', 'Blueprints', 'Prototype', 'Networking'],
      category: 'unreal',
      featured: false,
      code: 'https://github.com/jacobvillard/IN4project',
    },
    {
      id: 11,
      title: 'Cube Collection Inc',
      description: 'A prototype that combines AI, blackboards and behaviour trees with physics, for an interactive prototype.',
      mediaType: "image",
      mediaUrl: "/images/cubeinc.png",
      tags: ['Blueprints', 'Prototype', 'Physics'],
      category: 'unreal',
      featured: false,
      code: 'https://github.com/jacobvillard/CubeCollectionInc',
      demo: 'https://darknerior.itch.io/cube-collection-inc'
    },
    {
      id: 6,
      title: 'Emu War',
      description: 'A collaborative project where I focused on UX systems gaining valuable design insight despite the unfinished state.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/yIVcOkPh4l4?si=VZ8lXL502WLGW28K',
      tags: ['C#', 'UI', 'Prototype', 'UniProj'],
      category: 'unity',
      featured: false,
      blog: 'blog/EmuWar',
      code: 'https://github.com/Darknerior/emuwar',
      demo: 'https://darknerior.itch.io/emuwar'
    },
    {
      id: 12,
      title: 'RTS Battle Boxes',
      description: 'A prototype RTS game based upon rock paper scissors mechanics, showcasing my understanding of game design loops.',
      mediaType: "image",
      mediaUrl: "/images/rts.png",
      tags: ['C#', 'RTS', 'Prototype'],
      category: 'unity',
      featured: false,
      code: 'https://github.com/jacobvillard/RTS'
    },
    {
      id: 12,
      title: 'Block Building Prototype',
      description: 'A collaborative block building prototype in which we built complex building systems, focused on placement and snapping mechanics.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/cvoQu1WtNGE?si=eln8Qyy6FzjYLsWT',
      tags: ['C#', 'Building', 'Prototype'],
      category: 'unity',
      featured: false,
      code: 'https://github.com/Darknerior/Airships',
    },
    {
      id: 13,
      title: 'Dash Prototype',
      description: 'A simple prototype showcasing dash mechanics in Unreal, focusing on player movement and responsiveness.',
      mediaType: "image",
      mediaUrl: '/images/dash.png',
      tags: ['C++', 'Player Controller ', 'Prototype'],
      category: 'unreal',
      featured: false,
      code: 'https://github.com/jacobvillard/DashCPlus',
      demo: 'https://darknerior.itch.io/dash-game'
    },
    {
      id: 14,
      title: 'Physics Runner',
      description: 'A collaborative physics-based runner game prototype, focusing on player movement and environmental interaction.',
      mediaType: "image",
      mediaUrl: '/images/runner.png',
      tags: ['Blueprints', 'IN4', 'Physics', 'Prototype'],
      category: 'unreal',
      featured: false,
      code: 'https://github.com/jacobvillard/IN4project',
      demo: 'https://darknerior.itch.io/physiscs-runner'
    },
    {
      id: 15,
      title: 'Scorpion Mech',
      description: 'A custom scorpion mech modelled, rigged and animated in blender. Featuring a fully functional rig with IK controls.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/QVCiVgICBgE?si=9o5PTCbLJxaCZKaU',
      tags: ['Blender', 'Rigging', 'Animation'],
      category: 'tools',
      featured: false,
    },
    {
      id: 16,
      title: 'Accessibility Dissertation',
      description: 'A dissertation exploring accessibility in game design, focusing on the player experience impacts.',
      mediaType: "image",
      mediaUrl: '/images/diss.png',
      tags: ['Academic', 'Accessibility', 'UniProj'],
      category: 'documentation',
      featured: false,
      blog: 'blog/AccessibilityDissertation',
    },
    {
      id: 17,
      title: 'Crazy Chess',
      description: 'A game concept created using powerpoint and photoshop. It is a variation of chess with unique rules and mechanics.',
      mediaType: "image",
      mediaUrl: '/images/chess.png',
      tags: ['Powerpoint', 'Game Concept', 'Prototype'],
      category: 'documentation',
      featured: false,
      blog: 'blog/ChessGame',
    },
    {
      id: 18,
      title: 'Imager',
      description: 'A conceptual social media application created for a university module, showcasing my understanding of UI/UX design.',
      mediaType: "image",
      mediaUrl: '/images/imager.png',
      tags: ['UI', 'UX', 'Concept', 'Prototype'],
      category: 'documentation',
      featured: false,
      blog: 'blog/Imager',
    },
    {
      id: 19,
      title: 'Bury College Raptors Logo Animatic',
      description: 'A animated logo created for Bury College Raptors in Blender, showcasing my skills in animation and design.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/RJLGwCG-kNg?si=H_DOdCqaqedOalyA',
      tags: ['Blender', 'Animation'],
      category: 'tools',
      featured: false,
    },
    {
      id: 20,
      title: 'Editor Utils',
      description: 'A unity package containing various editor utilities to improve workflow and productivity.',
      mediaType: "image",
      mediaUrl: '/images/editor.png',
      tags: ['C#', 'Workflow', 'Optimisation'],
      category: 'tools',
      featured: false,
      code: 'https://github.com/jacobvillard/EditorUtils',
    },
    {
      id: 21,
      title: 'Cherry',
      description: 'A Unity editor plugin designed to store boilerplate code, models and files within a github repo.',
      mediaType: "image",
      mediaUrl: '/images/cherry.png',
      tags: ['C#', 'Github', 'Prototype'],
      category: 'tools',
      featured: false,
      code: 'https://github.com/jacobvillard/cherry',
    },
    {
      id: 22,
      title: 'Asylum',
      description: 'A collaborative game prototype featuring a first-person controller and enemy interaction mechanics.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/kC1YvnrHA2I?si=OflFWzHd4r61R5lr',
      tags: ['C#', 'Game', 'UniProj'],
      category: 'unity',
      featured: false,
      code: '',
      demo: 'https://darknerior.itch.io/asylum'
    },
    {
      id: 23,
      title: 'Zombie Shooter',
      description: 'A zombie shooter prototype featuring imported Mixamo animations and clean weapon interaction systems.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/_TeiE_y9Iqw?si=DOMoCg1HaZZcutTW',
      tags: ['C#', 'Prototype', 'animations'],
      category: 'unity',
      featured: false,
    },
    {
      id: 24,
      title: 'Temporis',
      description: 'An early prototype of a 3D action platforming game, building my foundational knowledge of Unity and C#.',
      mediaType: "image",
      mediaUrl: '/images/temporis.png',
      tags: ['C#', 'Prototype', 'Enemy AI'],
      category: 'unity',
      featured: false,
    },
    {
      id: 25,
      title: 'EOS Networking Prototype',
      description: 'A lobby creation and management system using Epic Online Services, showcasing my understanding of networking in Unreal Engine.',
      mediaType: "video",
      mediaUrl: 'https://www.youtube.com/embed/jn9E7tFvCAc?si=XRJd8w7MVTbSLBRS',
      tags: ['IN4', 'Blueprints', 'Prototype', 'Networking'],
      category: 'unreal',
      featured: false,
    },
    {
      id: 26,
      title: 'Pseudocode Generator',
      description: 'A tool that generates pseudocode from C# scripts, designed to help with understanding and documenting code logic.',
      mediaType: "image",
      mediaUrl: '/images/code.jpg',
      tags: ['C#', 'Workflow', 'Optimisation', 'UML'],
      category: 'tools',
      featured: false,
      code: 'https://github.com/jacobvillard/PseudocodeConverter',
    },



  ];

  const categories = ['all', 'unity', 'unreal', 'frontend', 'tools', 'documentation'];
  const visibleProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const displayedProjects = showAll ? visibleProjects : visibleProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-cyan glow-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> ls -la ~/projects/
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
              <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`font-mono capitalize ${
                      filter === category
                          ? 'bg-terminal-green text-black'
                          : 'border-terminal-green/50 text-terminal-green hover:bg-terminal-green hover:text-black'
                  }`}
              >
                {category}
              </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
              <Card key={project.id} className="project-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  {project.mediaType === 'video' ? (
                      <iframe
                          src={project.mediaUrl}
                          title={project.title}
                          className="w-full h-48"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                      />
                  ) : (
                      <img
                          src={project.mediaUrl}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                  )}

                  {/* Always render badge in top-right */}
                  {project.featured && (
                      <Badge className="absolute top-2 right-2 bg-terminal-amber text-black font-mono">
                        Featured
                      </Badge>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-mono text-lg text-terminal-green">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="font-mono text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-mono text-xs">
                          {tag}
                        </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    {project.code && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="font-mono"
                            onClick={() => window.open(project.code, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2"/>
                          Code
                        </Button>
                    )}

                    {project.blog && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="font-mono"
                            onClick={() => window.open(project.blog, '_Self')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2"/>
                          Blog
                        </Button>
                    )}
                  </div>

                  {project.demo && (
                      <Button
                          size="sm"
                          className="bg-terminal-cyan hover:bg-terminal-cyan/80 text-black font-mono"
                          onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2"/>
                        Demo
                      </Button>
                  )}
                </CardFooter>

              </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(prev => !prev)}
              className="border-terminal-pink text-terminal-pink hover:bg-terminal-pink hover:text-black font-mono"
          >
            {showAll ? 'View Less' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
