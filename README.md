# front-end-react-redux-aspnet.core
Aplicação de Front-end React Redux, para implementação em IIS / Kestrel - Aspnet Core 2.2

##Instalação

1. Realizar o clone no projeto 
```bash / cmd 
git clone https://github.com/aaluiz/front-end-react-redux-aspnet.core.git
```

2. Instalar pacotes
```bash / cmd 
npm i
```

2. Iniciar app em modo desenvolvimento
```bash / cmd 
npm start
```

##Sugestão de Desenvolvimento do Front-end Visual Studio Code, com extenção 

* https://code.visualstudio.com/download
* https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code
* https://medium.com/code-prestige/debugando-react-com-o-vscode-efffc6f08233

## Implantanção em ambiente de teste Asp.net Core - IIS/Kestre

No Visual Studio Code Terminal ou no prompt:

```bash / cmd
npm run build
gulp
```
O primeiro comando gerará a pasta build com o conteudo otmizado para produção.
O segundo comando, gulp, faz a transferênica para o projeto no VS 2017. 

No Visual Studio 2017:
Agora é só rodar a aplicação.
