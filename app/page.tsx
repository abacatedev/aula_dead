'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Imagem de capa
    {
      type: 'image',
      src: '/2.png',
      alt: 'Capa da apresentação',
    },

    // Slide 1: Capa com Identificação da Disciplina
    {
      id: 1,
      title: 'IA para Pesquisa Acadêmica',
      type: 'cover',
      institution: 'UNEMAT - Universidade do Estado de Mato Grosso',
      discipline: 'Otimizando a Busca, Mapeamento e Escrita Científica',
      course: 'Especialização em Tecnologias Digitais e Educação Aberta',
    },

    // SLIDE 2: ABERTURA - Título
    {
      id: 2,
      type: 'section-title',
      blockLabel: 'Abertura',
      title: 'Por que repensar suas ferramentas de pesquisa?',
      subtitle: 'As ferramentas tradicionais já não são suficientes para uma pesquisa de qualidade no cenário acadêmico atual.',
    },

    // SLIDE 3: ABERTURA - Limitações
    {
      id: 3,
      type: 'bullet',
      blockLabel: 'Abertura',
      title: 'Limitações das Ferramentas Tradicionais',
      bullets: [
        { title: 'Google Acadêmico', text: 'Retorna milhares de resultados sem curadoria, exigindo triagem manual demorada.' },
        { title: 'Portal CAPES', text: 'Acesso restrito à rede institucional e busca limitada por palavras-chave exatas.' },
        { title: 'Busca manual', text: 'Processo lento, propenso a vieses e difícil de mapear conexões entre artigos.' },
      ],
    },

    // SLIDE 4: ABERTURA - Vantagens da IA
    {
      id: 4,
      type: 'bullet',
      blockLabel: 'Abertura',
      title: 'O que a IA traz de novo?',
      bullets: [
        { title: 'Busca por perguntas', text: 'Encontre artigos formulando perguntas de pesquisa em linguagem natural, não apenas palavras-chave.' },
        { title: 'Mapeamento de redes', text: 'Visualize conexões entre artigos, autores e temas de forma automática e interativa.' },
        { title: 'Diálogo com textos', text: 'Converse diretamente com PDFs, peça resumos, extraia dados e compreenda artigos mais rapidamente.' },
      ],
    },

    // SLIDE 5: ABERTURA - Aceleração
    {
      id: 5,
      type: 'content',
      blockLabel: 'Abertura',
      title: 'Acelerando a Revisão de Literatura',
      content: [
        'As ferramentas de IA permitem encontrar artigos a partir de perguntas, mapear redes de conhecimento e dialogar com os textos — acelerando significativamente o processo de revisão da literatura. O pesquisador ganha tempo para o que realmente importa: a análise crítica e a produção de conhecimento original.',
      ],
    },

    // SLIDE 6: ABERTURA - Visão geral dos blocos
    {
      id: 6,
      type: 'bullet',
      blockLabel: 'Abertura',
      title: 'O que veremos hoje',
      numbered: true,
      bullets: [
        { title: 'Ferramentas de Busca', text: 'Elicit, Consensus, CSpace e Perplexity' },
        { title: 'Ferramentas de Mapeamento', text: 'Litmaps e Research Rabbit' },
        { title: 'Ferramentas de Leitura e Compreensão', text: 'NotebookLM e ChatGPT' },
        { title: 'Ferramentas de Escrita e Revisão', text: 'ChatGPT, Gemini e Jenni AI' },
        { title: 'Ferramenta de Análise de Dados', text: 'Julius AI' },
      ],
    },

    // SLIDE 7: Título do Bloco 1
    {
      id: 7,
      type: 'section-title',
      blockLabel: 'Bloco 1',
      title: 'Ferramentas de Busca',
      subtitle: 'Estas ferramentas respondem perguntas de pesquisa com base em artigos científicos publicados.',
    },

    // SLIDE 8: Visão geral do Bloco 1
    {
      id: 8,
      type: 'bullet',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      title: 'Ferramentas que exploraremos',
      bullets: [
        { title: 'Elicit', text: 'Busca por pergunta de pesquisa com resumo automático dos artigos encontrados.' },
        { title: 'Consensus', text: 'Verifica o consenso científico sobre uma questão com base em artigos revisados por pares.' },
        { title: 'CSpace', text: 'Busca + diálogo com PDFs e escrita assistida por IA.' },
        { title: 'Perplexity', text: 'Busca em tempo real na web com foco em artigos científicos e citação de fontes.' },
      ],
    },

    // SLIDE 9: Elicit - Introdução
    {
      id: 9,
      type: 'tool',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      toolName: 'Elicit',
      toolUrl: 'elicit.com',
      description: 'Você formula uma pergunta de pesquisa e a ferramenta retorna um resumo dos principais artigos científicos relacionados, com destaque para publicações recentes.',
      features: [
        'Apresenta uma visão geral dos achados dentro do tema pesquisado.',
        'Organiza os resultados em tabelas com informações-chave dos artigos.',
        'Permite filtrar por ano, metodologia e número de citações.',
      ],
    },

    // SLIDE 10: Elicit - Detalhes
    {
      id: 10,
      type: 'bullet',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      title: 'Elicit — Como usar na prática',
      bullets: [
        { title: 'Passo 1', text: 'Acesse elicit.com e crie uma conta gratuita.' },
        { title: 'Passo 2', text: 'Digite sua pergunta de pesquisa em linguagem natural (ex: "Quais são os efeitos da gamificação na aprendizagem?").' },
        { title: 'Passo 3', text: 'Analise a tabela de resultados e refine os filtros conforme necessário.' },
        { title: 'Versão gratuita vs. paga', text: 'A versão gratuita oferece acesso limitado ao acervo. A versão paga amplia significativamente o número de artigos acessíveis.' },
      ],
    },

    // SLIDE 11: Consensus - Introdução
    {
      id: 11,
      type: 'tool',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      toolName: 'Consensus',
      toolUrl: 'consensus.app',
      description: 'Responde perguntas de pesquisa com base em artigos revisados por pares e indica, em percentuais, se há consenso, contradição ou inconclusividade na literatura sobre aquela questão.',
      features: [
        'Ideal para obter um panorama rápido sobre um tema antes de iniciar a escrita.',
        'Indica o grau de concordância entre os estudos encontrados.',
        'Exibe extratos dos artigos que sustentam cada posição.',
      ],
    },

    // SLIDE 12: Consensus - Detalhes
    {
      id: 12,
      type: 'bullet',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      title: 'Consensus — Como usar na prática',
      bullets: [
        { title: 'Formule uma pergunta objetiva', text: 'Ex: "O ensino híbrido melhora o desempenho acadêmico?" — perguntas fechadas funcionam melhor.' },
        { title: 'Leia o medidor de consenso', text: 'A ferramenta mostra um percentual: "85% dos estudos indicam que SIM" — útil para fundamentar argumentos.' },
        { title: 'Explore os artigos individuais', text: 'Clique em cada resultado para ver o resumo completo e acessar o artigo original.' },
        { title: 'Use como ponto de partida', text: 'Ideal para mapear o estado da arte antes de aprofundar a leitura.' },
      ],
    },

    // SLIDE 13: CSpace - Introdução
    {
      id: 13,
      type: 'tool',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      toolName: 'CSpace',
      toolUrl: 'cspace.com',
      description: 'Vai além da busca: permite dialogar diretamente com os artigos selecionados por meio de um bate-papo com PDF, além de oferecer recursos de escrita assistida por IA.',
      features: [
        'O pesquisador pode selecionar artigos e fazer perguntas diretamente a eles.',
        'Exemplos de perguntas: "Quais são os principais resultados?" ou "Como os autores conduziram a pesquisa?".',
        'Integra busca, leitura e escrita em uma única plataforma.',
      ],
    },

    // SLIDE 14: CSpace - Detalhes
    {
      id: 14,
      type: 'bullet',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      title: 'CSpace — Funcionalidades avançadas',
      bullets: [
        { title: 'Chat com PDF', text: 'Carregue um artigo e converse com ele: peça resumos, destaque de metodologia ou comparação de resultados.' },
        { title: 'Escrita assistida', text: 'A IA sugere parágrafos e conectivos para o texto em construção, baseando-se nos artigos selecionados.' },
        { title: 'Organização de biblioteca', text: 'Salve artigos em pastas temáticas para facilitar o acesso durante a escrita.' },
        { title: 'Exportação de citações', text: 'Gere referências no formato ABNT, APA ou outros padrões automaticamente.' },
      ],
    },

    // SLIDE 15: Perplexity - Introdução
    {
      id: 15,
      type: 'tool',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      toolName: 'Perplexity',
      toolUrl: 'perplexity.ai',
      description: 'Permite delimitar a busca especificamente para artigos científicos, retornando respostas fundamentadas com links diretos para as fontes.',
      features: [
        'Diferencia-se por buscar na web em tempo real, com citação das fontes utilizadas.',
        'Permite selecionar o foco da busca: artigos acadêmicos, web geral, YouTube, Reddit, etc.',
        'Gera respostas narrativas com referências numeradas e clicáveis.',
      ],
    },

    // SLIDE 16: Perplexity - Detalhes
    {
      id: 16,
      type: 'bullet',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      title: 'Perplexity — Dicas de uso acadêmico',
      bullets: [
        { title: 'Selecione "Academic"', text: 'No menu de foco, escolha "Academic" para restringir resultados a bases científicas.' },
        { title: 'Perguntas em inglês', text: 'Para ampliar o alcance, formule perguntas em inglês — o acervo internacional é significativamente maior.' },
        { title: 'Verifique as fontes', text: 'Sempre clique nos links para confirmar que o artigo citado realmente sustenta a informação apresentada.' },
        { title: 'Use como complemento', text: 'Combine com Elicit ou Consensus para uma busca mais completa e triangulada.' },
      ],
    },

    // SLIDE 17: Resumo do Bloco 1
    {
      id: 17,
      type: 'bullet',
      blockLabel: 'Bloco 1 — Ferramentas de Busca',
      title: 'Resumo — Qual ferramenta usar?',
      bullets: [
        { title: 'Elicit', text: 'Quando precisa de uma visão geral dos artigos sobre um tema, com resumos automáticos.' },
        { title: 'Consensus', text: 'Quando quer saber se a literatura concorda, discorda ou é inconclusiva sobre uma questão.' },
        { title: 'CSpace', text: 'Quando quer buscar, ler e escrever tudo em um só lugar, conversando com os PDFs.' },
        { title: 'Perplexity', text: 'Quando precisa de informações atualizadas em tempo real, com fontes rastreáveis.' },
      ],
    },

    // SLIDE 18: Título do Bloco 2
    {
      id: 18,
      type: 'section-title',
      blockLabel: 'Bloco 2',
      title: 'Ferramentas de Mapeamento',
      subtitle: 'Estas ferramentas criam mapas visuais de conexões entre artigos, autores e temas.',
    },

    // SLIDE 19: Visão geral do Bloco 2
    {
      id: 19,
      type: 'bullet',
      blockLabel: 'Bloco 2 — Ferramentas de Mapeamento',
      title: 'Por que mapear a literatura?',
      bullets: [
        { title: 'Identificar lacunas', text: 'Mapas visuais revelam áreas pouco exploradas onde sua pesquisa pode contribuir.' },
        { title: 'Encontrar obras seminais', text: 'Visualize quais artigos são mais citados e influentes em uma área do conhecimento.' },
        { title: 'Descobrir tendências', text: 'Identifique para onde a pesquisa está caminhando e quais tópicos estão em ascensão.' },
        { title: 'Justificar escolhas', text: 'Use os mapas para demonstrar no seu texto a abrangência da sua revisão de literatura.' },
      ],
    },

    // SLIDE 20: Litmaps - Introdução
    {
      id: 20,
      type: 'tool',
      blockLabel: 'Bloco 2 — Ferramentas de Mapeamento',
      toolName: 'Litmaps',
      toolUrl: 'litmaps.com',
      description: 'A partir de um artigo de referência — especialmente obras seminais de uma área — a ferramenta gera um mapa visual com todos os artigos relacionados.',
      features: [
        'Mostra as principais pesquisas já desenvolvidas sobre o tema.',
        'Identifica os tópicos recorrentes e as conexões entre as produções.',
        'É a ferramenta mais indicada para revisão de literatura aprofundada.',
      ],
    },

    // SLIDE 21: Litmaps - Detalhes
    {
      id: 21,
      type: 'bullet',
      blockLabel: 'Bloco 2 — Ferramentas de Mapeamento',
      title: 'Litmaps — Como usar na prática',
      bullets: [
        { title: 'Escolha um artigo-semente', text: 'Selecione uma obra seminal ou artigo central do seu tema e cole o DOI ou título no Litmaps.' },
        { title: 'Explore o mapa gerado', text: 'Navegue pelo grafo visual: cada nó é um artigo, cada aresta é uma citação ou relação temática.' },
        { title: 'Identifique clusters', text: 'Grupos de artigos próximos indicam subtemas ou abordagens metodológicas semelhantes.' },
        { title: 'Exporte os resultados', text: 'Salve a lista de artigos encontrados para alimentar sua revisão de literatura.' },
      ],
    },

    // SLIDE 22: Research Rabbit - Introdução
    {
      id: 22,
      type: 'tool',
      blockLabel: 'Bloco 2 — Ferramentas de Mapeamento',
      toolName: 'Research Rabbit',
      toolUrl: 'researchrabbitapp.com',
      description: 'Semelhante ao Litmaps, porém com uma interface mais flexível. A partir de um artigo ou tema, mapeia obras relacionadas em diferentes graus de proximidade conceitual.',
      features: [
        'Permite compartilhar coleções entre pesquisadores que usam o mesmo login.',
        'Facilita o trabalho colaborativo em grupos de pesquisa.',
        'Interface intuitiva com organização por coleções temáticas.',
      ],
    },

    // SLIDE 23: Research Rabbit - Detalhes
    {
      id: 23,
      type: 'bullet',
      blockLabel: 'Bloco 2 — Ferramentas de Mapeamento',
      title: 'Research Rabbit — Funcionalidades',
      bullets: [
        { title: 'Coleções compartilhadas', text: 'Crie pastas de artigos e compartilhe com colegas de pesquisa para revisão colaborativa.' },
        { title: 'Graus de proximidade', text: 'Veja artigos "muito relacionados", "relacionados" e "tangenciais" ao seu tema central.' },
        { title: 'Descoberta contínua', text: 'A ferramenta sugere novos artigos à medida que você adiciona mais referências à sua coleção.' },
        { title: 'Integração com Zotero', text: 'Exporte facilmente as referências encontradas para o gerenciador bibliográfico Zotero.' },
      ],
    },

    // SLIDE 24: Resumo do Bloco 2
    {
      id: 24,
      type: 'bullet',
      blockLabel: 'Bloco 2 — Ferramentas de Mapeamento',
      title: 'Resumo — Litmaps vs. Research Rabbit',
      bullets: [
        { title: 'Use Litmaps quando...', text: 'Precisa de um mapa visual detalhado a partir de uma obra seminal, ideal para revisão sistemática.' },
        { title: 'Use Research Rabbit quando...', text: 'Trabalha em equipe e precisa compartilhar coleções ou quer explorar graus de proximidade conceitual.' },
        { title: 'Combine as duas!', text: 'Inicie com Litmaps para o mapa geral e use Research Rabbit para aprofundar e colaborar.' },
      ],
    },

    // SLIDE 25: Título do Bloco 3
    {
      id: 25,
      type: 'section-title',
      blockLabel: 'Bloco 3',
      title: 'Ferramentas de Leitura e Compreensão',
      subtitle: 'Estas ferramentas ajudam a resumir e compreender o conteúdo dos artigos selecionados.',
    },

    // SLIDE 26: Visão geral do Bloco 3
    {
      id: 26,
      type: 'bullet',
      blockLabel: 'Bloco 3 — Leitura e Compreensão',
      title: 'Por que usar IA para leitura acadêmica?',
      bullets: [
        { title: 'Volume de leitura', text: 'Uma revisão de literatura pode envolver dezenas ou centenas de artigos — a IA ajuda a priorizar.' },
        { title: 'Compreensão rápida', text: 'Obtenha resumos estruturados e fichamentos automáticos em segundos.' },
        { title: 'Análise comparativa', text: 'Compare metodologias e resultados entre múltiplos artigos simultaneamente.' },
        { title: 'Superação de barreiras linguísticas', text: 'Compreenda artigos em outros idiomas com tradução e resumo contextualizado.' },
      ],
    },

    // SLIDE 27: NotebookLM - Introdução
    {
      id: 27,
      type: 'tool',
      blockLabel: 'Bloco 3 — Leitura e Compreensão',
      toolName: 'NotebookLM',
      toolUrl: 'notebooklm.google.com',
      description: 'Permite inserir arquivos em Word, PDF e vídeos do YouTube como fontes. A partir dessas fontes, o pesquisador pode solicitar resumos, fichamentos, resenhas críticas ou esboços.',
      features: [
        'Ainda gratuita e suporta múltiplos arquivos simultaneamente.',
        'Gera respostas sempre baseadas nos documentos inseridos, reduzindo "alucinações".',
        'Permite cruzar informações entre diferentes fontes carregadas.',
      ],
    },

    // SLIDE 28: NotebookLM - Detalhes
    {
      id: 28,
      type: 'bullet',
      blockLabel: 'Bloco 3 — Leitura e Compreensão',
      title: 'NotebookLM — Como usar na prática',
      bullets: [
        { title: 'Carregue suas fontes', text: 'Insira PDFs de artigos, documentos Word ou links de vídeos do YouTube como base de conhecimento.' },
        { title: 'Solicite fichamentos', text: 'Peça: "Faça um fichamento deste artigo destacando objetivo, metodologia e resultados."' },
        { title: 'Peça resenhas críticas', text: 'Solicite: "Elabore uma resenha crítica comparando os dois artigos inseridos."' },
        { title: 'Gere esboços de texto', text: 'Use como ponto de partida: "Crie um esboço de introdução sobre [tema] com base nas fontes."' },
      ],
    },

    // SLIDE 29: ChatGPT para Leitura - Introdução
    {
      id: 29,
      type: 'tool',
      blockLabel: 'Bloco 3 — Leitura e Compreensão',
      toolName: 'ChatGPT',
      toolUrl: 'chat.openai.com',
      description: 'Com o recurso de inserção de arquivos, é possível carregar artigos diretamente e solicitar resumos, análises de argumentação ou revisão gramatical e ortográfica do texto produzido.',
      features: [
        'Suporta upload de PDFs, imagens e outros formatos de arquivo.',
        'Pode resumir, traduzir, explicar termos técnicos e comparar seções de artigos.',
        'Útil para tirar dúvidas específicas sobre o conteúdo lido.',
      ],
    },

    // SLIDE 30: ChatGPT para Leitura - Detalhes
    {
      id: 30,
      type: 'bullet',
      blockLabel: 'Bloco 3 — Leitura e Compreensão',
      title: 'ChatGPT — Prompts úteis para leitura',
      bullets: [
        { title: 'Resumo estruturado', text: '"Resuma este artigo em: objetivo, metodologia, principais resultados e conclusões."' },
        { title: 'Análise de argumentação', text: '"Identifique os principais argumentos do autor e aponte possíveis limitações."' },
        { title: 'Extração de dados', text: '"Liste todos os dados quantitativos apresentados neste artigo em formato de tabela."' },
        { title: 'Tradução contextualizada', text: '"Traduza este trecho para português, mantendo os termos técnicos da área."' },
      ],
    },

    // SLIDE 31: Resumo do Bloco 3
    {
      id: 31,
      type: 'bullet',
      blockLabel: 'Bloco 3 — Leitura e Compreensão',
      title: 'Resumo — NotebookLM vs. ChatGPT',
      bullets: [
        { title: 'NotebookLM é melhor quando...', text: 'Você tem múltiplas fontes e quer respostas sempre fundamentadas nos documentos inseridos.' },
        { title: 'ChatGPT é melhor quando...', text: 'Precisa de flexibilidade para perguntas variadas, tradução, ou análise de argumentação.' },
        { title: 'Dica importante', text: 'Sempre verifique as respostas da IA confrontando com o texto original — a leitura humana é insubstituível.' },
      ],
    },

    // SLIDE 32: Título do Bloco 4
    {
      id: 32,
      type: 'section-title',
      blockLabel: 'Bloco 4',
      title: 'Ferramentas de Escrita e Revisão',
      subtitle: 'Estas ferramentas auxiliam na produção e no aprimoramento do texto acadêmico.',
    },

    // SLIDE 33: Visão geral do Bloco 4
    {
      id: 33,
      type: 'bullet',
      blockLabel: 'Bloco 4 — Escrita e Revisão',
      title: 'A IA como assistente de escrita',
      bullets: [
        { title: 'Não substitui o pesquisador', text: 'A IA é uma ferramenta de apoio — o pensamento crítico e a autoria continuam sendo humanos.' },
        { title: 'Acelera a produção', text: 'Esboços, conectivos, revisão gramatical e verificação de coerência em segundos.' },
        { title: 'Melhora a qualidade', text: 'Identifica problemas de argumentação, inconsistências e erros que passariam despercebidos.' },
      ],
    },

    // SLIDE 34: ChatGPT/Gemini para Escrita
    {
      id: 34,
      type: 'tool',
      blockLabel: 'Bloco 4 — Escrita e Revisão',
      toolName: 'ChatGPT / Gemini',
      toolUrl: 'chat.openai.com / gemini.google.com',
      description: 'Úteis para construir esboços de introdução, metodologia e fundamentação teórica a partir de prompts bem elaborados. Também funcionam como revisores gramaticais e de coerência argumentativa.',
      features: [
        'Geração de esboços de seções do trabalho acadêmico.',
        'Revisão ortográfica, gramatical e de estilo.',
        'Verificação de coerência argumentativa entre parágrafos.',
      ],
    },

    // SLIDE 35: ChatGPT/Gemini - Prompts
    {
      id: 35,
      type: 'bullet',
      blockLabel: 'Bloco 4 — Escrita e Revisão',
      title: 'Prompts eficazes para escrita acadêmica',
      bullets: [
        { title: 'Esboço de introdução', text: '"Crie um esboço de introdução para um artigo sobre [tema], incluindo contextualização, problema e objetivo."' },
        { title: 'Fundamentação teórica', text: '"Sugira uma estrutura de fundamentação teórica sobre [tema] com os principais conceitos e autores."' },
        { title: 'Revisão de coerência', text: '"Revise este parágrafo quanto à coerência e coesão, sugerindo melhorias na argumentação."' },
        { title: 'Paráfrase acadêmica', text: '"Reescreva este trecho em linguagem acadêmica formal, mantendo o sentido original."' },
      ],
    },

    // SLIDE 36: Jenni AI - Introdução
    {
      id: 36,
      type: 'tool',
      blockLabel: 'Bloco 4 — Escrita e Revisão',
      toolName: 'Jenni AI',
      toolUrl: 'jenni.ai',
      description: 'Assistente de escrita que, conforme o pesquisador digita, sugere automaticamente continuações do texto com indicação de autores, citações e referências alinhadas à ideia em construção.',
      features: [
        'Muito utilizada por pesquisadores que buscam acelerar a escrita sem comprometer a profundidade.',
        'Sugere citações e referências bibliográficas em tempo real.',
        'Integra-se ao fluxo natural de escrita, sem interromper o raciocínio.',
      ],
    },

    // SLIDE 37: Jenni AI - Detalhes
    {
      id: 37,
      type: 'bullet',
      blockLabel: 'Bloco 4 — Escrita e Revisão',
      title: 'Jenni AI — Funcionalidades principais',
      bullets: [
        { title: 'Autocompletar inteligente', text: 'Enquanto você digita, a Jenni sugere a continuação do parágrafo com base no contexto acadêmico.' },
        { title: 'Citações automáticas', text: 'As sugestões já vêm com indicação de autores e obras para referenciar no texto.' },
        { title: 'Controle de tom', text: 'Ajuste o nível de formalidade do texto entre coloquial, acadêmico ou técnico.' },
        { title: 'Geração de referências', text: 'Exporte as referências utilizadas em formato ABNT, APA ou outros padrões.' },
      ],
    },

    // SLIDE 38: Resumo do Bloco 4
    {
      id: 38,
      type: 'bullet',
      blockLabel: 'Bloco 4 — Escrita e Revisão',
      title: 'Resumo — Quando usar cada ferramenta de escrita',
      bullets: [
        { title: 'ChatGPT / Gemini', text: 'Para esboços iniciais, revisão geral e quando precisa de flexibilidade nos prompts.' },
        { title: 'Jenni AI', text: 'Para escrita contínua com sugestões automáticas, citações em tempo real e produção fluida.' },
        { title: 'Atenção ética', text: 'Sempre revise e adapte o texto gerado — o pesquisador é o autor e responsável pelo conteúdo final.' },
      ],
    },

    // SLIDE 39: Título do Bloco 5
    {
      id: 39,
      type: 'section-title',
      blockLabel: 'Bloco 5',
      title: 'Ferramenta de Análise de Dados',
      subtitle: 'Ferramenta indicada para a etapa de análise de dados da pesquisa.',
    },

    // SLIDE 40: Julius AI - Introdução
    {
      id: 40,
      type: 'tool',
      blockLabel: 'Bloco 5 — Análise de Dados',
      toolName: 'Julius AI',
      toolUrl: 'julius.ai',
      description: 'Indicada para a etapa de análise de dados da pesquisa. Permite inserir dados brutos, realizar buscas semânticas, gerar visualizações e gráficos de forma automatizada.',
      features: [
        'Especialmente útil para pesquisadores que trabalham com grandes volumes de dados.',
        'Gera gráficos, tabelas e visualizações a partir de arquivos CSV, Excel ou bases de dados.',
        'Realiza análises estatísticas descritivas e inferenciais com comandos em linguagem natural.',
      ],
    },

    // SLIDE 41: Julius AI - Detalhes
    {
      id: 41,
      type: 'bullet',
      blockLabel: 'Bloco 5 — Análise de Dados',
      title: 'Julius AI — Como usar na prática',
      bullets: [
        { title: 'Importe seus dados', text: 'Carregue planilhas (CSV, Excel) com os dados coletados na pesquisa de campo ou documental.' },
        { title: 'Peça análises em linguagem natural', text: 'Ex: "Faça uma análise descritiva das variáveis" ou "Gere um gráfico de barras comparando os grupos."' },
        { title: 'Explore visualizações', text: 'A ferramenta sugere gráficos adequados ao tipo de dado: histogramas, dispersão, boxplot, etc.' },
        { title: 'Exporte os resultados', text: 'Salve gráficos e tabelas em formatos compatíveis com Word, LaTeX ou Google Docs.' },
      ],
    },

    // SLIDE 42: Julius AI - Casos de uso
    {
      id: 42,
      type: 'bullet',
      blockLabel: 'Bloco 5 — Análise de Dados',
      title: 'Julius AI — Exemplos de uso acadêmico',
      bullets: [
        { title: 'Pesquisa quantitativa', text: 'Análise de questionários, testes estatísticos (t-test, ANOVA) e correlações entre variáveis.' },
        { title: 'Pesquisa qualitativa', text: 'Organização e categorização de dados textuais, frequência de termos e nuvens de palavras.' },
        { title: 'Pesquisa mista', text: 'Integração de dados quantitativos e qualitativos em dashboards visuais.' },
      ],
    },

    // SLIDE 43: Título do Encerramento
    {
      id: 43,
      type: 'section-title',
      blockLabel: 'Encerramento',
      title: 'Fluxo Completo de Trabalho',
      subtitle: 'Síntese do fluxo de trabalho com todas as ferramentas apresentadas.',
    },

    // SLIDE 44: Fluxo completo
    {
      id: 44,
      type: 'bullet',
      blockLabel: 'Encerramento',
      title: 'Seu fluxo de pesquisa com IA',
      numbered: true,
      bullets: [
        { title: 'Buscar', text: 'Use Elicit ou Consensus para identificar os artigos mais relevantes sobre o tema.' },
        { title: 'Mapear', text: 'Alimente Litmaps ou Research Rabbit com os artigos encontrados para mapear a rede teórica da área.' },
        { title: 'Compreender', text: 'Use NotebookLM ou ChatGPT para resumir e compreender os artigos selecionados.' },
        { title: 'Escrever', text: 'Redija com o apoio de Jenni AI ou ChatGPT para uma escrita fluida e fundamentada.' },
        { title: 'Analisar', text: 'Analise os dados da pesquisa com Julius AI para gerar visualizações e insights.' },
      ],
    },

    // SLIDE 45: Encerramento final
    {
      id: 45,
      type: 'section-title',
      blockLabel: 'Encerramento',
      title: 'Obrigado!',
      subtitle: 'A IA não substitui o pesquisador — ela potencializa sua capacidade de investigação. O pensamento crítico, a autoria e a responsabilidade ética continuam sendo exclusivamente humanos.',
    },
  ];

  const slide = slides[currentSlide];

  const largeTextSlides = [10, 12, 14, 16, 21, 23, 28, 30, 35, 37, 41];
  const isLarge = largeTextSlides.includes((slide as any).id);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleSlideClick = (idx: number) => setCurrentSlide(idx);

  // ── helpers de renderização por tipo ──────────────────────────────────────

  const renderSlideContent = () => {
    const s = slide as any;

    if (s.type === 'image') {
      return (
        <div className="w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
        </div>
      );
    }

    if (s.type === 'cover') {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-16 bg-white relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <div className="w-24 h-1 bg-teal-500 absolute top-6 left-6" />
            <div className="h-24 w-1 bg-teal-500 absolute top-6 left-6" />
            <div className="w-3 h-3 bg-yellow-400 absolute top-6 right-0" />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32">
            <div className="w-24 h-1 bg-teal-500 absolute bottom-6 right-6" />
            <div className="h-24 w-1 bg-teal-500 absolute bottom-6 right-6" />
            <div className="w-3 h-3 bg-yellow-400 absolute bottom-6 left-0" />
          </div>

          <div className="flex flex-col items-center justify-center z-10">
            {/* Logos */}
            <div className="flex items-center justify-center gap-8 mb-8">
    
        
            </div>

            <h1 className="text-6xl font-bold text-center mb-6 text-gray-800 max-w-3xl leading-tight">{s.title}</h1>
            <div className="text-center mb-8 max-w-3xl">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">{s.discipline}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{s.course}</p>
            </div>
            <p className="text-2xl text-center text-gray-600 mb-8 max-w-2xl italic">{s.subtitle}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-yellow-400 rounded" />
          </div>
        </div>
      );
    }

    if (s.type === 'section-title') {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="w-2 h-16 bg-gradient-to-b from-teal-500 to-blue-500 rounded mb-8" />
          <h1 className="text-6xl font-bold text-center mb-6 text-gray-800">{s.title}</h1>
          <p className="text-3xl text-center text-gray-600 max-w-2xl">{s.subtitle}</p>
        </div>
      );
    }

    if (s.type === 'bullet') {
      return (
        <div className="flex-1 flex flex-col justify-center p-16 overflow-y-auto">
          <h2 className={`font-bold text-gray-800 mb-8 ${isLarge ? 'text-6xl' : 'text-5xl'}`}>{s.title}</h2>
          <div className={`${isLarge ? 'space-y-8' : 'space-y-6'}`}>
            {s.bullets.map((bullet: { title: string; text: string }, idx: number) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  {s.numbered ? (
                    <div className={`flex items-center justify-center rounded-full bg-teal-500 text-white font-bold ${isLarge ? 'w-10 h-10 text-lg' : 'w-8 h-8 text-base'}`}>
                      {idx + 1}
                    </div>
                  ) : (
                    <span className={`text-teal-500 font-bold ${isLarge ? 'text-2xl' : 'text-xl'}`}>•</span>
                  )}
                </div>
                <div>
                  <h3 className={`font-bold text-gray-800 ${isLarge ? 'text-2xl' : 'text-xl'}`}>{bullet.title}</h3>
                  <p className={`text-gray-600 leading-relaxed ${isLarge ? 'text-lg' : 'text-base'}`}>{bullet.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (s.type === 'tool') {
      return (
        <div className="flex-1 flex flex-col justify-center p-16 overflow-y-auto">
          <h2 className={`font-bold text-gray-800 mb-4 ${isLarge ? 'text-6xl' : 'text-5xl'}`}>{s.toolName}</h2>
          <div className="mb-6">
            <a href={`https://${s.toolUrl}`} target="_blank" rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 font-semibold">
              {s.toolUrl}
            </a>
          </div>
          <p className={`text-gray-700 mb-6 leading-relaxed ${isLarge ? 'text-2xl' : 'text-xl'}`}>{s.description}</p>
          <h3 className={`font-bold text-gray-800 mb-4 ${isLarge ? 'text-2xl' : 'text-xl'}`}>Principais características:</h3>
          <ul className={`${isLarge ? 'space-y-4' : 'space-y-3'}`}>
            {s.features?.map((feature: string, idx: number) => (
              <li key={idx} className="flex gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className={`text-gray-600 ${isLarge ? 'text-lg' : 'text-base'}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // type === 'content'
    return (
    <div className="flex-1 flex flex-col justify-center p-16 overflow-y-auto">
    <h2 className="text-5xl font-bold text-gray-800 mb-6">{s.title}</h2>
    {s.content?.map((paragraph: string, idx: number) => (
      <p key={idx} className="text-xl text-gray-700 leading-relaxed mb-4 text-justify">
        {paragraph}
      </p>
    ))}
  </div>
);
  };

  // ── JSX principal ──────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl">

        {/* ── Slide box ── */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <div className="flex flex-col w-full h-full">

            {/* Header — oculto no slide de imagem */}
            {slide.type !== 'image' && (
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 flex justify-between items-center flex-shrink-0">
                <span className="text-base font-semibold">UNEMAT - Educação a Distância</span>
                <span className="text-base font-semibold">
                  Slide {currentSlide + 1} de {slides.length}
                </span>
              </div>
            )}

            {/* Conteúdo do slide */}
            <div className="flex flex-1 overflow-hidden">
              {renderSlideContent()}
            </div>

          </div>
        </div>
        {/* ── fim slide box ── */}

        {/* ── Navegação ── */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center gap-4">
            <div className="text-gray-300 text-base">
              Slide <span className="font-bold text-white">{currentSlide + 1}</span> de{' '}
              <span className="font-bold text-white">{slides.length}</span>
            </div>
            <div className="flex gap-2 flex-wrap justify-center max-w-lg">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideClick(idx)}
                  className={`transition-all rounded-full h-2 ${
                    idx === currentSlide ? 'w-6 bg-teal-500' : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="text-gray-500 text-sm text-center">
              Use as setas do teclado ← → ou clique nos pontos para navegar
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white transition-colors"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Presentation;