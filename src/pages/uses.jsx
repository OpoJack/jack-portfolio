import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import {
  JsIcon,
  TsIcon,
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  MongoIcon,
  PostgresIcon,
  MysqlIcon,
  GitIcon,
  GitHubIcon,
} from '@/images/logos/techIcons'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-5">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

//This will output all the tech icons in a row
function TechTools() {
  return (
    <div className="flex flex-row space-x-4 ">
      <JsIcon />
      <TsIcon />
      <ReactIcon />
      <TailwindIcon />
      <NodeIcon />
      <MongoIcon />
      <PostgresIcon />
      <MysqlIcon />

      <GitIcon />
    </div>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Tools - Jack Oporto</title>
        <meta
          name="description"
          content="Software I use, tools I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, tools I love, and other things I recommend."
        intro="Dev, knives, coffee."
      >
        <div className="space-y-14">
          {/* <ToolsSection title="Tech">
            Javascript, Typescript, React, Next.js, Tailwind CSS, tRPC, Node.js, MongoDB, PostgreSQL, MySQL, Git, SASS
            <TechTools />
          </ToolsSection> */}
          <ToolsSection title="Workstation">
            <Tool title="Windows PC, Linux environment (2022)">
              I refreshed my PC build last year, save for the GPU. I stay with
              Windows for gaming but I love the Linux dev experience so I use
              Windows Subsystem for Linux (
              <Link
                href="/articles/wsl-2-installation-guide"
                className="text-blue-500"
              >
                WSL 2.0
              </Link>
              ) to run Linux in tandem with Windows. <br />
              It's awesome, try it.
            </Tool>
            <Tool title="13” MacBook Air M1 (2021)">
              When I'm on the go, I use my MacBook Air. The M1 chip is
              incredible for development and the Air is convenient for travel.
              Paired with airpods, it's an unmatched mobile experience.
            </Tool>
            <Tool title="GMMK Pro Keyboard | Boba U4T Switches">
              My first dive into hobbyist mechanical keyboards. I spent many
              hours modifying the internals to reach the perfect feel and sound.
              It's like marbles in a bag. I also added a custom git keycaps to
              complete the look.
            </Tool>
            <Tool title="Steelcase Leap Desk Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode">
              You know it, you love it. Unless you vim.
            </Tool>
            <Tool title="Windows Terminal/iTerm2 + powerlevel10k">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the bash terminal but it’s what I use and it
              looks pretty.
              <br />
              <Link
                className="text-blue-500 hover:underline hover:underline-offset-2"
                href="https://github.com/romkatv/powerlevel10k"
              >
                powerlevel10k
              </Link>
            </Tool>
            <Tool title="WSL 2.0">
              Seamless Linux integration with Windows. Accessed via Windows
              Terminal with an easy hookup to your Windows VScode
            </Tool>
          </ToolsSection>
          <ToolsSection title="Knives">
            <Tool title="Watanabe Pro 180mm Nakiri">
              A legendary maker's signature knife. The Watanabe Pro is well
              known in the Japanese knife world for its incredible
              heat-treatment, geometry and history. The Nakiri is a Japanese
              vegetable knife that is perfect for chopping, dicing, and slicing
              vegetables.
            </Tool>
            <Tool title="Takeda NAS 180mm Bunka">
              An equally legendary Japanese bladesmith, Takeda is known for his
              distinct style and incredible heat-treatment of Aogami-Super
              steel. The Bunka is a Japanese all-purpose knife that is perfect
              for slicing, dicing, and chopping.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Coffee">
            <Tool title="IZpresso JX-Pro Manual Coffee Grinder">
              I love the ritual of grinding my own beans in the morning. The
              IZpresso JX-Pro strikes a good balance between price and
              capability. It grinds med-fine to course with ease and can go
              espresso-fine. I haven't made my way to espresso yet but I'm
              prepared.
            </Tool>
            <Tool title="Kalita Wave">
              I use a ceramic Kalita Wave. It's a pour-over dripper that has
              reliably made my pourover coffee since January '22. I'd like to
              say I experiment with different brewing ratios and times but I'm a
              creature of habit and I just use the same iced recipe every time.
              <br />
              25g beans, 100g ice, 250g water, 3:30 brew time. Adjust grind to
              roast.
            </Tool>
            <Tool title="Third Wave Water">
              I buy plain distilled water and add a small package of Third Wave
              Water's "Classic" blend to it. It's a blend of minerals that
              creates "soft" water, ideal for brewing and coffee makers
              (protects coffee makers from calcium buildup). Much of the water
              we consume is "hard" or just harder than this. "Soft" water lends
              itself to a clear and balanced cup of coffee. It's hard to brew
              without it.
              <br />
              <a
                className="text-blue-500 hover:underline hover:underline-offset-2"
                href="https://www.usgs.gov/special-topics/water-science-school/science/hardness-water"
              >
                Read more about hard water.
              </a>
            </Tool>
            <Tool title="Acaia Pearl S">
              Professional-grade scale for monitoring weight, time, and flow
              rate during coffee brewing.
              <br /> It's excessive, it's unnecessary, it's fine.
            </Tool>
            <Tool title="Fellow Stagg EKG">
              Professional-grade gooseneck kettle with precise temperature
              control.
              <br /> It's excessive, it's unnecessary, it's fine.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
