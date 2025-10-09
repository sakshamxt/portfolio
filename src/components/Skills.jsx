import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTypescript, SiFlutter } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {

    const skills = [
        {
            name: "Java",
            icon: FaJava
        },
        {
            name: "JavaScript",
            icon: IoLogoJavascript
        },
        {
            name: "TypeScript",
            icon: SiTypescript
        },
        {
            name: "React.js",
            icon: FaReact
        },
        {
            name: "Node.js",
            icon: FaNodeJs
        },
        {
            name: "Express.js",
            icon: SiExpress
        },
        {
            name: "MongoDB",
            icon: SiMongodb
        },
        {
            name: "Firebase",
            icon: IoLogoFirebase
        },
        {
            name: "Flutter",
            icon: SiFlutter
        },
        {
            name: "React Native",
            icon: TbBrandReactNative
        }
    ];

  return (
    <div className='cursor-default w-full flex flex-col items-start pt-16'>
        <h1 className='text-[#eeeeee] text-sm tracking-[0.02em]'>Skills</h1>
        <h2 className='text-[#bbbbbb] text-sm mt-1 tracking-[0.01em]'>Technologies I&apos;ve Worked With.</h2>
        <div className='flex flex-wrap gap-3 mt-6 w-full'>
            {skills.map((skill) => (
                <div className='flex items-center gap-1 rounded-lg border-[1px] border-[#bbbbbb] border-opacity-15 p-1 px-2' key={skill.name}>
                    <skill.icon className='text-[#bbbbbb] text-md'/>
                    <h1 className='text-[#bbbbbb] text-sm tracking-[0.01em]'>{skill.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills