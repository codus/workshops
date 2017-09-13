# Setup

## 1) Instalando Node.js

Verifique se já possui uma versão do [Node.js]() instalado:
```
node -v
```
Caso não tenha o Node.js instalado:
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Instale o [n](https://github.com/tj/n):
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