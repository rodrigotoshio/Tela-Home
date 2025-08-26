import { MenuIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Iphone = () => {
  const featureSections = [
    {
      icon: "https://c.animaapp.com/mesh3yq5uHbvsH/img/trophy-1.png",
      title: "Desafie-se",
      description:
        "O Senai Skill Up é um jogo de perguntas e respostas que torna o aprendizado no SENAI mais dinâmico. Os alunos testam conhecimentos, competem e interagem com professores de forma divertida!",
      alt: "Trophy",
    },
    {
      icon: "https://c.animaapp.com/mesh3yq5uHbvsH/img/game-controller-1.png",
      title: "Divirta-se",
      description:
        "O jogo conta com dois modos de gameplay: normal, com perguntas livres ou salas de professores, e multiplayer, com competição, ranking e cartas de ajuda.",
      alt: "Game controller",
    },
    {
      icon: "https://c.animaapp.com/mesh3yq5uHbvsH/img/question-1.svg",
      title: "Proposito",
      description:
        "A proposta do nosso projeto é criar um jogo online interativo que visa transformar o processo de aprendizagem em uma experiência mais divertida, dinâmica e envolvente",
      alt: "Question",
    },
    {
      icon: "https://c.animaapp.com/mesh3yq5uHbvsH/img/people-group--1--1.png",
      title: "Quem nós somos",
      description:
        "Somos alunos de TI desenvolvendo este projeto para aplicar nossos conhecimentos e criar uma solução inovadora que torne o aprendizado mais envolvente e divertido.",
      alt: "People group",
    },
  ];

  return (
    <div className="w-full max-w-[390px] min-h-screen bg-white mx-auto">
      {/* HEADER azul conforme Figma */}
      <header className="w-full h-[97px] bg-[#00A9FF] flex items-end justify-between px-[35px] pb-[10px] text-white">
        <MenuIcon className="w-[30px] h-[30px]" />
        <SearchIcon className="w-[22px] h-[22px]" />
      </header>

      {/* HERO */}
      <section className="relative w-full bg-[#2E96F1] text-white pb-20 pt-6 -mt-[97px]">
        {/* Ilustração central (aproximação) */}
        <div className="mt-[166px] px-[31px]">
          <div className="relative w-[359px] h-[223px] mx-auto">
            <img
              className="absolute w-[238px] h-[205px] left-[92.5px] top-[8.6px]"
              alt="Fundo formas"
              src="https://c.animaapp.com/mesh3yq5uHbvsH/img/group-11.png"
            />
            <img
              className="absolute w-[70.3px] h-[182.5px] left-[250.7px] top-[20px]"
              alt="Homem"
              src="https://c.animaapp.com/mesh3yq5uHbvsH/img/homem-3.png"
            />
          </div>
        </div>

        {/* Título e descrição (valores do Figma) */}
        <div className="mt-[66px] px-6 text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="[font-family:'Blinker',Helvetica] font-bold text-white text-[43.9024px] leading-[29px] tracking-[0.02em]">SENAI</span>
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[36.5854px] leading-[29px] tracking-[0.02em]">SKILL–UP</span>
          </div>
          <p className="[font-family:'Poppins',Helvetica] text-white text-[18.2927px] leading-[24px] tracking-[0.07em] max-w-[302px] mx-auto">
            Desafie-se jogando o nosso jogo de perguntas exclusivo para os cursos do <span className="font-semibold">SENAI</span>
          </p>
        </div>

        {/* Botão Entrar 175x50 */}
        <div className="mt-[30px] px-6 flex justify-center">
          <Button className="h-[50px] w-[175px] rounded-[15px] bg-white text-[#00ABFF] text-[25px] leading-[20px] font-semibold shadow-none hover:bg-white/90">
            Entrar
          </Button>
        </div>
      </section>

      {/* SEÇÕES */}
      <section className="px-[41px] pt-[48px] pb-[24px] space-y-[32px]">
        {featureSections.map((section, index) => (
          <Card key={index} className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0 flex flex-col items-center text-center">
              <img
                className="w-[67.38px] h-[67.38px] mb-3 object-contain"
                alt={section.alt}
                src={section.icon}
              />
              <h2 className="[font-family:'Blinker',Helvetica] font-bold text-[#2F2E2E] text-[19.2509px] leading-[23px] mb-1">
                {section.title}
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#3B3939] text-[14.4382px] leading-[22px] text-justify max-w-[308.01px]">
                {section.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* BLOCO PERGUNTAS */}
      <section className="px-4 pb-10">
        <div className="relative rounded-2xl overflow-hidden w-[371.42px] h-[334.8px] mx-auto">
          <img
            className="absolute w-[360px] h-[334.8px] left-1/2 -translate-x-1/2"
            alt="Fundo Perguntas"
            src="https://c.animaapp.com/mesh3yq5uHbvsH/img/fundo.png"
          />
          <img
            className="absolute left-[230px] top-[2014px] w-[156.42px] h-[193.1px] hidden"
            alt="placeholder"
            src=""
          />
          <img
            className="absolute right-[15px] top-[61px] w-[156.42px] h-[193.1px]"
            alt="Mensagem"
            src="https://c.animaapp.com/mesh3yq5uHbvsH/img/mensagem.png"
          />
          <div className="absolute left-[55px] top-[136px] w-[183px]">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2F2E2E] text-[28.4961px] leading-[43px] uppercase text-center">
              Perguntas?
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#2F2E2E] text-[18px] leading-[27px] text-justify">
              Vamos conversar!
            </p>
            <div className="mt-3">
              <Button className="h-[38.6px] w-[112.17px] rounded-[8.77px] bg-white text-[#00ABFF] text-[17.5462px] font-semibold shadow-none hover:bg-white/90">
                Contato
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
