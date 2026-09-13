# Manual de execução — Marketing Peixoto Terraplenagem

Versão: 12/09/2026. Destinado a uma pessoa, prestador ou IA que precise continuar o trabalho sem conhecer a conversa. Complementa e atualiza o [plano estratégico](PLANO-MARKETING-PEIXOTO.md).

**Estado desta entrega:** planejamento e especificação. Nenhuma tag foi instalada, conta criada, perfil alterado, publicação feita ou anúncio ativado nesta atualização. IDs, acessos e orçamento ausentes continuam pendentes; não inventá-los.

## 1. Contexto que o executor deve preservar

- Empresa: **Peixoto Terraplenagem**. Objetivo: pedidos de locação que possam virar contratos rentáveis, além dos serviços realmente oferecidos.
- Site: [peixototerraplenagem.com.br](https://peixototerraplenagem.com.br/). Já publicado no Netlify, com domínio e HTTPS. O usuário prefere atualização manual da pasta no projeto existente.
- Google: presença existente, marca encontrada na busca segundo o usuário. Aproveitar Perfil da Empresa e Search Console existentes, quando acessíveis.
- WhatsApp Business: já existe. Número comercial usado no site: **+55 11 91011-0562**.
- E-mail público: **contato@peixototerraplenagem.com.br**, alias configurado segundo o usuário. Não presumir que seja um login Google independente.
- Formulário: Web3Forms, envio confirmado como funcional pelo usuário. Manter WhatsApp como alternativa em falhas.
- Instagram: falta conteúdo publicado. Confirmar URL/usuário da conta existente antes de criar outra.
- LinkedIn: usuário possui perfil pessoal legítimo, com estágio em outra empresa; a presença Peixoto pode ter sido criada como perfil pessoal em vez de Página. Não modificar o estágio por causa deste projeto.
- Material disponível: logo, foto principal e um antes/depois aprovado. Site simples é preferência expressa. Locação deve ter destaque; não acrescentar compactação à publicidade.
- Não restringir o texto comercial a uma cidade. Obras distantes podem ser avaliadas por escopo, período e mobilização. Segmentação de anúncio será definida pela viabilidade econômica.
- **Recurso escasso: tempo do usuário.** Pai tem disposição para investir na obtenção de serviços; isso não define nem aprova um orçamento.
- Antes de mudanças externas importantes, seguir a preferência do usuário: mostrar a tela atual/solicitar print e explicar o que será alterado. Preparação, diagnóstico e arquivos revisáveis podem avançar dentro da tarefa autorizada. Publicação e gastos precisam estar abrangidos pela autorização vigente.

### Localização do site e do material

O projeto é HTML, CSS e JavaScript estático, sem etapa de compilação conhecida. Reconfirmar antes de executar, pois o código pode evoluir.

| Item | Local |
|---|---|
| Pasta do site | [Raiz do repositório](../../) |
| Página principal | [index.html](../../index.html) |
| Formulário e comportamento | [js/main.js](../../js/main.js) |
| Privacidade | [privacidade.html](../../privacidade.html) |
| Imagens disponíveis | [assets/images](../../assets/images) |

Imagens identificadas: `logo-peixoto-horizontal-web.png`, `hero-cat-em-operacao.jpg`, `obra-antes-terreno.png`, `obra-depois-terreno.png`. Preservar os originais. Esta publicação sincroniza o código local usado no diagnóstico, incluindo domínio próprio, favicon, e-mail profissional e formulário. GA4/GTM continuam pendentes. Antes de uma nova implementação ou publicação, conferir alterações posteriores e preservar o que não fizer parte da tarefa.

## 2. Ordem e responsabilidades

| Ordem | Entrega | Quem executa | Participação estimada do usuário | Dependência |
|---|---|---|---|---|
| 1 | Inventário de oferta, contas e responsável comercial | IA/apoio prepara; usuário/pai confirma | 15–20 min | Acessos e informações reais |
| 2 | GA4 + GTM + eventos funcionando | Técnico ou IA com acesso e ferramentas | 15–25 min para acessos e revisão | IDs reais e fluxo de consentimento |
| 3 | Controle de pedidos e retornos | IA/apoio monta; atendente usa | 10–15 min | Responsável pelo atendimento |
| 4 | Seis publicações de Instagram em lote | IA/design/editor | 25–35 min | Material e textos aprovados |
| 5 | Página LinkedIn correta | Apoio prepara; usuário administra | 10–15 min se houver acesso normal | Identificar tipo e URL existentes |
| 6 | Apresentação comercial de uma página | IA/design | 15–20 min | Oferta confirmada |
| 7 | Piloto Google Ads pronto para decisão | Gestor/técnico | 15–20 min | Medição, atendimento e orçamento |
| 8 | Revisão da primeira quinzena | Gestor/IA prepara síntese | 15–20 min | Evidências do que foi concluído |

Estimativa: aproximadamente **2–3 horas de participação do usuário nas primeiras duas semanas**, além do atendimento e negociação. O trabalho delegado pode exigir vários dias, especialmente integração técnica, captação e produção. Recuperação de contas pode alterar o prazo.

Três frentes podem avançar juntas após inventário: medição, lote de Instagram e diagnóstico do LinkedIn. O piloto pago depende de medição, oferta e capacidade de resposta; não depende de aumentar seguidores nem de fotografar toda a frota.

**Papéis propostos:** usuário aprova comunicação e mantém controle das contas; pai/responsável operacional confirma oferta, disponibilidade e verba; técnico instala e testa; apoio prepara conteúdo; atendente registra pedidos e retornos. Nomear pessoas reais antes de cobrar uma rotina. Não atribuir automaticamente ao usuário toda a execução.

## 3. E01 — Inventário inicial

**Objetivo:** descobrir o que já existe e reunir somente os dados necessários à próxima execução.

1. Anotar URL do site, Perfil da Empresa, Instagram, LinkedIn pessoal e presença Peixoto no LinkedIn.
2. Identificar qual conta Google controla Analytics, Tag Manager, Search Console e futuramente Ads, caso existam. Usar contas sob controle da empresa; conceder acessos por convite, sem colocar senhas no documento.
3. Confirmar equipamentos/modalidades oferecidos agora. Referências antigas à frota não comprovam disponibilidade atual.
4. Escolher uma oferta prioritária de locação com capacidade de atendimento.
5. Confirmar regiões comercialmente interessantes, condições para deslocamentos maiores e quem elabora o orçamento.
6. Definir quem responde WhatsApp/e-mail e em que horários.

Registro a preencher:

| Campo | Estado em 12/09/2026 |
|---|---|
| URL Instagram | Pendente de confirmação |
| URL LinkedIn pessoal | Pendente de confirmação |
| URL Peixoto no LinkedIn e tipo de conta | Pendente de diagnóstico |
| Conta Google responsável por medição | Pendente de confirmação |
| Conta/propriedade/fluxo GA4 e ID `G-...` | Não fornecidos; verificar existência |
| Conta/contêiner GTM e ID `GTM-...` | Não fornecidos; verificar existência |
| ID Google Ads | Não fornecido; conferir quando chegar à etapa |
| Oferta prioritária e disponibilidade | Confirmar com responsável operacional |
| Responsável por novos pedidos | A definir |
| Verba total/mídia, duração e aprovação | Não aprovadas |

**Pronto quando:** dados relevantes registrados, acessos corretos identificados e oferta escolhida. Se um acesso bloquear uma frente, continuar as outras e registrar o bloqueio concreto.

## 4. E02 — Medição: Google Analytics 4 + Google Tag Manager

### Decisão e finalidade

Usar **GA4 por meio do GTM**. GA4 apresenta dados; GTM administra a instalação das tags e facilita integrar anúncios futuramente. Search Console continua útil para buscas orgânicas no Google. O site estático no Netlify aceita essa integração. [Google: opções de instalação](https://developers.google.com/analytics/devguides/collection/ga4/tag-options).

| Ferramenta | Perguntas que responde |
|---|---|
| Search Console | Em quais buscas o site aparece? Quantos cliques vieram da busca orgânica? |
| GA4 | Quantas visitas foram medidas? De onde vieram? Quais contatos foram acionados? |
| Tag Manager | Como instalar e manter as tags/eventos sem duplicar a implementação? |
| Controle comercial | Quem pediu orçamento, quem fechou e qual foi o resultado financeiro? |

Os dados novos começam com a instalação validada. Não recuperam automaticamente o histórico anterior. Preferências de privacidade, bloqueadores e outros fatores limitam a cobertura; o painel não identifica todas as pessoas que visitam o site.

### E02-A — Preparar contas

**Executor:** técnico/IA; usuário entra em sua conta e fornece acesso quando necessário.

1. Verificar se há GA4/GTM na conta e no site publicado antes de criar ativos. Nos arquivos consultados em 12/09 não foram encontradas tags; isso não dispensa verificar possíveis alterações posteriores ou instalações externas.
2. Se não existir propriedade adequada: em [Google Analytics](https://analytics.google.com/), criar conta da empresa, propriedade `Peixoto — Site`, fuso São Paulo/Brasil e moeda BRL. Selecionar objetivo pertinente à geração de contatos.
3. Criar fluxo Web para `https://peixototerraplenagem.com.br`; registrar propriedade, fluxo e ID de medição `G-...`.
4. Em [Google Tag Manager](https://tagmanager.google.com/), criar/reusar conta da empresa e contêiner Web para o domínio. Registrar `GTM-...`.
5. Manter controle administrativo na empresa e convidar o executor com permissão apropriada. Não usar um alias de e-mail como se fosse um login independente sem confirmar.

**Pronto quando:** IDs reais, responsáveis e acessos registrados. Não inserir IDs ilustrativos no site.

Fontes: [Configurar GA4](https://support.google.com/analytics/answer/14183469?hl=pt-BR), [Criar conta e contêiner GTM](https://support.google.com/tagmanager/answer/14842164?hl=pt-BR).

### E02-B — Definir exatamente o que contar

| Evento | Momento exato | Parâmetros permitidos propostos | Significado |
|---|---|---|---|
| `page_view` | Uma vez por carregamento elegível, pela Google tag | URL/título limpos | Página vista |
| `click_whatsapp` | Clique em link que abre WhatsApp, inclusive alternativa após falha do formulário | `button_location`, `contact_method=whatsapp` | Intenção de contato |
| `click_email` | Clique no endereço `mailto:` ou no botão Gmail | `button_location`, `contact_method=mailto` ou `gmail` | Intenção de escrever e-mail |
| `generate_lead` | API Web3Forms respondeu com sucesso confirmado | `form_id=form-orcamento`, `lead_source=website_form` | Serviço de formulário aceitou um pedido |

`button_location` usa valores fixos definidos ao mapear os botões, por exemplo `header`, `hero`, `mobile_menu`, `services`, `cta`, `contact`, `footer`, `floating`, `form_fallback` ou `privacy`. Não usar texto livre do visitante como valor. `form_id` coincide com o ID HTML observado: `form-orcamento`.

Marcar `generate_lead` como evento principal no GA4. Não marcar cliques de e-mail/WhatsApp como contrato ou mensagem recebida. A qualificação do pedido acontece no controle comercial. Não atribuir valor monetário fictício a um formulário.

No futuro Google Ads, escolher uma única conversão principal para o mesmo resultado: se importar este evento do GA4, não contar também uma tag nativa Ads do mesmo formulário como outra conversão principal.

Fontes: [Eventos recomendados](https://support.google.com/analytics/answer/9267735?hl=pt-BR), [Eventos principais](https://support.google.com/analytics/answer/13128484?hl=pt-BR), [Conversões GA4 e Google Ads](https://support.google.com/analytics/answer/10632359?hl=pt-BR).

### E02-C — Cuidado específico deste formulário

Em `js/main.js`, a função `renderFallback()` monta um link de WhatsApp com `?text=` contendo nome, telefone, e-mail e mensagem fornecidos pelo visitante. Isso serve para o cliente enviar seu próprio pedido pelo WhatsApp. **Essa URL preenchida não deve ser enviada ao Analytics.**

No GA4, abrir **Administrador → Fluxos de dados → fluxo Web → Medição otimizada → configurações** e desativar:

- **Cliques de saída:** a coleta automática inclui `link_url`, que poderia conter os dados do pedido.
- **Interações com formulários:** o envio automático detectado no navegador não garante que o Web3Forms tenha aceitado o pedido.

Usar somente os eventos manuais definidos na tabela para essas ações. Não enviar `link_url`, texto do WhatsApp, nome, e-mail, telefone, conteúdo dos campos, endereço detalhado da obra ou chave Web3Forms ao GA4/dataLayer. Não habilitar coleta de dados fornecidos pelo usuário ou conversões avançadas nesta etapa.

Fontes: [Medição otimizada e parâmetros](https://support.google.com/analytics/answer/9216061?hl=pt-BR), [Evitar dados pessoais no Analytics](https://support.google.com/analytics/answer/6366371?hl=pt-BR).

### E02-D — Consentimento e integração no código

**Escolha de implementação proposta:** medição básica por consentimento, com opção de aceitar ou recusar estatísticas e possibilidade de alterar a preferência. Bloquear a medição até aceite; recusar não pode impedir formulário ou contatos. Aceitar estatísticas não implica aceitar publicidade. A solução e a atualização da informação de privacidade precisam estar revisáveis antes da publicação. Trata-se da escolha deste plano, não da afirmação de que uma lei exige uma interface específica.

Usar CMP/template compatível com GTM ou solução técnica equivalente validada. Configurar `analytics_storage` conforme escolha e manter permissões de publicidade negadas enquanto não houver essa etapa. Não tratar apenas `consent=denied` como bloqueio físico das tags: no modo avançado ainda podem existir sinais sem cookies. A implementação proposta é básica. [Google: modos de consentimento](https://developers.google.com/tag-platform/security/concepts/consent-mode).

Instruções para o desenvolvedor:

1. Reavaliar o código atual, preservar mudanças existentes e criar uma versão recuperável antes de editar.
2. Integrar o contêiner real nas páginas públicas, inclusive privacidade, respeitando o consentimento. Não instalar a mesma medição duas vezes, por GTM e `gtag.js` direto.
3. Usar uma camada pequena e independente para eventos. Se a tag estiver bloqueada ou o Analytics indisponível, os contatos continuam funcionando.
4. Capturar cliques por uma única estratégia, cobrindo links estáticos e o `.form__fallback` criado dinamicamente. Tratar clique no ícone interno e ativação por teclado. Evitar listeners duplicados.
5. Em `js/main.js`, o formulário faz `fetch()` e só chama `ok()` quando recebe sucesso. Inserir `generate_lead` nesse caminho de sucesso confirmado, uma vez por resposta aceita, nunca no clique do botão, validação ou tentativa. Conferir resposta HTTP e JSON da API.
6. Não alterar destinatário, chave existente ou funcionamento de fallback para instalar medição.
7. Não guardar ações anteriores ao consentimento para reenvio retroativo. Revogação deve impedir medições posteriores conforme a implementação escolhida e testada.
8. Atualizar a política de privacidade para descrever a medição implantada e a gestão de preferências; não declarar funcionalidades que não foram ativadas.

Exemplo do contrato de dados, para inserir apenas na condição correta:

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "generate_lead",
  form_id: "form-orcamento",
  lead_source: "website_form"
});
```

Esse trecho sozinho não implementa consentimento nem valida o envio. O executor deve conectá-lo ao fluxo correto e à regra de elegibilidade da medição. [Google: dataLayer](https://developers.google.com/tag-platform/devguides/datalayer).

### E02-E — Configurar GTM e relatórios

1. Criar uma **Google tag** apontando ao `G-...` real, com disparo condicionado ao fluxo de consentimento. Uma única fonte deve enviar `page_view`.
2. Criar tags **Evento GA4** para os três eventos de contato da tabela, acionadas por eventos personalizados de mesmo nome.
3. Mapear somente parâmetros permitidos. Não acrescentar automaticamente URL/texto de todos os links.
4. Registrar dimensões personalizadas de escopo de evento para posição do botão e método de contato se forem usadas no relatório.
5. Conferir que `generate_lead` está marcado como evento principal.
6. Usar relatórios do próprio GA4 inicialmente: aquisição de tráfego, páginas, eventos e eventos principais. Não criar um painel externo obrigatório antes de ter dados.

Modelo de resumo semanal: visitas medidas; origem; cliques WhatsApp; cliques e-mail; formulários aceitos; pedidos qualificados; propostas; contratos. Os últimos três vêm do controle comercial, não são inferidos dos cliques.

Fonte de configuração, teste e publicação: [GA4 com GTM](https://support.google.com/tagmanager/answer/9442095?hl=pt-BR).

### E02-F — Testar, publicar e registrar evidências

Usar GTM Preview/Tag Assistant, GA4 DebugView e inspeção de requisições. Simular falhas em ambiente de teste; não quebrar deliberadamente o formulário público.

| Teste | Resultado esperado |
|---|---|
| Antes do aceite ou após recusa | Nenhuma medição GA4 no modo básico; site e contatos funcionam |
| Após aceite e recarregamento | Uma visualização por carregamento, sem duplicação |
| Revogar estatísticas | Medições posteriores bloqueadas segundo solução validada |
| Cada botão WhatsApp, inclusive ícone e teclado | Um `click_whatsapp` por ação; nenhum lead automático |
| Endereço de e-mail e botão Gmail | Um `click_email` com método correto |
| Formulário inválido | Zero `generate_lead` |
| Falha de rede/API simulada | Zero lead; alternativa WhatsApp preservada |
| Envio válido de teste identificado | Um lead após sucesso; verificar também chegada do e-mail |
| Recarregar após enviar | Não repetir o lead anterior |
| Payload de coleta | Sem dados pessoais usados no teste nem URL de WhatsApp preenchida |
| Celular e computador | Nenhum contato ou campo prejudicado pela integração |

Registrar testes sem guardar capturas com dados pessoais. Separar tráfego de desenvolvimento dos relatórios comerciais sem criar filtros irreversíveis indiscriminadamente. Não há reconstrução de histórico anterior à instalação. [DebugView](https://support.google.com/analytics/answer/7201382?hl=pt-BR).

Publicação tem **duas partes**: versão do contêiner GTM e versão do site. Preparar/testar ambas; publicar no projeto Netlify atual pelo fluxo aprovado. Registrar data, ID da versão GTM e deploy Netlify, e testar novamente no domínio público. Manter rollback das duas partes.

A pasta enviada ao Netlify deve conter o site estático com `index.html` na raiz e seus recursos. Não incluir os manuais de marketing, `.git`, arquivos de credenciais ou material interno. Não criar novo projeto/novo domínio para esta atualização.

**Pronto quando:** eventos corretos vistos no DebugView/Tempo real, testes aprovados, formulário recebido, consentimento respeitado e evidências/versões registradas. “Colei o código” não encerra a tarefa. Relatórios consolidados podem demorar após os primeiros eventos.

## 5. E03 — Controle comercial e origem dos pedidos

**Entrega:** controle simples acessível ao atendente, com uma linha por oportunidade. Usar planilha ou ferramenta já disponível; não contratar CRM por padrão.

Campos: data, contato/empresa, origem declarada, cidade da obra, serviço, período previsto, responsável, status, valor da proposta, próximo retorno, resultado, motivo de perda e margem estimada. Esses dados permanecem no controle comercial; não vão automaticamente ao Analytics.

Origem do contato: Google orgânico, Google Ads, Instagram, LinkedIn, indicação, outro ou não identificado. Perguntar naturalmente “Como chegou até a Peixoto?” quando não houver informação. Não inventar atribuição quando o cliente não sabe.

Links de perfis podem usar UTMs de origem, sem nomes ou dados de pessoas:

- Instagram: `https://peixototerraplenagem.com.br/?utm_source=instagram&utm_medium=organic_social&utm_campaign=perfil#contato`
- LinkedIn: `https://peixototerraplenagem.com.br/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=pagina`

Esses links ajudam a atribuir visitas ao site, mas não comprovam por si só qual conversa virou contrato. Não inserir UTMs em links internos do próprio site.

Rotina: atendente registra o novo pedido, verifica compatibilidade e combina retorno. Na revisão semanal, separar testes/spam/duplicações e atualizar fechamento. Um envio de teste não pode ser contado como oportunidade real.

**Pronto quando:** uma oportunidade de teste percorreu entrada, qualificação, proposta, retorno e encerramento, com uma pessoa responsável pela rotina.

## 6. E04 — Instagram: seis publicações para começar

**Objetivo:** perfil compreensível e apresentável com material disponível. Priorizar lote de produção, não trabalho diário do usuário.

**Insumos:** acesso/URL, logo oficial, fotos aprovadas, oferta confirmada, contato. Se faltar foto nova, usar conteúdo de contratação; não inventar frota ou resultado.

1. Conferir se a conta existente é a correta e se já há conteúdo. Ajustar o perfil profissional quando adequado, conferindo a tela atual.
2. Nome exibido proposto: `Peixoto | Locação e Terraplenagem`.
3. Bio: “Locação de equipamentos e terraplenagem. Conte o que sua obra precisa. Consulte disponibilidade e peça orçamento ↓”.
4. Usar logo legível e link principal definido no inventário. Reaproveitar a marca existente, com marrom/verde/branco e Montserrat quando disponível.
5. Produzir seis peças com legenda, texto alternativo e chamada para contato. Formato de produção proposto: 1080 × 1350 para artes do feed e 1080 × 1920 para vídeo vertical; não são obrigações da plataforma.

| Peça | Texto da capa | Conteúdo | Material |
|---|---|---|---|
| IG01 — fixar | Equipamentos para sua obra | Locação e modalidades confirmadas; como consultar disponibilidade | Logo + foto principal se adequada ao recorte |
| IG02 — fixar | Uma obra realizada pela Peixoto | Necessidade, trabalho e resultado verdadeiro | Antes/depois aprovado |
| IG03 — fixar | Como pedir seu orçamento | Cidade/local, serviço, data, período e fotos de acesso | Arte simples; dispensa foto nova |
| IG04 | O que muda o valor da locação? | Período, mobilização, acesso e condições aplicáveis | Resposta validada pelo responsável |
| IG05 | Preciso saber qual máquina contratar? | Cliente pode começar descrevendo o trabalho | Arte; vídeo do responsável opcional |
| IG06 | Antes de a máquina chegar | Informações que ajudam a avaliar e planejar a demanda | Foto real ou checklist explicativo |

6. Entregar uma prévia conjunta para o usuário revisar uma vez. Conferir telefone, endereço de e-mail, ortografia e verdade das afirmações.
7. Após aprovação externa, publicar os três institucionais na primeira semana e fixá-los; distribuir os outros três nas três semanas seguintes. Cadência proposta, adaptável. Não esperar um feed grande para abrir o perfil ao público.
8. Criar destaques `Locação`, `Obras`, `Orçamento` somente com conteúdo. Clientes/depoimentos ficam para quando houver material autorizado.
9. Agendar pelo recurso disponível na conta ou pela ferramenta já usada; não vincular/criar novas contas Meta desnecessariamente só para cumprir um cronograma.

**Entrega ao usuário:** seis imagens ou vídeos finais, seis legendas, editáveis, ordem, datas propostas e status aprovado/publicado. Arquivos organizados fora da pasta pública do site.

**Pronto quando:** peças revisadas, perfil/link funcionando e status de publicação registrado. Se não houver autorização/acesso, entregar lote pronto, sem afirmar que publicou.

## 7. E05 — LinkedIn: Página sem mexer no estágio

**Resposta central:** um perfil pessoal real pode administrar uma Página empresarial. Ser administrador é uma permissão, separada do cargo na Experiência. O usuário pode manter seu estágio e não precisa se apresentar como dono da Peixoto. [LinkedIn: administradores de Página](https://www.linkedin.com/help/linkedin/answer/a541981/linkedin-page-admins-overview).

### Diagnosticar antes de criar

1. Pedir/anotar URL do perfil pessoal verdadeiro e da presença Peixoto já criada. `/in/` normalmente indica pessoa; `/company/` normalmente indica Página. Confirmar a tela e disponibilidade de visão administrativa.
2. Pesquisar a empresa e conferir site, logo e localização para evitar homônimos e duplicação.
3. Se já for Página com acesso, completar a existente.
4. Se for Página sem acesso, tentar inclusão pelo superadministrador conhecido. Se for necessário solicitar recuperação/acesso pelo processo do LinkedIn, cumprir os requisitos verdadeiros da plataforma. Esse procedimento pode pedir experiência real na empresa e e-mail profissional verificado; isso não exige apagar o estágio. [Solicitar acesso administrativo](https://www.linkedin.com/help/linkedin/answer/a569092/request-admin-access-to-a-linkedin-page?lang=en).
5. Se não houver Página adequada, criar pelo perfil pessoal legítimo: **Para negócios → Criar uma Company Page/Página → Empresa**. Confirmar os nomes atuais dos botões. Preencher tipo, porte, setor e informações reais. [Criar Página](https://www.linkedin.com/help/linkedin/answer/a543852/).
6. Se Peixoto foi criada como perfil pessoal, não tentar tratá-la como Página nem prometer conversão automática. Registrar conteúdo/conexões/acessos e preparar a regularização da conta antiga para decisão separada. Não apagar nem renomear automaticamente, sobretudo porque já existe um perfil pessoal legítimo do usuário. [Diferenças de perfil e Página](https://www.linkedin.com/help/linkedin/answer/a6244797).

### Completar a Página

- Nome: **Peixoto Terraplenagem**.
- Slogan: “Locação de equipamentos e terraplenagem para sua obra.”
- Site: URL oficial, podendo usar a UTM da seção E03.
- Sobre: oferta real, condições sob consulta e contato profissional.
- Logo e capa simples; não exibir informações não confirmadas de porte, certificação, frota ou clientes.
- Primeiro post: apresentação da oferta e caminho para orçamento. Reaproveitar o caso real no segundo post.

Manter usuário como administrador adequado e conceder ao prestador somente função necessária, por perfil individual. Acrescentar responsável confiável de apoio quando disponível. Administração da Página não exige alterar automaticamente headline ou emprego pessoal.

**Pronto quando:** Página oficial identificada, perfil pessoal verdadeiro consegue administrá-la, estágio preservado, contatos corretos e situação da conta antiga documentada. Se a Página depender de recuperação, registrar isso e continuar Instagram/medição.

**Rotina mínima proposta:** duas publicações mensais reaproveitadas; contatos profissionais individualizados quando houver tempo ou apoio. Não contratar LinkedIn Premium ou anúncios como pré-requisito desta etapa.

## 8. E06 — Kit comercial e material de obra

**Entrega:** apresentação de uma página legível no celular, versão editável e respostas rápidas. Conteúdo: logo, oferta prioritária, equipamentos confirmados, uma obra real, como pedir orçamento, WhatsApp/e-mail/site. Sem catálogo enorme, preço presumido ou promessa de disponibilidade permanente.

Mensagens para preparar:

- Solicitação de dados para orçamento.
- Retorno de proposta na data combinada.
- Apresentação curta a parceiro pertinente.
- Agradecimento e convite a avaliação autêntica após serviço.

Captação futura: seis fotos e dois vídeos curtos por obra adequada, mais áudio com contexto. Início e resultado devem usar ângulo comparável. Uma pessoa em local seguro faz o registro; não filmar enquanto opera. Confirmar autorização antes de expor cliente, trabalhadores ou local identificável.

Organização proposta: `AAAA-MM-Cidade-Servico`, com subpastas originais, selecionadas e publicadas; anotar contexto, restrições e números comprováveis. Isso pode virar caso do site, Instagram, LinkedIn e material de proposta.

**Pronto quando:** apresentação e mensagens aprovadas, material reutilizável entregue e responsável definido para captar a próxima obra. Não depender dessa captação para executar E02/E04.

## 9. E07 — Google Ads: preparar piloto para aprovação

**Pré-requisitos:** oferta confirmada, medição E02 validada, responsável pelos pedidos e controle E03 funcionando. A existência de Instagram/LinkedIn completos ajuda a apresentação, mas não é pré-requisito técnico do piloto.

1. Conferir conta Ads já existente; criar somente se necessário e autorizado.
2. Consultar demanda/previsões para oferta e região economicamente viável.
3. Preparar campanha de Pesquisa com poucos grupos, anúncios correspondentes ao serviço e destino útil no site.
4. Revisar palavras e exclusões para evitar emprego, cursos, miniaturas e outras intenções fora da oferta. Não excluir automaticamente preço/orçamento.
5. Selecionar localização conscientemente e avaliar o caso de compradores em outra cidade contratando obra na região. Texto do site continua aberto à análise de obras distantes.
6. Vincular GA4/Ads quando autorizado e escolher uma conversão principal por pedido. Clique no WhatsApp continua secundário até se poder ligar a contato qualificado.
7. Preparar resumo revisável: oferta, região, anúncios, página, palavras, exclusões, verba, duração, cobrança e critérios de avaliação.
8. Obter decisão de usuário/pai sobre valor e período antes de ativar gasto. O interesse em investir não autoriza verba ilimitada. Sem aprovação, deixar rascunho/pausado.

O plano original apresenta R$ 900–1.800/mês como exemplo de piloto, não como teto obrigatório. Se o caixa comportar mais, dimensionar com previsões e capacidade. Também pode ser melhor usar parte do dinheiro para técnico/gestor e atendimento, poupando tempo do usuário.

Separar na proposta: **mídia**, **implantação/medição**, **gestão** e **produção de material**. Entregar contas e arquivos sob controle da Peixoto. Não contratar só com a promessa de quantidade de posts.

**Pronto para lançar quando:** pré-requisitos testados e plano concreto aprovado. **Pronto após lançamento quando:** campanha ativa no período combinado, medições verificadas e rotina de análise definida. Poucos dias ou cliques isolados não comprovam retorno.

## 10. Agenda de duas semanas e rotina leve

| Período sugerido | Trabalho delegado | Decisão do usuário |
|---|---|---|
| Dias 1–2 | E01 e diagnóstico das contas | Confirmar oferta e acessos |
| Dias 2–5 | E02 em preparação/teste; E03 em paralelo | Revisar integração e fluxo proposto |
| Dias 3–7 | Lote E04 e diagnóstico E05 | Aprovar peças em um único lote |
| Dias 6–9 | Kit E06, finalizar/publicar etapas autorizadas | Conferir informações comerciais |
| Dias 8–12 | Piloto E07 revisável | Definir verba, período e capacidade |
| Dia 14 | Síntese E08 | Decidir próxima quinzena |

Prazos de referência para organização, dependentes de acessos, revisão e executor. Não fingir resultado de anúncio que ainda não rodou.

**Rotina semanal do usuário — aproximadamente 30 minutos de gestão:** 10 min para ver pedidos/propostas, 10 min para aprovar material em lote e 10 min para decidir oferta/disponibilidade/próximo foco. Atendimento diário precisa estar atribuído a alguém e não cabe nesses 30 minutos.

**Primeiras contratações que poupam tempo:** técnico que entregue medição validada; apoio que produza conteúdo em lote; gestor com prestação de contas comercial. Se novos pedidos ficarem sem resposta, resolver atendimento antes de aumentar mídia.

## 11. E08 — Registro de conclusão e passagem de trabalho

Cada executor deve atualizar esta ficha ao encerrar uma etapa:

```text
Tarefa: E__
Status: não iniciada / preparando / aguardando acesso / aguardando decisão / publicada / verificada
Responsável:
Data:
Insumos utilizados:
Arquivos/URLs/IDs de ativos (sem senhas):
O que foi alterado:
Testes e evidências:
Autorização de publicação/gasto, quando pertinente:
Limitação ou pendência concreta:
Próxima ação e responsável:
Versão anterior/rollback, quando pertinente:
```

Preparado não significa publicado; publicado não significa testado. Um prestador não deve informar “Analytics pronto” sem dados recebidos, nem “Instagram pronto” sem entregar peças e status real. Não usar prints de testes como prova de resultado comercial.

## 12. Instruções prontas para entregar a uma IA ou prestador

### Executar medição

> Leia este manual, principalmente E01/E02, e inspecione o código atual do site. Prepare e implemente a medição GA4 via GTM com IDs reais fornecidos ou ativos existentes autorizados. Conte cliques WhatsApp/e-mail e formulário apenas após sucesso Web3Forms. Não envie URLs preenchidas nem dados pessoais ao Analytics, não duplique tags, preserve contatos e fallback. Entregue testes, versão de arquivos, versão GTM e procedimento de publicação/rollback. Quando faltar um ID ou acesso, especifique o único dado necessário e continue o trabalho independente. Siga o fluxo de publicação autorizado para o projeto Netlify atual.

### Produzir Instagram

> Execute E04 com os materiais reais disponíveis. Entregue seis peças, legendas, chamadas para contato, textos alternativos, editáveis e calendário. Mantenha foco em locação e a marca existente. Não invente máquina, cliente, prazo, preço ou depoimento. Organize uma única revisão do lote. Publique/agende somente quando a tarefa recebida incluir essa autorização.

### Organizar LinkedIn

> Execute E05: identifique primeiro se a presença Peixoto é Página ou perfil. Reaproveite a Página correta ou prepare criação pelo perfil pessoal verdadeiro, preservando o estágio atual do usuário. Não exclua conta antiga, invente emprego ou crie duplicatas para contornar acesso. Entregue URL, responsáveis administrativos, descrição, capa/primeiro post revisáveis e pendências reais.

### Preparar anúncios

> Execute E07 para uma oferta de locação confirmada. Entregue previsão, palavras, exclusões, localização, anúncios, página de destino, conversões testadas e orçamento separado de gestão/produção. A disposição do pai em investir não autoriza gasto. Apresente campanha concreta para decisão e mantenha pausada até aprovação do valor e período. Relate pedidos qualificados e contratos quando houver dados, distinguindo-os de cliques.

### Revisar uma etapa concluída

> Confira a ficha E08 e as evidências. Verifique critérios de pronto, propriedade dos ativos e pendências. Não refaça cadastros nem trabalho já aprovado sem motivo concreto. Atualize o status e indique a próxima tarefa que pode avançar com os dados existentes.

**Próxima execução recomendada:** E01 seguido de E02 — identificar/reusar as contas, obter os IDs e instalar/validar medição. Em paralelo, preparar o lote inicial de Instagram e diagnosticar a presença no LinkedIn.
