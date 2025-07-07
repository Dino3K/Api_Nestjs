# 📦 API REST NestJS - Gestión de Pedidos

API RESTful desarrollada con **NestJS**, **TypeORM** y **MySQL** (XAMPP) para gestionar usuarios, productos, categorías y pedidos.

---

## 🚀 Tecnologías

- **NestJS** (framework backend)
- **TypeORM** (ORM)
- **MySQL** (base de datos relacional)
- **XAMPP** (servidor local)
- **Postman** (pruebas de la API)

---

## ⚙️ Requisitos previos

Antes de empezar, asegúrate de tener instalado:

✅ Node.js >= 18  
✅ npm  
✅ XAMPP (o MySQL en tu sistema)  
✅ Git (opcional)  
✅ Postman (para pruebas)

---

## 🛠 Instalación paso a paso

### 1️⃣ Clonar el repositorio

Si tienes Git:

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
````

O descarga el ZIP y extrae la carpeta.

---

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

### 3️⃣ Configurar el archivo `.env`

En la raíz del proyecto, hay un archivo llamado:

```
.env
```

Esto son los datos de tu base de datos editalos de la forma que tengas tu base de datos

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=gestion_pedidos
```

**Importante:**

* Si tu MySQL tiene contraseña, escríbela en `DB_PASSWORD`.
* Cambia `DB_DATABASE` si deseas otro nombre de base de datos.

---

### 4️⃣ Crear la base de datos en MySQL

Abre **phpMyAdmin**:

```
http://localhost/phpmyadmin
```

Crea una base de datos llamada:

```
gestion_pedidos
```

No es necesario crear tablas, NestJS las generará automáticamente.

---

## ▶️ Ejecución del proyecto

```bash
npm run start:dev
```

La consola debe mostrar:

```
Nest application successfully started
```

La API estará disponible en:

```
http://localhost:3000
```

---

### 🔹 Producción

Primero compila:

```bash
npm run build
```

Luego arranca:

```bash
npm run start:prod
```

---

## 🧪 Pruebas con Postman

En la raíz del proyecto encontrarás:

```
API-NestJS-Taller.postman_collection.json
```

Puedes importar este archivo en Postman para tener todas las rutas CRUD:

* Usuarios
* Categorías
* Productos
* Pedidos

---

## 📂 Rutas disponibles

### Usuarios

* `POST http://localhost:3000/usuarios` – Crear usuario
* `GET http://localhost:3000/usuarios` – Listar usuarios
* `PATCH http://localhost:3000/usuarios/:id` – Actualizar usuario
* `DELETE http://localhost:3000/usuarios/:id` – Eliminar usuario

### Categorías

* `POST http://localhost:3000/categorias`
* `GET http://localhost:3000/categorias`
* `PATCH http://localhost:3000/categorias/:id`
* `DELETE http://localhost:3000/categorias/:id`

### Productos

* `POST http://localhost:3000/productos`
* `GET http://localhost:3000/productos`
* `PATCH http://localhost:3000/productos/:id`
* `DELETE http://localhost:3000/productos/:id`

### Pedidos

* `POST http://localhost:3000/pedidos`
* `GET http://localhost:3000/pedidos`
* `PATCH http://localhost:3000/pedidos/:id`
* `DELETE http://localhost:3000/pedidos/:id`

---

## 💾 Scripts útiles

* **Formatear código**

```bash
npm run format
```

* **Construir**

```bash
npm run build
```
---

## ✨ Notas importantes

* Las tablas se crean automáticamente gracias a `synchronize: true`.
* Si cambias entidades, debes borrar las tablas o migrar.
* Si usas otro puerto MySQL, cambia `DB_PORT`.

---

## 📝 Autor

Desarrollado como ejemplo para taller de NestJS + MySQL.

```
