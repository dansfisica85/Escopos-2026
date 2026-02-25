module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY not configured' });
  }

  try {
    const { disciplina, ciclo, anoSerie, bimestre, semana, aulas, instrucoes } = req.body;

    if (!aulas || !Array.isArray(aulas) || aulas.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const aulasDetail = aulas.map(a =>
      `**${a.aulaSala} — ${a.titulo}**\n- Objetivos: ${a.objetivos}\n- Conteúdos: ${a.conteudos}`
    ).join('\n\n');

    const prompt = `Você é um especialista em educação e robótica educacional / programação / tecnologia e inovação. 
Crie um plano de aula detalhado em português brasileiro para a seguinte aula:

**Disciplina:** ${disciplina}
**Ciclo:** ${ciclo}
**Ano/Série:** ${anoSerie}
**Bimestre:** ${bimestre}
**Semana:** ${semana}

${aulasDetail}

O plano de aula deve seguir o formato abaixo em Markdown:

# Plano de Aula — Semana ${semana}
## ${disciplina} — ${anoSerie} — ${bimestre}

### Informações Gerais
- **Duração:** 2 aulas (aproximadamente 90 minutos)
- **Série/Ano:** ${anoSerie}
- **Bimestre:** ${bimestre}

### Objetivos de Aprendizagem
(Liste os objetivos detalhados)

### Conteúdos Programáticos
(Liste os conteúdos que serão trabalhados)

### Metodologia
(Descreva a metodologia passo a passo, incluindo tempo estimado para cada etapa)

#### Momento 1 — Acolhimento e Contextualização (10 min)
(Detalhe)

#### Momento 2 — Desenvolvimento (60 min)
(Detalhe com sub-etapas)

#### Momento 3 — Fechamento e Avaliação (20 min)
(Detalhe)

### Recursos Necessários
(Liste materiais, ferramentas, equipamentos)

### Avaliação
(Descreva critérios e instrumentos de avaliação)

### Diferenciação Pedagógica
(Sugestões para alunos com diferentes níveis de aprendizagem)

### Observações para o Professor
(Dicas e sugestões práticas)

---
*Plano gerado por IA como sugestão. Adapte conforme a realidade da sua turma.*`;

    const instrucaoExtra = instrucoes
      ? `\n\n**INSTRUÇÕES ADICIONAIS DO PROFESSOR:** ${instrucoes}`
      : '';

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente especialista em educação brasileira, com foco em robótica educacional, programação e tecnologia. Gere planos de aula completos, práticos e alinhados à BNCC. Responda sempre em Markdown bem formatado.'
          },
          {
            role: 'user',
            content: prompt + instrucaoExtra
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('GROQ API error:', errorData);
      return res.status(response.status).json({ error: 'Erro na API GROQ', details: errorData });
    }

    const data = await response.json();
    const markdown = data.choices?.[0]?.message?.content || 'Erro ao gerar plano.';

    return res.status(200).json({ markdown });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};
