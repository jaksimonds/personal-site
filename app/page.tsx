import { gql } from '@apollo/client'
import client from 'client'
import { Metadata } from "next"
import Hero from "./components/Hero"
import CardSection from "./components/CardSection"
import TwoColumnCallout from "./components/TwoColumnCallout"
import { IProjcet } from 'lib/types'

export const metadata: Metadata = {
  title: 'Jackson Simonds',
  description: 'Front-end developer.'
}

const getFeaturedProjects = async () => {
  const { data } = await client.query({
    query: gql`
      query FeaturedProjects { 
        featuredProjects {
          id
          slug
          title
          excerpt
          url
        }
      }
    `
  })

  return data
}

const Homepage = async () => {
  const {featuredProjects} = await getFeaturedProjects()

  return (
    <div>
      <Hero
        heading="Jackson Simonds"
        intro="Front-end developer."
      />
      {featuredProjects?.length && featuredProjects.map((project: IProjcet, index: number) => {
        const {
          id,
          slug,
          title,
          excerpt,
          url
        } = project
        return (
          <TwoColumnCallout
            key={id}
            heading={title}
            excerpt={excerpt}
            slug={slug}
            url={url}
            alternate={!!(index % 2)}
          />
        )
      })}
      <CardSection
        heading="Site Built Using..."
        cards={[
          {
            id: 'next',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#fff" d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.033Zm-112.867 0V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033h68.628Zm34.268.033h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516L183.32.066Zm18.28 56.649-8.921-11.092-27.224 33.81h17.865l18.28-22.718Z"/><path fill="#fff" fill-rule="evenodd" d="M80.907 79.339 17.015 0H0v79.306h13.612V16.952l50.195 62.387h17.1Z" clip-rule="evenodd"/><path fill="#fff" d="M333.607 78.855a3.528 3.528 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518-.009-.963.342-1.79 1.052-2.481a3.528 3.528 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.675 3.675 0 0 1-1.319 1.282 3.403 3.403 0 0 1-1.77.482Zm23.233-33.41h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.063-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.855 3.855 0 0 0 1.605 1.481c.691.346 1.485.519 2.379.519.969 0 1.799-.2 2.472-.61.673-.4 1.19-1 1.55-1.799.35-.79.535-1.772.544-2.935v-23.24Zm30.851 9.089c-.147-1.409-.793-2.509-1.918-3.29-1.135-.79-2.601-1.182-4.4-1.182-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79a4 4 0 0 0 1.319 1.282 8.806 8.806 0 0 0 1.845.882c.682.236 1.365.436 2.047.6l3.145.772a21.74 21.74 0 0 1 3.662 1.182 12.966 12.966 0 0 1 3.163 1.872 8.384 8.384 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48-1.079-1.527-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145-.507-.563-1.208-1.036-2.103-1.417a21.606 21.606 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944h-5.848Z"/></svg>',
            label: 'NextJS',
            content: 'Front-end React web framework. This site utilizes the App router for navigation.',
            cta: {
              text: 'Learn about NextJS',
              href: 'https://nextjs.org/',
              target: '_blank'
            }
          },
          {
            id: 'typescript',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1004 250"><rect width="1004" height="250" fill="#3178c6" rx="14"/><path fill="#fff" fill-rule="evenodd" d="M613 188.697v-9.373c8.556 5.419 17.222 8.128 26 8.128 9.333 0 16.417-1.921 21.25-5.764s7.25-9.22 7.25-16.132c0-6.082-1.625-10.934-4.875-14.556-3.134-3.492-9.793-8.205-19.979-14.14l-1.146-.664c-12.111-7.023-19.778-12.898-23-17.625-3.222-4.728-4.833-10.188-4.833-16.381 0-8.405 3.277-15.537 9.833-21.398C630.056 74.93 638.806 72 649.75 72c7.111 0 14.222 1.189 21.333 3.566v8.626c-7-3.152-14.472-4.727-22.416-4.727-8.111 0-14.542 2.045-19.292 6.137-4.75 4.092-7.125 9.29-7.125 15.593 0 6.082 1.625 10.92 4.875 14.514s10.264 8.488 21.042 14.681c11.166 6.303 18.597 11.902 22.291 16.795 3.695 4.894 5.542 10.52 5.542 16.878 0 9.124-3.181 16.561-9.542 22.311-6.361 5.751-15.347 8.626-26.958 8.626-4.111 0-8.847-.636-14.208-1.908-5.361-1.271-9.459-2.737-12.292-4.395zM316.828 90.763H351V74h-88v16.763h34.089V193h19.739zM382.5 206.606 421 108h-19.5l-21.333 61.919a204.512 204.512 0 0 0-1.19 4.636l-.31 1.34h-.417a404.334 404.334 0 0 0-1.061-4.445l-.439-1.697L356.417 108H335l33.917 84.827-5.75 13.945c-3.556 7.082-8.945 10.624-16.167 10.624-2.5 0-5.278-.498-8.333-1.494v16.019c2.722.719 6.111 1.079 10.166 1.079 14.445 0 25.667-8.798 33.667-26.394zm70.147-26.2h-.333V232H433V107.991h19.314v14.931h.333C459.251 111.64 468.908 106 481.618 106c10.822 0 19.258 3.788 25.308 11.364 6.049 7.576 9.074 17.751 9.074 30.525 0 14.157-3.413 25.493-10.24 34.01-6.826 8.516-16.15 12.774-27.972 12.774-10.878 0-19.258-4.756-25.141-14.267zM452 157.889v-10.478c0-7.26 2.093-13.31 6.28-18.151 4.186-4.84 9.717-7.26 16.593-7.26 6.488 0 11.631 2.351 15.429 7.054 3.799 4.703 5.698 11.207 5.698 19.512 0 9.901-2.038 17.615-6.113 23.142-4.076 5.528-9.69 8.292-16.844 8.292-6.099 0-11.131-2.145-15.096-6.435S452 164.049 452 157.889zm151-2.159h-57.606c.221 7.86 2.628 13.92 7.222 18.182s10.907 6.393 18.94 6.393c9.024 0 17.304-2.712 24.842-8.136v15.525c-7.703 4.871-17.882 7.306-30.536 7.306-12.435 0-22.187-3.861-29.257-11.582S526 164.835 526 150.832c0-13.228 3.893-24.007 11.678-32.337S555.133 106 566.687 106s20.495 3.736 26.822 11.208S603 135.058 603 148.341zm-22.854-29.938c3.181 3.861 4.799 9.264 4.854 16.208h-39c.878-6.556 3.223-11.861 7.035-15.917 3.812-4.055 8.461-6.083 13.946-6.083 5.595 0 9.983 1.931 13.165 5.792zM724.907 195c8.813 0 16.399-1.934 22.758-5.801v-7.955c-6.359 4.53-13.833 6.795-22.423 6.795-9.372 0-16.916-3.342-22.633-10.027-5.718-6.685-8.577-15.524-8.577-26.518 0-11.38 3.124-20.647 9.372-27.802 6.247-7.154 14.391-10.731 24.431-10.731 7.308 0 14.029 1.878 20.165 5.635v-8.618c-6.136-2.652-12.467-3.978-18.993-3.978-12.607 0-22.926 4.295-30.958 12.886-8.033 8.591-12.049 19.626-12.049 33.106 0 12.817 3.57 23.189 10.71 31.116 7.14 7.928 16.539 11.892 28.197 11.892zM798 115.667c-2.54-1.834-5.521-2.75-8.944-2.75-6.681 0-12.284 3.472-16.812 10.416-4.527 6.945-6.791 16.806-6.791 29.584V193H758v-85.333h7.453v18.916h.332c1.932-6.5 4.996-11.555 9.192-15.166S784.032 106 789.553 106c3.147 0 5.963.5 8.447 1.5zm11.942-30.549c1.294 1.255 2.785 1.882 4.474 1.882 1.8 0 3.348-.656 4.642-1.967 1.295-1.311 1.942-2.88 1.942-4.704 0-1.939-.661-3.478-1.984-4.618-1.322-1.14-2.856-1.711-4.6-1.711-1.632 0-3.11.584-4.432 1.753-1.323 1.17-1.984 2.694-1.984 4.576 0 1.939.647 3.535 1.942 4.79zM810 193v-85h8v85zm33.624-15.13h.331c6.077 11.439 15.469 17.159 28.175 17.159 11.38 0 20.537-4.38 27.47-13.139s10.4-20.24 10.4-34.443c0-12.765-3.025-22.865-9.074-30.298S886.466 106 875.693 106c-6.795 0-13.024 1.699-18.686 5.098-5.663 3.399-10.013 8.22-13.052 14.465h-.331v-17.491H836V232h7.624zm.376-31.592v10.679c0 8.499 2.706 15.797 8.118 21.896 5.412 6.098 12.525 9.147 21.34 9.147 8.76 0 15.873-3.711 21.341-11.134 5.467-7.423 8.201-17.177 8.201-29.263 0-10.596-2.511-19.012-7.532-25.249-5.021-6.236-11.716-9.354-20.085-9.354-9.987 0-17.714 3.311-23.182 9.934-5.467 6.622-8.201 14.404-8.201 23.344zM946.874 195c3.461 0 7.17-.938 11.126-2.814v-7.119c-3.626 2.042-7.005 3.063-10.137 3.063-4.396 0-7.514-1.311-9.355-3.932-1.84-2.621-2.761-6.856-2.761-12.706v-55.955H958v-6.953h-22.253V84a61.184 61.184 0 0 1-3.791 1.242c-1.319.441-2.582.883-3.791 1.324v22.018H913v6.953h15.165v56.948c0 15.01 6.236 22.515 18.709 22.515z" clip-rule="evenodd"/></svg>',
            label: 'TypeScript',
            content: 'Strongly typed language that builds ontop of JavaScript.',
            cta: {
              text: 'Learn about TypeScript',
              href: 'https://www.typescriptlang.org/',
              target: '_blank'
            }
          },
          {
            id: 'graphql',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 367 100"><path fill-rule="evenodd" d="m50 6.903 37.323 21.549v43.096L50 93.097 12.677 71.548V28.451L50 6.903ZM16.865 30.87v31.656L44.28 15.041 16.864 30.87ZM50 13.51 18.398 68.246h63.205L50 13.509Zm27.415 58.924h-54.83L50 88.261l27.415-15.828Zm5.72-9.908L55.72 15.041 83.136 30.87v31.656Z" clip-rule="evenodd"/><circle cx="50" cy="9.321" r="8.82"/><circle cx="85.229" cy="29.66" r="8.82"/><circle cx="85.229" cy="70.34" r="8.82"/><circle cx="50" cy="90.679" r="8.82"/><circle cx="14.766" cy="70.34" r="8.82"/><circle cx="14.766" cy="29.66" r="8.82"/><path d="M138.875 71.625c-5.208 0-9.25-1.5-12.125-4.5s-4.396-7.02-4.562-12.063c-.042-1.25-.063-3.229-.063-5.937s.021-4.688.063-5.938c.166-5.041 1.687-9.062 4.562-12.062s6.917-4.5 12.125-4.5c3.542 0 6.521.667 8.938 2 2.416 1.333 4.208 2.917 5.375 4.75 1.208 1.792 1.854 3.396 1.937 4.813v.124c0 .334-.125.605-.375.813-.25.208-.562.313-.938.313h-1.374c-.375 0-.646-.084-.813-.25-.167-.167-.333-.5-.5-1-.708-2.209-2.083-4.063-4.125-5.563-2-1.5-4.708-2.25-8.125-2.25-3.875 0-6.937 1.063-9.187 3.188-2.209 2.124-3.396 5.437-3.563 9.937-.042 1.25-.062 3.125-.062 5.625s.02 4.375.062 5.625c.167 4.5 1.354 7.813 3.563 9.938 2.25 2.124 5.312 3.187 9.187 3.187 3.875 0 7-1.104 9.375-3.313 2.375-2.208 3.562-5.479 3.562-9.812v-3.188h-10.874c-.417 0-.75-.124-1-.374a1.577 1.577 0 0 1-.375-1.063v-.875c0-.417.125-.75.375-1 .25-.292.583-.438 1-.438h13.374c.459 0 .813.126 1.063.376s.375.604.375 1.062v5.5c0 3.333-.667 6.27-2 8.813-1.333 2.541-3.271 4.52-5.812 5.937-2.542 1.417-5.563 2.125-9.063 2.125ZM165.941 71c-.416 0-.75-.125-1-.375s-.375-.583-.375-1V39.937c0-.416.125-.75.375-1 .25-.291.584-.437 1-.437h1c.417 0 .75.146 1 .438.292.25.438.583.438 1v2.874c1.5-2.874 4.333-4.312 8.5-4.312h2.312c.417 0 .75.125 1 .375s.375.583.375 1v.875c0 .417-.125.75-.375 1s-.583.375-1 .375h-2.687c-2.5 0-4.479.73-5.938 2.188-1.458 1.458-2.187 3.437-2.187 5.937v19.375c0 .417-.146.75-.438 1-.25.25-.583.375-1 .375h-1ZM194.557 71.625c-2 0-3.855-.417-5.563-1.25-1.708-.833-3.083-1.958-4.125-3.375-1-1.417-1.5-2.98-1.5-4.688 0-2.75 1.104-5 3.313-6.75 2.25-1.75 5.27-2.874 9.062-3.374l9.875-1.376v-2.187c0-2.292-.708-4.042-2.125-5.25-1.375-1.25-3.5-1.875-6.375-1.875-2.125 0-3.875.417-5.25 1.25-1.333.833-2.187 1.833-2.562 3-.167.5-.375.854-.625 1.063-.209.166-.5.25-.875.25h-.875c-.375 0-.709-.126-1-.376a1.493 1.493 0 0 1-.375-1c0-.916.416-1.979 1.25-3.187.833-1.25 2.125-2.333 3.875-3.25 1.75-.917 3.895-1.375 6.437-1.375 4.458 0 7.625 1.063 9.5 3.188 1.875 2.124 2.813 4.708 2.813 7.75v20.812c0 .417-.125.75-.375 1s-.584.375-1 .375h-1.063c-.417 0-.75-.125-1-.375s-.375-.583-.375-1v-2.938c-.917 1.376-2.271 2.542-4.062 3.5-1.75.959-4.084 1.438-7 1.438Zm.625-3.625c3.041 0 5.541-1 7.5-3 1.958-2 2.937-4.875 2.937-8.625V54.25l-8.062 1.125c-3.417.458-6 1.25-7.75 2.375s-2.625 2.542-2.625 4.25c0 1.917.791 3.396 2.375 4.438 1.625 1.041 3.5 1.562 5.625 1.562ZM220.752 82.875c-.416 0-.75-.125-1-.375s-.375-.583-.375-1V39.875c0-.417.125-.75.375-1s.584-.375 1-.375h1.063c.417 0 .75.125 1 .375s.375.583.375 1v2.938c2.417-3.292 5.917-4.938 10.5-4.938 4.5 0 7.812 1.438 9.937 4.313 2.167 2.833 3.313 6.333 3.438 10.5.042.416.062 1.104.062 2.062 0 .958-.02 1.646-.062 2.063-.125 4.166-1.271 7.687-3.438 10.562-2.125 2.833-5.437 4.25-9.937 4.25-4.542 0-8.042-1.646-10.5-4.938V81.5c0 .417-.125.75-.375 1s-.583.375-1 .375h-1.063ZM233.315 68c3.375 0 5.833-1.063 7.375-3.188 1.583-2.166 2.437-4.937 2.562-8.312.042-.417.063-1 .063-1.75 0-3.875-.75-7.042-2.25-9.5-1.5-2.5-4.083-3.75-7.75-3.75-3.292 0-5.771 1.104-7.438 3.313-1.666 2.166-2.562 4.729-2.687 7.687l-.063 2.438.063 2.437a12.82 12.82 0 0 0 1.187 5.125c.75 1.583 1.875 2.896 3.375 3.938 1.5 1.041 3.355 1.562 5.563 1.562ZM257.068 71c-.416 0-.75-.125-1-.375s-.375-.583-.375-1V28c0-.417.125-.75.375-1s.584-.375 1-.375h1.063c.417 0 .75.125 1 .375s.375.583.375 1v14.813c1.25-1.626 2.667-2.855 4.25-3.688 1.625-.833 3.708-1.25 6.25-1.25 4.083 0 7.229 1.313 9.437 3.938 2.209 2.583 3.313 5.937 3.313 10.062v17.75c0 .417-.125.75-.375 1s-.583.375-1 .375h-1.063c-.416 0-.75-.125-1-.375s-.375-.583-.375-1V52.187c0-3.374-.833-6-2.5-7.874-1.625-1.876-3.979-2.813-7.062-2.813-3 0-5.396.958-7.188 2.875-1.791 1.875-2.687 4.48-2.687 7.813v17.437c0 .417-.125.75-.375 1s-.583.375-1 .375h-1.063ZM321.682 75.063c-.625 0-1.292-.48-2-1.438l-2.75-3.813c-2.5 1.209-5.417 1.813-8.75 1.813-10.708 0-16.208-5.75-16.5-17.25-.042-1.25-.062-3-.062-5.25s.02-4 .062-5.25c.167-5.667 1.708-9.958 4.625-12.875s6.875-4.375 11.875-4.375 8.958 1.458 11.875 4.375 4.458 7.208 4.625 12.875c.083 2.5.125 4.25.125 5.25s-.042 2.75-.125 5.25c-.208 5.958-1.729 10.333-4.562 13.125l4 5.625c.125.25.187.48.187.688a1.2 1.2 0 0 1-.375.874 1.2 1.2 0 0 1-.875.376h-1.375Zm-13.5-7.188c3.75 0 6.729-1.125 8.938-3.375 2.25-2.292 3.458-5.77 3.625-10.438.083-2.5.125-4.145.125-4.937 0-.792-.042-2.438-.125-4.938-.167-4.666-1.375-8.124-3.625-10.374-2.25-2.292-5.23-3.438-8.938-3.438s-6.687 1.146-8.937 3.438c-2.25 2.25-3.459 5.708-3.625 10.374-.042 1.25-.063 2.896-.063 4.938s.021 3.688.063 4.938c.166 4.666 1.354 8.145 3.562 10.437 2.25 2.25 5.25 3.375 9 3.375ZM336.126 71c-.416 0-.75-.125-1-.375s-.375-.583-.375-1v-41c0-.417.125-.75.375-1s.584-.375 1-.375h1.188c.417 0 .75.125 1 .375s.375.583.375 1V67.25h21.562c.459 0 .813.125 1.063.375s.375.604.375 1.063v.937c0 .417-.146.75-.438 1-.25.25-.583.375-1 .375h-24.125Z"/></svg>',
            label: 'GraphQL',
            content: 'Query language for handling and resolving a variety of network requests.',
            cta: {
              text: 'Learn about GraphQL',
              href: 'https://graphql.org/',
              target: '_blank'
            }
          },
          {
            id: 'vercel',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4438 1000"><path fill="#fff" d="M2223.75 250c-172.5 0-296.88 112.5-296.88 281.25s139.85 281.25 312.51 281.25c104.21 0 196.09-41.25 252.96-110.781l-119.53-69.063c-31.56 34.532-79.53 54.688-133.43 54.688-74.85 0-138.44-39.063-162.04-101.563h437.82c3.43-17.5 5.47-35.625 5.47-54.687C2520.63 362.5 2396.41 250 2223.75 250Zm-147.66 226.562C2095.62 414.219 2149.06 375 2223.75 375c74.84 0 128.28 39.219 147.66 101.562h-295.32Zm-35.31-398.437-432.97 750-433.12-750h162.34l270.63 468.75 270.62-468.75h162.5ZM577.344 0l577.346 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5c64.38 0 112.66-29.219 137.5-76.875l120 69.219C3512.81 762.656 3419.69 812.5 3305 812.5c-172.66 0-296.87-112.5-296.87-281.25S3132.5 250 3305 250c114.69 0 207.66 49.844 257.5 132.656l-120 69.219C3417.66 404.219 3369.38 375 3305 375c-94.84 0-156.25 62.5-156.25 156.25ZM4437.5 78.125v718.75h-140.62V78.125h140.62ZM3906.25 250c-172.5 0-296.87 112.5-296.87 281.25s140 281.25 312.5 281.25c104.21 0 196.09-41.25 252.96-110.781l-119.53-69.063c-31.56 34.532-79.53 54.688-133.43 54.688-74.85 0-138.44-39.063-162.04-101.563h437.82c3.43-17.5 5.46-35.625 5.46-54.687C4203.12 362.5 4078.91 250 3906.25 250Zm-147.66 226.562C3778.13 414.219 3831.41 375 3906.25 375s128.28 39.219 147.66 101.562h-295.32Zm-797.34-210.937v151.406c-15.62-4.531-32.19-7.656-50-7.656-90.78 0-156.25 62.5-156.25 156.25v231.25h-140.62v-531.25H2755v143.75c0-79.375 92.34-143.75 206.25-143.75Z"/></svg>',
            label: 'Vercel',
            content: 'Frontend cloud infrastructure.',
            cta: {
              text: 'Learn about Vercel',
              href: 'https://vercel.com',
              target: '_blank'
            }
          },
          {
            id: 'github',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96"><path fill="#fff" fill-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" clip-rule="evenodd"/></svg>',
            label: 'GitHub',
            content: 'Cloud-based code repository service.',
            cta: {
              text: 'Learn about GitHub',
              href: 'https://github.com/',
              target: '_blank'
            }
          }
        ]}
      />
    </div>
  )
}

export default Homepage