"use client"

import { DocsOutlet as Outlet } from "../docs-outlet"
import { SkillIcon } from "@/components/skill-icon"
import { useInternalNavigations } from "@/components/layout/internal/navigation/use-internal-navigations"
import { paths } from "@/routes/paths"

// -----------------------------------------------------------------------

export function FundamentalsView() {
  const internalNavigations = useInternalNavigations()

  return (
    <Outlet
      internalNavigations={internalNavigations}
      navigatorProps={{
        next: { title: "VS Code", href: paths.docs.vscode },
        previous: { title: "Getting started", href: paths.docs.gettingStarted },
      }}
    >
      <h1 className="font-medium">Fundamentals</h1>
      <p>
        Alright! <br />
        Before we move ahead into development portion this is the right time to
        talk about fundamentals everyone must have to know.
      </p>
      <blockquote>
        Why do we need to talk about fundamentals? <br />A simple and short
        answer.
        <br /> <br />
        <span className="text-accent-foreground">
          &apos;fundamentals play a vital role in any domain of life.&apos;
        </span>
      </blockquote>
      <div className="my-8 flex-1">
        <iframe
          className="aspect-video"
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/fV_AIgg69G4?si=Fw-noh76s-94WHHW"
          title="YouTube video player"
          frameBorder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h2 id="what-is-programming">What is programming?</h2>
      <p>
        In simple terms, programming are the set of instructions. <br /> For
        example I want to make tea.
      </p>
      <p>
        Making tea is the process and all the steps are knows as instructions.
        <br /> If we want tea then will have to follow instruction.
      </p>
      <p>
        Similarily, In programming whenever we want some output over repetitive
        tasks we write programs. <br /> and ofcourse!{" "}
        <span className="font-medium italic">Programmers</span> are humans. I
        mean we write programs to make things better.
      </p>
      <blockquote>
        Okay! We write programs. <br /> But what are the essentials for writting
        it?
      </blockquote>

      <p>
        There is no heavy demand of a super computer. 😁 <br /> All we need a
        laptop which can run.... jokes apart.
      </p>

      <p>
        Programs written over a programming language that mean we will have to
        pick one. <br /> Yes! you read one, because there are so many
        programming languages.
      </p>

      <p>
        You can start with <SkillIcon name="javascript" /> or{" "}
        <SkillIcon name="python" /> on these days.
      </p>

      <p>
        There is no any language war because each and every language has its own
        pros and cons.
        <br /> It only depends on the usecase, If you are planning to enter into
        the domain of web javascript will be your entry ticket. On the other
        hand you can expand the domain in machine learning with python.
      </p>

      <p>
        There is no barrier of choosing a domain of learning. <br />
        Some wants to become web developer other wants to become prompt engineer
        and other wants something else.
      </p>

      <blockquote>
        Is choosing a programming language enough? <br /> No, You need a
        environment for programming.
      </blockquote>

      <h2 id="role-of-ide" className="mt-8">
        Role of IDEs
      </h2>

      <p>
        IDE, stands for{" "}
        <span className="italic">Integrated Development Environment</span>.
        <br />
        Which provides all the facilities you will use to build any project.
      </p>
    </Outlet>
  )
}
