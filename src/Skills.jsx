import Divider from "./Divider";
import SkillsIcon from "./SkillsIcon";

import IconJavaScript from "./assets/icon-skills-javascript.svg?react";
import IconHtml from "./assets/icon-skills-html.svg?react";
import IconCss from "./assets/icon-skills-css.svg?react";
import IconSql from "./assets/icon-skills-sql.svg?react";
import IconPython from "./assets/icon-skills-python.svg?react";
import IconReact from "./assets/icon-skills-react.svg?react";
import IconTailwind from "./assets/icon-skills-tailwind.svg?react";
import IconBootstrap from "./assets/icon-skills-bootstrap.svg?react";
import IconFigma from "./assets/icon-skills-figma.svg?react";
import IconNode from "./assets/icon-skills-node.svg?react";
import IconExpress from "./assets/icon-skills-express.svg?react";
import IconMongo from "./assets/icon-skills-mongo.svg?react";
import IconMongoose from "./assets/icon-skills-mongoose.svg?react";
import IconMySql from "./assets/icon-skills-mysql.svg?react";
import IconVsCode from "./assets/icon-skills-vscode.svg?react";
import IconGit from "./assets/icon-skills-git.svg?react";
import IconGithub from "./assets/icon-skills-github.svg?react";
import IconNotion from "./assets/icon-skills-notion.svg?react";

export default function Skills() {
    return (
        <section className="Skills px-8 pt-16 max-w-[1280px] mx-auto">
            <h2 className="poppins text-3xl font-bold leading-normal tracking-wide mb-4 md:text-[2.25rem] xl:text-[2.5rem] transition-all duration-300">
                Skills
            </h2>
            <p>Technologies I’ve worked with</p>

            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div>
                    < Divider title={'languages'}/>
                    <div className="w-full grid grid-cols-5 gap-4 items-center justify-between mt-6 text-gb-neutral-500 text-sm">
                        < SkillsIcon SVG={IconJavaScript} width={'50%'} description={'JavaScript'}/>
                        < SkillsIcon SVG={IconHtml} width={'50%'} description={'HTML5'}/>
                        < SkillsIcon SVG={IconCss} width={'50%'} description={'CSS3'}/>
                        < SkillsIcon SVG={IconSql} width={'45%'} description={'SQL'}/>
                        < SkillsIcon SVG={IconPython} width={'50%'} description={'Python'}/>
                    </div>
                </div>

                <div>
                    < Divider title={'frontend'}/>
                    <div className="w-full grid grid-cols-4 gap-4 items-center justify-between mt-6 px-5 text-gb-neutral-500 text-sm">
                        < SkillsIcon SVG={IconReact} width={'55%'} description={'React'}/>
                        < SkillsIcon SVG={IconTailwind} width={'55%'} description={'TailwindCSS'}/>
                        < SkillsIcon SVG={IconBootstrap} width={'55%'} description={'Bootstrap'}/>
                        < SkillsIcon SVG={IconFigma} width={'50%'} description={'Figma'}/>
                    </div>
                </div>

                <div>
                    < Divider title={'backend'}/>
                    <div className="w-full grid grid-cols-5 gap-4 items-center justify-between mt-6 text-gb-neutral-500 text-sm">
                        < SkillsIcon SVG={IconNode} width={'50%'} description={'Node.js'}/>
                        < SkillsIcon SVG={IconExpress} width={'50%'} description={'Express'}/>
                        < SkillsIcon SVG={IconMongo} width={'55%'} description={'MongoDB'}/>
                        < SkillsIcon SVG={IconMongoose} width={'65%'} description={'Mongoose'}/>
                        < SkillsIcon SVG={IconMySql} width={'50%'} description={'MySQL'}/>
                    </div>
                </div>

                <div>
                    < Divider title={'other'}/>
                    <div className="w-full grid grid-cols-4 gap-4 items-center justify-between mt-6 px-4 text-gb-neutral-500 text-sm">
                        < SkillsIcon SVG={IconVsCode} width={'50%'} description={'VS Code'}/>
                        < SkillsIcon SVG={IconGit} width={'50%'} description={'Git'}/>
                        < SkillsIcon SVG={IconGithub} width={'50%'} description={'Github'}/>
                        < SkillsIcon SVG={IconNotion} width={'50%'} description={'Notion'}/>
                    </div>
                </div>
            </div>

        </section>
    )
}