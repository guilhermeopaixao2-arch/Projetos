# Identidade — Peixoto Terraplenagem

Documento de trabalho. Define **como a empresa se apresenta** no site: o que
ela diz que é, o que promete, com que voz, e com que cara. Substitui o
posicionamento anterior ("empresa familiar"), que sinalizava informalidade
para o cliente que decide a contratação.

Escrito em 07/08/2026, a partir da frota e do foco reais confirmados por
Guilherme. **Nada aqui é suposição de marketing — se um item não for
verdade, ele sai.**

---

## 1. O que a empresa é

**Categoria:** empreiteira de escavação, limpeza de terreno e terraplenagem.
Não "empresa familiar de terraplenagem".

**Frase central:**

> Máquina própria, operador nosso, e uma pessoa só respondendo pela obra.

**O diferencial que ninguém articula:**

> **Uma obra, um responsável.**
> Máquina nossa no que é nosso. O que a obra pedir além disso, a gente
> contrata e coordena — o cliente não corre atrás de caçamba, rolo nem
> patrol. Fala com uma pessoa só, do orçamento à entrega.

Isso preserva a verdade que estava embaixo de "empresa familiar" (o dono
responde) e a diz como **valor operacional**, não como tamanho. Empresa
grande manda o cliente pro setor; empresa pequena sem estrutura some quando
complica. O espaço entre os dois é onde a Peixoto se posiciona.

**Segundo diferencial — máquina do tamanho certo:**

Ter uma 8 t, uma 15 t e uma retro significa mandar a máquina proporcional ao
serviço. Empresa de loteamento não pega obra apertada, ou manda máquina
grande demais e cobra por ela. Isso é argumento concreto e verificável.

---

## 2. A frota (fonte da verdade)

| Máquina | Modelo | Porte | Confirmar |
|---|---|---|---|
| Escavadeira hidráulica | Caterpillar 315 | ~15 t | ano |
| Escavadeira hidráulica | Hyundai R80 | ~8 t | modelo exato (R80-7?) |
| Pá-carregadeira | Case W20 | ~10 t | versão (B/D/E?) |
| Retroescavadeira | — | — | **marca e modelo** |
| Caminhão | — | — | **tipo e capacidade** |

**Contratado quando a obra pede:** caçamba adicional, rolo compactador,
motoniveladora.

Regra: o site nomeia máquina por modelo e porte. Especificidade técnica é o
que soa profissional — mais que qualquer escolha de ícone ou cor.

---

## 3. O que a empresa faz (e o que não faz)

### Foco 1 — Limpeza de terreno
Remoção de vegetação, destocamento, retirada de camada orgânica e entulho.
Terreno pronto para começar. Serve tanto construtora quanto cliente final.

### Foco 2 — Terraplenagem
Escavação, corte e aterro, carga de material, abertura de acessos.
Sequência real da obra: **1 · Preparação → 2 · Movimentação → 3 · Acerto**.

### Foco 3 — Locação de equipamento
As máquinas da frota, com ou sem operador, por diária/semana/mês.
**Disponibilidade sob consulta** — a máquina pode estar em obra. A mensagem
do WhatsApp pergunta disponibilidade, nunca assume que está livre.

### Complementar — Demolição
Demolição de construções e estruturas com remoção de entulho. A 315 executa.

### O que SAI do site
- **Nivelamento e patrolamento** — exige motoniveladora. Não há.
- **Compactação "no grau exigido pelo projeto"** — ver seção 4.
- **"Sem terceirizar máquina no meio da obra"** — falso: caçamba, rolo e
  patrol são contratados. A frase vira o argumento de coordenação acima.

---

## 4. ⚠ Compactação — correção obrigatória

**Texto atual do site:**
> "Solo compactado em camadas, no grau exigido pelo projeto. Base firme para
> fundação e pavimento."

**Problema:** a Peixoto não tem rolo. Compactação é feita com a esteira da
escavadeira ou com a concha. Isso resolve aterro de baixa exigência, mas
**não atinge nem comprova grau de compactação de projeto** — isso exige rolo
e ensaio (Proctor / controle tecnológico). Prometer "base para fundação e
pavimento" é assumir responsabilidade técnica sobre recalque.

**Substituir por algo nesta linha:**
> "Aterro lançado e compactado em camadas com a própria máquina, para
> serviço que não exige controle tecnológico. Quando o projeto pede grau de
> compactação comprovado, entra rolo — a gente contrata e coordena."

Isso é honesto, mantém o serviço vendável, e transforma a limitação no
argumento de coordenação da seção 1.

---

## 5. Voz

Direta, concreta, técnica sem jargão. A voz atual do site já é boa — o
problema é que ela diz **humildade** onde deveria dizer **competência**.

**Mantém:**
- "Número, não adjetivo" — é exatamente o tom certo
- Explicar em português claro (público é duplo: construtora e cliente final)
- Frases curtas, sem adjetivo vazio

**Sai:**
- Qualquer palavra que sinalize *pequeno*: familiar, humilde, simples
- Promessa sem número atrás

**Regra prática:** máquina se chama pelo modelo. Serviço se descreve pelo que
entrega. Prazo e volume vêm com número ou não vêm.

### Texto: antes → depois

| Onde | Hoje | Novo |
|---|---|---|
| Empresa (h2) | "Uma empresa familiar que move terra em [REGIÃO]" | "Escavação e terraplenagem com máquina própria em [REGIÃO]" |
| Serviços (h2) | "Do mato ao terreno pronto para construir" | "Do terreno bruto à cota de projeto" |
| Diferencial | "Você fala com o dono" | "Uma obra, um responsável" |
| Corte/aterro | "Corte e aterro, sem mistério" | mantém — explicar claro serve ao público duplo |

---

## 6. Visual

O que dá o ar "infantil" não é a paleta — é **espessura de linha e
arredondamento**. Line-icon fino de 2 px com canto redondo é linguagem de app
consumer, não de máquina pesada.

**Muda:**
- Ícones: `stroke-width: 2` arredondado → sólidos, ou 3 px com canto reto
- `--raio-card: 12px` → `4px` (industrial, não fofo)
- **Matar os números de seção 01–06.** Empresa/Serviços/Equipamentos/Obras
  não são uma sequência — o número é decoração fingindo de informação.
- Equipamentos como **ficha técnica** (modelo, porte, ano), não card ilustrado

**Mantém:**
- `1 · 2 · 3` das etapas de terraplenagem — essa **é** sequência real
- Paleta oficial: marrom `#4B2E15`, oliva `#738C33`, ocre `#CF8833`
- Montserrat, logo, zero `box-shadow`

Isso é guia de marca real da empresa. Não é o problema e não se toca.

**Fotos:** resolvem a maior parte do "ar de protótipo" sozinhas. Mas se os
ícones finos continuarem ao lado de foto de escavadeira real, o choque de
linguagem permanece — só fica mais difícil de identificar.

---

## 7. O que ainda falta confirmar

- [ ] Marca e modelo da retroescavadeira
- [ ] Tipo e capacidade do caminhão
- [ ] Ano das máquinas (opcional, mas ficha com ano soa mais profissional)
- [ ] Documentação disponível: CNPJ, ART, seguro, NR-12, ASO dos operadores
      — é o checklist que construtora roda antes de contratar, e quase
      nenhum concorrente pequeno menciona
- [ ] Fotos reais das 4 máquinas e de obras entregues
- [ ] Os 52 placeholders de dado (`class="ph"` no HTML)
