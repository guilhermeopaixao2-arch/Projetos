# Peixoto Terraplenagem

Site institucional com foco em locação de equipamentos e serviços de terraplenagem.

**Site público:** [peixototerraplenagem.com.br](https://peixototerraplenagem.com.br/).

## Marketing e continuidade do trabalho

- [Comece pelo manual de execução](docs/marketing/MANUAL-EXECUCAO-MARKETING-PEIXOTO.md): tarefas, responsáveis, configuração futura de medição, Instagram, LinkedIn e anúncios.
- [Plano completo de marketing](docs/marketing/PLANO-MARKETING-PEIXOTO.md): níveis de esforço/investimento, fotos, conteúdo e aquisição de clientes.
- [Índice da documentação](docs/marketing/README.md).

O código inclui as atualizações de domínio próprio, favicon PNG, contato profissional, Web3Forms e botão para escrever no Gmail. **Google Analytics 4 e Tag Manager ainda não estão instalados:** estão especificados no manual.

## Estrutura do site

- [index.html](index.html): página principal.
- [privacidade.html](privacidade.html): política de privacidade.
- [css/styles.css](css/styles.css): estilos.
- [js/main.js](js/main.js): interações e formulário com alternativa por WhatsApp.
- [assets](assets), [fonts](fonts) e [js/vendor](js/vendor): imagens, fontes e bibliotecas locais.
- [robots.txt](robots.txt) e [sitemap.xml](sitemap.xml): arquivos de indexação.

É um site estático em HTML, CSS e JavaScript. Não requer instalação de dependências nem compilação. Para testar, servir a raiz com um servidor HTTP local; caminhos iniciados por `/` pressupõem publicação na raiz do domínio.

## Publicação no Netlify

Usar o projeto Netlify já existente. Preparar uma pasta com `index.html`, `privacidade.html`, `robots.txt`, `sitemap.xml`, `assets/`, `css/`, `fonts/` e `js/`, com `index.html` diretamente na raiz. Enviar essa pasta na área de Deploys/Implantações e conferir o domínio público depois da publicação.

Não enviar documentação de marketing, `.git`, credenciais ou arquivos internos junto com o site. O fluxo atual é upload manual: um push no GitHub não substitui essa etapa do Netlify.

## Antes de continuar

Ler o manual de execução e conferir o estado atual dos arquivos/contas. [IDENTIDADE.md](IDENTIDADE.md) contém anotações históricas e itens ainda sujeitos a confirmação; validar a oferta atual antes de transformar uma anotação em promessa comercial.

A chave Web3Forms no código é uma chave pública de formulário, não uma senha de e-mail. Não acrescentar credenciais privadas ao repositório. Preservar o envio funcional e a alternativa por WhatsApp ao implementar a futura medição.
