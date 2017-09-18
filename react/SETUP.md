[⇦ Página inicial](./README.md)
# Setup

## 1) Instalando Node.js

* Verifique se já possui uma versão do [Node.js](https://nodejs.org) instalado:

```
node -v
```

* Caso não tenha o Node.js instalado:

```
\\ Linux
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

\\ macOs
brew install node
```

* Instale o [n](https://github.com/tj/n) e a última versão estável do Node.js:
```
sudo npm install -g n
sudo n stable
```

## 2) Criando a aplicação

```
npm install -g create-react-app
create-react-app workshop-react

cd workshop-react
```

Para maiores informações sobre como o projeto foi criado e como executar a aplicação, acesse o [repositório do Create React App](https://github.com/facebookincubator/create-react-app).
