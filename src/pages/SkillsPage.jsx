import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Cpu, Database, Layers, Server, Settings, Palette } from 'lucide-react';

    const skillsData = [
      {
        category: 'Frontend',
        icon: <Palette className="h-8 w-8 text-primary" />,
        skills: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Ember JS'],
        gradient: 'from-pink-500 to-rose-500',
      },
      {
        category: 'Backend',
        icon: <Server className="h-8 w-8 text-primary" />,
        skills: ['PHP', 'CodeIgniter', 'Laravel', 'REST API'],
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        category: 'Database',
        icon: <Database className="h-8 w-8 text-primary" />,
        skills: ['MySQL', 'MongoDB'],
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        category: 'CMS',
        icon: <Layers className="h-8 w-8 text-primary" />,
        skills: ['WordPress', 'Drupal', 'Zyro'],
        gradient: 'from-purple-500 to-violet-500',
      },
      {
        category: 'Hosting & Cloud',
        icon: <Cpu className="h-8 w-8 text-primary" />,
        skills: ['Hostinger', 'InMotion', 'Firebase', 'AWS'],
        gradient: 'from-amber-500 to-yellow-500',
      },
      {
        category: 'Tools & Others',
        icon: <Settings className="h-8 w-8 text-primary" />,
        skills: ['GitHub', 'Jira', 'Bitbucket', 'VMware', 'AI Tools (ChatGPT, Copilot)'],
        gradient: 'from-indigo-500 to-fuchsia-500',
      },
    ];

    const SkillsPage = () => {
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
          },
        }),
      };

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <motion.custom
                key={category.category}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                className="dark:whileHover:shadow-[0px_10px_20px_rgba(255,255,255,0.05)]"
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <CardHeader className={`bg-gradient-to-br ${category.gradient} p-6`}>
                    <div className="flex items-center space-x-3">
                      {React.cloneElement(category.icon, { className: "h-8 w-8 text-white" })}
                      <CardTitle className="text-white !bg-none !text-2xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center text-muted-foreground">
                          <span className={`inline-block h-2 w-2 rounded-full mr-3 bg-gradient-to-r ${category.gradient}`}></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.custom>
            ))}
          </div>
        </motion.div>
      );
    };

    export default SkillsPage;