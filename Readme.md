# vtnorton.com

Este projeto é um site desenvolvido utilizando Next.js e React e mantido por mim (Vitor Norton). Ele é publicado utilizando Cloudflare Workers. O Next.js é utilizado como conector para o Notion, onde toda a base de dados do site é gerenciada. Isso permite uma fácil atualização e manutenção do conteúdo através do Notion.
Se você tiver alguma dúvida ou precisar de mais informações, sinta-se à vontade para entrar em contato comigo.

## Arquitetura do Projeto

O projeto vtnorton.com possui uma arquitetura que integra diferentes serviços para exibir imagens do Instagram, carregar eventos de um servidor Discord e ler a lista de vídeos do YouTube. É importante configurar corretamente as chaves de API e as conexões com esses serviços para obter o funcionamento adequado. Se você não utiliza alguma dessas funcionalidades, pode ignorar a respectiva configuração.

### Configuração das Chaves de API

Antes de executar o projeto, é necessário preencher as chaves de API nos arquivos de configuração. O arquivo `.env.local` é utilizado para armazenar as chaves e é ignorado pelo Git para evitar o compartilhamento de informações sensíveis. Certifique-se de adicionar as chaves de acordo com as documentações dos serviços a seguir:

#### Notion

O Notion é utilizado para gerenciar a base de dados do site. Certifique-se de criar uma base de dados no Notion e adicionar as seguintes propriedades:

- `Date`: data da postagem.
- `Type`: campo multiselect com os tipos de conteúdo, como Podcast, Evento, Post.
- `Status-podcast`: deve conter o valor "Publicado" para que o item seja exibido no site como um podcast.
- `Status-post`: deve conter os valores "Query", "Follow-up" ou "Published" para que o item seja exibido no site como um post.
- `Slug`: campo de texto para obter a URL, deve estar todo em minúsculas, sem acentos e espaços.
- `Hashtags`: campo multiselect com as hashtags relevantes.
- `Podcast`: campo select que contém o nome do podcast.
- `Link`: URL que contém o link do podcast.

#### Instagram

O projeto exibe imagens do Instagram. Você precisará obter uma chave de API do Instagram. Consulte a documentação oficial do Instagram para obter instruções sobre como obter a chave de API corretamente.

#### Discord

O projeto carrega eventos do servidor Discord. Certifique-se de configurar uma aplicação no Discord e obter as chaves de API necessárias. Consulte a documentação do Discord para obter mais informações sobre como criar e configurar uma aplicação no Discord.

#### YouTube

O projeto lê a lista de vídeos do YouTube. Para isso, você precisará obter uma chave de API do YouTube. Consulte a documentação oficial do YouTube para obter informações detalhadas sobre como obter uma chave de API corretamente.

### Configurando `.env.local`

Após obter as chaves de API para cada serviço, adicione-as ao arquivo `.env.local` com as seguintes variáveis:

```plaintext
DEVREL_DB=DEVREL_DB_REPLACE
NOTION_SECRET=NOTION_SECRET_REPLACE
NOTION_TOKEN=NOTION_TOKEN_REPLACE
INSTAGRAM_TOKEN=INSTAGRAM_TOKEN_REPLACE
DISCORD_TOKEN=DISCORD_TOKEN_REPLACE
YOUTUBE_KEY=YOUTUBE_KEY_REPLACE
```

Se tiver alguma dúvida ou precisar de mais informações sobre a arquitetura do projeto, sinta-se à vontade para entrar em contato.

## Contribuindo

Se você deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork deste repositório e clone-o para o seu ambiente local.
2. Instale as dependências do projeto utilizando o comando:
   ```
   npm install --legacy-peer-deps
   ```
3. Execute o projeto em modo de desenvolvimento:
   ```
   npm start
   ```
4. Faça as modificações necessárias e teste-as localmente.
5. Certifique-se de seguir as boas práticas de codificação e manter a consistência com o estilo de código existente.
6. Envie um pull request com as suas alterações para revisão.

## Instalação

Para instalar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório para o seu ambiente local:
   ```
   git clone https://github.com/seu-usuario/vtnorton.com.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd vtnorton.com
   ```
3. Instale as dependências do projeto:
   ```
   npm install --legacy-peer-deps
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
5. O projeto estará acessível em [http://localhost:3000](http://localhost:3000).

## Licença

O projeto é licenciado sob a licença MIT. Para mais informações, consulte o arquivo [LICENSE](LICENSE).
