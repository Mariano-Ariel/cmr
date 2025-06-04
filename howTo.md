# Instrucciones para levantar Frontend y Backend

---

## 1. Clonar el repositorio

git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

## 2. Configurar variables de entorno

Backend (crear folder server/)
.env file PORT=5000, no se sube al repo

## 3. Instalar dependencias

en server/
cd server
npm install

en frontend root
cd ..
npm install

## 4. Levantar los servidores

En una terminal, desde server/ ejecuta:
npm run dev 

En otra terminal, en el root ejecuta:
npm run dev

## 5. Verificar funcionamiento

En tu navegador ir a http://localhost:5173.
Navega a la sección de Clientes o Chat y confirma que la UI recibe datos de http://localhost:5000/api/
Si ves errores de CORS, asegúrate de que en server/index.js tengas app.use(cors())